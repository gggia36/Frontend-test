import { Button, Flex, FlexProps } from "antd";
import { useState } from "react";
import "./App.css";
function App() {
  const [justify, setJustify] = useState<FlexProps["justify"]>("center");
  const [alignItems, setAlignItems] = useState<FlexProps["align"]>("center");
  return (
    <div className="App gradient-light-blue">
      <div className="set-page">
        <div>
          <h1 className="txt-h1">ยินดีตอนรับเข้าสู่ Front end Test</h1>
          <Flex gap="small" justify={justify}>
            <Button type="primary" className="btn-primary">
              คำตอบข้อที่ 1
            </Button>

            <Button type="primary" className="btn-primary">
              คำตอบข้อที่ 2
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default App;
