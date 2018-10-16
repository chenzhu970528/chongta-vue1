<template>
  <div>
    <div id="content">

      <div>
        <div class="left">
          <list></list>
        </div>
      </div>
      <div class="right">
        <hot></hot>
        <like></like>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List'
  import Hot from './Hot'
  import Like from './Like'
  import Com_paging from './Com_paging'

  export default {
    name: "Lists",
    components: {
      'list': List,
      'hot': Hot,
      'like': Like,
      'com_paging': Com_paging,
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    padding: 0
  }

  #content {
    box-shadow: -2px 2px 10px 2px #bcbcbc;
    background: rgba(255, 255, 255, 0.9);
    width: 1240px;
    height: 2000px;
    margin: auto;
    position: relative;
  }

  .left {
    display: inline-block;
    width: 830px;
  }

  .right {
    position: absolute;
    top: 24px;
    right: 25px;
    width: 360px;
  }


</style>
