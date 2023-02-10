/**
 * Class for the base overlay structure
 */
export declare class OverlayBase {
    protected rootElement: HTMLElement;
    protected rootDiv: HTMLElement;
    textElement: HTMLElement;
    /**
     * Construct an overlay
     * @param rootDiv the root element this overlay will be inserted into
     * @param rootElement the root element that is the overlay
     */
    protected constructor(rootDiv: HTMLElement, rootElement: HTMLElement, textElement: HTMLElement);
    /**
     * Show the overlay
     */
    show(): void;
    /**
     * Hide the overlay
     */
    hide(): void;
}
