import {
  Criteria,
  EuiBasicTableColumn,
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutFooter,
  EuiFlyoutHeader,
  EuiIcon,
  EuiPopover,
  EuiSpacer,
  EuiText,
  EuiTitle,
  OnRefreshProps,
  OnTimeChangeProps,
  useGeneratedHtmlId,
} from "@elastic/eui";
import React, { useState } from "react";
import { CommonSearchField } from "../../shared-component/search-field/commonSearchField";
import { CommonSuperDatePicker } from "../../shared-component/superdatepicker/commonSuperDatePicker";
import { CommonFilter } from "../../shared-component/filter/commonFilter";
import { CommonTable } from "../../shared-component/table/commonTable";
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

  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(4);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [editFlyoutData, setEditFlyoutData] = useState<User | null>(null);

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
    {
      sn: 3,
      name: "Test 3",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 4,
      name: "Test 4",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 5,
      name: "Test 5",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 6,
      name: "Test 6",
      version: "V 0.1",
      createdBy: "Hemanta Adhikari",
      createdAt: "2025/04/30",
    },
    {
      sn: 7,
      name: "Test 7",
      version: "V 0.0.1",
      createdBy: "Shikha Kandel",
      createdAt: "2025/04/15",
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
      render: (version: string) => <>{version}</>,
    },
    {
      field: "createdBy",
      name: "Created By",
      render: (createdBy: string) => <>{createdBy}</>,
    },
    {
      field: "createdAt",
      name: "Created At",
      render: (createdAt: string) => <>{createdAt}</>,
    },
    {
      name: "Action",
      render: (item: User) => {
        const isOpen = openPopoverId === item.sn;
        const onButtonClick = () => {
          setOpenPopoverId(isOpen ? null : item.sn);
        };
        const closePopover = () => setOpenPopoverId(null);
        const button = (
          <EuiIcon type="boxesHorizontal" onClick={onButtonClick} />
        );

        return (
          <>
            <EuiPopover
              button={button}
              isOpen={isOpen}
              closePopover={closePopover}
            >
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiButtonEmpty
                    iconType="pencil"
                    onClick={() => handleEditFlyout(item.sn)}
                  >
                    Edit
                  </EuiButtonEmpty>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiButtonEmpty iconType="trash" color="danger">
                    Delete
                  </EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPopover>
          </>
        );
      },
    },
  ];

  //Pagination
  const onTableChange = ({ page }: Criteria<User>) => {
    if (page) {
      const { index: pageIndex, size: pageSize } = page;
      setPageIndex(pageIndex);
      setPageSize(pageSize);
    }
  };

  const findUsers = (users: User[], pageIndex: number, pageSize: number) => {
    let pageOfItems;

    if (!pageIndex && !pageSize) {
      pageOfItems = users;
    } else {
      const startIndex = pageIndex * pageSize;
      pageOfItems = users.slice(
        startIndex,
        Math.min(startIndex + pageSize, users.length)
      );
    }
    return {
      pageOfItems,
      totalItemCount: users.length,
    };
  };
  const { pageOfItems, totalItemCount } = findUsers(users, pageIndex, pageSize);

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions: [10, 0],
    showPerPageOptions,
  };

  //Flyout

  const simpleFlyoutTitleId = useGeneratedHtmlId({
    prefix: "simpleFlyoutTitle",
  });
  const handleEditFlyout = (sn: number) => {
    const userEditSn = users.find((user) => user.sn === sn);
    setEditFlyoutData(userEditSn || null);
    setIsFlyoutVisible(true);
  };
  let flyout;
  if (isFlyoutVisible && editFlyoutData) {
    flyout = (
      <EuiFlyout
        ownFocus
        onClose={() => setIsFlyoutVisible(false)}
        size="s"
        aria-labelledby={simpleFlyoutTitleId}
      >
        <EuiFlyoutHeader hasBorder  className="flyout-header">
          <EuiTitle size="m">
            <h2 id={simpleFlyoutTitleId}>Edit</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody className="flyout-body">
          <EuiSpacer size="m" />
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText>Name</EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFieldText className= "name-fieldText" value={editFlyoutData.name} />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="m" />
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText>Version</EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFieldText className= "version-fieldText" value={editFlyoutData.version} />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="m" />
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText>Created By</EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFieldText value={editFlyoutData.createdBy} />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="m" />
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText>Created At</EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFieldText value={editFlyoutData.createdAt} />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutBody>
        <EuiFlyoutFooter>
          <EuiFlexGroup justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty iconType="cross" onClick={() => setIsFlyoutVisible(false)}>Cancel</EuiButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <CommonFilter color="success" title="Update" />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutFooter>
      </EuiFlyout>
    );
  }

  return (
    <>
      <EuiFlexGroup direction="column" className="main-div">
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiText>Model</EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiFlexGroup className="top-div">
          <EuiFlexGroup>
            <EuiFlexItem>
              <CommonSearchField placeholder="Enter your Data" />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup justifyContent="flexEnd">
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
            {flyout}
          </EuiFlexGroup>
        </EuiFlexGroup>
        <EuiFlexGroup>
          <EuiFlexItem>
            <CommonTable
              tableCaption="Model Table"
              responsiveBreakpoint={false}
              items={pageOfItems}
              itemId="id"
              rowHeader="name"
              columns={columns}
              onChange={onTableChange}
              pagination={pagination}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexGroup>
    </>
  );
};
