<template>
  <main class="mt-6 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[50vh] md:min-h-[70vh]">
    <!-- Bagian Teks -->
    <div class="space-y-2 text-center md:text-left px-10">
      <p class="text-amber-200">Hello, I'm</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">satria mangasi junior</h1>

      <!-- Bagian Typewriter -->
      <div class="py-2">
        <h1 class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl fadein-up" ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>

      <!-- Deskripsi -->
      <p class="text-white pr-4 fade-in-from-left">Welcome to my personal website. <span class="wave">👋🏼</span></p>
      <br>

      <!-- Tombol Download Resume -->
      <button class="fadein-bot fade-500 flex items-center py-2 px-4 mx-auto text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 md:mx-0 text-amber-200 border-amber-200 hover:bg-amber-200 hover:bg-opacity-10 bg-transparent focus:outline-none w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-4 h-4">
          <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clip-rule="evenodd"></path>
          <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"></path>
        </svg>
        Download Resume
      </button>

      <!-- Ikon Sosial Media -->
      <div class="flex items-center justify-center md:justify-start gap-6 mt-6 fadein-bot">
        <a href="mailto:satriamangasijunior@gmail.com">
          <img class="w-9 h-9 rounded-full border-2 border-amber-200 transition-transform transform hover:scale-110" src="/img/Gmail_icon.png" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/satriamangasi-junior-861985268/" target="_blank">
          <img class="w-9 h-9 rounded-full border-2 border-amber-200 transition-transform transform hover:scale-110" src="/img/LinkedIn_logo.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/satriajunior10" target="_blank">
          <img class="w-9 h-9 rounded-full border-2 border-amber-200 transition-transform transform hover:scale-110" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="GitHub" />
        </a>
      </div>
    </div>

    <!-- Bagian Gambar -->
    <div class="flex justify-center md:justify-start fadein-right">
      <img 
        alt="avatar"
        class="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] rounded-full border-4 border-amber-200 object-cover"
        v-bind:src="'/img/logo2.JPG'"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      toRotate: ["Web Developer", "Full-stack Engineer", "Informatics Student", "Tech Enthusiast"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      // Matikan animasi typewriter di tampilan mobile
      if (window.innerWidth <= 768) return;

      let typewriter = this.$refs.typewriter;
      if (!typewriter) return;

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];
      this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;
      if (this.isDeleting) delta /= 2;

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  }
}
</script>

<style scoped>
.fadein-up {
  animation: fadeInUp 1s ease-out forwards;
}
.fadein-right {
  animation: fadeInRight 1s ease-out forwards;
}
.fade-in-from-left {
  animation: fadeInFromLeft 1s ease-out forwards;
}
.fadein-bot {
  animation: fadeInBot 1s ease-out forwards;
}
.wave {
  animation: wave 1.5s ease-in-out infinite;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInFromLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInBot {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes wave {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}

/* Mobile Only Fixes */
@media (max-width: 768px) {
  .fadein-up,
  .fadein-right,
  .fade-in-from-left,
  .fadein-bot {
    animation: none;
  }

  .text-4xl {
    font-size: 2.5rem;
  }

  .w-\[200px\] {
    width: 120px !important;
    height: 120px !important;
  }

  .w-fit {
    width: auto !important;
  }

  .text-sm {
    font-size: 0.875rem;
  }
}
</style>

