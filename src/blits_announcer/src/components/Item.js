import Blits from '@lightningjs/blits'
import { descriptionTimeoutLimit } from '../constants';


export default Blits.Component("Item", {
  components: {
  },
  props:['color','xPos',"imgSrc","title","desc"],
  hooks: {
    focus(){
      this.scale=1.2
      
      // this reads aloud title of the item card
      this.$announcer.speak(this.title);

      this.timer = setTimeout(()=>{
        // this reads aloud description of the item card
        this.$announcer.speak(this.desc);
      },descriptionTimeoutLimit)
    },
    unfocus(){
      this.scale=1
      clearTimeout(this.timer)
    }
  },
  state() {
    return {
      scale:1
    };
  },
  template: `
    <Element>
          <Element x="120">
          <Element
              w="439"
              h="247"
              x="200"
              y="300"
              color="$color"
              x="$xPos"
              src="$imgSrc"
              :scale.transition="$scale"
            />
            <Text content="$title" x="0" y="600" :scale.transition="$scale"/>
            <Text content="$desc" x="0" y="660" wordwrap="360" size="24" lineheight="30" :scale.transition="$scale"/>
          </Element>
    </Element>
  `,
});
