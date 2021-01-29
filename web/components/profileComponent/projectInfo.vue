<template>
  <div class="col-md-6 col-12" style="padding: 12px 0 12px 12px">
    <v-card class="project-card v-sheet ma-1" style="min-height: 296px">
      <v-card-title
        primary-title
        class="pa-5 pb-3 d-flex flex-nowrap justify-space-between"
      >
        <p style="margin: 0">Projects</p>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="blue-grey"
              style="width: 100px"
            >
              {{ showTitle }}
              <v-icon tile>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <!-- <v-list-item-group v-model="showTitle" color="primary"> -->
            <v-list-item v-for="(item, i) in titleList" :key="i">
              <v-list-item-title @click="changMedia(item.title)">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
            <!-- </v-list-item-group> -->
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-text class="pa-5 pb-0 pt-5">
        <div class="row pb-6 no-gutters"></div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTitle: 'Daily',
      titleList: [
        {
          title: 'Daily',
        },
        {
          title: 'Weekly',
        },
        {
          title: 'Monthly',
        },
      ],
      iconList: [
        {
          icon: 'account-group',
          nums: '12.8k',
          name: 'Followers',
          color: 'green',
        },
        {
          icon: 'account-multiple-plus-outline',
          nums: '1.8k',
          name: 'Following',
          color: 'yellow',
        },
        {
          icon: 'animation',
          nums: '198',
          name: 'Posts',
          color: 'yellow',
        },
        {
          icon: 'arrange-send-backward',
          nums: '554',
          name: 'Project',
          color: 'pink',
        },
      ],
    }
  },
  methods: {
    changMedia(title) {
      this.showTitle = title
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-list {
  & p {
    &.nums {
      margin: 0;
    }
  }
}
</style>