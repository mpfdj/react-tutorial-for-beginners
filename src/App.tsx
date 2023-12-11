import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  let items = ["New York", "San Fransisco", "Tokyo", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          hello world from <h1>Miel</h1>
        </Alert>
      )}
      {/*<Button color="info" onClick={() => console.log('Clicked')}>My Button</Button>*/}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
  // return <div><Message></Message></div>
}

export default App;
