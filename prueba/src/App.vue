<template>
  <div id="app">
    <Header />
    <div>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                  <v-card flat tile class="d-flex" v-for="(item, index) in images" :key="index">
                    <v-hover v-slot:default="{ hover }" open-delay="200">
                      <v-lazy
                        v-model="isActive"
                        :options="{threshold: .5}"
                        min-height="200"
                        transition="fade-transition"
                      >
                        <v-img v-bind:src="item.url" aspect-ratio="1" class="grey lighten-2">
                          <v-expand-transition>
                            <div v-if="hover" class="hoverBtn" style="height: 100%;">
                              <v-btn @click="Download(item.url)">Descargar</v-btn>

                            </div>
                          </v-expand-transition>
                          <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-lazy>
                    </v-hover>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </div>


    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",

  data() {
    return {
      images: [],
      LowerImages:[],
      isActive: false
    };
  },
  created() {
    this.ShowLowerImages();
    this.ShowImages();
  },

  components: {
    Header,
    Footer
  },
  methods: {
    ShowImages() {
      this.axios.get("images").then(response => {
        // console.log(response.data)
        this.images = response.data;
      });
    },
    ShowLowerImages() {
      this.axios.get("lowerImages").then(response => {
        this.LowerImages = response.data;
      });
    },

    Download(url) {
      var a = document.createElement("a");

      a.download = true;
      a.target = "_blank";
      a.href = url;

      a.click();
    },

     urlImage(filename){
    this.agregar = false;
    this.axios.get(`lowerImage/?_filename=${filename}`)
      .then(res => {
        this.notaEditar = res.data;
      })
      
  }
  }
};
</script>
<style>
.hoverBtn {
  justify-content: center;
  justify-items: center;
  align-content: center;
}
</style>



