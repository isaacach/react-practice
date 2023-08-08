import Button from "../components/Button";
import { DiVisualstudio, DiReact, DiCode } from "react-icons/di";

export default function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          <DiVisualstudio />
          VS Code
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <DiReact />
          React
        </Button>
      </div>
      <div>
        <Button success rounded>
          <DiCode />
          Code
        </Button>
      </div>
      <div>
        <Button warning outline>
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}
