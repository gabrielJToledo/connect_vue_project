<template>
    <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'MenuTemp',
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    .menu {
        grid-area: menu;
        background-color: #f7a50c;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-top: 2px solid #b35f00;
    }
</style>