<template>
    <div class="column is-7 textbox">
        <p class="has-text-left date">{{post.date}}</p>
        <a class="has-text-left is-size-2" :href="post.url"><p><strong>{{post.title}}</strong></p></a>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>
a {
    color: black;
    line-height: 120%;
}

.textbox {
    padding: 2rem 5rem;
}

.date {
    color: blue;
}
</style>
