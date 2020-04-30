import React, { useContext } from "react";
import Switch from "react-switch";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  handleTheme(): void;
}

const Header: React.FC<Props> = ({ handleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Meu App </h1>
      <Switch
        onChange={handleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
