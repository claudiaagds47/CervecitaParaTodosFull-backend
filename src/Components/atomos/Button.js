import React from "react";

//MATRIAL UI
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// STYLE
import Default from "@/styles/Default";
import TextStyles from "@/styles/TextStyle";

const ButtonComponent = ({
  title,
  variant,
  color,
  textColor, // Opciones: 'primary', 'secondary', 'black', 'success', 'danger'
  size,
  sx, // Estilos adicionales, tipo custom
  backgroundColor,
  borderColor,
  hoverOutlined,
  rounded = false | true,
  
}) => {
  const getColor = (color) => {
    switch (color) {
      case "primary":
        return TextStyles.textPrimary.color || Default.primary;
      case "black":
        return TextStyles.textblack.color || Default.black;
      case "white":
        return TextStyles.textwhite.color || Default.white;
      case "success":
        return TextStyles.textSucces.color || Default.success;
      case "danger":
        return TextStyles.textDanger.color || Default.danger;
      default:
        return "transparent";
    }
  };

  const StyledButton = styled(Button)({
    color: getColor(textColor), // color de texto según la opción seleccionada
    backgroundColor: getColor(backgroundColor), // me deja tener el fondo a color personalisable
    borderColor: getColor(color),
    borderRadius: rounded == true ? "5px" : "0",
    "&:hover": {
      backgroundColor:
        backgroundColor === "black" ? "#000000" : getColor(color),
      color: Default.white,
      borderColor: getColor(color),
    },
    ...sx,
  });

  return (
    <StyledButton
      variant={variant}
      size={size}
      color={color}
      borderColor={borderColor}
      hoverOutlined={hoverOutlined}
      rounded={rounded}
    >
      {title}
    </StyledButton>
  );
};

export default ButtonComponent;
