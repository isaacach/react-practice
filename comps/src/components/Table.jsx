/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((col) => {
    if (col.header) return <Fragment key={col.label}>{col.header()}</Fragment>;
    return (
      <th key={col.label} className="px-4 py-2">
        {col.label}
      </th>
    );
  });

  const renderedData = data.map((rowData) => {
    const renderedCells = config.map((col) => {
      return (
        <td key={col.label} className="p-3 text-center">
          {col.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={keyFn(rowData)} className="border-b-2 border-gray-300">
        {renderedCells}
      </tr>
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
