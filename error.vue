<!--
 * @Author:Jim Chen
 * @Date:2023-02-06 14:12:51
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 14:28:28
 * @Description:
-->
<template>
  <NuxtLayout>
    <div class="flex flex-col">
      <div class="prose" v-if="error.statusCode === '404'">
        <h1>404</h1>
        <p>I guess that page doesn't exist.</p>
      </div>
      <div class="prose" v-else>
        <h1>Dang</h1>
        <p>It looks like something broke.</p>
        <p>Sorry about that.</p>
      </div>
      <div class="prose">
        <p>
          <strong>{{ error.message }}</strong>
        </p>
        <p>
          Go to the
          <a
            class="hover:cursor-pointer"
            @click="handleError"
          >
            first lesson.
          </a>
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3',
  });
}
</script>