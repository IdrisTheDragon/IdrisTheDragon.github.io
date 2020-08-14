<template>
  <section class="hero is-primary is-medium is-bold">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://idristhedragon.tech">
              <img src="images/logo.png" alt="Logo" />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item">
                <a
                  class="button is-primary is-inverted"
                  href="https://www.linkedin.com/in/nathanidriswilliams/"
                >
                  <span class="icon">
                    <i class="fab fa-linkedin-in"></i>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </span>
              <span class="navbar-item">
                <a
                  class="button is-primary is-inverted"
                  href="https://github.com/IdrisTheDragon"
                >
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          IdrisTheDragon
        </h1>
        <h2 class="subtitle">
          Nathan Williams
        </h2>
      </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <slot> </slot>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
module.exports = {
  name: "customHeader",
  props: {},
};
</script>

<style></style>
