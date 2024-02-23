import Blits from '@lightningjs/blits'

import Main from './pages/Main.js'

export default Blits.Application({
  template: `
    <Element>
      <RouterView />
    </Element>
   `,
  routes: [
    {
      path: '/',
      component: Main,
      announce: "Welcome to the App", // this reads aloud when particular page is navigated
    },
  ],
})
