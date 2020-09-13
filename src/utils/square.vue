<template>
    <img
      :className="className"
      :alt="letter"
      :style="imagesStyleObject"
      :src="imageSrc"
    />
</template>

<script>
export default {
  props: ['className', 'letter', 'imagesStyleObject', 'imageSrc'],
};
</script>

<style>

</style>
