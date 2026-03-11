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
            external: ['ckeditor5'],
            output: {
                globals: {
                    ckeditor5: 'CKEDITOR',
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
