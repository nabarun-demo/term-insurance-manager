<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <a class="navbar-brand" href="/">
   <img src="../assets/tp-logo-png.png" width="30" height="30" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav nav-spacing">      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Life Insurance
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">LI-1</a>
          <a class="dropdown-item" href="#">LI-2</a>
          <a class="dropdown-item" href="#">LI-3</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Health Insurance
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">HI-1</a>
          <a class="dropdown-item" href="#">HI-2</a>
          <a class="dropdown-item" href="#">HI-3</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Motor Insurance
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">MI-1</a>
          <a class="dropdown-item" href="#">MI-2</a>
          <a class="dropdown-item" href="#">MI-3</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Other Insurance
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">OI-1</a>
          <a class="dropdown-item" href="#">OI-2</a>
          <a class="dropdown-item" href="#">OI-3</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Support
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">S-1</a>
          <a class="dropdown-item" href="#">S-2</a>
          <a class="dropdown-item" href="#">S-3</a>
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">Claim</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">Renewal</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" to="/">My Account <span class="sr-only">(current)</span></router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-spacing li{
 padding-left: 10px !important;
 padding-right: 10px !important;
}
</style>>
