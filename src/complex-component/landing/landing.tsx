import {
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPopover,
  EuiText,
  OnRefreshProps,
  OnTimeChangeProps,
} from "@elastic/eui";
import React, { useState } from "react";
import { CommonSearchField } from "../../shared-component/search-field/commonSearchField";
import { CommonSuperDatePicker } from "../../shared-component/superdatepicker/commonSuperDatePicker";
import { CommonFilter } from "../../shared-component/filter/commonFilter";
export interface User {
  sn: number;
  name: string;
  version: string;
  createdBy: string;
  createdAt: string;
}

export const Landing: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [start, setStart] = useState("now-30m");
  const [end, setEnd] = useState("now");

  const [isPopoverOpen, setIsPopoverOpen] = useState<number|null>(null);
 

  const onButtonClick = (sn:number) =>
    setIsPopoverOpen((prevSn) => (prevSn === sn ? null : sn));
  const closePopover = () => setIsPopoverOpen(null);

  // const button = <EuiIcon type="boxesHorizontal" onClick={()=>onButtonClick(1)} />;

  const users = [
    {
      sn: 1,
      name: "Test 1",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 2,
      name: "Test 2",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
  ];

  const onTimeChange = ({ start, end }: OnTimeChangeProps) => {
    setStart(start);
    setEnd(end);
    setIsLoading(true);
    startLoading();
  };
  const onRefresh = async ({ start, end, refreshInterval }: OnRefreshProps) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
    console.log(start, end, refreshInterval);
  };

  const startLoading = () => {
    setTimeout(stopLoading, 1000);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const columns: Array<EuiBasicTableColumn<User>> = [
    {
      field: "sn",
      name: "S.N",
      render: (sn: number) => <>{sn}</>,
    },
    {
      field: "name",
      name: "Name",
      render: (name: string) => <>{name}</>,
    },
    {
      field: "version",
      name: "Version",
      render: (version: "string") => <>{version}</>,
    },
    {
      field: "createdBy",
      name: "Created By",
      render: (createdBy: "string") => <>{createdBy}</>,
    },
    {
      field: "createdAt",
      name: "Created At",
      render: (createdAt: string) => <>{createdAt}</>,
    },
    {
      field: "action",
      name: "Action",
      render: (sn:number) => {
        const button = <EuiIcon type="boxesHorizontal" onClick={()=>onButtonClick(sn)} />;
        return (
          <>
            <EuiPopover
              button={button}
              isOpen={isPopoverOpen===sn}
              closePopover={closePopover}
            >
              <EuiIcon type="trash" />
              <EuiIcon type="pencil" />
            </EuiPopover>
          </>
        );
      },
      // actions: [
      //   {
      //     name : "Actions",
      //     description : "click this for action",
      //     icon : "boxesHorizontal",
      //     type : "icon",
      //     onClick : (item :User)=>{
      //       console.log("perform action",item)
      //     }
      //   }
      // ]
    },
  ];
  return (
    <>
      <EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem>
            <CommonSearchField placeholder="Enter your Data" />
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <CommonSuperDatePicker
              isLoading={isLoading}
              start={start}
              end={end}
              onTimeChange={onTimeChange}
              onRefresh={onRefresh}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <div>
              <CommonFilter color="primary" title="Filter" />
            </div>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiBasicTable
            tableCaption="Model Table"
            responsiveBreakpoint={false}
            items={users}
            itemId="id"
            rowHeader="name"
            columns={columns}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};
