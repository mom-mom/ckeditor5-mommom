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
import { FontBackgroundColor, FontColor, FontSize } from '@ckeditor/ckeditor5-font'
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
        FontSize,
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
    ]

    public static override defaultConfig: EditorConfig = {
        toolbar: {
            items: [
                'selectAll',
                'heading',
                'fontSize',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                'insertTable',
                'blockQuote',
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
        fontSize: {
            options: [10, 12, 14, 16, 18]
        },
        language: 'ko',
        image: {
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                'linkImage',
            ],
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties'],
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading1WithoutToc', view: { name: 'h2', classes: 'without-toc' }, title: '제목 1(목차X)', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },
                { model: 'heading2WithoutToc', view: { name: 'h3', classes: 'without-toc' }, title: '제목 2(목차X)', class: 'ck-heading_heading2' },
                { model: 'headingSmallParagraph', view: { name: 'p', classes: 'small-p' }, title: '작은 문단', class: 'ck-heading_paragraph' },
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
    }
}

export default Editor
export { fontColorMap, fontBackgroundColorMap }
