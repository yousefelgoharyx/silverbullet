import {useNavigation} from '@react-navigation/core';

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ContactImage from './Avatar';
import Text from './Text';

type ContactProps = {
  name: string;
  message: string;
  image: string;
  iam?: boolean;
  unread?: boolean;
};

const Contact = (props: ContactProps) => {
  const {name, message, image, iam = false, unread = false} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Chat' as never)}>
      <View style={styles.container}>
        <ContactImage image={image} />
        <View style={styles.infoContainer}>
          <Text weight="bold" size={18} style={{lineHeight: 24}}>
            {name}
          </Text>
          <Text
            size={14}
            numberOfLines={1}
            weight={unread ? 'bold' : 'regular'}
            style={{lineHeight: 20}}>
            {iam ? <Text size={14}>You: </Text> : null}

            {message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },

  infoContainer: {
    marginStart: 8,
    overflow: 'hidden',
    flexShrink: 1,
    marginEnd: 34,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default Contact;
