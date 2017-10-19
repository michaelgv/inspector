<template>
  <div class="box">
    <div class="box-inside">
      <h3 class="display-20 display-text-center">
        Hold on, I think I found something...
      </h3>
      <p>        
        <div class="features">
            <div class="feature">
                <b class="title">Inspector Tab</b>
                <br />
                <p class="description">
                  Bring DebugTools into the DOM with the Inspector tab. If you've ever worked with Chrome or Firefox Devtools, you'll feel right at home with Inspector.
                </p>
            </div>
            <div class="feature">
                <b class="title">Exec Console</b>
                <br />
                <p class="description">
                  Code Editor, Console, and real-time debugger - all in one.
                </p>
            </div>
            <div class="feature">
                <b class="title">DOM Playback</b>
                <br />
                <p class="description">
                  Walk through the dom, step by step with DOM Playback in the inspector window
                </p>
            </div>
        </div>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatsNew',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.features {
    display: block;
    padding-left: 20px;
    padding-right: 20px;
}
.feature {
    display: block;
}
.feature > b.title {
    font-size: 22px;
    font-weight: 300;
}
.feature > p.description {
    font-size: 17px; 
    font-weight: 300;
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
</style>
