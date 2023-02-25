import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../utils/createStyles';

type Props = React.ComponentProps<typeof View>;
const Container = ({children, style, ...rest}: Props) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {paddingHorizontal: 20, flex: 1, backgroundColor: theme.background},
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
};

export default Container;
