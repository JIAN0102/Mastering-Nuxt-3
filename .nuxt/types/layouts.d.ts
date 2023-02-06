import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/jimchen/Desktop/mastering-nuxt-3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}