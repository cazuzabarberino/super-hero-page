const DEFAULT_FONT_SIZE = 16

export function pxToRem(size: number) {
    return `${size / DEFAULT_FONT_SIZE}rem`
}
