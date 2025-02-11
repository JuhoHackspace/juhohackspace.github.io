<script>
    export let title;
    export let description;
    export let imageURI = ''; // Optional image URI
    export let videoURI = ''; // Optional YouTube video URI
    export let availableOn = [];

    function openLink(url) {
        window.open(url, '_blank');
    }
    import githubLogo from '$lib/assets/GitHub.jpg';
    import webLogo from '$lib/assets/Web.jpg';

    // Map platform names to imported images
    const platformLogos = {
        GitHub: githubLogo,
        Web: webLogo
    };
</script>
<style>
    .card-container {
        background-color: var(--background-color-1);
        border-radius: 0.5em;
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
        margin: 1em;
        transition: transform 0.3s, box-shadow 0.3s;
        max-width: 400px;
    }
    .card-container:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 640px) {
        .card-container {
            margin: 1em auto;
        }
    }
    .video-container {
        margin-top: 1em;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        position: relative;
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .logo {
        width: 30px;
        height: 30px;
        margin: 0.5em;
        cursor: pointer;
    }
</style>
<div class="card-container center-all max-width-600 inner-1em">
    <div class="vertical-layout">
        <div class="card-header">
            <h2 class="header outer-05em">{title}</h2>
        </div>
        {#if videoURI}
        <div class="video-container">
            <iframe src={videoURI} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {:else}
        <img src={imageURI} alt={title} />
        {/if}
        <div class="inner-1em">
            <p>{description}</p>
        </div>
        {#if availableOn.length > 0}
        <div class="horizontal-layout center-all">
            <h3 class="header outer-05em">Available on</h3>
        {#each availableOn as platform}
            <img class="logo" src={platformLogos[platform.name]} alt={platform.name} on:click={() => openLink(platform.url)}/>
        {/each}
        </div>
        {/if}
    </div>
</div>