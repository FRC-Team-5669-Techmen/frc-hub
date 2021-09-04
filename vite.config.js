/**
 * @type {import('vite').UserConfig}
 */

const { resolve } = require('path')
const { defineConfig } = require('vite');

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                "/index": resolve(__dirname, 'asdf.html')
                //nested: resolve(__dirname, 'nested/index.html')
            },
            external: [
                'style.css',
                resolve(__dirname, 'style.css')
            ]
        },

    }
})