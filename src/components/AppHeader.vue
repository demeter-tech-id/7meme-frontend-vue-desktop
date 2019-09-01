<template>
  <div id="app-header">
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky="true">
      <b-navbar-brand href="#">
        <img
          src="../assets/logo.png"
          :alt="title"
          width="80px"
          height="25px"
          style="margin-left:100px"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/home" active>
            <fa icon="home"></fa>&#160;Beranda
          </b-nav-item>
          <b-nav-item href="#/popular">
            <fa icon="fire-alt"></fa>&#160;Populer
          </b-nav-item>
          <b-nav-item href="#/random">
            <fa icon="random"></fa>&#160;Acak
          </b-nav-item>
          <b-nav-item href="#/announcement">
            <fa icon="bullhorn"></fa>&#160;Pengumuman
            <b-badge variant="info" pill>{{ jumlahPengumuman }}</b-badge>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"> <fa icon="search"></fa>&#160;Cari </b-nav-item>
          <b-nav-item href="#">
            <fa icon="bell"></fa>&#160;Notifikasi
          </b-nav-item>
          <b-nav-item-dropdown
            variant="dark"
            right
            no-caret
            style="margin-right:100px"
          >
            <template slot="button-content">
              <fa icon="user-circle"></fa>&#160;Muhammad Safar
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jumlahPengumuman: 10
    };
  }
};
</script>

<style lang="stylus" scoped>
#logo {
    marging-left: 50px;
}
</style>
