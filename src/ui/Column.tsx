import React from "react";
import { View } from "react-native";

type Props = React.PropsWithChildren<{
  gap?: number;
}> &
  React.ComponentProps<typeof View>;
const Column = (props: Props) => {
  const { style } = props;
  return (
    <View style={[{ gap: props.gap, alignSelf: "stretch" }, style]}>
      {props.children}
    </View>
  );
};

export default Column;
