export default {
  data() {
    return {
      isMobileScreen: 'mobile',
      ableToChange: 0,
      lastDirecScroll: 'up',
      lastScrollPos: 0,
    };
  },

  methods: {
    screen() {
      this.isMobileScreen = window?.innerWidth > 768 ? 'desktop' : 'mobile';
    },
    scrolled() {
      if (window.scrollY > this.lastScrollPos && this.lastDirecScroll === 'up') {
        if (!this.ableToChange) this.ableToChange = true;
        this.lastScrollPos = window.scrollY;
        this.lastDirecScroll = 'down';
      } 
      // if (window.scrollY < this.lastScrollPos && this.lastDirecScroll === 'down') {
      //   if (this.ableToChange) this.ableToChange = false;
      //   this.lastScrollPos = window.scrollY;
      //   this.lastDirecScroll = 'up';
      // }
    },
  },

  created() {
    this.screen;
    window.addEventListener('resize', this.screen);
    window.addEventListener('scroll', this.scrolled);
  },
}