 interface SpacingProperties {
    top: string;
    bottom: string;
    right: string;
    left: string;
}

export interface SpacingComponentData {
    changed: {
        margin: Partial<SpacingProperties>;
        padding: Partial<SpacingProperties>;
    };
    value: {
        margin: Partial<SpacingProperties>;
        padding: Partial<SpacingProperties>;
    };
}

export type SpacingProperty = keyof SpacingProperties;
export type SpacingType = 'margin' | 'padding';
type InputDisableOption = {
    top: boolean;
    bottom: boolean;
    right: boolean;
    left: boolean;
}
export type InputDisabled = {
    margin:Partial<InputDisableOption>,
    padding:Partial<InputDisableOption>
}