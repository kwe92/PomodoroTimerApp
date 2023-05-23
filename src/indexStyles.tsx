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
    background: ${(props) => props.theme.darkColors.shade1};
}

#options-menu{
  background: ${(props) => props.theme.darkColors.shade0};
}
`;

export default AppGlobalTheme;
