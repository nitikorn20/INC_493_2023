<script>
	export let title;
</script>

<div class="flex flex-col min-h-screen">
	<nav class="bg-gray-800">
		<!-- Add your menu content here -->
	</nav>

	<main class="flex-grow">
		<h1 class="text-2xl font-bold mb-4">{title}</h1>
		<slot />
	</main>

	<footer class="bg-gray-800 py-4 text-white text-center">
		<!-- Add your footer content here -->
	</footer>
</div>
