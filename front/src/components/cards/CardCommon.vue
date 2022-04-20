<template>
    <div class="cardCommon">
        <div class="cardCommonHeader">{{cardCommonHeader}}</div>
        <div class="cardCommonContent"><div>{{cardCommonContent}}</div>
            <button>Send!</button>
        </div>
        <div class="cardCommonFooter">{{cardCommonFooter}}</div>
    </div>
</template>

<script>
export default {
 name: "CardCommon",
 props: [ 'cardCommonHeader', 'cardCommonContent', 'cardCommonFooter']
}
</script>

<style>
    div.cardCommon {
        width: 300px;
        height: 180px;
        border: solid 1px rgb(156, 156, 156);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.144);
        /* flex-grow: 1; */
        margin: 0px 15px 10px 15px;
    }

    div.cardCommonHeader {
        border-bottom: solid 1px rgb(156, 156, 156);
        padding: 10px 15px 10px 15px;
        background-color: rgb(228, 228, 228);
    }

    div.cardCommonContent {
        display: flex;
        flex-direction: column;
        padding: 10px 15px 10px 15px;
        justify-content: space-around;
        height: 100vh;
    }

    div.cardCommonContent > button {
        width: 60px;
        height: 20px;
    }

    div.cardCommonFooter {
        border-top: solid 1px rgb(156, 156, 156);
        padding: 10px 15px 10px 15px;
        background-color: rgb(228, 228, 228);
    }
</style>