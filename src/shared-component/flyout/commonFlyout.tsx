import {
  EuiButtonEmpty,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiTitle,
} from "@elastic/eui";
import React from "react";

interface CommonFlyoutProps {
  ownFocus: boolean;
  onClose: (event: MouseEvent | KeyboardEvent | TouchEvent) => void;
  size: "s" | "m" | "l";
  hasBorder: boolean;
  title: string;
  body: any;
  footer: any;
}

export const CommonFlyout: React.FC<CommonFlyoutProps> = ({
  ownFocus,
  onClose,
  size,
  hasBorder,
  title,
  body,
  footer,
}) => {
  return (
    <>
      <EuiFlyout ownFocus={ownFocus} onClose={onClose} size={size}>
        <EuiFlyoutHeader hasBorder={hasBorder}>
          <EuiTitle size={size}>
            <h2>{title}</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>{body}</EuiFlyoutBody>
        <EuiFlyoutFooter>{footer}</EuiFlyoutFooter>
      </EuiFlyout>
    </>
  );
};
