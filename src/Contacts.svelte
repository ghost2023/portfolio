<script lang="ts">
  import File from "./icons/File.svelte";
  import Github from "./icons/github.svelte";
  import LinkedIn from "./icons/LinkedIn.svelte";
  import Telegram from "./icons/Telegram.svelte";

  const contacts = [
    {
      url: "https://github.com/ghost2023",
      icon: Github,
    },
    {
      url: "https://t.me/AsinisterH",
      icon: Telegram,
    },
    {
      url: "www.linkedin.com/in/nathnael-wondisha-67b048227",
      icon: LinkedIn,
    },

    {
      url: "/updated-resume.pdf",
      icon: File,
      label: "Resume",
    },
  ];
</script>

<div
  class="fixed z-20 items-start gap-1.5 sm:gap-3 text-white/50 bottom-0 flex sm:flex-col overflow-auto p-4 sm:p-6"
>
  {#each contacts as contact}
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      class="flex scale-90 sm:scale-100 backdrop-blur-md items-center border border-white/50 p-2 sm:p-2.5 hover:text-white hover:border-white relative group justify-center rounded-full transition-colors duration-200 overflow-hidden"
    >
      <div
        class="absolute border-[8px] border-transparent size-0 group-hover:size-[60%] bg-white/40 opacity-0 group-hover:opacity-70 rounded-full blur-md transition-all delay-75 ease-out duration-300"
      ></div>
      <svelte:component this={contact.icon} />
      {#if contact.label}
        <span class="ml-2 text-xs font-medium">
          {contact.label}
        </span>
      {/if}
    </a>
  {/each}
</div>
