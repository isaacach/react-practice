/* eslint-disable react/prop-types */
import Table from "./Table";

export default function SortableTable(props) {
  const { config } = props;

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }

    return {
      ...col,
      header: () => <th>{col.label} is sortable</th>
    };
  });

  return <Table {...props} config={updatedConfig} />;
}