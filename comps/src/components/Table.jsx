/* eslint-disable react/prop-types */

export default function Table({ data }) {
  const renderedData = data.map((item, index) => {
    return (
      <tr key={index}>
        <td className="border px-4 py-2">{item.name}</td>
        <td className="border px-4 py-2">
          <div className={`w-8 h-8 rounded-full ${item.color}`}></div>
        </td>
        <td className="border px-4 py-2">{item.score}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table-auto">
        <thead className="bg-gray-300">
          <tr>
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
