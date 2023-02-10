import { LatencyTest } from './LatencyTest';
import { AggregatedStats } from '../PeerConnectionController/AggregatedStats';
/**
 * A stat structure, an id, the stat string, and the element where it is rendered.
 */
export declare class Stat {
    id: string;
    title: string;
    stat: string;
    element: HTMLElement;
}
/**
 * A UI component containing all the stats for the application.
 */
export declare class StatsPanel {
    _rootElement: HTMLElement;
    _statsCloseButton: HTMLElement;
    _statsContentElement: HTMLElement;
    _statisticsContainer: HTMLElement;
    _statsResult: HTMLElement;
    latencyTest: LatencyTest;
    statsMap: Map<string, Stat>;
    constructor();
    /**
     * @returns Return or creates a HTML element that represents this setting in the DOM.
     */
    get rootElement(): HTMLElement;
    get statsContentElement(): HTMLElement;
    get statisticsContainer(): HTMLElement;
    get statsResult(): HTMLElement;
    get statsCloseButton(): HTMLElement;
    /**
     * Show stats panel.
     */
    show(): void;
    /**
     * Toggle the visibility of the stats panel.
     */
    toggleVisibility(): void;
    /**
     * Hide the stats panel.
     */
    hide(): void;
    /**
     * Handle stats coming in from browser/UE
     * @param stats the stats structure
     */
    handleStats(stats: AggregatedStats): void;
    /**
     * Adds a new stat to the stats results in the DOM or updates an exiting stat.
     * @param id The id of the stat to add/update.
     * @param stat The contents of the stat.
     */
    addOrUpdateStat(id: string, statLabel: string, stat: string): void;
}
