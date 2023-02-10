import { FullScreenIcon } from './FullscreenIcon';
import { SettingsIcon } from './SettingsIcon';
import { StatsIcon } from './StatsIcon';
/**
 * Element containing various controls like stats, settings, fullscreen.
 */
export declare class Controls {
    statsIcon: StatsIcon;
    fullscreenIcon: FullScreenIcon;
    settingsIcon: SettingsIcon;
    _rootElement: HTMLElement;
    /**
     * Construct the controls
     */
    constructor();
    /**
     * Get the element containing the controls.
     */
    get rootElement(): HTMLElement;
}
