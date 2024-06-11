import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';


export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    sveltekit(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'tests/'],
      extension: ['.js', '.ts', '.svelte'],
      requireEnv: false
    }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
