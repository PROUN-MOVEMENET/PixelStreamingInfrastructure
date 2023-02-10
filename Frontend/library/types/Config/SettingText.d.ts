import { SettingBase } from './SettingBase';
export declare class SettingText extends SettingBase {
    _textbox: HTMLInputElement;
    _settingsTextElem: HTMLElement;
    constructor(id: string, label: string, description: string, defaultTextValue: string);
    /**
     * Parse the text value from the url parameters.
     * @returns The text value parsed from the url if the url parameters contains /?id=value, but empty string if just /?id or no url param found.
     */
    getUrlParamText(): string;
    get settingsTextElem(): HTMLElement;
    get textbox(): HTMLInputElement;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    /**
     * @return The setting's value.
     */
    get text(): string;
    /**
     * Update the setting's stored value.
     * @param inValue The new value for the setting.
     */
    set text(inValue: unknown);
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel: string);
}
