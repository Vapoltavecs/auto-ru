
export const classNames = (defaultClass: string, mods:Record<string, boolean> = {}, additional: (string | undefined)[] = []) => {
    const classes = [defaultClass, ...additional.filter(Boolean)]
    const classNames = Object.entries(mods).filter(([_, value]) => value).map(([className]) => className)
    classes.push(...classNames)
    return classes.join(" ")
}