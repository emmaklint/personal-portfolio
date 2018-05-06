<template>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
          <router-link to="/">
            Emma Klint
          </router-link>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">
              <router-link to="about">About</router-link>
            </a>
            <a class="navbar-item">
                <router-link to="blog">Blog</router-link>
            </a>
            <a class="navbar-item">
                <router-link to="portfolio">Portfolio</router-link>
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
