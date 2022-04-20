<template>
    <footer class="footer"></footer>
</template>

<script>
export default {
    name: 'FooterTemp'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: rgb(94, 94, 94);
        color: #333;

        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
    }
</style>