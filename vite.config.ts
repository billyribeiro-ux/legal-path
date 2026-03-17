import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		proxy: {
			'/backend': {
				target: 'http://localhost:3000',
				rewrite: (path) => path.replace(/^\/backend/, '')
			}
		}
	}
});
