<template>
<div id="app">
  <navbar-component></navbar-component>
  <div class="container">
    <page-heading-component></page-heading-component>
    <staff-list-component></staff-list-component>
    <footer-component></footer-component>
  </div>
</div>
</template>

<script charset="utf-8">
import NavBarComponent from './NavBar.vue';
import PageHeadingComponent from './Page-Heading.vue';
import StaffListComponent from './Staff-List.vue';
import FooterComponent from './Footer.vue';
export default {
    name: 'app',
    components: {PageHeadingComponent,
    NavBarComponent,
    StaffListComponent,
    FooterComponent},
}
</script>

<style scoped>
</style>
