<script lang="ts">
	import InputBox from '$lib/inputCard.svelte';
	let _name: any;
</script>

<InputBox text="Name" bind:value={_name} />
