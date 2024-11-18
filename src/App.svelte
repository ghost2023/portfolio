<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { spring, tweened } from "svelte/motion";
  import Project from "./Project.svelte";
  import { fly } from "svelte/transition";

  let heroScrolled = 0;
  let focused = 0;
  let pageLoad = false;

  let heroContainer: HTMLDivElement;
  onMount(() => {
    pageLoad = true;
    const io = new IntersectionObserver(
      (enties) => {
        enties.forEach((entry) => {
          if (entry.target.id == heroContainer.id && entry.isIntersecting) {
            focused = 0;
            heroScrolled = enties[0].intersectionRatio;
          }
        });
      },
      { threshold: new Array(100).fill(0).map((_, i) => i / 100) },
    );
    io.observe(heroContainer);
  });

  let blob: HTMLDivElement;

  window.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 6000, fill: "forwards" },
    );
  };

  type project = {
    url: string;
    img: string;
    name: string;
    description: string;
    techs: string[];
  };

  const projects: project[] = [
    {
      url: "https://debbol.com",
      img: "./debbol.png",
      name: "Debbol",
      description:
        "An Ecommerce site for ethiopian diaspora to get authentic Ethiopian Goods from their Motherland.",
      techs: [
        "NextJS",
        "Stripe",
        "Postgres",
        "Prisma",
        "Typescript",
        "Next-auth",
      ],
    },

    {
      url: "https://debolmarket.com",
      img: "./debbolmarket.png",
      name: "DebolMarket",
      description:
        "An Ecommerce site for ethiopian diaspora to buy goods fom their loved ones here in Ethiopia.",
      techs: ["NextJS", "Stripe", "Firebase", "Typescript", "Next-auth"],
    },
    {
      url: "https://times-rose.vercel.app/",
      img: "./times.png",
      name: "Time business group",
      description:
        "A simple and beautiful website for a business group to showcase their products and services.",
      techs: ["Svelte", "TailwindCSS"],
    },
  ];
  let animationFrame: number | null = null;

  const handleScroll = (
    e: UIEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    },
  ) => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      let relativeHeight = parentContainer.scrollHeight - window.innerHeight;
      // @ts-ignore
      $scrollProgress = e.target.scrollTop / relativeHeight;
    });
  };

  onDestroy(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
  });

  let scrollProgress = tweened(0);
  let mainContainer: HTMLElement;
  let parentContainer: HTMLElement;
</script>

<div
  bind:this={parentContainer}
  on:scroll={handleScroll}
  class="h-dvh text-white relative snap-mandatory overflow-auto bg-neutral-900 snap-y tracking-wider"
>
  <div class="fixed pointer-events-none inset-0 overflow-hidden">
    <div bind:this={blob} id="blob"></div>
  </div>
  <div class="z-50 fixed overflow-x-hidden h-2 top-0 left-0 right-0">
    <div
      class="bg-gradient-to-r will-change-transform from-red-600 via-purple-500 to-blue-200 h-0.5 rounded-full"
      style="transform: translateX(-{window.innerWidth -
        window.innerWidth * $scrollProgress}px)"
    ></div>
    <div
      class="z-50 w-full will-change-transform -left-[100%] absolute h-[3px] top-0 overflow-hidden"
      style="transform: translateX({window.innerWidth * $scrollProgress}px)"
    >
      <div
        class="bg-gradient-to-r from-red-600 via-purple-500 blur-lg to-blue-300 w-full h-full"
      ></div>
    </div>
  </div>
  <main bind:this={mainContainer} class="px-8">
    <div
      class="h-dvh snap-start snap-proximity flex flex-col items-center justify-center relative"
      id="hero"
      bind:this={heroContainer}
    >
      <div>
        {#if pageLoad}
          <h3
            class="text-neutral-400 mb-0.5"
            transition:fly={{ y: 10, opacity: 0, duration: 1000 }}
          >
            Hi, My name is
          </h3>
          <div
            class="sm:text-5xl text-2xl font-semibold text-white"
            transition:fly={{ y: 15, opacity: 0, duration: 1600, delay: 800 }}
          >
            Nathnael Wondisha
          </div>
          <p
            class="text-neutral-400 text-center sm:text-xl mt-3 sm:mt-8"
            transition:fly={{ y: 10, opacity: 0, duration: 2000, delay: 1600 }}
          >
            I am a Software Developer.
          </p>
        {/if}
      </div>
      <div class="absolute left-1/2 -translate-x-1/2 bottom-8">
        <button
          class={` animate-bounce duration-500 ${
            heroScrolled < 0.8 ? "opacity-0" : ""
          }`}
          on:click={() => {
            parentContainer.scrollBy({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-md size-6 sm:size-8 text-token-text-tertiary"
            ><path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
              fill="currentColor"
            ></path></svg
          >
        </button>
      </div>
    </div>

    <div
      class="h-dvh flex snap-start flex-col items-center justify-center relative"
    >
      <p class="text-base sm:text-lg text-neutral-400 max-w-lg leading-relaxed">
        <span class="text-white font-medium">
          Welcome to my digital workspace.</span
        > <br /><br />As a passionate developer, I enjoy build scalable and
        highly performant infrastructure and also in creating seamless,
        intuitive experiences across both web and mobile platforms. <br /><br
        />My journey has led me to explore a wide range of tools, languages and
        frameworks.
      </p>
    </div>
    <div
      class="h-dvh flex snap-start flex-col items-center justify-center relative"
    >
      <p class="text-base sm:text-lg text-neutral-400 max-w-lg leading-relaxed">
        <span class="text-white font-medium"
          >This portfolio isn't just a collection of projects</span
        ><br /> <br /> it's a reflection of my problem-solving mindset and
        continuous learning. Here, you'll find projects that span from crafting
        engaging user interfaces to optimizing database queries, and even
        building trading bots that process real-time data.<br /><br /> I thrive on
        challenges—whether it's optimizing performance, creating scalable systems,
        or finding elegant solutions to complex problems.
      </p>
    </div>

    <div
      class="h-dvh flex snap-start flex-col items-center justify-center relative"
    >
      <p class="sm:text-base text-lg text-neutral-300 font-semibold">
        Here is some of the things I build.
      </p>
    </div>
  </main>
  <div>
    <div id="projects">
      {#each projects as project}
        <Project {project} />
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.5;
    }

    to {
      rotate: 360deg;
    }
  }

  #blob {
    background-color: white;
    height: 20vmax;
    aspect-ratio: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, aquamarine, mediumpurple);
    animation: -global-rotate 20s infinite;
    opacity: 0.5;
    filter: blur(12vmax);
  }
</style>
