import Link from "./components/Link";
import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

export default function App() {
  return (
    <div>
      <Link to="/button">Button</Link>
      <Link to="/accordion">Accordion</Link>
      <Link to="/dropdown">Dropdown</Link>
      <div>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}
