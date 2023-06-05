<!---------------------- JavaScript ---------------------->
<script>
	/* JavaScript can be added here */
	let TextH1 = 'world';
	let myArray = [1, 2, 3, 4, 5];
	let objArray = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' },
		{ id: 3, name: 'Bob' }
	];
</script>

<!------------------------- HTML ------------------------->
<!-- Static Data-->
<div>
	<h1>Hello world!</h1>
</div>

<!-- Dynamic Data-->
<div>
	<h1>Hello {TextH1}!</h1>
</div>

{#each myArray as item}
	<div>{item}</div>
{/each}

{#each objArray as item}
	<div>{item.id}: {item.name}</div>
{/each}

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
</style>
