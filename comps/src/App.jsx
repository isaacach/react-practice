import Button from "./Button";
import { HiOutlineCode, HiOutlineMoon, HiOutlineSparkles } from "react-icons/hi"; 

export default function App() {

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div>
      <div>
        <Button primary rounded className='mb-5' onClick={handleClick}>
          <HiOutlineCode />
          Click me!
          </Button>
      </div>
      <div>
        <Button secondary outline>
          <HiOutlineMoon />
          Click here!
          </Button>
      </div>
      <div>
        <Button success rounded outline>
          <HiOutlineSparkles />
          button
          </Button>
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
