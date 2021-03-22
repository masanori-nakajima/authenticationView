<template>
  <v-app>
    <v-layout
      column
      justify-center
      align-center
    >
      <v-card v-if="users">
        <v-card-title>
          登録者一覧
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="検索"
            single-line
            />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="5"
          :search="search"
          sort-by="firstname"
          :sort-desc="true"
          class="elevation-1"
        >
        <!-- テーブル内で編集や削除したい場合の機能 -->
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width>
            <v-card>
              <v-card-title>
                <v-span class = "headline">編集</v-span>
              </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field v-model="user.firstname" label="名字"/>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field v-model="user.lastname" label="名前"/>
                      </v-col>
                      <v-col cols="11">
                        <v-text-field v-model="user.phoneNumber" label="電話番号"/>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn @click="close">閉じる</v-btn>
                  <v-btn class="primary" click="update">更新</v-btn>
                  <v-spacer/>
                </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            @click="edit(item)"
          >mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="remove(item)"
          >mdi-delete
          </v-icon>
        </template>
        <!-- -->
        </v-data-table>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      search: '',
      headers: [
        { text: '名字', value: 'firstname'},
        { text: '名前', value: 'lastname'},
        { text: '電話番号', value: 'phonenumber'},
        { text: '生年月日', value: 'date'},
        { text: '操作', value: 'actions'},
      ],
      user:{},
    }
  },
  computed: {
    users () {
      return this.$store.getters['getClient']
    }
  },
  methods: {
    edit (user) {
      this.user = Object.assign({},user)
      this.dialog = true
    },
    update () {
      const payload = { user: this.user }
      this.$store.commit('updateUser', payload)
      this.close()
    },
    remove (user) {
      const payload = {user: user}
      this.$store.commit('removeUser', payload)
    },
    close () {
      this.dialog = false
      this.user = {}
    },
  }
}
</script>

<style scoped>

</style>