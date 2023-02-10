import { SettingBase } from './SettingBase';
export declare class SettingOption extends SettingBase {
    _selector: HTMLSelectElement;
    _settingsTextElem: HTMLElement;
    constructor(id: string, label: string, description: string, defaultTextValue: string, options: Array<string>);
    get selector(): HTMLSelectElement;
    get settingsTextElem(): HTMLElement;
    /**
     * Set the label text for the setting.
     * @param label setting label.
     */
    set label(inLabel: string);
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    /**
     * Parse the text value from the url parameters.
     * @returns The text value parsed from the url if the url parameters contains /?id=value, but empty string if just /?id or no url param found.
     */
    getUrlParamText(): string;
    /**
     * Add a change listener to the select element.
     */
    addOnChangedListener(onChangedFunc: (newValue: string) => void): void;
    get options(): Array<string>;
    set options(values: Array<string>);
    get selected(): string;
    set selected(value: string);
    disable(): void;
    enable(): void;
}
