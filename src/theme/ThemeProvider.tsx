import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useLayoutEffect,
} from 'react';
import {useColorScheme} from 'react-native';

type ColorScheme = 'dark' | 'light';
// create theme context with default theme

type SchemeContextType = [ColorScheme, (scheme: ColorScheme) => void];

// @ts-ignore
const SchemeContext = createContext<SchemeContextType>();

// create function to update Scheme
export const useScheme = () => useContext(SchemeContext);

// create Scheme provider
export const SchemeProvider = ({children}: PropsWithChildren) => {
  const preferred = useColorScheme();
  const [scheme, setScheme] = useState<ColorScheme>(preferred ?? 'light');

  async function setColorScheme(newScheme: ColorScheme) {
    await AsyncStorage.setItem('scheme', newScheme);
    setScheme(newScheme);
  }

  useLayoutEffect(() => {
    async function getColorScheme(): Promise<ColorScheme | null> {
      return (await AsyncStorage.getItem('scheme')) as ColorScheme | null;
    }

    (async () => {
      const storageScheme = await getColorScheme();
      console.log(storageScheme);

      setColorScheme(storageScheme ?? 'light');
    })();
  }, []);
  return (
    <SchemeContext.Provider value={[scheme, setColorScheme]}>
      {children}
    </SchemeContext.Provider>
  );
};
