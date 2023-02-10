import { TextOverlay } from './TextOverlay';
/**
 * Generic overlay used to show textual info to the user.
 */
export declare class InfoOverlay extends TextOverlay {
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
