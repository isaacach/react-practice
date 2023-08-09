/* eslint-disable react/prop-types */

export default function Table({ data, config }) {
  const renderedData = data.map((fruit) => {
    const renderedCells = config.map((col) => {
      return (
        <td key={col.label} className="p-3">
          {col.render(fruit)}
        </td>
      );
    });

    return (
      <tr key={fruit.name} className="border-b-2 border-gray-500">
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((col, index) => {
    return (
      <th key={index} className="px-4 py-2">
        {col.label}
      </th>
    );
  });

  return (
    <div>
      <table className="table-auto border-spacing-2 w-96">
        <thead className="bg-gray-200">
          <tr className="border-b-2 border-gray-500">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedData}</tbody>
      </table>
    </div>
  );
}
