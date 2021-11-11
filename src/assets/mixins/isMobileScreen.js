export default {
  data() {
    return {
      isMobileScreen: 'mobile',
    };
  },

  methods: {
    screen() {
      this.isMobileScreen = window?.innerWidth > 768 ? 'desktop' : 'mobile';
    },
  },

  created() {
    this.screen;
    window.addEventListener('resize', this.screen);
  },
}