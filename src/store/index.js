import { createStore } from 'vuex'
import main from './main'
import menu from './menu'

const store = createStore({
  modules: {
    main,
    menu
  }
})

export function useStore() {
  return store
}

export default store
