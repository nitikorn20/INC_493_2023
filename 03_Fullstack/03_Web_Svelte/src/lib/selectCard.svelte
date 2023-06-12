<script>
	export let text = '';
	export let placeholder = '';
	export let className = '';
	export let value = '';
</script>

<div class=" bg-transparent flex justify-center m-2">
	<div class={`bg-white p-4 w-96 rounded-md ${className}`}>
		<h1>{text}</h1>
		<div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
			<select
				class="flex-grow outline-none border-0 focus:outline-none focus:ring-0"
				{placeholder}
				bind:value
			/>
		</div>
	</div>
</div>
