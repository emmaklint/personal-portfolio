<template>
<footer class="footer">
  <div class="container">
      <div class="columns">
          <div class="column">
              <p class="textbox"><strong>Want to get in touch?</strong> Contact me at <a href="mailto:emma@emmaklint.com">emma@emmaklint.com</a></p>
          </div>
          <div class="column">
            <a href="linkedin.com" class="icon"><i class="fab fa-linkedin-in fa-2x"></i></a>
            <a href="linkedin.com" class="icon"><i class="fab fa-github fa-2x"></i></a>
            <a href="linkedin.com" class="icon"><i class="fab fa-medium-m fa-2x"></i></a>
          </div>
      </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
    margin-top: 4rem;
    /* background-color: hsl(0, 0%, 71%) */
}

.textbox {
    padding: 1rem;
}

.icon {
    color: hsl(0, 0%, 71%) ;
    padding: 2rem;
    transition: all .2s;
}

.icon:hover {
    color: blue;
    transform: scale(2)
}
</style>
