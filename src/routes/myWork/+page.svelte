<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import projects from "$lib/assets/projects.js";
</script>
<div class="container">
    <h1 class="header outer-1em">My Projects</h1>
    <h2 class="outer-1em">Here are some of the projects I have worked on:</h2>
    <div class="horizontal-layout center-all">
        <ProjectCard title={projects[0].name} 
                     description={projects[0].description} 
                     videoURI={projects[0].videoURI}
                     availableOn={projects[0].availableOn}
        />
        <ProjectCard title="Project 1" description="This is a project description." imageURI="https://via.placeholder.com/150"/>
        <ProjectCard title="Project 1" description="This is a project description." imageURI="https://via.placeholder.com/150"/>
        <ProjectCard title="Project 1" description="This is a project description." imageURI="https://via.placeholder.com/150"/>
        <ProjectCard title="Project 1" description="This is a project description." imageURI="https://via.placeholder.com/150"/>
        <ProjectCard title="Project 1" description="This is a project description." imageURI="https://via.placeholder.com/150"/>
        <ProjectCard title="Project 1" description="This is a project description." imageURI="https://via.placeholder.com/150"/>
    </div>
</div>