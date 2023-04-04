const TabPosts = {
    template: '<div><h1 class="title">Posts</h1><h2 class="subtitle">Some content coming soon.</h2></div>'
};
const TabArchive = {
    template: '<div><h1 class="title">Archive</h1><h2 class="subtitle">Some content coming soon.</h2></div>'
};

const options = {
    moduleCache: {
      vue: Vue
    },
    async getFile(url) {
      
      const res = await fetch(url);
      if ( !res.ok )
        throw Object.assign(new Error(res.statusText + ' ' + url), { res });
      return {
        getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
      }
    },
    addStyle(textContent) {

      const style = Object.assign(document.createElement('style'), { textContent });
      const ref = document.head.getElementsByTagName('style')[0] || null;
      document.head.insertBefore(style, ref);
    },
  }

const { loadModule } = window['vue3-sfc-loader'];

const app = Vue.createApp({
    el: "#app",
    data() {
        return {
            currentTab: "Home",
            tabs: ["Home", "Posts", "Archive"]
        }
    },
    components: {
        'tab-archive': TabArchive,
        'tab-posts': TabPosts,
        'custom-footer': Vue.defineAsyncComponent( () => loadModule('./components/Footer.vue', options)),
        'custom-header': Vue.defineAsyncComponent( () => loadModule('./components/Header.vue', options)),
        'tab-home': Vue.defineAsyncComponent( () => loadModule('./components/Home.vue', options)),
    },
    computed: {
        currentTabComponent: function () {
            return "tab-" + this.currentTab.toLowerCase();
        }
    }
});

app.mount('#app');