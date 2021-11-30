<template>
  <main id="home" :class="`no-scrollbar ${isMobileScreen}`">
    <div :class="`principal container ${ableToChange ? ' scrolled' : ''}`">
      <div :class="`profile ${isMobileScreen}`">
        <span class="image">
          <img :src="require(`@/assets/img/${isMobileScreen}-photo-ariana-grande.png`)" alt="Ariana Grande">
        </span>
        <span class="title-group">
          <h1>Ariana Grande</h1>
          <h3>Los Angeles - CA</h3>
        </span>
      </div>
      <div class="social">
        <a class="link icon-instagram" href="https://www.instagram.com/arianagrande/" title="Instagram Ariana Grande" target="_blank"></a>
        <a class="link icon-spotify" href="https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR" title="Spotify Ariana Grande" target="_blank"></a>
        <a class="link icon-twitter" href="https://twitter.com/arianagrande" title="Twitter Ariana Grande" target="_blank"></a>
      </div>
      <img class="scroll" src="@/assets/img/mouse-scrolling.gif" alt="Mouse Scrolling"/>
    </div>
    <div :class="`informations ${ableToChange ? ' scrolled' : ' no-scrolled'}`">
      <Splide :options="splideOptions">
        <SplideSlide>
          <div class="section container">
            <p class="description">Cantora, atriz, compositora e apresentadora estadunidense. Em oito anos de carreira solo, venci dois Grammy Awards (Sweetener e Rain On Me). Não sou ariana, e nem grande.</p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="section container">
            <h4>Músicas em destaque</h4>
            <Musics />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="section container">
            <h4>Programas</h4>
            <Programs />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="section container">
            <h4>Albuns</h4>
            <Albuns />
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <Player
      :class="`${isMobileScreen} ${ableToChange ? ' scrolled' : ''}`"
      :title="'Luis Fonsi - Despacito'"
      file="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"
      :time="'00:03'"
    />
  </main>
</template>
<script>
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Albuns from '../components/Albuns.vue';
import Musics from '../components/Musics.vue';
import Programs from '../components/Programs.vue';
import Player from '../components/Player.vue';
export default {
  name: 'Home',
  components: {
    Splide,
    SplideSlide,
    Albuns,
    Musics,
    Programs,
    Player,
  },
  data() {
    return {
      loading: true,
      info: {},
      splideOptions: {
        arrows: false,
        direction: 'ttb',
        wheel: true,
        releaseWheel: true,
        height: '120px',
        padding: '20% 0',
        type: 'loop',
        rewind: false,
        clones: 0,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 140px;
  background: rgb(45,31,47) no-repeat center top;
  background-size: cover;

  &.mobile {
    background-image: url('../assets/img/mobile-bg-ariana-grande.png');
  }

  &.desktop {
    background-image: url('../assets/img/desktop-bg-ariana-grande.png');
  }

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(45,31,47,.25);
    background: linear-gradient(0deg, rgba(45,31,47,0) 0%, rgba(45,31,47,1) 100%);
  }
  &::after {
    content: '';
    position: fixed;
    left: 0;
    top: auto;
    right: 0;
    bottom: -140px;
    height: 50vh;
    background: rgba(45,31,47,.25);
    background: linear-gradient(0deg, rgba(45,31,47,1) 0%, rgba(45,31,47,0) 100%);
    z-index: 5;
  }

  .principal {
    position: fixed;
    top: 60px;
    text-align: center;
    z-index: 10;
    transition: all .8s ease;

    // Scroll Mode
    &.scrolled {
      top: 40px;

      .profile {
        justify-content: space-around;
        flex-wrap: nowrap;

        .image {
          margin-bottom: 0;
          border-width: 5px;
          transform: scale(0.8);
        }

        .title-group {
          width: auto;
        }
      }
      .social {
        .link {
          margin: 0 20px;
          font-size: 40px;
        }
      }

      img.scroll {
        pointer-events: none;
        visibility: hidden;
        opacity: 0;
      }
    }

    // Principal mode
    .profile {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      transition: all .8s ease;

      .image {
        display: inline-block;
        margin-bottom: 40px;
        border: 7px solid $white;
        border-radius: 50%;
        box-shadow: 0 9px 12px rgba(0,0,0,.25);
        overflow: hidden;
        transform: scale(1);
        transition: all .8s ease;
      }

      .title-group {
        display: block;
        width: 100%;
        line-height: 2em;
        text-align: center;
        transition: all .8s ease;
      }
    }
    .social {
      margin-top: 20px;
      transition: all .8s ease;
      .link {
        display: inline-block;
        margin: 0 12px;
        font-size: 50px;
        transition: all .8s ease;

        &:hover {
          color: $primaryColor;
        }
      }
    }

    img.scroll {
      position: fixed;
      left: 50%;
      bottom: 10vh;
      max-width: 70px;
      margin-left: -35px;
      transition: all .8s ease;
    }
  }

  .informations {
    position: relative;
    max-height: calc(40vh + 320px);
    padding-top: 60vh;
    padding-left: 15px;
    opacity: 0;
    overflow: hidden;
    z-index: 5;
    transition: all .5s ease-in;

    &.scrolled {
      transition-delay: .5s;
      padding-top: 40vh;
      opacity: 1;
    }

    .description {
      font-size: 18px;
      line-height: 24px;
    }

    .section {
      margin-bottom: 30px;
    }

    h4 {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
}
</style>