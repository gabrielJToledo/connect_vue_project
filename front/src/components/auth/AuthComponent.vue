<template>
    <div class="authContent">
        <CardLogin />
    </div>
</template>

<script>
import CardLogin from './CardLogin'

export default {
    name: "AuthComponent",
    components: { CardLogin },
    
}
</script>

<style>
    .authContent {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>