import { EuiBasicTable } from "@elastic/eui";
import React from "react";

interface CommonTableProps {
  tableCaption: string;
  responsiveBreakpoint: string | boolean;
  items: any;
  itemId: any;
  rowHeader: string;
  columns: any;
  onChange: any;
  pagination: any;
}

export const CommonTable: React.FC<CommonTableProps> = ({
  tableCaption,
  responsiveBreakpoint,
  items,
  itemId,
  rowHeader,
  columns,
  onChange,
  pagination,
}) => {
  return (
    <div className="common-table">
      <EuiBasicTable
        tableCaption={tableCaption}
        responsiveBreakpoint={responsiveBreakpoint}
        items={items}
        itemId={itemId}
        rowHeader={rowHeader}
        columns={columns}
        onChange={onChange}
        pagination={pagination}
      />
    </div>
  );
};
