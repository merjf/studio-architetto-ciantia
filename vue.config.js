const path = require('path');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/assets/styles/_colors.scss'"
      },
      scss: {
        additionalData: "@import '@/assets/styles/_colors.scss';"
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Salvatore Ciantia Architetto',
    },
  }
}
