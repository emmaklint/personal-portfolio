<template>
<section class="blog">
    <div class="container">
        <div class="columns is-centered">
            <post v-for="(post, index) in posts" :post="post" :key="index"></post>
        </div>
    </div>
</section>
</template>

<script>
import Post from '@/components/blog/Post.vue'

export default {
  props: ['posts'],
  name: 'Blog',
  components: {
    Post
  }
}
</script>

<style scoped>
.blog {
  margin-top: 4rem;
}
</style>
