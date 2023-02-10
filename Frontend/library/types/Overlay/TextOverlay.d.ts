import { OverlayBase } from './BaseOverlay';
/**
 * Class for the text overlay base
 */
export declare class TextOverlay extends OverlayBase {
    /**
     * Construct a text overlay
     * @param rootDiv the root element this overlay will be inserted into
     * @param rootElement the root element that is the overlay
     * @param textElement an element that contains text for the action overlay
     */
    constructor(rootDiv: HTMLElement, rootElement: HTMLElement, textElement: HTMLElement);
    /**
     * Update the text overlays inner text
     * @param text the update text to be inserted into the overlay
     */
    update(text: string): void;
}
