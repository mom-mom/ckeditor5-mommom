/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'

import { Alignment } from '@ckeditor/ckeditor5-alignment'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import { Autosave } from '@ckeditor/ckeditor5-autosave'
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import type { EditorConfig } from '@ckeditor/ckeditor5-core'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { FontBackgroundColor, FontColor } from '@ckeditor/ckeditor5-font'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line'
import {
    AutoImage,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
} from '@ckeditor/ckeditor5-image'
import { Indent } from '@ckeditor/ckeditor5-indent'
import { Link, LinkImage } from '@ckeditor/ckeditor5-link'
import { List } from '@ckeditor/ckeditor5-list'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office'
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'
import { SelectAll } from '@ckeditor/ckeditor5-select-all'
import { Table, TableCellProperties, TableColumnResize, TableToolbar } from '@ckeditor/ckeditor5-table'
import { TextTransformation } from '@ckeditor/ckeditor5-typing'
import { Undo } from '@ckeditor/ckeditor5-undo'
import { WordCount } from '@ckeditor/ckeditor5-word-count'
import { MommomFileUploadAdapterPlugin } from './FileUploadAdapter'
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing'
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { Style } from '@ckeditor/ckeditor5-style'
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import {
    fontBackgroundColorMap,
    fontColorMap,
    NotionColorStylePlugin,
} from './NotionColorStylePlugin'
import { fontBackgroundColors, fontColors } from "./ColorPalettes";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
    public static override builtinPlugins = [
        Alignment,
        AutoImage,
        Autoformat,
        Autosave,
        BlockQuote,
        Bold,
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
        Paragraph,
        PasteFromOffice,
        RemoveFormat,
        SelectAll,
        Table,
        TableToolbar,
        TableColumnResize,
        TableCellProperties,
        TextTransformation,
        Undo,
        WordCount,
        SourceEditing,
        GeneralHtmlSupport,
        Style,
        ShowBlocks
    ]

    public static override defaultConfig: EditorConfig = {
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
                '-',
                'fontColor',
                'fontBackgroundColor',
                'bold',
                'italic',
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
        },
        heading: {
            options: [
                { model: 'paragraph', title: '본문', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h2', title: '제목1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h3', title: '제목 2', class: 'ck-heading_heading2' },
            ]
        },
        style: {
            definitions: [
                { name: '제목 1(본문)', element: 'p', classes: [ 'h2' ] },
                { name: '제목 2(본문)', element: 'p', classes: [ 'h3' ] },
                { name: '캡션', element: 'p', classes: [ 'small-p' ] }
            ]
        },
        extraPlugins: [MommomFileUploadAdapterPlugin, NotionColorStylePlugin],
        fontColor: {
            colors: fontColors,
            colorPicker: false,
        },
        fontBackgroundColor: {
            colors: fontBackgroundColors,
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
        }
    }
}

export default Editor
export { fontColorMap, fontBackgroundColorMap }
