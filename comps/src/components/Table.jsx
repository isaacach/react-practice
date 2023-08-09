/* eslint-disable react/prop-types */

export default function Table({ data }) {
  const renderedData = data.map((item, index) => {
    return (
      <tr key={index} className="border-b-2">
        <td className="p-3 text-center">{item.name}</td>
        <td className="p-3 flex w-full justify-center">
          <div className={`w-8 h-8 rounded-full ${item.color}`}></div>
        </td>
        <td className="p-3 text-center">{item.score}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table-auto border-spacing-2 w-96">
        <thead className="bg-gray-200">
          <tr className="border-b-2 border-gray-500">
            <th className="px-4 py-2">Fruit</th>
            <th className="px-4 py-2">Color</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>{renderedData}</tbody>
      </table>
    </div>
  );
}
