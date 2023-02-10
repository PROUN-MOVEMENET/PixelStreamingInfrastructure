import { SettingBase } from './SettingBase';
/**
 * A number spinner with a text label beside it.
 */
export declare class SettingNumber extends SettingBase {
    _min: number;
    _max: number;
    _rootElement: HTMLElement;
    _spinner: HTMLInputElement;
    constructor(id: string, label: string, description: string, min: number, max: number, defaultNumber: number);
    /**
     * Set the number in the spinner (will be clamped within range).
     */
    set number(newNumber: number);
    /**
     * @returns The number stored in the spinner.
     */
    get number(): number;
    /**
     * Clamps a number between the min and max values (inclusive).
     * @param inNumber The number to clamp.
     * @returns The clamped number.
     */
    clamp(inNumber: number): number;
    /**
     * Add a change listener to the spinner element.
     */
    addOnChangedListener(onChangedFunc: (newNumber: number) => void): void;
    updateURLParams(): void;
    /**
     * Get the HTMLInputElement for the button.
     */
    get spinner(): HTMLInputElement;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
}
