<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1"
          >SUBSCRIPTIONS</v-subheader
        >

        <v-list-item class="mt-4" @click="isShowLoginForm = true">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Login</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <v-switch v-model="$vuetify.theme.dark" hide-details></v-switch> -->
      <v-spacer />
      <v-row align="center" style="max-width: 30vw">
        <v-text-field
          placeholder="Search..."
          single-line
          filled
          rounded
          dense
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
      <v-spacer />
      <v-btn class="mx-2" icon fab>
        <v-badge
          overlap
          :content="emailMsg"
          style="margin-right: 15px"
          color="red"
        >
          <v-icon medium color="gray"> mdi-email </v-icon>
        </v-badge>
      </v-btn>

      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <span style="margin-left: 5px">Hi,{{ username }}</span>
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-sheet v-model="isShowLoginForm" inset>
      <v-form class="pa-4" @submit.prevent="login">
        <v-text-field
          v-model="loginModel.username"
          label="用户名"
        ></v-text-field>

        <v-text-field
          v-model="loginModel.password"
          label="密码"
          type="password"
          autocomplete="new-password"
        ></v-text-field>

        <v-btn color="success" type="submit">登录</v-btn>
      </v-form>
    </v-bottom-sheet>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      isShowLoginForm: false,
      loginModel: {},
      items: [
        { icon: 'mdi-home', text: 'Home', link: '/' },
        { icon: 'mdi-trending-up', text: 'Hot Coursers', link: '/courses' },
        {
          icon: 'mdi-youtube-subscription',
          text: 'Hot Comment',
          link: '/comments',
        },
        // { icon: 'mdi-history', text: 'History' },
        // { icon: 'mdi-playlist-play', text: 'Playlists' },
        // { icon: 'mdi-clock', text: 'Watch Later' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      username: 'Kewin Peng',
      emailMsg: 6,
    }
  },
  created() {
    this.$vuetify.theme.dark = false
  },
  methods: {
    async login() {
      // this.$http.post('login', this.loginModel)
      await this.$auth.loginWith('local', {
        data: this.loginModel,
      })
      // console.log(this.loginModel)
      this.isShowLoginForm = false
    },
  },
}
</script>