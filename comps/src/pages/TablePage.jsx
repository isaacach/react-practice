import Table from "../components/Table";

export default function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 4 },
    { name: 'Grape', color: 'bg-purple-500', score: 2 },
    { name: 'Mango', color: 'bg-yellow-500', score: 1 }
  ];

  return (
    <div>
      <Table data={data}/>
    </div>
  )

}