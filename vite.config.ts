import path, { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setupTest.ts'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-layouter',
      fileName: 'react-layouter',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['layouter.js', 'react', 'react-dom']
    }
  },
  plugins: [
    dts({
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx']
    })
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@helpers': path.resolve(__dirname, './src/helpers')
    }
  }
});
