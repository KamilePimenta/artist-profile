<template>
  <main id="home" :class="`container ${isMobileScreen}`">
    <div class="principal">
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
  </main>
</template>
<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
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

  .principal {
    position: relative;
    padding-top: 100px;
    text-align: center;
    z-index: 10;
    transition: all .8s ease;

    // Scroll Mode
    &.scrolled {
      padding-top: 50px;

      .profile {
        justify-content: space-around;
        flex-wrap: nowrap;

        .image {
          margin-bottom: 0;
          border-width: 5px;
          transform: scale(1.8);
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
      margin-top: 40px;
      transition: all .8s ease;
      .link {
        display: inline-block;
        margin: 0 12px;
        font-size: 60px;
        transition: all .8s ease;

        &:hover {
          color: $primaryColor;
        }
      }
    }

    img.scroll {
      position: fixed;
      left: 50%;
      bottom: 80px;
      max-width: 70px;
      margin-left: -35px;
      transition: all .8s ease;
    }
  }
}
</style>