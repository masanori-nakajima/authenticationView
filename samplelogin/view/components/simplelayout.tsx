import Vue, { VueConstructor } from 'vue'
import { VApp, VContent } from 'vuetify/lib'

export function simpleLayout(PageComponent: VueConstructor<Vue>) {
  return Vue.extend({
    inheritAttrs: false,
    components: {
      PageComponent,
      VApp,
      VContent,
    },
    render() {
      return (
        <v-app>
          <v-content>
            <PageComponent propsData={this.$attrs} />
          </v-content>
        </v-app>
      )
    },
  })
}