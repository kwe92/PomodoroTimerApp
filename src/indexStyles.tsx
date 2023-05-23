import { createGlobalStyle } from "styled-components";

interface Props {
  fontFamily?: String;
  theme?: ThemeInterface;
  lightMode?: boolean;
}

const AppGlobalTheme = createGlobalStyle<Props>`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body{
    background: lightblue;
}
`;

export default AppGlobalTheme;
