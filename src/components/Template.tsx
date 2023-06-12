import React from "react";
import { View, Text } from "react-native";

type Props = {
  myTemplate: string;
};

export const Template: React.FC<Props> = (props) => {
  const { myTemplate } = props;

  return (
    <View>
      <Text>{myTemplate}</Text>
    </View>
  );
};
