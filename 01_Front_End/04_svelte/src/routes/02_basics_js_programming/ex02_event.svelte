<!---------------------- JavaScript ---------------------->
<script>
	/* JavaScript can be added here */
	let cnt = 0;

    function incrementCount(){
        cnt++;
    }
</script>

<!------------------------- HTML ------------------------->

<div>
	<h1>Count : {cnt}</h1>
</div>

<div>
	<button on:click={incrementCount}>CLick Me</button>
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
</style>
