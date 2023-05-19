<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher()

    function sendEvent(eventName:string){
        dispatch('event',{
            page:eventName
        })
    }
</script>

<div class="flex flex-row m-5 h-10 bg-headers rounded-full flex-grow">
    <img class="rounded-full h-10 w-28 object-cover hover:object-none" src="cook.gif" alt="why"/>
    <button class="bg-headers ml-20 w-20 h-10 text-white rounded-full" on:click={() => sendEvent("Experience")}> Experience </button>
    <button class="bg-headers ml-20 w-22 h-10 text-white rounded-full" on:click={() => sendEvent("HomeAutomation")} > Home Automation </button>
    <button class="bg-headers ml-20 w-20 h-10 text-white rounded-full" on:click={() => sendEvent("Notes")} > Notes </button>
    <button class="bg-headers ml-20 w-20 h-10 text-white rounded-full" on:click={() => sendEvent("Triggers")} > Triggers </button>
</div>