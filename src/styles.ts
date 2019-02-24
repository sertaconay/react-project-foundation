import { createContext, useContext } from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';


const theme = {
  sider: {
    width: 200,
    collapsedWidth: 80,
  },
};

const ThemeContext = createContext(theme);
const ThemeProvider = ThemeContext.Provider;
const useTheme = () => useContext(ThemeContext);

const styles = {};

export { styles, theme, ThemeProvider, useTheme, styled, Global };
