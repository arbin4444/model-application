import { EuiButton } from "@elastic/eui";
import React from "react";

interface CommonFilterProps {
  color:
    | "primary"
    | "text"
    | "accent"
    | "accentSecondary"
    | "neutral"
    | "success"
    | "warning"
    | "risk"
    | "danger";
  title : string;
}

export const CommonFilter: React.FC<CommonFilterProps> = ({ color , title }) => {
  return (
    <>
      <EuiButton color={color}>
        {title}
      </EuiButton>
    </>
  );
};
