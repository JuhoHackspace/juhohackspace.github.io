<script>
    export let title;
    export let description;
    export let imageURI;
</script>
<style>
    .card-container {
        background-color: var(--background-color-1);
        border-radius: 0.5em;
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
        margin: 1em;
        transition: transform 0.3s, box-shadow 0.3s;
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
</style>
<div class="card-container center-all max-width-600 inner-1em">
    <div class="vertical-layout">
        <div class="card-header">
            <h2 class="header outer-05em">{title}</h2>
        </div>
        <img src={imageURI} alt={title} />
        <div class="inner-1em">
            <p>{description}</p>
        </div>
    </div>
</div>