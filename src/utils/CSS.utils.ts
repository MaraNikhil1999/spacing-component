import type { SpacingProperty } from '../Interface/StyleObj'

export const isValidPadding = (input: string) => {
    const paddingRegex = /^(\d+(px|em|rem|%)\s*){1,4}$/
    return paddingRegex.test(input)
}

export const allSpacingProperties: SpacingProperty[] = ['top', 'bottom', 'right', 'left']
