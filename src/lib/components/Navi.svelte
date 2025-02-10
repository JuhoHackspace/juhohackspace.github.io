<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';
  
    const currentPath = derived(page, $page => $page.url.pathname);
    let showMenu = $state(false)

    function toggleMenu() {
        console.log('toggleMenu');
        showMenu = !showMenu;
    }

    onMount(() => {
        const handleResize = () => {
        if (window.innerWidth > 460) {
            showMenu = false;
        }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

  </script>
  <style>
    .hamburger {
        display: none;
        cursor: pointer;
        font-size: 2rem;
        color: var(--text-color-1);
    }
    .transparent-bg {
        background-color: rgba(189, 195, 199, 0.8); /* Updated to use rgba with #A0A0A0 */
    }
    .nav-container {
        position: fixed;
        width: 100%;
        z-index: 1000;
    }
    .header-nav {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
    }
    .header-nav ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
    }

    .header-nav a {
        color: var(--text-color-1);
        text-decoration: none;
        font-size: 1.2rem;
        margin: 0.5rem;
    }

    .header-nav a:hover, .active {
        font-weight: 900;
    }
    @media (max-width: 460px) {
    .header-nav {
        justify-content: flex-end;
    }
    .header-nav ul {
      display: none;
    }

    .hamburger {
      display: block;
      margin-right: 1.5rem;
    }

    .mobile-menu {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      width: 100%;
    }
    .mobile-menu a {
      color: var(--text-color-1);
      text-decoration: none;
      font-size: 1.2rem;
    }
  }
  </style>
<div class="transparent-bg nav-container">
    <nav class="header-nav">
        <ul>
            <li><a href="/" class={$currentPath === '/' ? 'active' : ''}>Who am I?</a></li>
            <li><a href="/myWork" class={$currentPath === '/myWork' ? 'active' : ''}>My Work</a></li>
            <li><a href="/contact" class={$currentPath === '/contact' ? 'active' : ''}>Contact</a></li>
        </ul>
        <div class="hamburger" on:click={toggleMenu}>
            {#if showMenu}
            &#10006; <!-- Close icon -->
            {:else}
            &#9776; <!-- Hamburger icon -->
            {/if}
        </div>
    </nav>
    {#if showMenu}
        <div class="mobile-menu">
            <a href="/" class={$currentPath === '/' ? 'active' : ''} on:click={toggleMenu}>Who am I?</a>
            <a href="/myWork" class={$currentPath === '/myWork' ? 'active' : ''} on:click={toggleMenu}>My Work</a>
            <a href="/contact" class={$currentPath === '/contact' ? 'active' : ''} on:click={toggleMenu}>Contact</a>
        </div>
    {/if}
</div>