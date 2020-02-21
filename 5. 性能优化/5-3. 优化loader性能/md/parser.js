const scripts = `
<script>
    function setCurrent(){
        const links = document.querySelectorAll(".md-sidebar-toc a")
        for(const link of links){
            link.style.color="";
        }
        const hash = location.hash;
        const a = document.querySelector('a[href="'+hash+'"]');
        if(a){
            a.style.color = "#f40";
        }
    }
    setCurrent();
    window.onhashchange = setCurrent;
</script>
`;
var fs = require("fs");
module.exports = {
  onWillParseMarkdown: function(markdown) {
    return new Promise((resolve, reject) => {
      const reg = /\!\[(.*)\]\((\S+)\)/gm;
      markdown = markdown.replace(reg, function(match, g1, g2) {
        var width = "100%";
        if (g1) {
          var w = g1.split("|");
          if (w.length > 1) {
            width = w[1] + "px";
            g1 = w[0];
          }
        }
        return `
<p class="markdown-p-center">
  <img src="${g2}" alt="${g1}" style="max-width:${width}"/>
</p>
<p class="markdown-img-description">
  ${g1}
</p>
  `;
      });
      resolve(markdown);
    });
  },
  onDidParseMarkdown: function(html) {
    return new Promise((resolve, reject) => {
      return resolve(scripts + html);
    });
  }
};
