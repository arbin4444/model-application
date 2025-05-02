import { EuiButton } from "@elastic/eui";
import React from "react";

interface CommonFilterProps {
  color?:
    | "primary"
    | "text"
    | "accent"
    | "accentSecondary"
    | "neutral"
    | "success"
    | "warning"
    | "risk"
    | "danger";
  onClick? : any;
  type? : "button" | "reset" | "submit";
  title? : string;
}

export const CommonFilter: React.FC<CommonFilterProps> = ({ color , title, onClick, type }) => {
  return (
    <div className="common-button">
      <EuiButton color={color} onClick={onClick} type={type}>
        {title}
      </EuiButton>
    </div>
  );
};

