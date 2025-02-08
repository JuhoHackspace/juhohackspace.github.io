<script>
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
    import "$lib/styles/navStyles.css";
  
    // Create a derived store to get the current path
    const currentPath = derived(page, $page => $page.url.pathname);
  </script>

<div class="header-nav-container">
    <nav class="header-nav">
        <ul>
            <li><a href="/" class={$currentPath === '/' ? 'active' : ''}>Who am I?</a></li>
            <li><a href="/myWork" class={$currentPath === '/myWork' ? 'active' : ''}>My Work</a></li>
            <li><a href="/contact" class={$currentPath === '/myWork' ? 'active' : ''}>Contact</a></li>
        </ul>
    </nav>
</div>