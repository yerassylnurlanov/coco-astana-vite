import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@features': path.resolve(__dirname, './src/features'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@api': path.resolve(__dirname, './src/api'),
            '@ui': path.resolve(__dirname, './src/ui'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@store': path.resolve(__dirname, './src/store')
        }
    }
});
