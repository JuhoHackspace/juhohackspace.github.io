<script>
	import { onMount } from 'svelte';
	import { backInOut, linear } from 'svelte/easing';
	import {blur, fade, fly, scale, slide} from 'svelte/transition';
	let show = true;
	let options = {duration: 1000, easing: linear};
    let currentIndex = 0;
    let skills = ["Web Development", "Mobile Development", "Desktop Development"];
    onMount(() => {
    const interval = setInterval(() => {
      show = !show;
      if (!show) {
        currentIndex = ( currentIndex + 1 ) % skills.length; 
      }
    }, 2000);

    return () => clearInterval(interval);
  });
</script>
<style>
    .slide-container {
        width: 100%;
        height: 'max-content';
        min-height: 40px;
        overflow: hidden;
        background: linear-gradient(to left, var(--primary-color), var(--background-color));
    }
    .slide {
        width: 100%;
        text-align: center;
        color: var(--background-color);
        font-size: 2em; /* Adjust the size as needed */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 

    }
</style>
<div class="slide-container center-all">
    {#if show}
    <div class='slide'
        in:fly={{...options, opacity: 1, x: 800}}
        out:fly={{...options, opacity: 1, x: -800}}
    >{skills[currentIndex]}</div>
    {/if}
</div>