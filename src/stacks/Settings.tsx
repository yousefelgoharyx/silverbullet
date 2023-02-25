import React from 'react';
import {StyleSheet, View} from 'react-native';
import Avatar from '../ui/Avatar';
import Container from '../ui/Container';
import SettingsItem from '../ui/SettingsItem';
import Text from '../ui/Text';
import {getImage} from '../utils/getImage';
import User from 'phosphor-react-native/src/icons/User';
import Barcode from 'phosphor-react-native/src/icons/Barcode';
import Bell from 'phosphor-react-native/src/icons/Bell';
import Fingerprint from 'phosphor-react-native/src/icons/Fingerprint';
import Power from 'phosphor-react-native/src/icons/Power';
import Moon from 'phosphor-react-native/src/icons/Moon';
import CaretRight from 'phosphor-react-native/src/icons/CaretRight';
import Trash from 'phosphor-react-native/src/icons/Trash';
import Switch from '../ui/Switch';
import {useTheme} from '../utils/createStyles';
import {useScheme} from '../theme/ThemeProvider';
const Settings = () => {
  const [scheme, setScheme] = useScheme();
  const handleChangeTheme = (newState: boolean) => {
    setScheme(newState ? 'dark' : 'light');
  };
  const theme = useTheme();
  return (
    <Container>
      <View style={styles.header}>
        <Avatar image={getImage('anthony', 'b6e3f4')} size={128} />
        <Text weight="bold" size={32} style={styles.headerName}>
          Anthony
        </Text>
      </View>
      <Text weight="bold" size={12} style={styles.sectionHeader}>
        General
      </Text>
      <SettingsItem
        left={<CaretRight weight="bold" />}
        right={<User />}
        title="Profile"
      />
      <SettingsItem
        left={<CaretRight weight="bold" />}
        right={<Barcode />}
        title="Share Account"
      />
      <SettingsItem
        left={<CaretRight weight="bold" />}
        right={<Bell />}
        title="Notifications"
      />

      <SettingsItem
        left={<CaretRight weight="bold" />}
        right={<Fingerprint />}
        title="Security"
      />
      <SettingsItem
        right={<Moon />}
        left={
          <Switch
            open={scheme === 'dark' ? true : false}
            onChange={handleChangeTheme}
          />
        }
        title="Dark Mode"
      />
      <Text weight="bold" size={12} style={styles.sectionHeader}>
        Danger
      </Text>
      <SettingsItem
        textColor={theme.red}
        right={<Power color={theme.red} />}
        title="Sign out"
      />
      <SettingsItem
        textColor={theme.red}
        right={<Trash color={theme.red} />}
        title="Delete Account"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  headerName: {
    marginTop: 8,
  },
  sectionHeader: {
    color: '#999',
    textTransform: 'uppercase',
    marginTop: 32,
  },
});

export default Settings;
