import { LatencyTestResults } from '../DataChannel/LatencyTestResults';
/**
 * Latency test UI elements and results handling.
 */
export declare class LatencyTest {
    _rootElement: HTMLElement;
    _latencyTestButton: HTMLInputElement;
    _latencyTestResultsElement: HTMLElement;
    /**
     * Get the the button containing the stats icon.
     */
    get rootElement(): HTMLElement;
    get latencyTestResultsElement(): HTMLElement;
    get latencyTestButton(): HTMLInputElement;
    /**
     * Populate the UI based on the latency test's results.
     * @param latencyTimings The latency test results.
     */
    handleTestResult(latencyTimings: LatencyTestResults): void;
}
