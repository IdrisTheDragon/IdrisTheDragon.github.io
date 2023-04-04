const TabPosts = {
    template: '<div><h1 class="title">Posts</h1><h2 class="subtitle">Some content coming soon.</h2></div>'
}
const TabArchive = {
    template: '<div><h1 class="title">Archive</h1><h2 class="subtitle">Some content coming soon.</h2></div>'
}

export { TabPosts, TabArchive } 

new Vue({
    el: "#app",
    data: {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"]
    },
    components: {
        'custom-footer': window.httpVueLoader('./components/Footer.vue'),
        'custom-header': window.httpVueLoader('./components/Header.vue'),
        'tab-home': window.httpVueLoader('./components/Home.vue'),
    },
    computed: {
        currentTabComponent: function () {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
});