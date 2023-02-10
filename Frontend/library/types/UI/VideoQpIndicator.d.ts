/**
 * A UI element showing the QP (quantization parameter) of the video stream at the last encoded frame (well, last transmitted QP really).
 * A blockier encoding will have a higher QP and this will make the indicator turn more red.
 * A non-blocky stream will have a lower QP and this will make the indicator turn more green.
 * The QP indicator is represented visually using a WiFi icon.
 */
export declare class VideoQpIndicator {
    videoEncoderAvgQP: number;
    statsText: string;
    color: string;
    readonly orangeQP = 26;
    readonly redQP = 35;
    _rootElement: HTMLElement;
    _qualityText: HTMLElement;
    _qualityStatus: SVGElement;
    _dot: SVGElement;
    _outer: SVGElement;
    _middle: SVGElement;
    _inner: SVGElement;
    /**
     * Get the root element of the QP indicator.
     */
    get rootElement(): HTMLElement;
    /**
     * Get the text that displays under the icon.
     */
    get qualityText(): HTMLElement;
    /**
     * Get the icon.
     */
    get qualityStatus(): SVGElement;
    /**
     * Get the dot at the bottom of the wifi icon.
     */
    get dot(): SVGElement;
    /**
     * Get the outer arc of the wifi icon.
     */
    get outer(): SVGElement;
    /**
     * Get the middle arc of the wifi icon.
     */
    get middle(): SVGElement;
    /**
     * Get the inner arc of the wifi icon.
     */
    get inner(): SVGElement;
    /**
     * Used to set the speed of the status light.
     * @param speed - Set the speed of the blink, higher numbers make the status light blink faster.
     */
    blinkVideoQualityStatus(speed: number): void;
    /**
     * updates the QP tooltip by converting the Video Encoder QP to a color light
     * @param QP - The video encoder QP number needed to find the average
     */
    updateQpTooltip(QP: number): void;
}
