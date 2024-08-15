import { Button, Flex, FlexProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
function Index() {
  const [justify, setJustify] = useState<FlexProps["justify"]>("center");
  const [alignItems, setAlignItems] = useState<FlexProps["align"]>("center");
  return (
    <div className="set-page">
      <div>
        <h1 className="txt-h1">ยินดีตอนรับเข้าสู่ Front end Test</h1>
        <Flex gap="small" justify={justify}>
          <Link to="/answerLayout">
            <Button type="primary" className="btn-primary">
              คำตอบข้อที่ 1
            </Button>
          </Link>
          <Link to="/answerSPA">
            <Button type="primary" className="btn-primary">
              คำตอบข้อที่ 2
            </Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
}

export default Index;
