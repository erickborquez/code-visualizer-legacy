(window["webpackJsonpel-algoritmo-del-ritmo"]=window["webpackJsonpel-algoritmo-del-ritmo"]||[]).push([[13],{50:function(s,e){ace.define("ace/mode/assembly_x86_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(s,e,t){"use strict";var d=s("../lib/oop"),p=s("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"keyword.control.assembly",regex:"\\b(?:aaa|aad|aam|aas|adc|add|addpd|addps|addsd|addss|addsubpd|addsubps|aesdec|aesdeclast|aesenc|aesenclast|aesimc|aeskeygenassist|and|andpd|andps|andnpd|andnps|arpl|blendpd|blendps|blendvpd|blendvps|bound|bsf|bsr|bswap|bt|btc|btr|bts|cbw|cwde|cdqe|clc|cld|cflush|clts|cmc|cmov(?:n?e|ge?|ae?|le?|be?|n?o|n?z)|cmp|cmppd|cmpps|cmps|cnpsb|cmpsw|cmpsd|cmpsq|cmpss|cmpxchg|cmpxchg8b|cmpxchg16b|comisd|comiss|cpuid|crc32|cvtdq2pd|cvtdq2ps|cvtpd2dq|cvtpd2pi|cvtpd2ps|cvtpi2pd|cvtpi2ps|cvtps2dq|cvtps2pd|cvtps2pi|cvtsd2si|cvtsd2ss|cvts2sd|cvtsi2ss|cvtss2sd|cvtss2si|cvttpd2dq|cvtpd2pi|cvttps2dq|cvttps2pi|cvttps2dq|cvttps2pi|cvttsd2si|cvttss2si|cwd|cdq|cqo|daa|das|dec|div|divpd|divps|divsd|divss|dppd|dpps|emms|enter|extractps|f2xm1|fabs|fadd|faddp|fiadd|fbld|fbstp|fchs|fclex|fnclex|fcmov(?:n?e|ge?|ae?|le?|be?|n?o|n?z)|fcom|fcmop|fcompp|fcomi|fcomip|fucomi|fucomip|fcos|fdecstp|fdiv|fdivp|fidiv|fdivr|fdivrp|fidivr|ffree|ficom|ficomp|fild|fincstp|finit|fnint|fist|fistp|fisttp|fld|fld1|fldl2t|fldl2e|fldpi|fldlg2|fldln2|fldz|fldcw|fldenv|fmul|fmulp|fimul|fnop|fpatan|fprem|fprem1|fptan|frndint|frstor|fsave|fnsave|fscale|fsin|fsincos|fsqrt|fst|fstp|fstcw|fnstcw|fstenv|fnstenv|fsts|fnstsw|fsub|fsubp|fisub|fsubr|fsubrp|fisubr|ftst|fucom|fucomp|fucompp|fxam|fxch|fxrstor|fxsave|fxtract|fyl2x|fyl2xp1|haddpd|haddps|husbpd|hsubps|idiv|imul|in|inc|ins|insb|insw|insd|insertps|int|into|invd|invplg|invpcid|iret|iretd|iretq|lahf|lar|lddqu|ldmxcsr|lds|les|lfs|lgs|lss|lea|leave|lfence|lgdt|lidt|llgdt|lmsw|lock|lods|lodsb|lodsw|lodsd|lodsq|lsl|ltr|maskmovdqu|maskmovq|maxpd|maxps|maxsd|maxss|mfence|minpd|minps|minsd|minss|monitor|mov|movapd|movaps|movbe|movd|movq|movddup|movdqa|movdqu|movq2q|movhlps|movhpd|movhps|movlhps|movlpd|movlps|movmskpd|movmskps|movntdqa|movntdq|movnti|movntpd|movntps|movntq|movq|movq2dq|movs|movsb|movsw|movsd|movsq|movsd|movshdup|movsldup|movss|movsx|movsxd|movupd|movups|movzx|mpsadbw|mul|mulpd|mulps|mulsd|mulss|mwait|neg|not|or|orpd|orps|out|outs|outsb|outsw|outsd|pabsb|pabsw|pabsd|packsswb|packssdw|packusdw|packuswbpaddb|paddw|paddd|paddq|paddsb|paddsw|paddusb|paddusw|palignr|pand|pandn|pause|pavgb|pavgw|pblendvb|pblendw|pclmulqdq|pcmpeqb|pcmpeqw|pcmpeqd|pcmpeqq|pcmpestri|pcmpestrm|pcmptb|pcmptgw|pcmpgtd|pcmpgtq|pcmpistri|pcmpisrm|pextrb|pextrd|pextrq|pextrw|phaddw|phaddd|phaddsw|phinposuw|phsubw|phsubd|phsubsw|pinsrb|pinsrd|pinsrq|pinsrw|pmaddubsw|pmadddwd|pmaxsb|pmaxsd|pmaxsw|pmaxsw|pmaxub|pmaxud|pmaxuw|pminsb|pminsd|pminsw|pminub|pminud|pminuw|pmovmskb|pmovsx|pmovzx|pmuldq|pmulhrsw|pmulhuw|pmulhw|pmulld|pmullw|pmuludw|pop|popa|popad|popcnt|popf|popfd|popfq|por|prefetch|psadbw|pshufb|pshufd|pshufhw|pshuflw|pshufw|psignb|psignw|psignd|pslldq|psllw|pslld|psllq|psraw|psrad|psrldq|psrlw|psrld|psrlq|psubb|psubw|psubd|psubq|psubsb|psubsw|psubusb|psubusw|test|ptest|punpckhbw|punpckhwd|punpckhdq|punpckhddq|punpcklbw|punpcklwd|punpckldq|punpckldqd|push|pusha|pushad|pushf|pushfd|pxor|prcl|rcr|rol|ror|rcpps|rcpss|rdfsbase|rdgsbase|rdmsr|rdpmc|rdrand|rdtsc|rdtscp|rep|repe|repz|repne|repnz|roundpd|roundps|roundsd|roundss|rsm|rsqrps|rsqrtss|sahf|sal|sar|shl|shr|sbb|scas|scasb|scasw|scasd|set(?:n?e|ge?|ae?|le?|be?|n?o|n?z)|sfence|sgdt|shld|shrd|shufpd|shufps|sidt|sldt|smsw|sqrtpd|sqrtps|sqrtsd|sqrtss|stc|std|stmxcsr|stos|stosb|stosw|stosd|stosq|str|sub|subpd|subps|subsd|subss|swapgs|syscall|sysenter|sysexit|sysret|teset|ucomisd|ucomiss|ud2|unpckhpd|unpckhps|unpcklpd|unpcklps|vbroadcast|vcvtph2ps|vcvtp2sph|verr|verw|vextractf128|vinsertf128|vmaskmov|vpermilpd|vpermilps|vperm2f128|vtestpd|vtestps|vzeroall|vzeroupper|wait|fwait|wbinvd|wrfsbase|wrgsbase|wrmsr|xadd|xchg|xgetbv|xlat|xlatb|xor|xorpd|xorps|xrstor|xsave|xsaveopt|xsetbv|lzcnt|extrq|insertq|movntsd|movntss|vfmaddpd|vfmaddps|vfmaddsd|vfmaddss|vfmaddsubbpd|vfmaddsubps|vfmsubaddpd|vfmsubaddps|vfmsubpd|vfmsubps|vfmsubsd|vfnmaddpd|vfnmaddps|vfnmaddsd|vfnmaddss|vfnmsubpd|vfnmusbps|vfnmusbsd|vfnmusbss|cvt|xor|cli|sti|hlt|nop|lock|wait|enter|leave|ret|loop(?:n?e|n?z)?|call|j(?:mp|n?e|ge?|ae?|le?|be?|n?o|n?z))\\b",caseInsensitive:!0},{token:"variable.parameter.register.assembly",regex:"\\b(?:CS|DS|ES|FS|GS|SS|RAX|EAX|RBX|EBX|RCX|ECX|RDX|EDX|RCX|RIP|EIP|IP|RSP|ESP|SP|RSI|ESI|SI|RDI|EDI|DI|RFLAGS|EFLAGS|FLAGS|R8-15|(?:Y|X)MM(?:[0-9]|10|11|12|13|14|15)|(?:A|B|C|D)(?:X|H|L)|CR(?:[0-4]|DR(?:[0-7]|TR6|TR7|EFER)))\\b",caseInsensitive:!0},{token:"constant.character.decimal.assembly",regex:"\\b[0-9]+\\b"},{token:"constant.character.hexadecimal.assembly",regex:"\\b0x[A-F0-9]+\\b",caseInsensitive:!0},{token:"constant.character.hexadecimal.assembly",regex:"\\b[A-F0-9]+h\\b",caseInsensitive:!0},{token:"string.assembly",regex:/'([^\\']|\\.)*'/},{token:"string.assembly",regex:/"([^\\"]|\\.)*"/},{token:"support.function.directive.assembly",regex:"^\\[",push:[{token:"support.function.directive.assembly",regex:"\\]$",next:"pop"},{defaultToken:"support.function.directive.assembly"}]},{token:["support.function.directive.assembly","support.function.directive.assembly","entity.name.function.assembly"],regex:"(^struc)( )([_a-zA-Z][_a-zA-Z0-9]*)"},{token:"support.function.directive.assembly",regex:"^endstruc\\b"},{token:["support.function.directive.assembly","entity.name.function.assembly","support.function.directive.assembly","constant.character.assembly"],regex:"^(%macro )([_a-zA-Z][_a-zA-Z0-9]*)( )([0-9]+)"},{token:"support.function.directive.assembly",regex:"^%endmacro"},{token:["text","support.function.directive.assembly","text","entity.name.function.assembly"],regex:"(\\s*)(%define|%xdefine|%idefine|%undef|%assign|%defstr|%strcat|%strlen|%substr|%00|%0|%rotate|%rep|%endrep|%include|\\$\\$|\\$|%unmacro|%if|%elif|%else|%endif|%(?:el)?ifdef|%(?:el)?ifmacro|%(?:el)?ifctx|%(?:el)?ifidn|%(?:el)?ifidni|%(?:el)?ifid|%(?:el)?ifnum|%(?:el)?ifstr|%(?:el)?iftoken|%(?:el)?ifempty|%(?:el)?ifenv|%pathsearch|%depend|%use|%push|%pop|%repl|%arg|%stacksize|%local|%error|%warning|%fatal|%line|%!|%comment|%endcomment|__NASM_VERSION_ID__|__NASM_VER__|__FILE__|__LINE__|__BITS__|__OUTPUT_FORMAT__|__DATE__|__TIME__|__DATE_NUM__|_TIME__NUM__|__UTC_DATE__|__UTC_TIME__|__UTC_DATE_NUM__|__UTC_TIME_NUM__|__POSIX_TIME__|__PASS__|ISTRUC|AT|IEND|BITS 16|BITS 32|BITS 64|USE16|USE32|__SECT__|ABSOLUTE|EXTERN|GLOBAL|COMMON|CPU|FLOAT)\\b( ?)((?:[_a-zA-Z][_a-zA-Z0-9]*)?)",caseInsensitive:!0},{token:"support.function.directive.assembly",regex:"\\b(?:d[bwdqtoy]|res[bwdqto]|equ|times|align|alignb|sectalign|section|ptr|byte|word|dword|qword|incbin)\\b",caseInsensitive:!0},{token:"entity.name.function.assembly",regex:"^\\s*%%[\\w.]+?:$"},{token:"entity.name.function.assembly",regex:"^\\s*%\\$[\\w.]+?:$"},{token:"entity.name.function.assembly",regex:"^[\\w.]+?:"},{token:"entity.name.function.assembly",regex:"^[\\w.]+?\\b"},{token:"comment.assembly",regex:";.*$"}]},this.normalizeRules()};n.metaData={fileTypes:["asm"],name:"Assembly x86",scopeName:"source.assembly"},d.inherits(n,p),e.AssemblyX86HighlightRules=n})),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(s,e,t){"use strict";var d=s("../../lib/oop"),p=s("./fold_mode").FoldMode,n=s("../../range").Range,i=e.FoldMode=function(){};d.inherits(i,p),function(){this.getFoldWidgetRange=function(s,e,t){var d=this.indentationBlock(s,t);if(d)return d;var p=/\S/,i=s.getLine(t),a=i.search(p);if(-1!=a&&"#"==i[a]){for(var o=i.length,r=s.getLength(),c=t,m=t;++t<r;){var l=(i=s.getLine(t)).search(p);if(-1!=l){if("#"!=i[l])break;m=t}}if(m>c){var f=s.getLine(m).length;return new n(c,o,m,f)}}},this.getFoldWidget=function(s,e,t){var d=s.getLine(t),p=d.search(/\S/),n=s.getLine(t+1),i=s.getLine(t-1),a=i.search(/\S/),o=n.search(/\S/);if(-1==p)return s.foldWidgets[t-1]=-1!=a&&a<o?"start":"","";if(-1==a){if(p==o&&"#"==d[p]&&"#"==n[p])return s.foldWidgets[t-1]="",s.foldWidgets[t+1]="","start"}else if(a==p&&"#"==d[p]&&"#"==i[p]&&-1==s.getLine(t-2).search(/\S/))return s.foldWidgets[t-1]="start",s.foldWidgets[t+1]="","";return s.foldWidgets[t-1]=-1!=a&&a<p?"start":"",p<o?"start":""}}.call(i.prototype)})),ace.define("ace/mode/assembly_x86",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/assembly_x86_highlight_rules","ace/mode/folding/coffee"],(function(s,e,t){"use strict";var d=s("../lib/oop"),p=s("./text").Mode,n=s("./assembly_x86_highlight_rules").AssemblyX86HighlightRules,i=s("./folding/coffee").FoldMode,a=function(){this.HighlightRules=n,this.foldingRules=new i,this.$behaviour=this.$defaultBehaviour};d.inherits(a,p),function(){this.lineCommentStart=";",this.$id="ace/mode/assembly_x86"}.call(a.prototype),e.Mode=a}))}}]);
//# sourceMappingURL=13.0acd6154.chunk.js.map