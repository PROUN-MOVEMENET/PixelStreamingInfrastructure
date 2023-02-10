import { WebSocketController } from '../WebSockets/WebSocketController';
import { StreamController } from '../VideoPlayer/StreamController';
import { MessageAnswer, MessageOffer, MessageConfig, MessageStreamerList } from '../WebSockets/MessageReceive';
import { FreezeFrameController } from '../FreezeFrame/FreezeFrameController';
import { AFKController } from '../AFK/AFKController';
import { DataChannelController } from '../DataChannel/DataChannelController';
import { PeerConnectionController } from '../PeerConnectionController/PeerConnectionController';
import { KeyboardController } from '../Inputs/KeyboardController';
import { AggregatedStats } from '../PeerConnectionController/AggregatedStats';
import { Config } from '../Config/Config';
import { EncoderSettings, WebRTCSettings } from '../DataChannel/InitialSettings';
import { FileTemplate } from '../Util/FileUtil';
import { InputClassesFactory } from '../Inputs/InputClassesFactory';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { StreamMessageController } from '../UeInstanceMessage/StreamMessageController';
import { ResponseController } from '../UeInstanceMessage/ResponseController';
import * as MessageReceive from '../WebSockets/MessageReceive';
import { SendDescriptorController } from '../UeInstanceMessage/SendDescriptorController';
import { SendMessageController } from '../UeInstanceMessage/SendMessageController';
import { ToStreamerMessagesController } from '../UeInstanceMessage/ToStreamerMessagesController';
import { MouseController } from '../Inputs/MouseController';
import { GamePadController } from '../Inputs/GamepadController';
import { DataChannelSender } from '../DataChannel/DataChannelSender';
import { CoordinateConverter, UnquantizedDenormalizedUnsignedCoord } from '../Util/CoordinateConverter';
import { Application } from '../Application/Application';
import { ITouchController } from '../Inputs/ITouchController';
/**
 * Entry point for the WebRTC Player
 */
