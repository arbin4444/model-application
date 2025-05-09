import { EuiFieldText } from "@elastic/eui";
import React from "react";

interface CommonFieldTextProps {
  placeholder?: string;
  value?: any;
  onChange?: any;
}

export const CommonFieldText: React.FC<CommonFieldTextProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="common-fieldText">
      <EuiFieldText
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
