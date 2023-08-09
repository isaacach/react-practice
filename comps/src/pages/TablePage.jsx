import Table from "../components/Table";

export default function TablePage() {
  const fruit = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 4 },
    { name: 'Grape', color: 'bg-purple-500', score: 2 },
    { name: 'Mango', color: 'bg-yellow-500', score: 1 }
  ];

  const config = [
    {
      label: 'fruit',
      render: (fruit) => fruit.name
    },
    {
      label: 'color',
      render: (fruit) => <div className={`w-8 h-8 rounded-full ${fruit.color}`}></div>
    },
    {
      label: 'score',
      render: (fruit) => fruit.score,
      sort: (a, b) => {
        
      }
    }
  ]

  return (
    <div>
      <Table data={fruit} config={config}/>
    </div>
  )

}