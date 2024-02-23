import Blits from '@lightningjs/blits'

import Row from '../components/Row';
import MenuBar from '../components/Menu';
import IconMenu from '../components/IconMenu';
import { appBgColor, iconmenuBgColor, menuBgColor, menuItemsArray, movieContentArray } from '../constants';

export default Blits.Component("Main", {
  components: {
    Row,
    MenuBar,
    IconMenu
  },
  hooks: {
    focus(){
      let focusRow = this.select("carouselRow")
      focusRow && focusRow.focus && focusRow.focus()
    }
  },
  state() {
    return {
      movieData: movieContentArray,
      menuItems:menuItemsArray,
      menuFocus:false,
      appBgColor:appBgColor,
      iconmenuBgColor:iconmenuBgColor,
      menuBgColor:menuBgColor
    };
  },
  template: `
    <Element w="1920" h="1080" color="$appBgColor">

    <!-- Menu only with icons -->
    <Element w="180" h="1080" color="$iconmenuBgColor" zIndex="50">
       <IconMenu />
    </Element>
    
    <!-- Menu Sidebar -->
    <Element w="360" h="1080" color="$menuBgColor" zIndex="100" :show="$menuFocus">
       <MenuBar menuItems="$menuItems" ref="menuBar"/>
    </Element>

    <!-- Movie Carousel -->
    <Element w="1740" h="1080" x="180" zIndex="1">
      <Text content="Movies" x="150" y="140" size="56"/>
      <Row ref="carouselRow" items="$movieData"/>
    </Element>
    </Element>
  `,
  methods:{
    focusMenu(){
      this.menuFocus = true
      let focusRow = this.select("menuBar")
      focusRow && focusRow.focus && focusRow.focus()
    },
    focusCarousel(){
      this.menuFocus = false
      let focusRow = this.select("carouselRow")
      focusRow && focusRow.focus && focusRow.focus()
    },
  },
});
