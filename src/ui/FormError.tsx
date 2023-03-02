import React from "react";
import { View } from "react-native";
import Text from "./Text";

type FormErrorProps = {
  error: string | null;
} & React.ComponentProps<typeof View>;

const FormError = ({ error, ...rest }: FormErrorProps) => {
  return (
    <View
      style={{
        height: 56,
        backgroundColor: "#ff333350",
        opacity: error ? 1 : 0,
        paddingHorizontal: 32,
        borderRadius: 16,
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
      {...rest}
    >
      <Text weight="bold" style={{ textTransform: "uppercase", top: 2 }}>
        {error}
      </Text>
    </View>
  );
};

export default FormError;
