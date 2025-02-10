<script>
    // Define props using the export keyword
    export let title;
    export let tags;
  </script>
  
  <style>
    .tag {
      background-color: var(--primary-color);
      color: var(--text-color-1);
      padding: 0.5em;
      margin-right: 0.5em;
      border-radius: 0.5em;
    }
    .tag {
      margin-bottom: 0.5em;
      font-weight: bold;
    }
  </style>
  
  <div class="vertical-layout max-width-600">
      <h2 class="header outer-05em">{title}</h2>
      <div class="horizontal-layout center-all">
        {#each tags as tag}
          <div class="tag">{tag}</div>
        {/each}
      </div>
  </div>