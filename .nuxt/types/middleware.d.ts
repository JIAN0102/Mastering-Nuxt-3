import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/jimchen/Desktop/mastering-nuxt-3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}