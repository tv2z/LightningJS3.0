import Blits from '@lightningjs/blits'

export default Blits.Component("IconMenu", {
  components: {
  },
  template: `
  <Element >
        <Element src="assets/logo.png" x="40" y="50" w="100" h="46" />

        <Element src="assets/home.png" x="60" y="320" w="44" h="44" />
        <Element src="assets/iconSearch.png" x="60" y="440" w="44" h="44" />
        <Element src="assets/movies.png" x="60" y="560" w="44" h="44" />
        <Element src="assets/user.png" x="60" y="680" w="44" h="44" />
      </Element>
  `,
});
