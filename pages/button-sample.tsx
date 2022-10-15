import type { NextPage } from "next";
import React from "react";
import { Button } from "../src/components/Button";

const Home: NextPage = () => {
  const [gap, setGap] = React.useState(10);

  return (
    <div style={{ display: "flex", gap: gap + "px" }}>
      <input
        placeholder="Put gap here like 10 (translated into 10px)"
        defaultValue={10}
        onChange={(e) => setGap(Number(e.target.value))}
      ></input>
      <Button>Click me</Button>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
