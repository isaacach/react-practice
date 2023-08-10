/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Table from "./Table";

export default function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const getIcons = (label, sortBy, sortOrder) => {
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
      <div>
        <GoTriangleUp />
      </div>;
    } else if (sortOrder === "desc") {
      <div>
        <GoTriangleDown />
      </div>;
    }
  };

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((col) => col.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }

    return {
      ...col,
      header: () => (
        <th onClick={() => handleClick(col.label)}>
          <div className="flex items-center">
            {getIcons(col.label, sortBy, sortOrder)}
            {col.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}
