export default {
  server: { port: 3000 },
  build: { outDir: '../dist' },
  optimizeDeps: {
    include: ['three']
  }
}
