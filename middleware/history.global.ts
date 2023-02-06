/*
 * @Author:Jim Chen
 * @Date:2023-02-06 16:49:20
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 16:53:11
 * @Description:
 */
import { Ref } from 'vue';

export default defineNuxtRouteMiddleware((to, from) => {
  const navigationHistory: Ref<string[]> = useLocalStorage('history', []);
  navigationHistory.value.push(to.path);
  console.log(
    `Navigation history: ${navigationHistory.value.join(
      '\n'
    )}`
  );
});