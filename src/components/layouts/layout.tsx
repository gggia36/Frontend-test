import { DownOutlined } from "@ant-design/icons";
import type { DropdownProps, FlexProps, MenuProps } from "antd";
import { Col, Dropdown, Flex, Row, Space } from "antd";
import React, { useState } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [justify, setJustify] = useState<FlexProps["justify"]>("space-between");

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "2") {
      setOpen(false);
    }
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };
  const items: MenuProps["items"] = [
    {
      label: "TH",
      key: "1",
    },
    {
      label: "EN",
      key: "2",
    },
  ];
  return (
    <>
      <div className="App gradient-light-blue position-relative">
        <Row>
          <Col span={24}>
            <Flex
              className="position-top"
              justify={justify}
              rootClassName="w-100"
            >
              <div>
                <h1>การจัดการหน้าฟอม</h1>
              </div>
              <Dropdown
                menu={{
                  items,
                  onClick: handleMenuClick,
                }}
                onOpenChange={handleOpenChange}
                open={open}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hover me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Flex>
          </Col>
        </Row>
        {children}
      </div>
    </>
  );
}

export default Layout;
