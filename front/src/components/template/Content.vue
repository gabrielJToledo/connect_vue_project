<template>
    <div class="titleContent">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'ContentTemp'
}
</script>

<style>
    .titleContent {
        grid-area: content;
        background-color: rgb(255, 255, 255);
        padding: 20px;
        display: flex;
        flex-direction: column;
    }
</style>