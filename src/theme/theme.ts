export type Theme = {
  primary: string;
  secondary: string;
  text: string;
  gray1: string;
  gray2: string;
  green: string;
  red: string;
};
const light: Theme = {
  primary: 'white',
  secondary: '#eaeaea',
  text: 'black',
  gray1: '#f4f4f4',
  gray2: '#eaeaea',
  green: '#0D7612',
  red: '#ff3333',
};
const dark: Theme = {
  primary: 'black',
  secondary: '#111',
  text: 'white',
  gray1: '#333',
  gray2: '#111',
  green: '#0D7612',
  red: '#ff3333',
};

export const themes = {dark, light};
