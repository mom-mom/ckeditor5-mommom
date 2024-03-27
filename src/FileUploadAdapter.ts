import {
    FileLoader,
    UploadAdapter,
    UploadResponse,
} from '@ckeditor/ckeditor5-upload'
import { AxiosInstance } from 'axios'
import axios from 'axios'
import { Editor } from '@ckeditor/ckeditor5-core'

class MommomFileUploadAdapter implements UploadAdapter {
    private loader: FileLoader
    private axios: AxiosInstance
    private abortController: AbortController | null

    constructor(loader: FileLoader) {
        this.loader = loader
        this.axios = axios.create()
        this.abortController = null
    }

    async upload(): Promise<UploadResponse> {
        const file = await this.loader.file
        if (file === null) {
            throw new Error('File to upload is null')
        }

        const onUploadProgress = (progressEvent: ProgressEvent) => {
            if (progressEvent.lengthComputable) {
                this.loader.uploadTotal = progressEvent.total
                this.loader.uploaded = progressEvent.loaded
            }
        }

        const { data: mediaBucket } = await axios.get<MediaBucketResponse>(
            'https://api.prod.mom-mom.net/v4/imagebucket/where',
            {
                params: { filename: file.name, cat: 'editor' },
            },
        )

        this.abortController = new AbortController()

        await axios({
            url: mediaBucket.url,
            method: 'put',
            data: file,
            headers: {
                'Content-Type': mediaBucket.mimeType,
            },
            signal: this.abortController.signal,
            validateStatus: (status) => status === 200,
        })

        this.abortController = null

        return {
            default: getFileUrl(mediaBucket.key),
        }
    }

    abort() {
        this.abortController?.abort()
    }
}

function getFileUrl(fileKey: string) {
    return `https://static.mom-mom.net/${fileKey}`
}

type MediaBucketResponse = {
    key: string
    mimeType: string
    url: string
}

export function MommomFileUploadAdapterPlugin(editor: Editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MommomFileUploadAdapter(loader)
    }
}
