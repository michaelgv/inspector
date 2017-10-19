<template>
  <div class="tabs">
    <div class="tab">
      <button v-bind:class="tabActive('whatsnewview')" v-on:click="switchTab('whatsnewview')">
        What's New
      </button>
      <button v-bind:class="tabActive('inspectorview')" v-on:click="switchTab('inspectorview')">
        Inspector
      </button>
    </div>
    <div class="tab-content">
      <div v-if="visibletabis('whatsnewview')">
        <whatsnew></whatsnew>
      </div>
      <div v-if="visibletabis('inspectorview')">
        <inspector></inspector>
      </div>
    </div>
  </div>
</template>

<script>
import whatsnew from './WhatsNew'
import inspector from './Inspector'
export default {
  name: 'HelloWorld',
  components: { whatsnew, inspector },
  data () {
    return {
      visibletabname: 'whatsnewview'
    }
  },
  mounted() {
    this.visibletabname = this.$store.state.visibleWindow.name;
  },
  methods: {
    visibletabis: function (tabName) {
      return this.visibletab() === tabName; 
    },
    visibletab: function () {
      return this.$store.state.visibleWindow.name; 
    },
    switchTab: function (tab) {
      this.$store.commit('set_visible_window', {
        name: tab
      })
      this.visibletabname = tab 
    },
    tabActive: function (tabasking) {
      var baseCssClass = 'tablinks '; 
      if(this.visibletab() === tabasking) {
        return baseCssClass + 'active';
      }
      return baseCssClass;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.tab {
  overflow: hidden;
  background-color: #0c0c0d;
  color: #f9f9fa;
}
div.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  color: #b1b1b3;
}
div.tab button:hover {
  background-color: #2a2a2e;
}
div.tab button.active {
  background-color: #2a2a2e;
  color: #ffffff;
  border-top: 2px solid #45a1ff;
}
</style>
