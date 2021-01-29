<template>
  <div class="col col-12" style="padding-top: 0">
    <v-card class="folder-card ma-1" min-height="282px">
      <v-card-title class="pa-5 pb-3">Files</v-card-title>
      <v-card-text class="pa-5 pt-0">
        <v-tabs v-model="tab">
          <v-tabs-slider color="#ff4081"></v-tabs-slider>
          <v-tab v-for="fold in folderList" :key="fold.name">
            {{ fold.name }}
          </v-tab>
        </v-tabs>
        <v-divider horizontal></v-divider>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <div
              class="row d-flex flex-nowrap overflow-x-auto pa-4 pt-5 justify-start"
            >
              <div v-for="img in tabOneList" :key="img.src">
                <v-img
                  class="folder-image mr-3"
                  style="height: 106px; width: 141px"
                  contain
                  :src="img.src"
                  responsive
                >
                  <p class="folder-title">{{ img.title }}</p>
                  <p class="folder-subtitle-1 font-weight-medium">
                    {{ img.subtitle }}
                  </p></v-img
                >
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div
              class="row d-flex flex-nowrap overflow-x-auto pa-4 pt-5 justify-start"
            >
              <div v-for="img in tabOneList" :key="img.src">
                <v-img
                  class="folder-image mr-3"
                  style="height: 106px; width: 141px"
                  contain
                  :src="img.src"
                  responsive
                >
                  <p class="folder-title">{{ img.title }}</p>
                  <p class="folder-subtitle-1 font-weight-medium">
                    {{ img.subtitle }}
                  </p></v-img
                >
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div
              class="row d-flex flex-nowrap overflow-x-auto pa-4 pt-5 justify-start"
            >
              <div v-for="img in tabOneList" :key="img.src">
                <v-img
                  class="folder-image mr-3"
                  style="height: 106px; width: 141px"
                  contain
                  :src="img.src"
                  responsive
                >
                  <p class="folder-title">{{ img.title }}</p>
                  <p class="folder-subtitle-1 font-weight-medium">
                    {{ img.subtitle }}
                  </p></v-img
                >
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: '0',
      tabModel: '0',
      folderList: [
        {
          name: 'Work',
        },
        {
          name: 'Private',
        },
        {
          name: 'Social',
        },
      ],
      tabOneList: [
        {
          src:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/folder-dark-blue.92003b7b.svg',
          title: 'UX',
          subtitle: '178 files',
        },
        {
          src:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/folder-dark-pink.3c989f0f.svg',
          title: 'Design',
          subtitle: '154 files',
        },
        {
          src:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/folder-dark-green.84fc2145.svg',
          title: 'UX',
          subtitle: '178files',
        },
        {
          src:
            'https://templates-flatlogic.herokuapp.com/vue-material/img/folder-dark-yellow.98d40968.svg',
          title: 'IIIUstration',
          subtitle: '68 files',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.folder-card {
  & .v-image {
    position: relative;
    & p {
      position: absolute;
      left: 8px;
      color: #fff;
      font-weight: 600;
      &.folder-title {
        font-size: 18px;
        bottom: 10px;
      }
      &.folder-subtitle-1 {
        bottom: -10px;
        font-size: 13px;
      }
    }
  }
}
</style>