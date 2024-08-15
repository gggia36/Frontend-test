import { Button, Col, Flex, FlexProps, Row } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const AnswerLayout = () => {
  const { t } = useTranslation();
  const [justify, setJustify] = useState<FlexProps["justify"]>("space-around");
  const [justifyCenter, setJustifyCenter] =
    useState<FlexProps["justify"]>("center");
  const [isSwapped, setIsSwapped] = useState(false);

  const handleClick = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="set-page">
      <Row gutter={[16, 16]} justify="center">
        <Col className="gutter-row position-relative" span={4}>
          <Button className="box-triangle w-100 h-100 act-btn">
            <div className="triangle-left"></div>
          </Button>
          <div className="absolute-shape">{t("MoveShape")}</div>
        </Col>
        <Col className="gutter-row position-relative" span={10}>
          <Button
            className="box-triangle w-100 h-100 act-btn"
            onClick={handleClick}
          >
            <Flex justify={justify} className="w-100">
              <div>
                <div className="triangle-top"></div>
              </div>
              <div>
                <div className="triangle-buttom"></div>
              </div>
            </Flex>
          </Button>
          <div className="absolute-position">Move Position</div>
        </Col>

        <Col className="gutter-row position-relative" span={4}>
          <Button className="box-triangle w-100 h-100 act-btn">
            <div className="triangle-right"></div>
          </Button>
          <div className="absolute-shape-right">Move Shape</div>
        </Col>
        <Col span={24} className="gutter-row">
          <hr />
        </Col>
        {isSwapped ? (
          <>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="square"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="circle"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="ellipse"></div>
              </Button>
            </Col>
            <Col span={2} offset={2}></Col>

            <Col className="gutter-row" span={4} offset={8}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="cloth-square-top"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="cloth-square"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="parallelogram"></div>
              </Button>
            </Col>
            <Col span={2}></Col>
          </>
        ) : (
          <>
            <Col className="gutter-row" span={4} offset={8}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="square"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="circle"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="ellipse"></div>
              </Button>
            </Col>
            <Col span={2}></Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="cloth-square-top"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="cloth-square"></div>
              </Button>
            </Col>
            <Col className="gutter-row" span={4}>
              <Button className="box-triangle w-100 h-100 act-btn add">
                <div className="parallelogram"></div>
              </Button>
            </Col>
            <Col span={2} offset={2}></Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default AnswerLayout;
