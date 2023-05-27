import React, { FC } from "react";
import { Props } from "./Button.type";
import styled from "styled-components";
import { Colors } from "@constants/styles/colors";

export const Button: FC<Props> = React.memo(({ children, style, view }) => {
  const { color = Colors.white, filling = true, hovered } = view;

  const Btn = styled.button`
    color: ${filling ? Colors.white : color};
    background-color: ${filling ? color : Colors.white};
    border: 1px solid ${color};
    padding: 10px 40px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &:hover {
      background-color: ${filling ? hovered?.color : color};
      color: ${hovered?.fontColor ? hovered.fontColor : Colors.white};
      border: 1px solid ${filling ? hovered?.color : color}
    }
  `;

  return (
    <Btn style={style}>
      {children}
    </Btn>
  );
});
