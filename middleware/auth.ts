/*
 * @Author:Jim Chen
 * @Date:2023-02-06 16:33:23
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 16:36:18
 * @Description:
 */
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.chapterSlug === '1-chapter-1') {
    return;
  }
  return navigateTo('/login');
});