import { Config } from '../Config/Config';
import { StatsPanel } from '../UI/StatsPanel';
import { LatencyTestResults } from '../DataChannel/LatencyTestResults';
import { AggregatedStats } from '../PeerConnectionController/AggregatedStats';
import { VideoQpIndicator } from '../UI/VideoQpIndicator';
import { SettingsPanel } from '../UI/SettingsPanel';
import { WebRtcPlayerController } from '../WebRtcPlayer/WebRtcPlayerController';
import { InitialSettings } from '../DataChannel/InitialSettings';
import { OnScreenKeyboard } from '../UI/OnScreenKeyboard';
import { OverlayBase } from '../Overlay/BaseOverlay';
import { ActionOverlay } from '../Overlay/ActionOverlay';
import { TextOverlay } from '../Overlay/TextOverlay';
import { MessageOnScreenKeyboard } from '../WebSockets/MessageReceive';
/**
 * Provides common base functionality for applications that extend this application
 */
export declare class Application {
    webRtcController: WebRtcPlayerController;
    config: Config;
    _rootElement: HTMLElement;
    _uiFeatureElement: HTMLElement;
    _videoElementParent: HTMLElement;
    showActionOrErrorOnDisconnect: boolean;
    settingsPanel: SettingsPanel;
    statsPanel: StatsPanel;
    videoQpIndicator: VideoQpIndicator;
    onScreenKeyboardHelper: OnScreenKeyboard;
    currentOverlay: OverlayBase;
    disconnectOverlay: ActionOverlay;
    connectOverlay: ActionOverlay;
    playOverlay: ActionOverlay;
    infoOverlay: TextOverlay;
    errorOverlay: TextOverlay;
    videoStartTime: number;
    inputController: boolean;
    /**
     * @param config - A newly instantiated config object
     * returns the base delegate object with the config inside it along with a new instance of the Overlay controller class
     */
    constructor(config: Config);
    createOverlays(): void;
    /**
     * Set up button click functions and button functionality
     */
    createButtons(): void;
    /**
     * Gets the rootElement of the application, video stream and all UI are children of this element.
     */
    get rootElement(): HTMLElement;
    /**
     * Gets the element that contains the video stream element.
     */
    get videoElementParent(): HTMLElement;
    /**
     * Gets the element that contains all the UI features, like the stats and settings panels.
     */
    get uiFeaturesElement(): HTMLElement;
    /**
     * Configure the settings with on change listeners and any additional per experience settings.
     */
    configureSettings(): void;
    /**
     * Shows or hides the settings panel if clicked
     */
    settingsClicked(): void;
    /**
     * Shows or hides the stats panel if clicked
     */
    statsClicked(): void;
    /**
     * Activate the on screen keyboard when receiving the command from the streamer
     * @param command - the keyboard command
     */
    activateOnScreenKeyboard(command: MessageOnScreenKeyboard): void;
    /**
     * Set the input control ownership
     * @param inputControlOwnership - does the user have input control ownership
     */
    onInputControlOwnership(inputControlOwnership: boolean): void;
    /**
     * Shows the disconnect overlay
     * @param updateText - the text that will be displayed in the overlay
     */
    showDisconnectOverlay(updateText: string): void;
    /**
     * Update the disconnect overlays span text
     * @param updateText - the new countdown number
     */
    updateDisconnectOverlay(updateText: string): void;
    /**
     * Activates the disconnect overlays action
     */
    onDisconnectionAction(): void;
    /**
     * Hides the current overlay
     */
    hideCurrentOverlay(): void;
    /**
     * Shows the connect overlay
     */
    showConnectOverlay(): void;
    /**
     * Shows the play overlay
     */
    showPlayOverlay(): void;
    /**
     * Shows the text overlay
     * @param text - the text that will be shown in the overlay
     */
    showTextOverlay(text: string): void;
    /**
     * Shows the error overlay
     * @param text - the text that will be shown in the overlay
     */
    showErrorOverlay(text: string): void;
    /**
     * Activates the connect overlays action
     */
    onConnectAction(): void;
    /**
     * Activates the play overlays action
     */
    onPlayAction(): void;
    /**
     * Shows the afk overlay
     * @param countDown - the countdown number for the afk countdown
     */
    showAfkOverlay(countDown: number): void;
    /**
     * Instantiate the WebRTCPlayerController interface to provide WebRTCPlayerController functionality within this class and set up anything that requires it
     * @param webRtcPlayerController - a WebRtcPlayerController controller instance
     */
    setWebRtcPlayerController(webRtcPlayerController: WebRtcPlayerController): void;
    /**
     * Show the Connect Overlay or auto connect
     */
    showConnectOrAutoConnectOverlays(): void;
    /**
     * Show the webRtcAutoConnect Overlay and connect
     */
    onWebRtcAutoConnect(): void;
    /**
     * Set up functionality to happen when receiving a webRTC answer
     */
    onWebRtcSdp(): void;
    /**
     * Shows a text overlay to alert the user the stream is currently loading
     */
    onStreamLoading(): void;
    /**
     * Event fired when the video is disconnected - displays the error overlay and resets the buttons stream tools upon disconnect
     * @param eventString - the event text that will be shown in the overlay
     */
    onDisconnect(eventString: string): void;
    /**
     * Handles when Web Rtc is connecting
     */
    onWebRtcConnecting(): void;
    /**
     * Handles when Web Rtc has connected
     */
    onWebRtcConnected(): void;
    /**
     * Handles when Web Rtc fails to connect
     */
    onWebRtcFailed(): void;
    /**
     * Handle when the Video has been Initialized
     */
    onVideoInitialized(): void;
    /**
     * Set up functionality to happen when receiving latency test results
     * @param latency - latency test results object
     */
    onLatencyTestResult(latencyTimings: LatencyTestResults): void;
    /**
     * Set up functionality to happen when receiving video statistics
     * @param videoStats - video statistics as a aggregate stats object
     */
    onVideoStats(videoStats: AggregatedStats): void;
    /**
     * Set up functionality to happen when calculating the average video encoder qp
     * @param QP - the quality number of the stream
     */
    onVideoEncoderAvgQP(QP: number): void;
    /**
     * Set up functionality to happen when receiving and handling initial settings for the UE app
     * @param settings - initial UE app settings
     */
    onInitialSettings(settings: InitialSettings): void;
    /**
     * Set up functionality to happen when setting quality control ownership of a stream
     * @param hasQualityOwnership - does this user have quality ownership of the stream true / false
     */
    onQualityControlOwnership(hasQualityOwnership: boolean): void;
    /**
     * Update the players color variables
     * @param isLightMode - should we use a light or dark color scheme
     */
    updateColors(isLightMode: boolean): void;
}
