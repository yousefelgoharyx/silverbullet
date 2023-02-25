import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type Props = {
  image: string;
  size?: number;
};
const Avatar = (props: Props) => {
  const {image, size = 75} = props;
  return (
    <View
      style={[
        styles.imageContainer,
        {width: size, height: size, borderRadius: size / 2},
      ]}>
      <Image source={{uri: image, width: size, height: size}} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    backgroundColor: '#eaeaea',
  },
});

export default Avatar;
