<template>
    <div class="home">
        <PageTitle class="fa fa-home" main="Content" sub="Sub Content"></PageTitle>
        <div class="content">
            <card-w-img class="cardWImgC" cardTitle="Hello" cardSubTitle="Yes baby, it works"/>
            <card-common class="cardWImgC" cardCommonHeader="Title" cardCommonContent="Content" cardCommonFooter="Footer"/>
            <card-common cardCommonHeader="Title" cardCommonContent="Content" cardCommonFooter="Footer"/>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import CardWImg from '../cards/CardWImg'
import CardCommon from '../cards/CardCommon'

export default {
    name: "HomeComp",
    components: { PageTitle, CardWImg, CardCommon },
    
}
</script>

<style>
    div.content {
        margin: 20px 0px 20px 0px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .cardWImgC {
        margin-right: 20px;
    }
</style>