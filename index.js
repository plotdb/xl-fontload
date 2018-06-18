// Generated by LiveScript 1.3.1
$(document).ready(function(){
  var editor;
  editor = {
    init: function(){
      var this$ = this;
      this.textarea = document.querySelector('textarea');
      this.textarea.addEventListener('keyup', function(){
        return this$.sync();
      });
      document.querySelector('#chooser').addEventListener('click', function(e){
        var font;
        if (!e || !e.target) {
          return;
        }
        font = e.target.getAttribute('data-font');
        if (!font) {
          return;
        }
        return this$.load(font);
      });
      return this.load('王漢宗中楷注音體');
    },
    load: function(font){
      var this$ = this;
      return xfl.load("/fonts/" + font, function(font){
        this$.font = font;
        this$.font.sync(document.body.innerText);
        return this$.sync();
      });
    },
    sync: function(){
      if (!this.font) {
        return;
      }
      this.font.sync(this.textarea.value);
      this.textarea.setAttribute('class', "form-control " + this.font.className);
      return document.body.setAttribute('class', this.font.className + "");
    }
  };
  editor.init();
  return xfl.load('/fonts/王漢宗仿宋體', function(font){
    var headlines, texts;
    headlines = Array.from(document.querySelectorAll('h1,h2,h3'));
    texts = headlines.map(function(it){
      return it.innerText;
    }).join('');
    font.sync(texts);
    return headlines.map(function(it){
      return it.classList.add(font.className);
    });
  });
});