<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link :to="{path:'/demo',query:{a:111,b:222}}">Demo</router-link>
    </div>
    <router-view />
  </div>
</template>

