import type { SpacingProperty } from '../Interface/StyleObj'

/**
 * 
 * @param input input value to check for padding or margin
 * @returns true if the input is a valid padding or margin value else false
 */
export const isValidInputValue = (input: string) => {
    const paddingRegex =
        /^(\d+(px|em|rem|%|vh)\s*)|(auto|inherit|initial|revert|revert-layey|unset)$/
    return paddingRegex.test(input)
}

export const allSpacingProperties: SpacingProperty[] = ['top', 'bottom', 'right', 'left']
