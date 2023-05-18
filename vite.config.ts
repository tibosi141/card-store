import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Compress from 'vite-plugin-compression'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const baseUrl = fileURLToPath(new URL('src', import.meta.url))

  return {
    base: env.VITE_APP_BASE ?? '/',
    resolve: {
      alias: {
        '~': baseUrl,
        '@': baseUrl,
      },
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: false,
      __VUE_I18N_LEGACY_API__: false,
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            naiveUI: ['naive-ui'],
            antdIcon: ['@vicons/antd'],
            lodash: ['@vueuse/core'],
            vue: ['vue', 'vue-router', 'vue-i18n', 'pinia'],
          },
        },
      },
    },
    server: {
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => {
            return path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
          },
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          '@vueuse/core',
          'pinia',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        dts: 'types/auto-imports.d.ts',
        dirs: ['src/stores', 'src/composables'],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
        dts: 'types/components.d.ts',
        dirs: ['src/components'],
      }),
      Compress({
        verbose: true,
        disable: true,
        threshold: 1024 * 50,
        deleteOriginFile: false,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      Unocss(),
    ],
  }
})
