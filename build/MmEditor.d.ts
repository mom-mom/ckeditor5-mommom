/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { AutoImage, Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed, MediaEmbedEditing } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { Table, TableCellProperties, TableColumnResize, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { Style } from '@ckeditor/ckeditor5-style';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
declare class MmEditor extends ClassicEditor {
    static builtinPlugins: (typeof Alignment | typeof Autoformat | typeof Autosave | typeof Bold | typeof Italic | typeof Underline | typeof BlockQuote | typeof SelectAll | typeof Undo | typeof Essentials | typeof FontBackgroundColor | typeof FontColor | typeof FontSize | typeof Paragraph | typeof Heading | typeof HorizontalLine | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof Indent | typeof Link | typeof LinkImage | typeof List | typeof MediaEmbed | typeof MediaEmbedEditing | typeof RemoveFormat | typeof Table | typeof TableCellProperties | typeof TableColumnResize | typeof TableToolbar | typeof WordCount | typeof SourceEditing | typeof GeneralHtmlSupport | typeof Style | typeof ShowBlocks)[];
    static defaultConfig: EditorConfig;
}
export default MmEditor;
