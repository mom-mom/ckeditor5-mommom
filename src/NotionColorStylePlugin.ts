import { Plugin } from '@ckeditor/ckeditor5-core'
import { FontBackgroundColor, FontColor } from '@ckeditor/ckeditor5-font'

export const fontColorMap: Record<string, string> = {
    red: '#946442',
    orange: '#946442',
    yellow: '#946442',
    green: '#946442',
    blue:  '#946442',
    purple: '#946442',
    brown: '#946442',
    gray: '#946442',
}

export const fontBackgroundColorMap: Record<string, string> = {
    red_background: '#f9f2e7',
    orange_background: '#f9f2e7',
    yellow_background: '#f9f2e7',
    green_background: '#f9f2e7',
    blue_background: '#f9f2e7',
    purple_background: '#f9f2e7',
    pink_background: '#f9f2e7',
    brown_background: '#f9f2e7',
    gray_background: 'transparent',
}

export class NotionColorStylePlugin extends Plugin {
    public static get pluginName() {
        return 'NotionColorStylePlugin' as const
    }

    public static get requires() {
        return [FontColor, FontBackgroundColor] as const
    }

    public init(): void {
        const editor = this.editor

        editor.conversion.for('upcast').attributeToAttribute({
            view: {
                key: 'class',
                value: /color-[\S]+/,
            },
            model: {
                key: 'fontColor',
                value: (viewElement: any) => {
                    const match = viewElement
                        .getAttribute('class')
                        .match(/color-([\S]+)/)

                    return fontColorMap[match[1]]
                },
            },
        })
        editor.conversion.for('upcast').attributeToAttribute({
            view: {
                key: 'class',
                value: /[\S]+_background/,
            },
            model: {
                key: 'fontBackgroundColor',
                value: (viewElement: any) => {
                    const match = viewElement
                        .getAttribute('class')
                        .match(/[\S]+_background/)

                    return fontBackgroundColorMap[match[0]]
                },
            },
        })
    }
}
