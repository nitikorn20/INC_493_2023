<script>
	export let text = '';
	export let type = '';
	export let placeholder = '';
	export let className = '';
	export let value = '';
</script>

<div class=" bg-transparent flex justify-center m-2">
	<div class={`bg-white p-4 w-96 rounded-md ${className}`}>
		<h1>{text}</h1>
		{#if type == 'password'}
			<div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
				<input
					class="flex-grow outline-none border-0 focus:outline-none focus:ring-0"
					type="password"
					{placeholder}
					bind:value={value} 
				/>
			</div>
		{:else}
			<div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
				<input
					class="flex-grow outline-none border-0 focus:outline-none focus:ring-0"
					type="text"
					{placeholder}
					bind:value={value} 
				/>
			</div>
		{/if}
	</div>
</div>
