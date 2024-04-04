import { Plugin } from '@ckeditor/ckeditor5-core'
import { FontBackgroundColor, FontColor } from '@ckeditor/ckeditor5-font'

export const fontColorMap: Record<string, string> = {
    red: '#ff7b88',
    orange: '#fc795e',
    yellow: '#fc795e',
    green: '#3ab39c',
    blue:  '#1f8efe',
    purple: '#9b67dd',
    brown: '#ff7b88',
    gray: '#666',
}

export const fontBackgroundColorMap: Record<string, string> = {
    red_background: '#f9e8ea',
    orange_background: '#ffede6',
    yellow_background: '#ffede6',
    green_background: '#e2f2ed',
    blue_background: '#eaf3ff',
    purple_background: '#f4eaff',
    pink_background: '#f9e8ea',
    brown_background: '#ffede6',
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
