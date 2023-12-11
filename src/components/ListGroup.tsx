import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0;

  // items = [];
  //
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  // EventHandler
  // const handleClick = (event: MouseEvent) => console.log(event);

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/*{getMessage()}*/}
      {/*{items.length === 0 ? <p>No item found</p> : null}*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={(event) => console.log(event)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
