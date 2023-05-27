import { Colors } from '@constants/styles/colors';
import { ReactNode } from 'react';

export type Props = {
    children: ReactNode,
    view: ButtonView
    style?: React.CSSProperties
}

export type ButtonView = {
    color?: Colors
    filling?: boolean,
    hovered?: {
        color?: Colors,
        fontColor?: Colors
    }
}
