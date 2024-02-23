import Blits from '@lightningjs/blits'
import Item from './Item';

export default Blits.Component("Row", {
  components: {
    Item
  },
  props:["items"],
  hooks: {
    ready() {
      this.itemOffset = 0
    },
    focus(){
        this.$trigger('focusedItem')
    },
    destroy(){
      this.focusedItem = 0
      this.itemOffset =200
      this.rowOffset = 0
    }
  },
  watch:{
    focusedItem(value=0){
      let val = this.select(`item${value}`)
      val && val.focus && val.focus()
      if (value < 1) {
        this.rowOffset = 60
      } else if (value > this.items.length - 2) {
        this.rowOffset = 60 - (this.items.length - 2) * 500 + 500
      } else {
        this.rowOffset = 60 - value * 500 + 500
      }
    }
  },
  state() {
    return {
      focusedItem:0,
      itemOffset:200,
      rowOffset:0,
    };
  },
  input: {
    left() {
      if (this.focusedItem > 0) {
        this.focusedItem--
      } else {
        this.focusedItem = 0
        this.parent.focusMenu()
      }
    },
    right() {
      if (this.focusedItem < this.items.length - 1) {
        this.focusedItem++
      } else {
        this.focusedItem = 0
      }
    },
  },
  template: `
    <Element :x.transition="$rowOffset">
        <Item
          :for="(item, index) in $items"
          :ref="'item'+$index"
          key="$item.title"
          color="white"
          xPos="0"
          :x.transition="{value: $itemOffset + $index * 500, delay: 50 * ($index%4), duration: 500}"
          imgSrc="$item.imgSrc"
          title="$item.title"
          desc="$item.description"
        />
    </Element>
  `,
  methods:{
  }
});
