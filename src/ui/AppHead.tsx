import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from './Text';
import Settings from 'phosphor-react-native/src/icons/Gear';
import ArrowSquareOut from 'phosphor-react-native/src/icons/ArrowSquareOut';
import Plus from 'phosphor-react-native/src/icons/Plus';
import {useNavigation} from '@react-navigation/core';
type Props = {
  onSettingsPress?: () => void;
};
const AppHead = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text
        weight="bold"
        size={32}
        onPress={() => navigation.navigate('Login' as never)}>
        Chats
      </Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={props.onSettingsPress}>
          <Settings size={24} style={{marginEnd: 8}} />
        </TouchableOpacity>
        <ArrowSquareOut size={24} style={{marginEnd: 8}} />
        <Plus size={24} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
});

export default AppHead;
