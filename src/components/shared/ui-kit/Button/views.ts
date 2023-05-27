import { Colors } from "@constants/styles/colors";
import { ButtonView } from "./Button.type";

const DefaultButton:ButtonView = {
    color: Colors.red,
    filling: false
}

const DefaultFilled:ButtonView = {
    color: Colors.red,
    filling: true,
    hovered: {
        color: Colors.gray,
        fontColor: Colors.white
    }
}

export const views = {
    DefaultButton,
    DefaultFilled
}