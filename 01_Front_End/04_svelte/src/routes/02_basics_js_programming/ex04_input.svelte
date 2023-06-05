<!---------------------- JavaScript ---------------------->
<script>
	/* JavaScript can be added here */

	/* Inputbox*/

	let Inputbox1 = '';
	let Inputbox2 = '';
	let ShowOut2 = '';

	function KeydownEvent() {
		console.log(Inputbox2);
	}
	function submitData() {
		ShowOut2 = Inputbox2;
	}

	/* Combobox */
	let options = ['Option 1', 'Option 2', 'Option 3'];
	let selectedValue = '';
	let selectedIndex = 0;

	function handleSelect(event) {
		selectedIndex = event.target.selectedIndex;
		console.log(selectedValue);
	}
</script>

<!------------------------- HTML ------------------------->

<div class="flex justify-center m-2">
	<div class="flex justify-center w-2/3">
		<div class="flex flex-col w-full">
			<div class=" flex justify-center"><h1>Input Box (Keyevent)</h1></div>
			<div class="flex flex-row">
				<div class="flex w-fit"><p>Enter your data:</p></div>
				<div class="flex-auto">
					<input
						type="text"
						bind:value={Inputbox1}
						on:input={KeydownEvent}
						class="w-full text-black"
					/>
				</div>
			</div>
			<div class=" flex justify-center"><h1>Output : {Inputbox1}</h1></div>
		</div>
	</div>
</div>

<div class="flex justify-center m-2">
	<div id="box1" class="flex justify-center w-2/3">
		<div class="flex flex-col w-full">
			<div class=" flex justify-center"><h1>Input Box (Click)</h1></div>
			<div class="flex flex-row">
				<div class="flex justify-end w-fit"><p>Enter your data:</p></div>
				<div class="flex-auto">
					<input type="text" bind:value={Inputbox2} class="w-full text-black" />
				</div>
				<div class="flex justify-center w-fit"><button on:click={submitData}>Enter</button></div>
			</div>
			<div class=" flex justify-center"><h1>Output : {ShowOut2}</h1></div>
		</div>
	</div>
</div>

<div class="flex justify-center m-2">
	<div class="flex justify-center w-2/3">
		<div class="flex flex-col w-full">
			<div class=" flex justify-center"><h1>Combobox (handle Select)</h1></div>
			<div class="flex flex-row">
				<div class="flex justify-end w-fit"><p>Enter your data:</p></div>
				<div class="flex-auto">
					<select class=" text-black w-full" bind:value={selectedValue} on:change={handleSelect}>
						<option value="">Select an option</option>
						{#each options as option}
							<option value={option}>{option}</option>
						{/each}
					</select>
				</div>
			</div>
			<div class=" flex justify-center">
				<h1>Output : {selectedValue} ,Selected Index:{selectedIndex}</h1>
			</div>
		</div>
	</div>
</div>

<!------------------------ style ------------------------->
<style>
	/* CSS can be added here */

	/* div {
		@apply px-1 border border-gray-500 rounded-md;
	} */

	#box1 {
		@apply px-1 border bg-amber-700  rounded-md;
	}
</style>
