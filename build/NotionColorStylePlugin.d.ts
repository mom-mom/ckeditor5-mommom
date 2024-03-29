import { Plugin } from '@ckeditor/ckeditor5-core';
import { FontBackgroundColor, FontColor } from '@ckeditor/ckeditor5-font';
export declare const fontColorMap: Record<string, string>;
export declare const fontBackgroundColorMap: Record<string, string>;
export declare class NotionColorStylePlugin extends Plugin {
    static get pluginName(): "NotionColorStylePlugin";
    static get requires(): readonly [typeof FontColor, typeof FontBackgroundColor];
    init(): void;
}