export declare class WebRtcPlayerController {
    config: Config;
    responseController: ResponseController;
    sdpConstraints: RTCOfferOptions;
    webSocketController: WebSocketController;
    sendrecvDataChannelController: DataChannelController;
    recvDataChannelController: DataChannelController;
    dataChannelSender: DataChannelSender;
    datachannelOptions: RTCDataChannelInit;
    videoPlayer: VideoPlayer;
    streamController: StreamController;
    peerConnectionController: PeerConnectionController;
    inputClassesFactory: InputClassesFactory;
    freezeFrameController: FreezeFrameController;
    shouldShowPlayOverlay: boolean;
    afkController: AFKController;
    videoElementParentClientRect: DOMRect;
    latencyStartTime: number;
    application: Application;
    streamMessageController: StreamMessageController;
    sendDescriptorController: SendDescriptorController;
    sendMessageController: SendMessageController;
    toStreamerMessagesController: ToStreamerMessagesController;
    keyboardController: KeyboardController;
    mouseController: MouseController;
    touchController: ITouchController;
    gamePadController: GamePadController;
    coordinateConverter: CoordinateConverter;
    isUsingSFU: boolean;
    isQualityController: boolean;
    statsTimerHandle: number;
    file: FileTemplate;
    preferredCodec: string;
    disconnectMessageOverride: string;
    /**
     *
     * @param config - the frontend config object
     * @param application - the application object
     */
    constructor(config: Config, application: Application);
    /**
     * Make a request to UnquantizedAndDenormalizeUnsigned coordinates
     * @param x x axis coordinate
     * @param y y axis coordinate
     */
    requestUnquantizedAndDenormalizeUnsigned(x: number, y: number): UnquantizedDenormalizedUnsignedCoord;
    /**
     * Handles when a message is received
     * @param event - Message Event
     */
    handleOnMessage(event: MessageEvent): void;
    /**
     * Register message all handlers
     */
    registerMessageHandlers(): void;
    /**
     * Activate the logic associated with a command from UE
     * @param message
     */
    onCommand(message: ArrayBuffer): void;
    /**
     * Handles a protocol message received from the streamer
     * @param message the message data from the streamer
     */
    onProtocolMessage(message: ArrayBuffer): void;
    /**
     * Handles an input control message when it is received from the streamer
     * @param message The input control message
     */
    onInputControlOwnership(message: ArrayBuffer): void;
    onAfkTriggered(): void;
    /**
     * Set whether we should timeout when afk.
     * @param afkEnabled If true we timeout when idle for some given amount of time.
     */
    setAfkEnabled(afkEnabled: boolean): void;
    /**
     * Restart the stream automatically without refreshing the page
     */
    restartStreamAutomatically(): void;
    /**
     * Send an Iframe request to the streamer
     */
    requestKeyFrame(): void;
    /**
     * Loads a freeze frame if it is required otherwise shows the play overlay
     */
    loadFreezeFrameOrShowPlayOverlay(): void;
    /**
     * Process the freeze frame and load it
     * @param message The freeze frame data in bytes
     */
    onFreezeFrameMessage(message: ArrayBuffer): void;
    /**
     * Enable the video after hiding a freeze frame
     */
    invalidateFreezeFrameAndEnableVideo(): void;
    /**
     * Prep datachannel data for processing file extension
     * @param data the file extension data
     */
    onFileExtension(data: ArrayBuffer): void;
    /**
     * Prep datachannel data for processing the file mime type
     * @param data the file mime type data
     */
    onFileMimeType(data: ArrayBuffer): void;
    /**
     * Prep datachannel data for processing the file contents
     * @param data the file contents data
     */
    onFileContents(data: ArrayBuffer): void;
    /**
     * Plays the stream audio and video source and sets up other pieces while the stream starts
     */
    playStream(): void;
    /**
     * Plays the video stream
     */
    private playVideo;
    /**
     * Enable the video to play automatically if enableAutoplay is true
     */
    autoPlayVideoOrSetUpPlayOverlay(): void;
    buildSignallingServerUrl(): string;
    /**
     * Connect to the Signaling server
     */
    connectToSignallingServer(): void;
    /**
     * This will start the handshake to the signalling server
     * @param peerConfig  - RTC Configuration Options from the Signaling server
     * @remark RTC Peer Connection on Ice Candidate event have it handled by handle Send Ice Candidate
     */
    startSession(peerConfig: RTCConfiguration): void;
    /**
     * Checks the peer connection options for a turn server and returns true or false
     */
    checkTurnServerAvailability(options: RTCConfiguration): boolean;
    /**
     * Handles when a Config Message is received contains the Peer Connection Options required (STUN and TURN Server Info)
     * @param messageConfig - Config Message received from the signaling server
     */
    handleOnConfigMessage(messageConfig: MessageConfig): void;
    /**
     * Handles when the signalling server gives us the list of streamer ids.
     */
    handleStreamerListMessage(messageStreamerList: MessageStreamerList): void;
    /**
     * Handle the RTC Answer from the signaling server
     * @param Answer - Answer SDP from the peer.
     */
    handleWebRtcAnswer(Answer: MessageAnswer): void;
    /**
     * Handle the RTC offer from a WebRTC peer (received through the signalling server).
     * @param Offer - Offer SDP from the peer.
     */
    handleWebRtcOffer(Offer: MessageOffer): void;
    /**
     * Handle when the SFU provides the peer with its data channels
     * @param DataChannels - The message from the SFU containing the data channels ids
     */
    handleWebRtcSFUPeerDatachannels(DataChannels: MessageReceive.MessagePeerDataChannels): void;
    handlePostWebrtcNegotiation(): void;
    /**
     * When an ice Candidate is received from the Signaling server add it to the Peer Connection Client
     * @param iceCandidate - Ice Candidate from Server
     */
    handleIceCandidate(iceCandidate: RTCIceCandidateInit): void;
    /**
     * Send the ice Candidate to the signaling server via websocket
     * @param iceEvent - RTC Peer ConnectionIceEvent) {
     */
    handleSendIceCandidate(iceEvent: RTCPeerConnectionIceEvent): void;
    /**
     * Send the ice Candidate to the signaling server via websocket
     * @param iceEvent - RTC Peer ConnectionIceEvent) {
     */
    handleDataChannel(datachannelEvent: RTCDataChannelEvent): void;
    /**
     * Send the RTC Offer Session to the Signaling server via websocket
     * @param offer - RTC Session Description
     */
    handleSendWebRTCOffer(offer: RTCSessionDescriptionInit): void;
    /**
     * Send the RTC Offer Session to the Signaling server via websocket
     * @param answer - RTC Session Description
     */
    handleSendWebRTCAnswer(answer: RTCSessionDescriptionInit): void;
    /**
     * registers the mouse for use in WebRtcPlayerController
     */
    activateRegisterMouse(): void;
    /**
     * Set the freeze frame overlay to the player div
     */
    setUpMouseAndFreezeFrame(): void;
    /**
     * Close the Connection to the signaling server
     */
    closeSignalingServer(): void;
    /**
     * Fires a Video Stats Event in the RTC Peer Connection
     */
    getStats(): void;
    /**
     * Send a Latency Test Request to the UE Instance
     */
    sendLatencyTest(): void;
    /**
     * Send the Encoder Settings to the UE Instance as a UE UI Descriptor.
     * @param encoder - Encoder Settings
     */
    sendEncoderSettings(encoder: EncoderSettings): void;
    /**
     * Send the WebRTC Settings to the UE Instance as a UE UI Descriptor.
     * @param webRTC - Web RTC Settings
     */
    sendWebRtcSettings(webRTC: WebRTCSettings): void;
    /**
     * Sends the UI Descriptor `stat fps` to the UE Instance
     */
    sendShowFps(): void;
    /**
     * Send an Iframe request to the streamer
     */
    sendIframeRequest(): void;
    /**
     * Sends a request to the UE Instance to have ownership of Quality
     */
    sendRequestQualityControlOwnership(): void;
    /**
     * Handles when a Latency Test Result are received from the UE Instance
     * @param message - Latency Test Timings
     */
    handleLatencyTestResult(message: ArrayBuffer): void;
    /**
     * Handles when the Encoder and Web RTC Settings are received from the UE Instance
     * @param message - Initial Encoder and Web RTC Settings
     */
    handleInitialSettings(message: ArrayBuffer): void;
    /**
     * Handles when the Quantization Parameter are received from the UE Instance
     * @param message - Encoders Quantization Parameter
     */
    handleVideoEncoderAvgQP(message: ArrayBuffer): void;
    /**
     * Handles when the video element has been loaded with a srcObject
     */
    handleVideoInitialized(): void;
    /**
     * Flag set if the user has Quality Ownership
     * @param message - Does the current client have Quality Ownership
     */
    onQualityControlOwnership(message: ArrayBuffer): void;
    /**
     * Handles when the Aggregated stats are Collected
     * @param stats - Aggregated Stats
     */
    handleVideoStats(stats: AggregatedStats): void;
    /**
     * To Resize the Video Player element
     */
    resizePlayerStyle(): void;
    /**
     * Get the overridden disconnect message
     */
    getDisconnectMessageOverride(): string;
    /**
     * Set the override for the disconnect message
     */
    setDisconnectMessageOverride(message: string): void;
    setPreferredCodec(codec: string): void;
}
