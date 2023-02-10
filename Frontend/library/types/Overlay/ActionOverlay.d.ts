import { OverlayBase } from './BaseOverlay';
/**
 * Class for the base action overlay structure
 */
export declare class ActionOverlay extends OverlayBase {
    onActionCallback: (...args: []) => void;
    /**
     * Construct an action overlay
     * @param rootDiv the root element this overlay will be inserted into
     * @param rootElement the root element that is the overlay
     * @param contentElement an element that contains text for the action overlay
     */
    constructor(rootDiv: HTMLElement, rootElement: HTMLElement, contentElement: HTMLElement);
    /**
     * Update the text overlays inner text
     * @param text the update text to be inserted into the overlay
     */
    update(text: string): void;
    /**
     * Set a method as an event emitter callback
     * @param callBack the method that is to be called when the event is emitted
     */
    onAction(callBack: (...args: []) => void): void;
    /**
     * Activate an event that is attached to the event emitter
     */
    activate(): void;
}
