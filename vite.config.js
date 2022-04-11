import { defineConfig } from 'vite';
import { VitePWA as PWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		PWA({
			manifest: {
				short_name: 'Art Finder',
				name: 'Career Lab Art Finder',
				description:
					'Find public-domain art available at the Chicago Art Institute',
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
		}),
		react(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.js',
	},
});
