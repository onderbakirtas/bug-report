<script context="module">
  import { base } from '$app/paths';
  export async function load({ fetch }) {
    const posts = await fetch(`${base}/index.json`)
        .then((r) => r.json());
    return {
      props: { posts }
    }
  }
</script>

<script>
  export let posts;
</script>

{posts}