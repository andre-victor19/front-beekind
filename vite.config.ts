import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "stats.html", // Nome do arquivo de saída
      open: true, // Abre o arquivo no navegador automaticamente após o build
      gzipSize: true, // Mostra o tamanho gzipado
      brotliSize: true, // Mostra o tamanho Brotli
    }), // Para analisar o bundle
    viteCompression(),
    basicSsl(),
    imagetools(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Personalize os chunks divididos
          vendor: ["react", "react-dom"], // Exemplo de divisão do React em um chunk separado
        },
      },
    },
    target: "esnext", // Usa as últimas features do JS para navegadores modernos
    cssCodeSplit: true, // Divide o CSS em arquivos menores
    sourcemap: false, // Desabilite se não for necessário para produção
  },
  server: {
    open: true, // Abre o navegador automaticamente ao iniciar
  },
});
