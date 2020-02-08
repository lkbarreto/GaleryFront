<template>
  <div class="header">
    <v-bottom-navigation v-model="bottomNav">
      <v-btn value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "header",

  data() {
    return {
      bottomNav: "favorites"
    };
  }
};
</script>