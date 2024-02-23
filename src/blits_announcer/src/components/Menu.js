import Blits from '@lightningjs/blits'
import MenuBarItem from './MenuItem';

export default Blits.Component("MenuBar", {
  components: {
    MenuBarItem,
  },
  props:["menuItems"], //props obtained from parent component
  hooks: {
    ready(){
      this.focusedItem = 0
    },
    focus(){
        this.$trigger('focusedItem')
    },
    destroy(){
      this.focusedItem = 0
    }
  },
  watch:{
    // this gets triggered whenever `focusedItem` statevalue changes
    focusedItem(value=0){
      let val = this.select(`menuitem${value}`)
      val && val.focus && val.focus()
    }
  },
  state() {
    return {
      focusedItem:0
    };
  },
  input: { 
    left() {
      return
    },
    right() {
      this.parent.focusCarousel()
    },
    down(){
      if (this.focusedItem < this.menuItems.length - 1) {
        this.focusedItem++
      }
    },
    up(){
      if (this.focusedItem > 0) {
        this.focusedItem--
      }
    }
  },
  template: `
    <Element >
      <Element src="assets/menu_open.png" x="80" y="50" w="160" h="60" />

      <Element>
        <MenuBarItem
          :for="(item,index) in $menuItems"
          title="$item.title"
          imgSrc="$item.imgSrc"
          index="$index"
          :ref="'menuitem'+$index" key="$item.title"
          yPos="$index*120"
        />
      </Element>

    </Element>
  `,
});
