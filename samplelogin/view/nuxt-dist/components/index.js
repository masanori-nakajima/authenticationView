export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
