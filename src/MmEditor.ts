/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import {
    ClassicEditor,
    Alignment,
    Autoformat,
    Autosave,
    Bold,
    Italic,
    Underline,
    BlockQuote,
    type EditorConfig,
    Essentials,
    FontBackgroundColor,
    FontColor,
    FontSize,
    Heading,
    HorizontalLine,
    AutoImage,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Link,
    LinkImage,
    List,
    MediaEmbed,
    MediaEmbedEditing,
    Paragraph,
    RemoveFormat,
    SelectAll,
    Table,
    TableCellProperties,
    TableColumnResize,
    TableToolbar,
    Undo,
    WordCount,
    SourceEditing,
    GeneralHtmlSupport,
    Style,
    ShowBlocks,
} from 'ckeditor5'
import { MommomFileUploadAdapterPlugin } from './FileUploadAdapter'
import { NotionColorStylePlugin } from './NotionColorStylePlugin'
import { mmColors } from "./ColorPalettes";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class MmEditor extends ClassicEditor {
    public static override builtinPlugins = [
        Alignment,
        AutoImage,
        Autoformat,
        Autosave,
        BlockQuote,
        Bold,
        Underline,
        Essentials,
        FontBackgroundColor,
        FontColor,
        Heading,
        HorizontalLine,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Indent,
        Italic,
        Link,
        LinkImage,
        List,
        MediaEmbed,
        MediaEmbedEditing,
        Paragraph,
        RemoveFormat,
        SelectAll,
        Table,
        TableToolbar,
        TableColumnResize,
        TableCellProperties,
        Undo,
        WordCount,
        SourceEditing,
        GeneralHtmlSupport,
        Style,
        FontSize,
        ShowBlocks,
    ]

    public static override defaultConfig: EditorConfig = {
        licenseKey: 'GPL',
        toolbar: {
            items: [
                'selectAll',
                'showBlocks',
                'heading',
                'style',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                'insertTable',
                '|',
                'outdent',
                'indent',
                'alignment',
                '|',
                'imageInsert',
                'mediaEmbed',
                '|',
                'undo',
                'redo',
                '|',
                'fontSize',
                'fontColor',
                'fontBackgroundColor',
                'bold',
                'italic',
                'underline',
                'removeFormat',
                'horizontalLine',
                'sourceEditing',
            ],
            shouldNotGroupWhenFull: true,
        },
        language: 'ko',
        image: {
            insert: {
                type: 'block',
            },
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                'imageStyle:full',
                'imageStyle:block',
                'imageStyle:inline',
                'linkImage',
            ],
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties'],
            tableProperties: {
                borderColors: mmColors,
                backgroundColors: mmColors
            },
            tableCellProperties: {
                borderColors: mmColors,
                backgroundColors: mmColors
            }
        },
        heading: {
            options: [
                { model: 'paragraph', title: '본문', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h2', title: '제목1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h3', title: '제목 2', class: 'ck-heading_heading2' },
            ]
        },
        extraPlugins: [MommomFileUploadAdapterPlugin, NotionColorStylePlugin],
        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 24, 30, 36],
        },
        fontColor: {
            colors: mmColors,
            colorPicker: false,
        },
        fontBackgroundColor: {
            colors: mmColors,
            colorPicker: false,
        },
        htmlSupport: {
            allow: [
                {
                    name: /.*/,
                    attributes: true,
                    classes: true,
                    styles: true
                }
            ]
        },
        mediaEmbed: {
            previewsInData:true,
            extraProviders: [
                {
                    name: 'mommom-media',
                    url: /^(http(s?):\/\/)gcdn\.mom-mom\.net.*/,
                    html: match => `<video controls autoplay muted playsinline loop src="${match[0]}"></video>`

                },
            ]
        }
    }
}

export default MmEditor