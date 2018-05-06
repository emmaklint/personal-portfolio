<template>
<div>
  <section class="intro">
    <div class="columns">
      <div class="column is-half intro-column">
        <h1 class="is-size-1 has-text-left "><strong>Hi! I'm Emma Klint</strong></h1>
        <p class="is-size-4 has-text-left">I’m an engineer, designer and developer based in Stockholm.<br>Currently I’m finishing up my master thesis project before I’ll start working with art and visual development at Mentimeter.</p>
      </div>
    </div>
  </section>
  <section class="portfolio">
    <h1 class="is-size-1 headline"><strong>Latest projects</strong></h1>
    <div class="columns is-centered">
      <div class="break column is-1">&nbsp;</div>
    </div>
    <div class="columns">
      <app-link v-for="(item, index) in topItems" :item="item" :key="index"></app-link>
    </div>
  </section>
  <section class="blog">
    <h1 class="is-size-1 headline"><strong>Latest blogpost</strong></h1>
    <div class="columns is-centered">
      <div class="break column is-1">&nbsp;</div>
    </div>
    <div class="columns is-centered">
      <app-post :post="posts[0]"/>
    </div>
  </section>
  </div>
</template>

<script>
import Link from '@/components/portfolio/Link'
import Post from '@/components/blog/Post'

export default {
  name: 'Home',
  props: ['items', 'posts'],
  components: {
    appLink: Link,
    appPost: Post
  },
  computed: {
    topItems: function () {
      return this.items.slice(0, 3)
    },
    topPost: function () {
      console.log(this.posts)
      return this.posts[0]
    }
  }
}
</script>

<style scoped>
.intro {
  background-color: #E6E6E6;
}

.intro-column {
  padding: 10rem;
}

.headline {
  padding: 1rem;
  /* margin: 1rem; */
  margin-top: 10rem;
}

.break {
    border-bottom: 10px solid black;
    width: 5rem;
  margin-bottom: 5rem;
}
</style>
