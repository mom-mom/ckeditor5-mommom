import { Plugin, FontBackgroundColor, FontColor } from 'ckeditor5';
export declare const fontColorMap: Record<string, string>;
export declare const fontBackgroundColorMap: Record<string, string>;
export declare class NotionColorStylePlugin extends Plugin {
    static get pluginName(): "NotionColorStylePlugin";
    static get requires(): readonly [typeof FontColor, typeof FontBackgroundColor];
    init(): void;
}
