<template>
        <div class="cardWImg">
            <div class="img"><img src="@/assets/praia.jpg" alt="Something"></div>
            <div class="cardContent">
                <h2>{{ cardTitle }}</h2>
                <h4>{{ cardSubTitle }}</h4>
            </div> 
        </div>
</template>

<script>
export default {
    name: 'cardWImg',
    props: [ 'cardTitle', 'cardSubTitle' ]
}
</script>

<style>
    div.cardWImg {
        display: flex;
        width: 540px;
        height: 180px;
        border: solid 1px rgb(156, 156, 156);
        border-radius: 4px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.281);
        flex-grow: 1;
        margin: 0px 15px 10px 15px;
    }

    div.img > img {
        width: 270px;
        height: 100%;
    }

    div.cardContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
        align-items: center;
    }

    div.cardContent > h2 {
        margin: 5px 0px 0px 0px;
    }

    div.cardContent > h4 {
        color: gray;
    }
</style>