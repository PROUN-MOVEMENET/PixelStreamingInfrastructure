import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
/**
 * The class that handles the functionality of gamepads and controllers
 */
export declare class GamePadController {
    controllers: Controller[];
    requestAnimationFrame: (callback: FrameRequestCallback) => number;
    toStreamerMessagesProvider: StreamMessageController;
    /**
     * @param toStreamerMessagesProvider - Stream message instance
     */
    constructor(toStreamerMessagesProvider: StreamMessageController);
    /**
     * Connects the gamepad handler
     * @param gamePadEvent - the activating gamepad event
     */
    gamePadConnectHandler(gamePadEvent: GamepadEvent): void;
    /**
     * Disconnects the gamepad handler
     * @param gamePadEvent - the activating gamepad event
     */
    gamePadDisconnectHandler(gamePadEvent: GamepadEvent): void;
    /**
     * Scan for connected gamepads
     */
    scanGamePads(): void;
    /**
     * Updates the status of the gamepad and sends the inputs
     */
    updateStatus(): void;
}
/**
 * Additional types for Window and Navigator
 */
declare global {
    interface Window {
        mozRequestAnimationFrame(callback: FrameRequestCallback): number;
        webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
    }
    interface Navigator {
        webkitGetGamepads(): Gamepad[];
    }
}
/**
 * Gamepad layout codes enum
 */
export declare enum gamepadLayout {
    RightClusterBottomButton = 0,
    RightClusterRightButton = 1,
    RightClusterLeftButton = 2,
    RightClusterTopButton = 3,
    LeftShoulder = 4,
    RightShoulder = 5,
    LeftTrigger = 6,
    RightTrigger = 7,
    SelectOrBack = 8,
    StartOrForward = 9,
    LeftAnalogPress = 10,
    RightAnalogPress = 11,
    LeftClusterTopButton = 12,
    LeftClusterBottomButton = 13,
    LeftClusterLeftButton = 14,
    LeftClusterRightButton = 15,
    CentreButton = 16,
    LeftStickHorizontal = 0,
    LeftStickVertical = 1,
    RightStickHorizontal = 2,
    RightStickVertical = 3
}
/**
 * The interface for controllers
 */
export interface Controller {
    currentState: Gamepad;
    prevState: Gamepad;
}
