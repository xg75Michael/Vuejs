<template>
  <div id="app">
    <ElNavBarComponent></ElNavBarComponent>
    <p class="router-link-container">
    </p>
    <p>这里显示RoutePath: </p>
    <p>{{returnRoutePath}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import LoadHomePage from './components/LoadHomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ElNavBarComponent from './components/ElNavBarComponent.vue'
import TimeLinePage from './components/TimeLineComponent.vue'
import GalleryPhotoPage from './components/GalleryPhotoComponent.vue'
import PricingPlanPage from './components/PricingPlanComponent.vue'
import ContactFormPage from './components/ContactFormComponent.vue'


export default {
  name: 'app',
  components: {
    LoadHomePage,
    AboutPage,
    ElNavBarComponent,
    TimeLinePage,
    GalleryPhotoPage,
    PricingPlanPage,
    ContactFormPage
  },
  computed: {
    returnRoutePath() {
      return this.$route.path
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, caption {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background-color: #555;*/
  height: 100vh;
}
</style>
