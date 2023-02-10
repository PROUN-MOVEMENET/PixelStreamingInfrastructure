/**
 * A button with a text label beside it.
 */
export declare class LabelledButton {
    _label: string;
    _buttonText: string;
    _rootElement: HTMLElement;
    _button: HTMLInputElement;
    constructor(label: string, buttonText: string);
    /**
     * Add a click listener to the button element.
     */
    addOnClickListener(onClickFunc: () => void): void;
    /**
     * Get the HTMLInputElement for the button.
     */
    get button(): HTMLInputElement;
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
}
