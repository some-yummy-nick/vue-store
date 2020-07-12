<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-item v-for="(item, i) in links" :key="i" :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isUserLoggedIn" @click="onLogout">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="sideNav = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="pointer" tag="span" to="/"
          >Online store
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in links" :key="i" :to="item.url">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn @click="onLogout" v-if="isUserLoggedIn">
          <v-icon left>mdi-exit-to-app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      sideNav: false,
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Cart', icon: 'mdi-cart', url: '/checkout'},
          {title: 'New product', icon: 'mdi-plus', url: '/new'},
          {
            title: 'My products',
            icon: 'mdi-format-list-bulleted',
            url: '/list',
          },
        ]
      } else {
        return [
          {title: 'Login', icon: 'mdi-account-box', url: '/login'},
          {title: 'Register', icon: 'mdi-face', url: '/register'},
        ]
      }
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    },
  },
}
</script>
