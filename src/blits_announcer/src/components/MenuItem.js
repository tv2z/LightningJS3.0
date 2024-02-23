import Blits from '@lightningjs/blits'
import { menuFocusColor, menuUnFocusColor } from '../constants';


export default Blits.Component("MenuBarItem", {
  components: {
  },
  props:["imgSrc","title","yPos"],
  hooks: {
    focus(){
      this.scale=1.02
      this.color= menuFocusColor
      this.$announcer.speak(`You are currently in `+this.title);
    },
    unfocus(){
      this.scale=1
      this.color= menuUnFocusColor
    }
  },
  state() {
    return {
      scale:1,
      color:menuUnFocusColor
    };
  },
  template: `
    <Element :scale.transition="$scale">
      <Element src="$imgSrc" x="60" y="$yPos+320" w="44" h="44" :color="$color"/>
      <Text content="$title" x="130" y="$yPos+325" :color="$color"/>
    </Element>
  `,
});
