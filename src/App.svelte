<!-- DEPENDENCIES -->
<!-- npm i degit -->
<!-- npm install -->


<!-- How to create a new svelte project: -->
<!-- degit sveltejs/template [project-name]-->

<!-- alternative way -->
<!-- npx degit sveltejs/template [project-name] -->
<!---------------------------------------------->

<!-- CODE -->
<script>
	//imports:--------------
	import Header from "./Components/Header.svelte"
	import Footer from "./Components/Footer.svelte"
	import CreatePollForm from "./Components/CreatePollForm.svelte"
	import PollList from "./Components/PollList.svelte"
	import Tabs from "./shared/Tabs.svelte";

	//variables:-------
	let items = ['Current Polls', 'Add New Poll']; //tabs
	let activeItem = 'Current Polls'; //active tab

	//functions:----
	const tabChange = (event) => {
		//Will change the current tab
		//--------------------------
		activeItem = event.detail;
	}

	const handleAdd = (event) => {
		//Will add a new poll to the polls array
		//------------------------------------
		activeItem = 'Current Polls'; //switch back to all polls tab.
	}
</script>

<Header />
<!-- HTML -->
<main>
	<!-- Component -->
	<Tabs items={items} activeItem={activeItem} on:tabChange={tabChange}/>
	
	<!-- conditional statement -->
	{#if activeItem === 'Current Polls'}
		<!-- component -->
		 <PollList />
	{:else if activeItem === 'Add New Poll'}
		<!-- component -->
		<CreatePollForm on:add={handleAdd}/>
	{/if}
</main>
<Footer />

<!-- CSS -->
<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>