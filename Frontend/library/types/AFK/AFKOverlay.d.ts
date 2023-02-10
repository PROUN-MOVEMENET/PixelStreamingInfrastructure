import { ActionOverlay } from '../Overlay/ActionOverlay';
/**
 * Show an overlay for when the session is unattended, it begins a countdown timer, which when elapsed will disconnect the stream.
 */
export declare class AFKOverlay extends ActionOverlay {
    /**
     * @returns The created root element of this overlay.
     */
    static createRootElement(): HTMLElement;
    /**
     * @returns The created content element of this overlay, which contain some text for an afk count down.
     */
    static createContentElement(): HTMLElement;
    /**
     * Construct an Afk overlay
     * @param parentElement the element this overlay will be inserted into
     */
    constructor(rootDiv: HTMLElement);
    /**
     * Update the count down spans number for the overlay
     * @param countdown the count down number to be inserted into the span for updating
     */
    updateCountdown(countdown: number): void;
}
