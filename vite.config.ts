import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    build: {
        outDir: 'build',
        lib: {
            entry: resolve(__dirname, 'src/ckeditor.ts'),
            name: 'MmEditor',
            fileName: 'ckeditor',
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            // 번역도 ckeditor5 본체처럼 호스트 버전을 쓴다. 정확한 문자열 매치라 경로마다 적어야 한다
            external: ['ckeditor5', 'ckeditor5/translations/ko.js'],
            output: {
                globals: {
                    ckeditor5: 'CKEDITOR',
                    'ckeditor5/translations/ko.js': 'CKEDITOR_TRANSLATIONS',
                },
            },
        },
        sourcemap: false,
    },
    plugins: [
        dts({
            include: ['src'],
            outDir: 'build',
        }),
    ],
})
