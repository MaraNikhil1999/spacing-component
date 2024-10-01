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
        margin: SpacingProperties;
        padding: SpacingProperties;
    };
}

export type SpacingProperty = keyof SpacingProperties;
export type SpacingType = 'margin' | 'padding';