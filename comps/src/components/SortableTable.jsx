/* eslint-disable react/prop-types */
import Table from "./Table";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

export default function SortableTable(props) {
  const { config, data } = props;
  const { setSortColumn, sortedData, sortBy, sortOrder } = useSort(config, data);

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }

    return {
      ...col,
      header: () => (
        <th
          onClick={() => setSortColumn(col.label)}
          className="cursor-pointer hover:bg-blue-100"
        >
          <div className="flex items-center justify-center">
            {getIcons(col.label, sortBy, sortOrder)}
            {col.label}
          </div>
        </th>
      ),
    };
  });



  return <Table {...props} data={sortedData} config={updatedConfig} />;

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    }
  
    if (sortOrder === null) {
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoTriangleUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <GoTriangleDown />
        </div>
      );
    }
  }
}

