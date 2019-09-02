<template>
  <div class="parentx-static">
  <vs-sidebar static-position v-model="active">
    <div class="header-sidebar" slot="header">
      <vs-avatar size="150px" src="rishi-shah.jpg"/>
      <h4>
        Rishi Shah
      </h4>
    </div>
    <div class="nav-links">
      <a href="/">Home</a>
      <br>
      <a href="/resume">Resume</a>
    </div>
    <div class="footer-sidebar" slot="footer">
      <Social />
    </div>
  </vs-sidebar>
</div>
</template>

<script>
import Social from './Social'
export default {
  data: () => ({
    active: false
  }),
  components: {
    Social
  }
}
</script>

<style scoped>
.parentx-static {
  overflow: hidden;
  height: 100%;
  position: fixed;
}
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 100px;
}
.header-sidebar h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.header-sidebar h4 > button {
  margin-left: 10px;
}
.footer-sidebar {
  align-items: center;
}
.nav-links {
  align-items: center;
}
</style>
