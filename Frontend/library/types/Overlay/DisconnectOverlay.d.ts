import { ActionOverlay } from './ActionOverlay';
/**
 * Overlay shown during disconnection, has a reconnection element that can be clicked to reconnect.
 */
export declare class DisconnectOverlay extends ActionOverlay {
    /**
     * @returns The created root element of this overlay.
     */
    static createRootElement(): HTMLElement;
    /**
     * @returns The created content element of this overlay, which contain whatever content this element contains, like text or a button.
     */
    static createContentElement(): HTMLElement;
    /**
     * Construct a disconnect overlay with a retry connection icon.
     * @param parentElem the parent element this overlay will be inserted into.
     */
    constructor(parentElem: HTMLElement);
}
