<!--
 * @Author:Jim Chen
 * @Date:2023-02-06 09:52:41
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 16:20:47
 * @Description:
-->
<template>
  <NuxtLink
    class="underline font-medium"
    :href="firstLesson.path"
  >
    Go to first lesson
  </NuxtLink>
</template>

<script setup lang="ts">
const firstLesson = useFirstLesson();
</script>