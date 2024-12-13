<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { sections } from "./constants";
  import { spring } from "svelte/motion";

  type project = {
    url: string;
    img: string;
    name: string;
    description: string;
    techs: string[];
  };

  let cardRef: HTMLDivElement;
  let animationFrame: number | null = null;

  let opacity = spring(0, { stiffness: 0.5, damping: 1 });
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(() => {
          isVisible = entry.isIntersecting;
          $opacity = entry.intersectionRatio;
        });
      },

      { threshold: sections },
    );

    observer.observe(cardRef);
    return () => {
      observer.disconnect();
    };
  });

  onDestroy(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
  });

  export let project: project;
</script>

<div
  bind:this={cardRef}
  class="h-dvh flex snap-start flex-col overflow-hidden items-center justify-center relative"
  style="opacity: {$opacity};"
>
  <div
    class="max-w-lg relative z-10 rounded-2xl backdrop-blur-2xl mx-4 sm:mx-6 p-4 sm:p-6 md:p-8 border bg-neutral-900 border-gray-600/30"
  >
    <div
      class="absolute group inset-0 rounded-2xl overflow-hidden flex items-center justify-center"
    >
      <div
        class="absolute border-[8px] {$opacity > 0.5
          ? 'size-[80%]'
          : 'size-0'} transition-all delay-300 ease-out duration-300 rounded-full border-transparent bg-white/10 blur-[100px]"
      ></div>
    </div>
    <a
      href={project.url}
      target="_blank"
      class="absolute p-2 hover:text-black easing-[cubic-bezier(0.25,1,0.5,1)] group top-0 bg-neutral-950 rounded-full transition-all hover:bg-white right-0 translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
      rel="noopener noreferrer"
    >
      <div class="rotate-45">
        <div class="animate-pulse group-hover:animate-none">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="size-6 -rotate-45 group-hover:size-14 duration-500 easing-[cubic-bezier(0.25,1,0.5,1)] transition-all"
            xmlns="http://www.w3.org/2000/svg"
            ><path fill="none" d="M0 0h24v24H0z"></path><path
              d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
            ></path></svg
          >
        </div>
      </div>
    </a>
    <div
      class="top-0 left-0 w-full h-full flex flex-col justify-center overflow-hidden"
    >
      <img
        class="h-56 object-cover mb-6 sm:mb-8 rounded-lg"
        src={project.img}
        alt={project.name}
      />
      <div>
        <div class="text-white text-lg sm:text-2xl font-semibold mb-2">
          {project.name}
        </div>
        <div class="text-neutral-300 text-sm sm:text-base mb-4 sm:mb-6">
          {project.description}
        </div>
        <div class="text-neutral-300 text-sm">Tech I have used:</div>
        <div class="text-white text-sm font-medium">
          {project.techs.join(", ")}
        </div>
      </div>
    </div>
  </div>
</div>
