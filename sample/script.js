ClassicEditor.create(document.querySelector('.editor'), {
    // Editor configuration.
})
    .then((editor) => {
        window.editor = editor
        CKEditorInspector.attach(editor)
        addColorConversions(editor)
    })
    .catch(handleSampleError)

const fontColorMap = {
    red: '#e73d21',
    orange: '#fb824e',
    yellow: '#e0b433',
    green: '#1d7b69',
    blue: '#579ab6',
    purple: '#9857b6',
    brown: '#946442',
    gray: '#ffecdb',
}

const fontBackgroundColorMap = {
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

function addColorConversions(editor) {
    editor.conversion.for('upcast').attributeToAttribute({
        view: {
            key: 'class',
            value: /color-[\S]+/,
        },
        model: {
            key: 'fontColor',
            value: (viewElement) => {
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
            value: (viewElement) => {
                const match = viewElement
                    .getAttribute('class')
                    .match(/[\S]+_background/)

                return fontBackgroundColorMap[match[0]]
            },
        },
    })
}

function handleSampleError(error) {
    const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues'

    const message = [
        'Oops, something went wrong!',
        `Please, report the following error on ${issueUrl} with the build id "dpp59e29m1ee-g26aoz7pslma" and the error stack trace:`,
    ].join('\n')

    console.error(message)
    console.error(error)
}
