// VueJS
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",

      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeImageIndex: 0,
      intervalId: null,
    };
  },

  created() {
    this.message = "Hello, Slider, here we come with VueJS!";
    this.startInterval();
  },

  methods: {
    startInterval() {
      this.intervalId = setInterval(() => {
        this.handleBtnDown();
      }, 3000);
    },

    handleBtnUp() {
      console.log("clickeed btn up");
      if (this.activeImageIndex <= 0) {
        this.activeImageIndex = this.slides.length - 1;
      } else {
        this.activeImageIndex--;
      }
    },
    handleBtnDown() {
      //console.log("clickeed btn down");
      if (this.activeImageIndex < this.slides.length - 1) {
        this.activeImageIndex++;
      } else {
        this.activeImageIndex = 0;
      }
    },
    handleClickOnThumb(event) {
      //console.log("clicked on thumb");
      //console.log(event.target);
      let value = Number(event.target.getAttribute("value"));
      this.activeImageIndex = value;
      // console.log(this.activeImageIndex);
    },
    handleHoverOnThumb(event) {
      clearInterval(this.intervalId);
      let value = Number(event.target.getAttribute("value"));
      this.activeImageIndex = value;
    },
    handleMouseOutOnThumb() {
      this.startInterval();
    },
  },
}).mount("#app");
