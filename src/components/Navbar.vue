<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="dark" aria-label="Huvudnavigering">
      <b-navbar-brand>
        <RouterLink to="/" aria-label="Gå till startsidan">NPF Sidan</RouterLink>
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item>
          <RouterLink to="/home" aria-label="Gå till hemsidan">Hem</RouterLink>
        </b-nav-item>
        <b-nav-item>
          <RouterLink to="/school" aria-label="Skolrelaterad information">Skolan</RouterLink>
        </b-nav-item>
        <b-nav-item>
          <RouterLink to="/activity" aria-label="Aktiviteter och fritid">Aktiviteter</RouterLink>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Sök"
            aria-label="Sök på sidan"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" aria-label="Utför sökning">
            Sök
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </header>
  <RouterView />
</template>

<style scoped>
.b-navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}


.b-nav-item a:hover {
  color: black !important;
}

.b-navbar-nav .ml-auto {
  display: flex;
  align-items: center;
}

.b-form-input {
  width: 180px;
}

.b-button:hover {
  background-color: #2980b9;
  border-color: #1d6fa5;
}
</style>
