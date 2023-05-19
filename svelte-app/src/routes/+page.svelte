<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Experience from "../views/experience.svelte";
    import HomeAutomation from "../views/homeAutomation.svelte";
    import Notes from "../views/notes.svelte";
    import Triggers from "../views/triggers.svelte";

    let page = "Experience"

    function navbarHandler(e: any){
        console.log(e)
        page = e.detail.page
    }
</script>

<div class="bg-primary w-screen h-screen fixed">

    <Navbar on:event={navbarHandler}/>

    {#if page == "Experience"}
        <Experience/>
    {/if}
    {#if page == "HomeAutomation"}
        <HomeAutomation/>
    {/if}
    {#if page == "Notes"}
        <Notes/>
    {/if}
    {#if page == "Triggers"}
        <Triggers/>
    {/if}
</div>
