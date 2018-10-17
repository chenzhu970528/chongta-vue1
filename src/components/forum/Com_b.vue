<template>
   <!--<div> &lt;!&ndash;发帖&ndash;&gt;-->
  <!--<div id="editorElem" style="text-align:left"></div>-->
  <!--<button v-on:click="getContent">发表</button>-->
  <!--</div>-->
</template>
<script>
  // import E from 'wangeditor'
  export default {
    name:  "Com_b",
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      }
    },
    mounted() {
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        editor.config.menus = [
          'source',
          '|',     // '|' 是菜单组的分割线
          'bold',
          'underline',
          'italic',
          'strikethrough',
          'eraser',
          'forecolor',
          'bgcolor'
        ];
        this.editorContent = html
        // editor.config.menus = $.map(wangEditor.config.menus, function(item, key) {
        //   if (item === 'insertcode') {
        //     return null;
        //   }
        //   if (item === 'fullscreen') {
        //     return null;
        //   }
        //   return item;
        // });
      }

      editor.create()
    }
  }
</script>

<style scoped>

</style>
