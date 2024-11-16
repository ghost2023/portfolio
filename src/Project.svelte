<script lang="ts">
  type project = {
    url: string;
    img: string;
    name: string;
    description: string;
    techs: string[];
  };

  export let project: project;
</script>

<div
  class="h-screen flex snap-start flex-col items-center justify-center relative"
>
  <div class="max-w-lg">
    {#if project.img}
      <img class="h-full object-cover" src={project.img} alt={project.name} />
    {/if}
    <div class="top-0 left-0 w-full h-full flex flex-col justify-center">
      <div class="text-white text-2xl font-semibold mb-2">
        {project.name}
      </div>
      <div class="text-stone-400 mb-8">
        {project.description}
      </div>
      <div class="text-stone-300 text-sm">Tech I have used:</div>
      <div class="text-white font-medium">
        {project.techs.join(", ")}
      </div>
    </div>
  </div>
</div>
