import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function AccordionPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }
  
  const options = [
    {
      id: 1,
      label: 'Red',
      value: 'red'
    },
    {
      id: 2,
      label: 'Green',
      value: 'green'
    },
    {
      id: 3,
      label: 'Blue',
      value: 'blue'
    }
  ];

  return <Dropdown options={options} value={selection} onChange={handleSelect}/>;
  
}