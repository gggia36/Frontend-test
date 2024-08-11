import { Button, Flex, Segmented } from "antd";
import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
const alignOptions = ["flex-start", "center", "flex-end"];
const boxStyle = {
  width: "100%",
  height: 120,
  borderRadius: 6,
  border: "1px solid #40a9ff",
};
const justifyOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];
function App() {
  const [justify, setJustify] = useState(justifyOptions[0]);
  const [alignItems, setAlignItems] = useState(alignOptions[0]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <Flex gap="middle" align="start" vertical>
          <p>Select justify :</p>
          <Segmented options={justifyOptions} onChange={setJustify} />
          <p>Select align :</p>
          <Segmented options={alignOptions} onChange={setAlignItems} />
          <Flex style={boxStyle} justify={justify} align={alignItems}>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
          </Flex>
        </Flex>
      </header>
    </div>
  );
}

export default App;
