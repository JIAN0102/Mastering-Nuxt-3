<!--
 * @Author:Jim Chen
 * @Date:2023-02-06 16:12:39
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 16:13:51
 * @Description:
-->
<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1>Log in to {{ title }}</h1>
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      Log in with Github
    </button>
  </div>
</template>

<script setup>
const { title } = useCourse();
</script>