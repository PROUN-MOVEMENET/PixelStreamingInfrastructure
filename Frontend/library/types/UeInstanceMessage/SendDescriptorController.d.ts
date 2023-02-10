import { DataChannelSender } from '../DataChannel/DataChannelSender';
import { StreamMessageController } from './StreamMessageController';
export declare class SendDescriptorController {
    toStreamerMessagesMapProvider: StreamMessageController;
    dataChannelSender: DataChannelSender;
    constructor(dataChannelSender: DataChannelSender, toStreamerMessagesMapProvider: StreamMessageController);
    /**
     * Send a Latency Test to the UE Instance
     * @param descriptor - the descriptor for a latency test
     */
    sendLatencyTest(descriptor: object): void;
    /**
     * Send a Latency Test to the UE Instance
     * @param descriptor - the descriptor for a command
     */
    emitCommand(descriptor: object): void;
    /**
     * Send a Latency Test to the UE Instance
     * @param descriptor - the descriptor for a UI Interaction
     */
    emitUIInteraction(descriptor: object): void;
    /**
     * Send a Descriptor to the UE Instances
     * @param messageType - UE Message Type
     * @param descriptor - Descriptor Message as JSON
     */
    sendDescriptor(messageType: string, descriptor: object): void;
}
