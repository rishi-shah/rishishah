<template>
  <div>
    <Header/>
    <div class="container">
      <b-jumbotron class="jumbotron">
        <img src="../assets/images/rishi-shah.jpg" class="main-img">
        <h3>A Software developer based in Mumbai.</h3>
        <b-button class="pill" href="#projects">Projects</b-button>
        <b-button class="pill" href="#skills">Skills</b-button>
      </b-jumbotron>
      <Projects id="projects"/>
      <Skills id="skills" class="skills" />
      <Social />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Social from '../components/Social'
export default {
  name: 'home',
  components: {
    Header,
    Projects,
    Skills,
    Social
  }
}
</script>

<style scoped>
.main-img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.jumbotron {
  background-color: #fff
}
.pill {
  background-color: #424242;
  margin: 3px 5px;
}
.skills {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
