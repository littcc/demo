import { useContext } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import { exampleContextStore } from "@/store/example";

import "./index.less";

const Page = observer(() => {
  const { increment, decrement, incrementAsync, counter } = useContext(
    exampleContextStore
  );

  return (
    <View className="index">
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
      <Button
        style={{ marginTop: 50 }}
        onClick={() => {
          console.log(111);
        }}
      >
        GO-CLASS-PAGE
      </Button>
    </View>
  );
});

export default Page;
