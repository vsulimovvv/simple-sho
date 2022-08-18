<template>
  <div>
    <AppHeader />

    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

// * Reset and Normiles Styles
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}
ul,
ol {
  padding: 0;
  list-style: none;
  margin: 0;
}
a,
i {
  color: inherit;
}
a {
  text-decoration: none;
}
button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
// Для прибития футера к низу
html,
body {
  height: 100%;
}

.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
}

:root {
  --color-accent: "";
}

body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
