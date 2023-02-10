/**
 * Handles the Sending and Receiving of messages to the UE Instance via the Data Channel
 */
export declare class DataChannelController {
    dataChannel: RTCDataChannel;
    peerConnection: RTCPeerConnection;
    datachannelOptions: RTCDataChannelInit;
    label: string;
    isReceivingFreezeFrame: boolean;
    /**
     * return the current state of a datachannel controller instance
     * @returns the current DataChannelController instance
     */
    getDataChannelInstance(): DataChannelController;
    /**
     * To Create and Set up a Data Channel
     * @param peerConnection - The RTC Peer Connection
     * @param label - Label of the Data Channel
     * @param datachannelOptions - Optional RTC DataChannel options
     */
    createDataChannel(peerConnection: RTCPeerConnection, label: string, datachannelOptions?: RTCDataChannelInit): void;
    setupDataChannel(): void;
    /**
     * Handles when the Data Channel is opened
     */
    handleOnOpen(): void;
    /**
     * Handles when the Data Channel is closed
     */
    handleOnClose(): void;
    /**
     * Handles when a message is received
     * @param event - Message Event
     */
    handleOnMessage(event: MessageEvent): void;
    /**
     * Handles when an error is thrown
     * @param event - Error Event
     */
    handleOnError(event: MessageEvent): void;
}
