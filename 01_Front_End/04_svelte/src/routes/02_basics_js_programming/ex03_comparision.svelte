<!---------------------- JavaScript ---------------------->
<script>
	/* JavaScript can be added here */
	let cnt = 0;
	let style_div = 'low';
	function incrementCount() {
		cnt++;
		if (cnt > 10) {
			style_div = 'high';
		} else if (cnt > 5 && cnt <= 10) {
			style_div = 'medium';
		} else {
			style_div = 'low';
		}
	}
</script>

<!------------------------- HTML ------------------------->

<div>
	<h1>Count : {cnt}</h1>
</div>

<div>
	<button on:click={incrementCount}>CLick Me</button>
</div>

<div id={style_div}>
	{#if cnt > 10}
		<p>{cnt} is greater than 10</p>
	{:else if 5 > cnt}
		<p>{cnt} is less than 5</p>
	{:else}
		<p>{cnt} is between 5 and 10</p>
	{/if}
</div>

<!------------------------ style ------------------------->
<style>
	/* CSS can be added here */
	div {
		background-color: darkblue;
		padding: 8px;
		text-align: center;
		border: 1px solid yellow;
		border-radius: 8px;
	}
	button {
		border: 1px solid red;
		border-radius: 8px;
		padding: 8px;
	}
	#low {
		background-color: aquamarine;
	}
	#medium {
		@apply bg-blue-600;
	}
	#high {
		@apply bg-red-400 text-yellow-500;
	}
</style>
