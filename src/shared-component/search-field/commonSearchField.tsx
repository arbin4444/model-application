import { EuiFieldSearch } from "@elastic/eui";
import React from "react";

interface CommonSearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: any;
  isClearable?: boolean;
}

export const CommonSearchField: React.FC<CommonSearchFieldProps> = ({
  placeholder,
  value,
  onChange,
  isClearable,
}) => {
  return (
    <div className="common-searchField">
      <EuiFieldSearch
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isClearable={isClearable}
      />
    </div>
  );
};
