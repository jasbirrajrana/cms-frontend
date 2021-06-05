import { useColorMode } from "@chakra-ui/color-mode";
import { css, Global } from "@emotion/react";
import React from "react";
import { prismDarkTheme, prismLightTheme } from "./styles/highlight";

interface GlobalStyleProps {}

const GlobalStyle: React.FC<GlobalStyleProps> = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::-webkit-scrollbar {
            width: 12px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background-color: ${colorMode === "light" ? "#fff" : "#000"};
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            &:hover {
              background: rgb(133, 131, 131);
              transition: all 0.3s ease-in-out;
            }
            background: #aaa;
          }
          ::-webkit-scrollbar-thumb:window-inactive {
            background: #aaa;
          }
          ::selection {
            background-color: #fca311;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          code {
            font-size: 15px;
          }
          p > code {
            background: #e4efe7;
            border-radius: 5px;
            padding: 2px;
            color: #000;
            font-weight: light;
          }
        `}
      />
    </>
  );
};
export default GlobalStyle;
