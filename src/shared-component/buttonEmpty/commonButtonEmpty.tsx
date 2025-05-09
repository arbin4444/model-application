import { EuiButtonEmpty, IconType } from "@elastic/eui";
import React from "react";

interface CommonButtonEmptyProps {
  iconType?: IconType;
  color?:
    | "primary"
    | "text"
    | "accent"
    | "accentSecondary"
    | "success"
    | "warning"
    | "danger"
    | "neutral"
    | "risk";
  onClick?: any;
  title?: string;
}

export const CommonButtonEmpty: React.FC<CommonButtonEmptyProps> = ({
  iconType,
  color,
  onClick,
  title,
}) => {
  return (
    <>
      <EuiButtonEmpty iconType={iconType} color={color} onClick={onClick}>
        {title}
      </EuiButtonEmpty>
    </>
  );
};
