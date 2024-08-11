import { Col, Flex, FlexProps, Row } from "antd";
import { useState } from "react";
const AnswerLayout = () => {
  const [justify, setJustify] = useState<FlexProps["justify"]>("space-around");
  const [justifyCenter, setJustifyCenter] =
    useState<FlexProps["justify"]>("center");

  return (
    <div className="App gradient-light-blue">
      <Row justify="center" className="w-100" gutter={16}>
        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="triangle-left"></div>
          </Flex>
        </Col>
        <Col className="gutter-row" span={6}>
          <Flex className="box-triangle" justify={justify}>
            <div>
              <div className="triangle-top"></div>
            </div>
            <div>
              <div className="triangle-buttom"></div>
            </div>
          </Flex>
        </Col>
        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="triangle-left"></div>
          </Flex>
        </Col>
      </Row>
      <hr />
      <Row className="w-100" justify="center" gutter={16}>
        <Col className="gutter-row" span={3}></Col>

        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="square"></div>
          </Flex>
        </Col>
        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="circle"></div>
          </Flex>
        </Col>
        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="ellipse"></div>
          </Flex>
        </Col>
      </Row>
      <Row className="w-100" justify="center" gutter={16}>
        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="cloth-square-top"></div>
          </Flex>
        </Col>
        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="cloth-square"></div>
          </Flex>
        </Col>
        <Col className="gutter-row" span={3}>
          <Flex justify={justifyCenter} className="box-triangle">
            <div className="parallelogram"></div>
          </Flex>
        </Col>
        <Col className="gutter-row" span={3}></Col>
      </Row>
    </div>
  );
};

export default AnswerLayout;
