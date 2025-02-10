<script>
    import { onMount } from 'svelte';
    import picture from '$lib/assets/kuva.jpg';
    import Skill from '$lib/components/Skill.svelte';
</script>
<style>
    img {
        width: 400px;
        height: auto;
        max-height: 600px;
        border-radius: 50%;
        margin-left: 1em;
    }
    #slogan {
        font-style: italic;
        font-size: 1.5em;
        margin-top: 0.5em;
        text-align: center;
    }
    @media (max-width: 768px) {
        img {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }
    }
</style>
<div class="container">
    <div class="main-changing-layout">
        <div class="image-container">
            <img src={picture} alt="Placeholder" />
        </div>
        <div class="vertical-layout max-width-600">
            <h1 class="header">Juho Hietala</h1>
            <h3 id="slogan">"Code with Passion, Deliver with Precision"</h3>
            <p class="intro-text inner-2em">
                I am a third-year ICT engineering student specializing in software development. As a problem solver and enthusiastic learner, I thrive on challenges and continuously seek to expand my knowledge. I am dedicated to searching, applying, and implementing innovative solutions.
                I have worked on various projects, including web, mobile, and desktop applications. I am also interested in databases and have experience in creating and managing them. I am always eager to learn new technologies and improve my skills. I am looking for opportunities to work on exciting projects and collaborate with talented people.
            </p>
            <Skill title="Web Development" tags={["HTML","CSS","JavaScript","React","Svelte"]}/>
            <Skill title="Mobile Development" tags={["React Native","Kotlin"]}/>
            <Skill title="Desktop Development" tags={["Qt"]}/>
            <Skill title="Backend Development" tags={["Express","Java Springboot"]}/>
            <Skill title="Database Management" tags={["MySQL","Postgre SQL"]}/>
        </div>
    </div>
</div>
