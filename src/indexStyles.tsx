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

li{
  list-style-type: none;
}

#options-menu{
  background: ${(props) => props.theme.darkColors.shade0};
  color: ${(props) => props.theme.lightColors.shade0};
}

#bubble{
  background: ${(props) => props.theme.otherColors.red0};
}

// #c1 {
// box-shadow: 0rem 1.25rem 3rem red, -2.5rem -1.75rem 5rem green;

// }
`;

export default AppGlobalTheme;
