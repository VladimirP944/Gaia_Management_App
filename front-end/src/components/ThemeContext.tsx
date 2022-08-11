import { createGlobalStyle } from "styled-components";
import { createContext} from "react";


export const ThemeContext = createContext<Object> ("light")

interface themeInterface {
    body: string,
    textColor: string,
    toggleBorder: string,
    gradient: string
}

export const lightTheme : themeInterface = {
    body: '#30B5A3',
    textColor: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)'
}

export const darkTheme : themeInterface = {
    body: '#0E1D19',
    textColor: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)'
}

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    body {
      align-items: center;
      background: ${({ themeObject } : {themeObject : themeInterface})  => themeObject.body};
    }
`
