/**
 * Declare additions to base types for cross browser fullscreen functionality.
 */
declare global {
    interface Document {
        webkitIsFullScreen?: boolean;
        mozFullScreen?: boolean;
        webkitFullscreenEnabled?: boolean;
        mozCancelFullScreen?: () => Promise<void>;
        msExitFullscreen?: () => Promise<void>;
        webkitExitFullscreen?: () => Promise<void>;
        mozFullScreenElement?: Element;
        msFullscreenElement?: Element;
        webkitFullscreenElement?: Element;
    }
    interface HTMLElement {
        msRequestFullscreen?: () => Promise<void>;
        mozRequestFullscreen?: () => Promise<void>;
        webkitRequestFullscreen?: () => Promise<void>;
        webkitEnterFullscreen?: () => void;
    }
}
/**
 * Minimize and maximize icon that when clicked will toggle fullscreen of the given element.
 */
export declare class FullScreenIcon {
    isFullscreen: boolean;
    fullscreenElement: HTMLElement;
    _rootElement: HTMLButtonElement;
    _maximizeIcon: SVGElement;
    _minimizeIcon: SVGElement;
    _tooltipText: HTMLElement;
    /**
     * Construct a FullScreenIcon
     */
    constructor();
    /**
     * Get the the button containing minimize and maximize.
     */
    get rootElement(): HTMLButtonElement;
    get tooltipText(): HTMLElement;
    get maximizeIcon(): SVGElement;
    get minimizeIcon(): SVGElement;
    /**
     * Makes the document fullscreen
     */
    toggleFullscreen(): void;
    /**
     * Handles the fullscreen button on change
     */
    onFullscreenChange(): void;
}
