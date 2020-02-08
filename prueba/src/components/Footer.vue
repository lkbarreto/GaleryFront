<template>
  <div class="footer">
    <v-footer fixed>
      <v-spacer></v-spacer>
      <div>Lourdes Barreto {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer",

  data() {
    return {
    };
  }
};
</script>