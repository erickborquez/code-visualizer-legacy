(window["webpackJsonpel-algoritmo-del-ritmo"]=window["webpackJsonpel-algoritmo-del-ritmo"]||[]).push([[45],{83:function(e,i){ace.define("ace/mode/gitignore_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,i,t){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment",regex:/^\s*#.*$/},{token:"keyword",regex:/^\s*!.*$/}]},this.normalizeRules()};l.metaData={fileTypes:["gitignore"],name:"Gitignore"},o.inherits(l,r),i.GitignoreHighlightRules=l})),ace.define("ace/mode/gitignore",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gitignore_highlight_rules"],(function(e,i,t){"use strict";var o=e("../lib/oop"),r=e("./text").Mode,l=e("./gitignore_highlight_rules").GitignoreHighlightRules,g=function(){this.HighlightRules=l,this.$behaviour=this.$defaultBehaviour};o.inherits(g,r),function(){this.lineCommentStart="#",this.$id="ace/mode/gitignore"}.call(g.prototype),i.Mode=g}))}}]);
//# sourceMappingURL=45.8ed238fe.chunk.js.map