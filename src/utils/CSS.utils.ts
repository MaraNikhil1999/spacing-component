import type { SpacingProperty } from '../Interface/StyleObj'

export const isValidPadding = (input: string) => {
    const paddingRegex =
        /^(\d+(px|em|rem|%|vh)\s*)|(auto|inherit|initial|revert|revert-layey|unset)$/
    return paddingRegex.test(input)
}

export const allSpacingProperties: SpacingProperty[] = ['top', 'bottom', 'right', 'left']
