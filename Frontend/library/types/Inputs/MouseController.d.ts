import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
import { CoordinateConverter } from '../Util/CoordinateConverter';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
/**
 * Handles the Mouse Inputs for the document
 */
export declare class MouseController {
    videoElementProvider: VideoPlayer;
    toStreamerMessagesProvider: StreamMessageController;
    coordinateConverter: CoordinateConverter;
    /**
     * @param toStreamerMessagesProvider - Stream message instance
     * @param videoElementProvider - Video Player instance
     * @param normalizeAndQuantize - A normalize and quantize instance
     */
    constructor(toStreamerMessagesProvider: StreamMessageController, videoElementProvider: VideoPlayer, coordinateConverter: CoordinateConverter);
    /**
     * Clears all the click events on the current video element parent div
     */
    clearMouseEvents(): void;
    /**
     * Set the mouse enter and mouse leave events
     */
    registerMouseEnterAndLeaveEvents(): void;
    /**
     * Handle when a mouse button is released
     * @param buttons - Mouse Button
     * @param X - Mouse pointer X coordinate
     * @param Y - Mouse pointer Y coordinate
     */
    releaseMouseButtons(buttons: number, X: number, Y: number): void;
    /**
     * Handle when a mouse button is pressed
     * @param buttons - Mouse Button
     * @param X - Mouse pointer X coordinate
     * @param Y - Mouse pointer Y coordinate
     */
    pressMouseButtons(buttons: number, X: number, Y: number): void;
    /**
     * Handles mouse enter
     */
    sendMouseEnter(): void;
    /**
     * Handles mouse Leave
     */
    sendMouseLeave(): void;
    /**
     * Handles when a mouse button is pressed down
     * @param button - Mouse Button Pressed
     * @param X  - Mouse X Coordinate
     * @param Y  - Mouse Y Coordinate
     */
    sendMouseDown(button: number, X: number, Y: number): void;
    /**
     * Handles when a mouse button is pressed up
     * @param button - Mouse Button Pressed
     * @param X  - Mouse X Coordinate
     * @param Y  - Mouse Y Coordinate
     */
    sendMouseUp(button: number, X: number, Y: number): void;
}
