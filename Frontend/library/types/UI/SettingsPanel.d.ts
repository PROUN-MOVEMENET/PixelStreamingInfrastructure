/**
 * A UI component containing all the settings for the application.
 */
export declare class SettingsPanel {
    _rootElement: HTMLElement;
    _settingsCloseButton: HTMLElement;
    _settingsContentElement: HTMLElement;
    constructor();
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    get settingsContentElement(): HTMLElement;
    get settingsCloseButton(): HTMLElement;
    /**
     * Show settings panel.
     */
    show(): void;
    /**
     * Toggle the visibility of the settings panel.
     */
    toggleVisibility(): void;
    /**
     * Hide settings panel.
     */
    hide(): void;
}
