<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import projects from "$lib/assets/projects.js";
</script>
<div class="container">
    <h1 class="header outer-1em">My Projects</h1>
    <div class="horizontal-layout center-all">
        {#each projects as project}
        <ProjectCard title={project.name} 
                     description={project.description} 
                     videoURI={project.videoURI}
                     imageURI={project.imageURI}
                     availableOn={project.availableOn}
        />
        {/each}
    </div>
</div>