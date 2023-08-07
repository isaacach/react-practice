import Button from "./Button";

export default function App() {
  return (
    <div>
      <div>
        <Button primary rounded>Click me!</Button>
      </div>
      <div>
        <Button secondary outline>Click here!</Button>
      </div>
      <div>
        <Button success rounded outline>button</Button>
      </div>
      <div>
        <Button warning>button2</Button>
      </div>
      <div>
        <Button danger>button3</Button>
      </div>
    </div>
  );
}
