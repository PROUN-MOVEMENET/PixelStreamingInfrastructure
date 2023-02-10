import { SettingBase } from './SettingBase';
export declare class SettingFlag extends SettingBase {
    _checkbox: HTMLInputElement;
    _settingsTextElem: HTMLElement;
    constructor(id: string, label: string, description: string, defaultFlagValue: boolean);
    /**
     * Parse the flag value from the url parameters.
     * @returns True if the url parameters contains /?id, but False if /?id=false
     */
    getUrlParamFlag(): boolean;
    get settingsTextElem(): HTMLElement;
    get checkbox(): HTMLInputElement;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    /**
     * Enables this flag.
     */
    enable(): void;
    /**
     * @return The setting's value.
     */
    get flag(): boolean;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set flag(inValue: unknown);
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel: string);
    /**
     * @returns The label text for the setting.
     */
    get label(): string;
}
