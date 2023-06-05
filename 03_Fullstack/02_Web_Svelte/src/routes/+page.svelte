<script lang="ts">
	import { makeApiRequest } from '$lib/api';
	import { onMount } from 'svelte';

	let serverData = [] as { id: number; name: string; age: number; grade: number }[];
	let _createData = {} as { name: string; age: number; grade: number };
	let _updateData = {} as { id: number; name: string; age: number; grade: number };

	onMount(async () => {
		try {
			serverData = await makeApiRequest('http://127.0.0.1:3300/students', 'GET', {});
		} catch (error) {
			console.error('Error making API request:', error);
		}
	});

	const LoadData = async () => {
		try {
			const res = await makeApiRequest('http://127.0.0.1:3300/students', 'GET', {});
			console.log(res); // Do something with the received data
			// Update serverData when new data arrives
			serverData = res;
		} catch (error) {
			console.error(error); // Handle any errors that occurred during the API request
		}
	};

	const createData = async () => {
		try {
			if (_createData.name != undefined && _createData.name != '') {
				const filteredStudents = serverData.filter(
					(student) => student.name.toLowerCase() === _createData.name.toLowerCase()
				);
				console.log(filteredStudents);
				if (filteredStudents.length == 0) {
					const res = await makeApiRequest('http://127.0.0.1:3300/student', 'POST', _createData);
					console.log(res); // Do something with the received data
					LoadData(); // Update Table
					_createData = {} as { name: string; age: number; grade: number };
				}
			}
		} catch (error) {
			console.error('Error making API request:', error);
		}
	};

	const updateData = async () => {
		try {
			if (_updateData.name != undefined && _updateData.name != '') {
				const filteredStudents = serverData.some(
					(s) => s.name.toLowerCase() === _updateData.name.toLowerCase() && s.id !== _updateData.id
				);

				if (!filteredStudents) {
					console.log(`http://127.0.0.1:3300/student/${_updateData.id}`);
					const res = await makeApiRequest(
						`http://127.0.0.1:3300/student/${_updateData.id}`,
						'PUT',
						_updateData
					);
					console.log(res); // Do something with the received data
					LoadData(); // Update Table
				}
			}
		} catch (error) {
			console.error('Error making API request:', error);
		}
	};

	let selectedIndex = 0;
	const handleSelect = (event) => {
		selectedIndex = event.target.selectedIndex;
		_updateData = serverData[selectedIndex - 1];
	};
</script>

<div class="text-center">
	<h1 class="text-2xl font-bold m-2">Student Data</h1>
</div>

<div class="flex justify-center m-2">
	<div class="flex flex-col justify-center w-2/3 rounded-md border border-slate-900">
		<div class="flex p-2">
			<h2 class="text-xl">Table</h2>
		</div>
		<div class="flex px-2 pb-2">
			{#if serverData.length > 0}
				<table class="bg-white border border-gray-300 w-full">
					<thead>
						<tr>
							<th class="px-4 py-2 font-semibold text-gray-700 border-b">Name</th>
							<th class="px-4 py-2 font-semibold text-gray-700 border-b">Age</th>
							<th class="px-4 py-2 font-semibold text-gray-700 border-b">Grade</th>
						</tr>
					</thead>
					<tbody>
						{#each serverData as student}
							<tr>
								<td class="px-4 py-2 border-b text-center">{student.name}</td>
								<td class="px-4 py-2 border-b text-center">{student.age}</td>
								<td class="px-4 py-2 border-b text-center">{student.grade}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
	</div>
</div>

<div class="flex justify-center m-2">
	<div class="flex flex-col justify-center w-2/3 rounded-md border border-slate-900">
		<div class="flex p-2">
			<h2 class="text-xl">Create Data</h2>
		</div>
		<div class="relative mb-4 flex flex-wrap items-stretch px-2">
			<span
				class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 text-center px-2"
				id="inputGroup-sizing-default">Name</span
			>
			<input
				bind:value={_createData.name}
				type="text"
				class="flex-auto relative m-0 block min-w-0 rounded-r border border-solid border-neutral-300 bg-transparent"
			/>
		</div>

		<div class="relative mb-4 flex flex-wrap items-stretch px-2">
			<span
				class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 text-center px-2"
				id="inputGroup-sizing-default">Age</span
			>
			<input
				bind:value={_createData.age}
				type="number"
				min="15"
				step="1"
				class="flex-auto relative m-0 block min-w-0 rounded-r border border-solid border-neutral-300 bg-transparent"
			/>
		</div>

		<div class="relative mb-4 flex flex-wrap items-stretch px-2">
			<span
				class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 text-center px-2"
				id="inputGroup-sizing-default">Grade</span
			>
			<input
				bind:value={_createData.grade}
				type="number"
				min="0"
				max="100"
				step="0.1"
				class="flex-auto relative m-0 block min-w-0 rounded-r border border-solid border-neutral-300 bg-transparent"
			/>
		</div>

		<div class="flex justify-center">
			<button
				on:click={createData}
				type="submit"
				class=" bg-green-500 inline-block w-full rounded-b-md px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
			>
				Create
			</button>
		</div>
	</div>
</div>

<div class="flex justify-center m-2">
	<div class="flex flex-col justify-center w-2/3 rounded-md border border-slate-900">
		<div class="flex p-2">
			<h2 class="text-xl">Upate Data</h2>
		</div>

		<div class="relative mb-4 flex flex-wrap items-stretch px-2">
			<span
				class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 text-center px-2"
				id="inputGroup-sizing-default"
			>
				Select Name</span
			>
			<select
				on:change={handleSelect}
				class="flex-auto relative m-0 block min-w-0 rounded-r border border-solid border-neutral-300 bg-transparent"
			>
				<option value="">Select an option</option>
				{#each serverData as option}
					<option value={option.name}>{option.name}</option>
				{/each}
			</select>
		</div>

		{#if selectedIndex > 0}
			<div class="relative mb-4 flex flex-wrap items-stretch px-2">
				<span
					class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 text-center px-2"
					id="inputGroup-sizing-default">Name</span
				>
				<input
					bind:value={_updateData.name}
					type="text"
					class="flex-auto relative m-0 block min-w-0 rounded-r border border-solid border-neutral-300 bg-transparent"
				/>
			</div>
			<div class="relative mb-4 flex flex-wrap items-stretch px-2">
				<span
					class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 text-center px-2"
					id="inputGroup-sizing-default">Age</span
				>
				<input
					bind:value={_updateData.age}
					type="number"
					min="15"
					step="1"
					class="flex-auto relative m-0 block min-w-0 rounded-r border border-solid border-neutral-300 bg-transparent"
				/>
			</div>
			<div class="relative mb-4 flex flex-wrap items-stretch px-2">
				<span
					class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 text-center px-2"
					id="inputGroup-sizing-default">Grade</span
				>
				<input
					bind:value={_updateData.grade}
					max="100"
					min="0"
					type="number"
					step="0.1"
					class="flex-auto relative m-0 block min-w-0 rounded-r border border-solid border-neutral-300 bg-transparent"
				/>
			</div>
			<div class="flex justify-center">
				<button
					on:click={updateData}
					type="submit"
					class=" bg-green-500 inline-block w-full rounded-b-md px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
				>
					Upate
				</button>
			</div>
		{/if}
	</div>
</div>
