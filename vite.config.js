import { defineConfig, splitVendorChunkPlugin } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const PWAConfig = {
	includeAssets: ['favicon.ico', 'robots.txt'],
	manifest: {
		short_name: 'Art Finder',
		name: 'Career Lab Art Finder',
		description:
			'Find public-domain art available at the Chicago Institute of Art.',
		icons: [
			{
				src: 'favicon.ico',
				sizes: '64x64 32x32 24x24 16x16',
				type: 'image/x-icon',
			},
			{
				src: 'logo192.png',
				type: 'image/png',
				sizes: '192x192',
			},
			{
				src: 'logo512.png',
				type: 'image/png',
				sizes: '512x512',
			},
		],
		start_url: '.',
		display: 'standalone',
		theme_color: '#000000',
		background_color: '#ffffff',
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	build: { outDir: './build', target: 'esnext' },
	plugins: [
		eslint({ formatter: 'stylish' }),
		react(),
		splitVendorChunkPlugin(),
		VitePWA(PWAConfig),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './tests/setup.js',
	},
});
