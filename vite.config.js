import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
// import bundleAnalyzer from 'rollup-plugin-bundle-analyzer';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import vsharp from 'vite-plugin-vsharp';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const _env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            react(),
            // bundleAnalyzer({
            //   analyzerMode: 'server',
            // }),
            checker({
                eslint: {
                    // for example, lint .ts and .tsx
                    lintCommand: 'eslint "./src/**/*.{js,jsx}"',
                },
            }),
            vsharp,
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/api': _env.VITE_API_URL,
            },
        },
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: '[hash].chunk.js',
                    assetFileNames: '[hash].chunk.[ext]',
                },
            },
        },
    };
});
