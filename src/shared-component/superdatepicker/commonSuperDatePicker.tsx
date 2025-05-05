import {
  EuiSuperDatePicker,
  OnRefreshProps,
  OnTimeChangeProps,
} from "@elastic/eui";
import React from "react";

interface CommonSuperDatePickerProps {
  isLoading: boolean;
  start: string;
  end: string;
  onTimeChange: (props: OnTimeChangeProps) => void;
  onRefresh: (props: OnRefreshProps) => void;
}

export const CommonSuperDatePicker: React.FC<CommonSuperDatePickerProps> = ({
  isLoading,
  start,
  end,
  onTimeChange,
  onRefresh,
}) => {
  return (
    <div className="common-superDatePicker">
      <EuiSuperDatePicker
        isLoading={isLoading}
        start={start}
        end={end}
        onTimeChange={onTimeChange}
        onRefresh={onRefresh}
      />
    </div>
  );
};
