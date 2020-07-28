(this["webpackJsonpel-algoritmo-del-ritmo"]=this["webpackJsonpel-algoritmo-del-ritmo"]||[]).push([[91],{115:function(e,t){ace.define("ace/mode/mips_assembler_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,i){"use strict";var s=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"support.function.pseudo.mips",regex:"\\b(?:mul|abs|div|divu|mulo|mulou|neg|negu|not|rem|remu|rol|ror|li|seq|sge|sgeu|sgt|sgtu|sle|sleu|sne|b|beqz|bge|bgeu|bgt|bgtu|ble|bleu|blt|bltu|bnez|la|ld|ulh|ulhu|ulw|sd|ush|usw|move|mfc1\\.d|l\\.d|l\\.s|s\\.d|s\\.s)\\b",comment:"ok actually this are instructions, but one also could call them funtions\u2026"},{token:"support.function.mips",regex:"\\b(?:abs\\.d|abs\\.s|add|add\\.d|add\\.s|addi|addiu|addu|and|andi|bc1f|bc1t|beq|bgez|bgezal|bgtz|blez|bltz|bltzal|bne|break|c\\.eq\\.d|c\\.eq\\.s|c\\.le\\.d|c\\.le\\.s|c\\.lt\\.d|c\\.lt\\.s|ceil\\.w\\.d|ceil\\.w\\.s|clo|clz|cvt\\.d\\.s|cvt\\.d\\.w|cvt\\.s\\.d|cvt\\.s\\.w|cvt\\.w\\.d|cvt\\.w\\.s|div|div\\.d|div\\.s|divu|eret|floor\\.w\\.d|floor\\.w\\.s|j|jal|jalr|jr|lb|lbu|lh|lhu|ll|lui|lw|lwc1|lwl|lwr|madd|maddu|mfc0|mfc1|mfhi|mflo|mov\\.d|mov\\.s|movf|movf\\.d|movf\\.s|movn|movn\\.d|movn\\.s|movt|movt\\.d|movt\\.s|movz|movz\\.d|movz\\.s|msub|mtc0|mtc1|mthi|mtlo|mul|mul\\.d|mul\\.s|mult|multu|neg\\.d|neg\\.s|nop|nor|or|ori|round\\.w\\.d|round\\.w\\.s|sb|sc|sdc1|sh|sll|sllv|slt|slti|sltiu|sltu|sqrt\\.d|sqrt\\.s|sra|srav|srl|srlv|sub|sub\\.d|sub\\.s|subu|sw|swc1|swl|swr|syscall|teq|teqi|tge|tgei|tgeiu|tgeu|tlt|tlti|tltiu|tltu|trunc\\.w\\.d|trunc\\.w\\.s|xor|xori)\\b"},{token:"storage.type.mips",regex:"\\.(?:ascii|asciiz|byte|data|double|float|half|kdata|ktext|space|text|word|set\\s*(?:noat|at))\\b"},{token:"storage.modifier.mips",regex:"\\.(?:align|extern||globl)\\b"},{token:["entity.name.function.label.mips","meta.function.label.mips"],regex:"\\b([A-Za-z0-9_]+)(:)"},{token:["punctuation.definition.variable.mips","variable.other.register.usable.by-number.mips"],regex:"(\\$)(0|[2-9]|1[0-9]|2[0-5]|2[89]|3[0-1])\\b"},{token:["punctuation.definition.variable.mips","variable.other.register.usable.by-name.mips"],regex:"(\\$)(zero|v[01]|a[0-3]|t[0-9]|s[0-7]|gp|sp|fp|ra)\\b"},{token:["punctuation.definition.variable.mips","variable.other.register.reserved.mips"],regex:"(\\$)(at|k[01]|1|2[67])\\b"},{token:["punctuation.definition.variable.mips","variable.other.register.usable.floating-point.mips","variable.other.register.usable.floating-point.mips"],regex:"(\\$)(f)([0-9]|1[0-9]|2[0-9]|3[0-1])\\b"},{token:"constant.numeric.float.mips",regex:"\\b\\d+\\.\\d+\\b"},{token:"constant.numeric.integer.mips",regex:"\\b(?:\\d+|0(?:x|X)[a-fA-F0-9]+)\\b"},{token:"punctuation.definition.string.begin.mips",regex:'"',push:[{token:"punctuation.definition.string.end.mips",regex:'"',next:"pop"},{token:"constant.character.escape.mips",regex:'\\\\[rnt\\\\"]'},{defaultToken:"string.quoted.double.mips"}]},{token:"punctuation.definition.comment.mips",regex:"#",push:[{token:"comment.line.number-sign.mips",regex:"$",next:"pop"},{defaultToken:"comment.line.number-sign.mips"}]}]},this.normalizeRules()};n.metaData={fileTypes:["s","mips","spim","asm"],keyEquivalent:"^~M",name:"MIPS Assembler",scopeName:"source.mips"},s.inherits(n,o),t.MIPSAssemblerHighlightRules=n})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,i){"use strict";var s=e("../../lib/oop"),o=e("../../range").Range,n=e("./fold_mode").FoldMode,l=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};s.inherits(l,n),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var s=e.getLine(i);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var o=this._getFoldWidgetBase(e,t,i);return!o&&this.startRegionRe.test(s)?"start":o},this.getFoldWidgetRange=function(e,t,i,s){var o,n=e.getLine(i);if(this.startRegionRe.test(n))return this.getCommentRegionBlock(e,n,i);if(o=n.match(this.foldingStartMarker)){var l=o.index;if(o[1])return this.openingBracketBlock(e,o[1],i,l);var r=e.getCommentFoldRange(i,l+o[0].length,1);return r&&!r.isMultiLine()&&(s?r=this.getSectionRange(e,i):"all"!=t&&(r=null)),r}if("markbegin"!==t&&(o=n.match(this.foldingStopMarker))){l=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],i,l):e.getCommentFoldRange(i,l,-1)}},this.getSectionRange=function(e,t){for(var i=e.getLine(t),s=i.search(/\S/),n=t,l=i.length,r=t+=1,a=e.getLength();++t<a;){var g=(i=e.getLine(t)).search(/\S/);if(-1!==g){if(s>g)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=n)break;if(u.isMultiLine())t=u.end.row;else if(s==g)break}r=t}}return new o(n,l,r,e.getLine(r).length)},this.getCommentRegionBlock=function(e,t,i){for(var s=t.search(/\s*$/),n=e.getLength(),l=i,r=/^\s*(?:\/\*|\/\/)#(end)?region\b/,a=1;++i<n;){t=e.getLine(i);var g=r.exec(t);if(g&&(g[1]?a--:a++,!a))break}if(i>l)return new o(l,s,i,t.length)}}.call(l.prototype)})),ace.define("ace/mode/mips_assembler",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mips_assembler_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,i){"use strict";var s=e("../lib/oop"),o=e("./text").Mode,n=e("./mips_assembler_highlight_rules").MIPSAssemblerHighlightRules,l=e("./folding/cstyle").FoldMode,r=function(){this.HighlightRules=n,this.foldingRules=new l};s.inherits(r,o),function(){this.$id="ace/mode/mips_assembler"}.call(r.prototype),t.Mode=r}))}}]);
//# sourceMappingURL=91.a401af05.chunk.js.map