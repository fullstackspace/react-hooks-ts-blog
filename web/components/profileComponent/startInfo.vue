<template>
  <div class="pb-0 pb-sm-3 col col-12" style="padding-top: 20px">
    <v-card class="article-card">
      <v-card-title primary-title class="pa-5 pb-3" style="padding: 12px">
        Top 5 react native starter kits
      </v-card-title>
      <v-card-text class="pa-5 pt-0">
        <div class="row">
          <div class="col col-5">
            <v-img
              src="https://templates-flatlogic.herokuapp.com/vue-material/img/article-logo.d7094b52.png"
            ></v-img>
          </div>
          <div class="col col-7" style="padding: 12px">
            <p class="article-writer greyTint--text">Nastassia Ovchinnikova</p>
            <p class="article-text greyBold--text">
              React Native allows us to create a boilerplate that have been
              crafted for both platforms. The ability to create an app both for
              Android and iOS...
            </p>
            <p class="article-info greyTint--text">11 Feb 2019 | 5 min read</p>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.article-card {
  & .article-writer {
    font-weight: 500;
    font-size: 12px;
  }
  & .article-text {
    font-weight: 500;
    font-size: 14px;
  }
  & .article-info {
    font-weight: 500;
    font-size: 12px;
  }
}
</style>