<template>
  <div class="box">
    <div class="row">
      <div class="col large">
        <div class="box-inside">
          {{ inspectorDOM }}
        </div>
      </div>
      <div class="col small">
        <div class="tab">
          <button v-on:click="switchTab('playbackview')" v-bind:class="tabActive('playbackview')">Playback</button>
          <button v-on:click="switchTab('execview')" v-bind:class="tabActive('execview')">Exec</button>
        </div>
        <div class="tabcontents">
          <div class="tab-full" v-if="tabActive('playbackview', true)">
            <ul>
              <li v-for="playback in playbacks">
                <a v-on:click="revertDom(playback)">
                  {{ playback.time }}
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-full" v-if="tabActive('execview', true)">
            Exec View
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inspector',
  data () {
    return {
        activetab: 'playbackview',
        playbacks: [],
        inspectorDOM: '',
    }
  },
  mounted () {
    this.playbacks = this.$store.state.rawDomHistory
  },
  methods: {
      tabActive: function (tabName, asBoolean) {
        if(typeof asBoolean !== 'undefined' && asBoolean) {
          if(this.activetab === tabName) {
            return true
          }
          return false
        }
        if(this.activetab === tabName) {
          return 'tablinks active'
        }
        return 'tablinks'
      },
      switchTab: function(tabName) {
          this.activetab = tabName
      },
      revertDom: function (playbackEntry) {
        var time            = playbackEntry.time; 
        var rawDOM          = playbackEntry.rawDOM;
        var rawDOMDecoded   = atob(rawDOM);
        this.$store.commit('addmessagelog', {
            message: `Restored DOM to ${time} from Inspector.Playback`
        })
        this.inspectorDOM = rawDOMDecoded;
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
    display: flex;
}
.col {
    flex: 1;
}
.col.large {
    flex: 6;
}
.col.small {
    flex: 1;
}
div.box {
  overflow: hidden;
  background-color: #2a2a2e;
  color: #f9f9fa;
  height: 100vh;
  max-height: 100%;
}
.box-inside {
    padding-left: 4px;
    padding-bottom: 4px;
    padding-right: 4px;
}
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
  padding: 8px;
  color: #b1b1b3;
}
div.tab button:hover {
  background-color: #2a2a2e;
}
div.tab button.active {
  background-color: #0c0c0d;
  color: #ffffff;
  border-top: 2px solid #45a1ff;
}
.tab-full {
    height: 100vh;
    max-height: 100%;
    background-color: #0c0c0d;
    padding: 4px;
    font-size: 14px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 4px;
  font-size: 15px;
  font-weight: 200;
}
</style>
