import Accordion from "./components/Accordion";

export default function App() {

  const items = [
    {
      id: 1,
      title: 'What is React?',
      content: 'React is a front end javascript framework that is used to build UIs and SPAs (Single Page Applications) in a declarative way using components' 
    },
    {
      id: 2,
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers'
    },
    {
      id: 3,
      title: 'How do you use React?',
      content: 'You use React by creating components'
    }
  ]

  return <Accordion items={items} />
  
}
