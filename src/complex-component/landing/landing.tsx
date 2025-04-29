import {
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSuperDatePicker,
  OnRefreshProps,
  OnTimeChangeProps,
} from "@elastic/eui";
import React, { useState } from "react";

export const Landing: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [start, setStart] = useState("now-30m");
  const [end, setEnd] = useState("now");


  const onTimeChange=({start,end}: OnTimeChangeProps)=>{
    setStart(start);
    setEnd(end);
    setIsLoading(true);

  }
  const onRefresh=async ({start,end,refreshInterval}: OnRefreshProps)=>{
    await new Promise((resolve) => {
          setTimeout(resolve, 100);
      });
      console.log(start, end, refreshInterval);
  }


  return (
    <>
      <EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiFieldSearch />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup>
          <EuiSuperDatePicker
            isLoading={isLoading}
            start={start}
            end={end}
            onTimeChange={onTimeChange}
            onRefresh={onRefresh}
          />
        </EuiFlexGroup>
      </EuiFlexGroup>
    </>
  );
};
