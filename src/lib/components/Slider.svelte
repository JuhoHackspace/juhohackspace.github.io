<script>
	import { onMount } from 'svelte';
	import { backInOut, linear } from 'svelte/easing';
	import {blur, fade, fly, scale, slide} from 'svelte/transition';
    import cssLogo from '$lib/assets/css.webp';
    import htmlLogo from '$lib/assets/html5.png';
    import jsLogo from '$lib/assets/js.webp';
    import webLogo from '$lib/assets/web.jpg';
    import skills from '$lib/assets/skills.js';
	let show = true;
	let options = {duration: 1000, easing: linear};
    let currentIndex = 0;
    let viewportWidth = 0;
    onMount(() => {
        viewportWidth = window.innerWidth;
        const handleResize = () => {
            viewportWidth = window.innerWidth;
        };
        window.addEventListener('resize', handleResize);
        const interval = setInterval(() => {
        show = !show;
        if (!show) {
            currentIndex = ( currentIndex + 1 ) % skills.length; 
        }
    }, 2000);

    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
    };
  });
</script>
<style>
    .slide-container {
        width: 100%;
        height: 'max-content';
        min-height: 50px;
        overflow: hidden;
        margin-top: 3.5em;
        background: linear-gradient(to left, var(--primary-color), var(--background-color));
    }
    .slide {
        width: 100%;
        text-align: center;
        color: var(--text-color-1);
        font-size: 2em; /* Adjust the size as needed */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
        background-color: transparent;

    }
    .slide img {
        width: 35px; /* Adjust the size as needed */
        height: 35px;
        margin-right: 10px;
        vertical-align: middle;
        background-color: transparent;
    }
    @media (max-width: 768px) {
        .slide {
            font-size: 1.5em;
        }
    }
</style>
<div class="slide-container center-all">
    {#if show}
    <div class='slide'
        in:fly={{...options, opacity: 1, x: viewportWidth}}
        out:fly={{...options, opacity: 1, x: -viewportWidth}}
    >   
        {skills[currentIndex].name}
    </div>
    {/if}
</div>