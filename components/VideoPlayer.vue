<!--
 * @Author:Jim Chen
 * @Date:2023-02-06 10:07:42
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-06 10:07:43
 * @Description:
-->
<template>
  <iframe
    width="100%"
    height="315"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>