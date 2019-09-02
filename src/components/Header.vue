<template>
  <div>
    <b-navbar class="navbar">
    <b-navbar-brand href="/">Rishi Shah</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item href="/blog">Blog</b-nav-item> -->
        <b-nav-item href="/resume">Resume</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  background-color: #fff
}
</style>
