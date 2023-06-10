import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import cls from './Modal.module.sass'
import { classNames } from '@shared/lib/classNames/classNames'
import { Themes } from '@app/providers/ThemeProvider'
import { useOutsideClick } from '@shared/lib/hooks/useOutsideClick'

const modalContainer = document.querySelector(".modals") as HTMLDivElement

type ModalProps = {
    className?: string,
    isOpened: boolean,
    onClose: () => void,
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
    const ref = useRef<HTMLDivElement>(null)

    const onOutsideClick = useCallback(() => {
        if (state !== states.opens && state !== states.closes) {
            onClose()
        }
    }, [state])

    useOutsideClick(ref, onOutsideClick)

    useEffect(() => {
        if (isOpened) {
            setOpened(true)
            setState(states.opens)
            setTimeout(() => {
                setState(states.open)

            }, DURATION)
        } else {
            setState(states.closes)
            setTimeout(() => {
                setOpened(false)
                setState(states.close)
            }, DURATION)
        }

    }, [isOpened])

    if (!opened) {
        return null
    }

    return ReactDOM.createPortal(<div className={classNames(cls.Modal, {}, [className, cls[theme], cls[state]])}><div ref={ref} className={classNames(cls.content)}>{children}</div></div>, modalContainer)
}

export default Modal