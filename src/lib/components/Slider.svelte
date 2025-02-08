<script>
	import { onMount } from 'svelte';
	import { backInOut, linear } from 'svelte/easing';
	import {blur, fade, fly, scale, slide} from 'svelte/transition';
	let show = true;
	let options = {duration: 1000, easing: linear};
    let currentIndex = 0;
    let skills = ["Web Development", "Mobile development", "Desktop Development"];
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
    }
    .slide {
        width: 100%;
        text-align: center;
        font-size: 2em;
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