import { useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement >(element: React.RefObject<T>, callback: (e:MouseEvent) => void) => {
    const clickHandler = (e: MouseEvent) => {
        const el = element?.current
        if(!el || el.contains(e.target as Node)){
            return
        }
        callback(e)
    }
    useEffect(() => {
        window.addEventListener("click", clickHandler)
        return () => window.removeEventListener("click", clickHandler)
    },[element, callback])
}