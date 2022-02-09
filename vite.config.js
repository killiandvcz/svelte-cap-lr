import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: autoPreprocess()
  })],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $utils: path.resolve('./src/utils')
    }
  }
})
