import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import cls from './Modal.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { Themes } from '@app/providers/ThemeProvider'

const modalContainer = document.querySelector(".modals") as HTMLDivElement

type ModalProps = {
    className?: string,
    isOpened: boolean,
    onClose: Dispatch<SetStateAction<boolean>>,
    children: ReactNode,
    theme: Themes
}

enum states {
    opens = "opens",
    open = "open",
    closes = "closes",
    close = "close"
}

const DURATION = 600

const Modal: FC<ModalProps> = ({ className, children, isOpened, onClose, theme }) => {
    const [opened, setOpened] = useState(isOpened)
    const [state, setState] = useState<states>(states.close)

    useEffect(() => {
        if (state !== states.opens && state !== states.closes) {
            if (isOpened) {
                setState(states.opens)
                setOpened(true)
                setTimeout(() => setState(states.open), DURATION)
            } else {
                setState(states.closes)
                setTimeout(() => {
                    setState(states.close)
                    setOpened(false)
                }, DURATION)
            }
        }
    }, [isOpened])

    if (!opened) {
        return null
    }

    return ReactDOM.createPortal(<div className={classNames(cls.Modal, {}, [className, cls[theme], cls[state]])}><div onClick={() => onClose(false)} className={classNames(cls.content)}>{children}</div></div>, modalContainer)
}

export default Modal