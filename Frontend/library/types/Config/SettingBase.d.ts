/**
 * Base class for a setting that has a text label, an arbitrary setting value it stores, an a HTML element that represents this setting.
 */
export declare class SettingBase {
    id: string;
    description: string;
    _label: string;
    _value: unknown;
    _rootElement: HTMLElement;
    onChange: (changedValue: unknown) => void;
    constructor(id: string, label: string, description: string, defaultSettingValue: unknown);
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel: string);
    /**
     * @returns The label text for the setting.
     */
    get label(): string;
    /**
     * @return The setting's value.
     */
    get value(): unknown;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set value(inValue: unknown);
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
}
