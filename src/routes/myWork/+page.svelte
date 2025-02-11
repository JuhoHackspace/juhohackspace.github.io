<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import projects from "$lib/assets/projects.js";
</script>
<div class="container">
    {#each projects as group}
    <h1 class="header outer-1em text-center">{group.group}</h1>
    <div class="horizontal-layout center-all">
        {#each group.projects as project}
        <ProjectCard title={project.name} 
                     description={project.description} 
                     videoURI={project.videoURI}
                     imageURI={project.imageURI}
                     availableOn={project.availableOn}
        />
        {/each}
    </div>
    {/each}
</div>