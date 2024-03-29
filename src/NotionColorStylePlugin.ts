import { Plugin } from '@ckeditor/ckeditor5-core'
import { FontBackgroundColor, FontColor } from '@ckeditor/ckeditor5-font'

export const fontColorMap: Record<string, string> = {
    red: '#e73d21',
    orange: '#fb824e',
    yellow: '#e0b433',
    green: '#1d7b69',
    blue: '#579ab6',
    purple: '#9857b6',
    brown: '#946442',
    gray: '#999',
}

export const fontBackgroundColorMap: Record<string, string> = {
    gray_background: '#f5f5f5',
    red_background: '#ffecec',
    orange_background: '#ffecdb',
    yellow_background: '#fff7db',
    green_background: '#eaf6ee',
    blue_background: '#e7f3f7',
    purple_background: '#f8f4fe',
    pink_background: '#feeef1',
    brown_background: '#ffecdb',
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
