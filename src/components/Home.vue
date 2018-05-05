<template>
<section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
        {{ msg }}
        <router-link to="about">About</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>
