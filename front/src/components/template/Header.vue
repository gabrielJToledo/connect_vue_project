<template>
  <header class="header">
    <a :class="toggleClass" @click="toggleMenu" v-if="!hideToggle || !user">
        <i class="fa fa-lg" :class="icon" v-if="user"></i>
    </a>
    <h1 class="title">
        <router-link to="/">
            {{title}}
        </router-link>
    </h1>
    <UserDropdown v-if="!hideUserDropdown"></UserDropdown>
  </header>
</template>

<script>
import UserDropdown from './UserDropdown.vue'

export default {
    name: 'HeaderTemp',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        },
        user() {
            return this.$store.state.user
        },
        toggleClass() {
            return this.$store.state.user ? "toggle" : ''
        }
    },
    methods: {
        toggleMenu: function() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(135deg, #f7a50c 0%, #ff8800 100%);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: white;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a {
        color: white;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 45px;
        height: 100%;
        color: white;
        justify-self: flex-start;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header.header > a.toggle:hover {
        background-color: rgba(0, 0, 0, 0.329);
    }
</style>