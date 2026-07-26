export default {
  base: '/unplug/',
  server: { port: 3000 },
  build: { outDir: '../docs' },
  publicDir: 'public',
  optimizeDeps: {
    include: ['three']
  }
}
