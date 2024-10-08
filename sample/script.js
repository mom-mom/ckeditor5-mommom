ClassicEditor.create(document.querySelector('.editor'), {
    // Editor configuration.
})
    .then((editor) => {
        window.editor = editor
        CKEditorInspector.attach(editor)
    })
    .catch(handleSampleError)

function handleSampleError(error) {
    const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues'

    const message = [
        'Oops, something went wrong!',
        `Please, report the following error on ${issueUrl} with the build id "dpp59e29m1ee-g26aoz7pslma" and the error stack trace:`,
    ].join('\n')

    console.error(message)
    console.error(error)
}
