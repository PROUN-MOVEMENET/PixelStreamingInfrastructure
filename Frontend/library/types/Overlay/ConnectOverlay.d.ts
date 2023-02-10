import { ActionOverlay } from './ActionOverlay';
/**
 * Overlay shown during connection, has a button that can be clicked to initiate a connection.
 */
export declare class ConnectOverlay extends ActionOverlay {
    /**
     * @returns The created root element of this overlay.
     */
    static createRootElement(): HTMLElement;
    /**
     * @returns The created content element of this overlay, which contain whatever content this element contains, like text or a button.
     */
    static createContentElement(): HTMLElement;
    /**
     * Construct a connect overlay with a connection button.
     * @param parentElem the parent element this overlay will be inserted into.
     */
    constructor(parentElem: HTMLElement);
}
