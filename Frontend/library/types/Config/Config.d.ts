import { SettingFlag } from './SettingFlag';
import { SettingNumber } from './SettingNumber';
import { SettingText } from './SettingText';
import { SettingOption } from './SettingOption';
/**
 * A collection of flags that can be toggled and are core to all Pixel Streaming experiences.
 * These are used in the `Config.Flags` map. Note, that map can take any string but
 * these flags are provided for convenience to avoid hardcoded strings across the library.
 */
export declare class Flags {
    static AutoConnect: string;
    static AutoPlayVideo: string;
    static AFKDetection: string;
    static BrowserSendOffer: string;
    static HoveringMouseMode: string;
    static ForceMonoAudio: string;
    static ForceTURN: string;
    static FakeMouseWithTouches: string;
    static IsQualityController: string;
    static MatchViewportResolution: string;
    static PreferSFU: string;
    static StartVideoMuted: string;
    static SuppressBrowserKeys: string;
    static UseMic: string;
    static LightMode: string;
}
/**
 * A collection of numeric parameters that are core to all Pixel Streaming experiences.
 *
 */
export declare class NumericParameters {
    static AFKTimeoutSecs: string;
    static MinQP: string;
    static MaxQP: string;
    static WebRTCFPS: string;
    static WebRTCMinBitrate: string;
    static WebRTCMaxBitrate: string;
}
/**
 * A collection of textual parameters that are core to all Pixel Streaming experiences.
 *
 */
export declare class TextParameters {
    static SignallingServerUrl: string;
}
/**
 * A collection of enum based parameters that are core to all Pixel Streaming experiences.
 *
 */
export declare class OptionParameters {
    static PreferredCodec: string;
    static StreamerId: string;
}
export declare class Config {
    private flags;
    private numericParameters;
    private textParameters;
    private optionParameters;
    constructor();
    /**
     * Make DOM elements for a settings section with a heading.
     * @param settingsElem The parent container for our DOM elements.
     * @param sectionHeading The heading element to go into the section.
     * @returns The constructed DOM element for the section.
     */
    buildSectionWithHeading(settingsElem: HTMLElement, sectionHeading: string): HTMLElement;
    /**
     * Populate the default settings for a Pixel Streaming application
     */
    populateDefaultSettings(): void;
    /**
     * Setup flags with their default values and add them to the `Config.flags` map.
     * @param settingsElem - The element that contains all the individual settings sections, flags, and so on.
     */
    populateSettingsElement(settingsElem: HTMLElement): void;
    /**
     * Add a callback to fire when the numeric setting is toggled.
     * @param id The id of the flag.
     * @param onChangedListener The callback to fire when the numeric value changes.
     */
    addOnNumericSettingChangedListener(id: string, onChangedListener: (newValue: number) => void): void;
    addOnOptionSettingChangedListener(id: string, onChangedListener: (newValue: string) => void): void;
    /**
     * @param id The id of the numeric setting we are interested in getting a value for.
     * @returns The numeric value stored in the parameter with the passed id.
     */
    getNumericSettingValue(id: string): number;
    /**
     * @param id The id of the text setting we are interested in getting a value for.
     * @returns The text value stored in the parameter with the passed id.
     */
    getTextSettingValue(id: string): string;
    /**
     * Set number in the setting.
     * @param id The id of the numeric setting we are interested in.
     * @param value The numeric value to set.
     */
    setNumericSetting(id: string, value: number): void;
    /**
     * Add a callback to fire when the flag is toggled.
     * @param id The id of the flag.
     * @param onChangeListener The callback to fire when the value changes.
     */
    addOnSettingChangedListener(id: string, onChangeListener: (newFlagValue: boolean) => void): void;
    /**
     * Add a callback to fire when the text is changed.
     * @param id The id of the flag.
     * @param onChangeListener The callback to fire when the value changes.
     */
    addOnTextSettingChangedListener(id: string, onChangeListener: (newTextValue: string) => void): void;
    /**
     * Add a SettingText element to a particular settings section in the DOM and registers that text in the text settings map.
     * @param settingsSection The settings section HTML element.
     * @param settingText The textual settings object.
     */
    addSettingText(settingsSection: HTMLElement, settingText: SettingText): void;
    /**
     * Add a SettingFlag element to a particular settings section in the DOM and registers that flag in the Config.flag map.
     * @param settingsSection The settings section HTML element.
     * @param settingFlag The settings flag object.
     */
    addSettingFlag(settingsSection: HTMLElement, settingFlag: SettingFlag): void;
    /**
     * Add a numeric setting element to a particular settings section in the DOM and registers that flag in the Config.numericParameters map.
     * @param settingsSection The settings section HTML element.
     * @param settingFlag The settings flag object.
     */
    addSettingNumeric(settingsSection: HTMLElement, setting: SettingNumber): void;
    /**
     * Add an enum based settings element to a particular settings section in the DOM and registers that flag in the Config.enumParameters map.
     * @param settingsSection The settings section HTML element.
     * @param settingFlag The settings flag object.
     */
    addSettingOption(settingsSection: HTMLElement, setting: SettingOption): void;
    getSettingOption(id: string): SettingOption;
    /**
     * Get the value of the configuration flag which has the given id.
     * @param id The unique id for the flag.
     * @returns True if the flag is enabled.
     */
    isFlagEnabled(id: string): boolean;
    /**
     * Set flag to be enabled/disabled.
     * @param id The id of the flag to toggle.
     * @param flagEnabled True if the flag should be enabled.
     */
    setFlagEnabled(id: string, flagEnabled: boolean): void;
    /**
     * Set the text setting.
     * @param id The id of the setting
     * @param settingValue The value to set in the setting.
     */
    setTextSetting(id: string, settingValue: string): void;
    /**
     * Set the option setting list of options.
     * @param id The id of the setting
     * @param settingOptions The values the setting could take
     */
    setOptionSettingOptions(id: string, settingOptions: Array<string>): void;
    /**
     * Set option enum settings selected option.
     * @param id The id of the setting
     * @param settingOptions The value to select out of all the options
     */
    setOptionSettingValue(id: string, settingValue: string): void;
    /**
     * Set the label for the flag.
     * @param id The id of the flag.
     * @param label The new label to use for the flag.
     */
    setFlagLabel(id: string, label: string): void;
}
/**
 * The enum associated with the mouse being locked or hovering
 */
export declare enum ControlSchemeType {
    LockedMouse = 0,
    HoveringMouse = 1
}
