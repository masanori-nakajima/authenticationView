<template>
  <v-app>
    <v-navigation-drawer
    app
    color="blue"
    v-model="drawer"
    >
      <v-list-item>
        <v-list-item-title class="display-2 text--darken-2">
          sample
        </v-list-item-title>
        <v-btn icon @click= "drawer = false" >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
      dense
      nav
      >
      <v-list-item v-for="link_list in link_lists" :key="link_list.name">
        <v-list-item-icon>
          <v-icon>{{ link_list.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link_list.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-list>
      <v-list navi>
        <!-- ここに各リンクのアイコンを記入するようにする。 -->

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- アプリケーションバーがここに入る -->
      <v-app-bar-nav-icon @click="drawer = true" />
      <!-- スマホ会社の偽名 -->
      <v-toolbar-title>sample</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      link_lists:[
        {name: 'login View', icon: 'mdi-login'},
        {name: '問い合わせ', icon: 'mdi-phone'},
        {name: 'ニュースセンター', icon: 'mdi-newspaper'}
      ],
      class: [

      ]
    }
  }
}
</script>


