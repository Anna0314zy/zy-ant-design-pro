import { useModel } from "@umijs/max";
import { Button } from "antd";
import React, { useEffect } from "react";
const Welcome: React.FC = () => {
	const { counter, increment, decrement, user,getUserRun } = useModel("dataFlow.data");
  useEffect(() => {
    getUserRun()
  },[])
	return (
		<>
			<div>data:{JSON.stringify(counter ?? {})}</div>
      <div>user:{JSON.stringify(user ?? {})}</div>
			<div>
				<Button onClick={increment}>+</Button>
			</div>
			<div>
				<Button onClick={decrement}>-</Button>
			</div>
		</>
	);
};

export default Welcome;
