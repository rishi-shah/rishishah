<template>
  <div class="blog">
    <b-navbar variant="faded" type="light" toggleable="md" sticky class="b-navbar d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
      <b-navbar-brand href="#">
        <img src="rishi-shah.jpg" class="d-inline-block align-top nav-img" alt="Rishi Shah">
        Blog
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <a href="/">Home</a>
        <br>
        <a href="/resume">Resume</a>
      </b-collapse>
    </b-navbar>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col class="d-none d-md-block">
          <Sidebar />
        </b-col>
        <b-col xl="9" lg="9" md="9" sm="12" xs="12"><BlogList class="project"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import BlogList from '../components/Blog-List'
export default {
  components: {
    Sidebar,
    BlogList
  }
}
</script>

<style scoped>
.blog {
  background-color: #fff !important;
}
.nav-img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.project {
  margin-top: 40px;
}
.b-navbar {
  background-color: #fff !important;
}
</style>
