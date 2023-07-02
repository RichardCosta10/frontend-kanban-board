import "./App.css";
import Card from "./components/card/card";

const cardDescription =
  "Implement the ability for the user to move a card between lanes. The user should be able to drag and drop a card from one lane to another.";
function App() {
  return (
    <>
      <Card
        title="Add ability to move card between lanes"
        bodyText={cardDescription}
      />
    </>
  );
}

export default App;
