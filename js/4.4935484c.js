(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"01ba":function(A,t,e){"use strict";var s=e("3575"),c=e.n(s);c.a},"2db6":function(A,t,e){},3575:function(A,t,e){},4392:function(A,t,e){"use strict";var s=e("cd0b"),c=e.n(s);c.a},"753d":function(A,t,e){"use strict";var s,c=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("q-btn",{staticClass:"q-mr-sm",style:{backgroundColor:"#"+A.tag.backgroundColor,color:"#"+A.tag.textColor},attrs:{label:"#"+A.tag.hashtag},on:{click:function(t){A.$router.push("tags/"+A.tag.id).catch((function(A){}))}}},[e("q-tooltip",{attrs:{"content-class":"merzaq",value:!1,"text-white":""}},[e("div",[e("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"350px"}},[e("q-list",[e("q-item",[e("q-item-section",{staticClass:"col-sm-9"},[e("q-item-label",{staticStyle:{"font-size":"medium"}},[A._v(A._s(A.tag.name))]),e("q-item-label",{staticStyle:{color:"white","font-size":"smaller"},attrs:{caption:"",lines:"2"}},[A._v("\n                  "+A._s(A.tag.description)+"\n                ")])],1),e("q-item-section",{staticClass:"col-sm-3",attrs:{side:"",top:""}},[e("q-img",{staticStyle:{"max-width":"40px"},attrs:{src:"api"+A.tag.image,"spinner-color":"white"}})],1)],1),e("q-separator",{attrs:{spaced:"",inset:""}})],1)],1)])])],1)],1)},a=[],r=e("9ab4"),n=e("2b0e"),o=e("2fe1"),i=e("60a3"),l=e("b14b");class d extends l["a"]{}let g=class extends n["a"]{mounted(){}};r["b"]([Object(i["a"])(),r["c"]("design:type","function"===typeof(s="undefined"!==typeof d&&d)?s:Object)],g.prototype,"tag",void 0),g=r["b"]([Object(o["b"])({components:{}})],g);var f=g,u=f,y=(e("01ba"),e("2877")),B=Object(y["a"])(u,c,a,!1,null,null,null);t["a"]=B.exports},a1a5:function(A,t,e){"use strict";e.r(t);var s=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("q-page",{staticClass:" bg-transparent projects"},[e("q-scroll-area",{attrs:{"thumb-style":A.thumbStyle,"content-style":A.contentStyle,"content-active-style":A.contentActiveStyle}},[e("div",{staticClass:"full-width row justify-center"},[e("h4",{staticClass:"q-animate--fade text-white",staticStyle:{width:"100%","text-align":"center"}},[A._v("\n        Projects per Tag\n      ")])]),e("div",{staticClass:"full-width row"},A._l(A.projects,(function(A,t){return e("ProjectCardComponent",{key:t,attrs:{project:A}})})),1)])],1)},c=[],a=e("9ab4"),r=e("2b0e"),n=e("2fe1"),o=e("8d27"),i=e("bc3a"),l=e.n(i);class d{loadProjectsPerTag(A){return a["a"](this,void 0,void 0,(function*(){let t=[];return yield l.a.get("/api/projects/tag/"+A).then(A=>{t=A.data}),t}))}}var g,f=e("0613");let u=class extends o["d"]{constructor(){super(...arguments),this.projects=[],this.projectService=new d}setProjects(A){this.projects=A}loadProjectsPerTag(A){return a["a"](this,void 0,void 0,(function*(){let t=[];return t=yield this.projectService.loadProjectsPerTag(A),this.setProjects(t),t}))}};a["b"]([o["c"],a["c"]("design:type",Function),a["c"]("design:paramtypes",[Array]),a["c"]("design:returntype",void 0)],u.prototype,"setProjects",null),a["b"]([o["a"],a["c"]("design:type",Function),a["c"]("design:paramtypes",[String]),a["c"]("design:returntype","function"===typeof(g="undefined"!==typeof Promise&&Promise)?g:Object)],u.prototype,"loadProjectsPerTag",null),u=a["b"]([o["b"]],u);const y=new u({store:f["a"],name:"project"});var B=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:" col-xs-12 col-md-4 q-pa-md"},[e("q-card",{staticClass:"my-card",staticStyle:{background:"rgba(0, 0, 0, 0.66)"},attrs:{flat:""}},[e("q-img",{staticClass:"background-top",staticStyle:{"max-width":"100%"},attrs:{src:"api/resources/projects/"+A.project.id+".png",ratio:1,"placeholder-src":A.imgHolder}}),e("q-list",[e("q-item",{attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{color:"grey",name:"subject"}})],1),e("q-item-section",[e("q-item-label",{staticClass:"text-white"},[A._v(A._s(A.project.name))]),e("q-item-label",{staticClass:"text-blue-grey-6 ellipsis-2-lines",attrs:{caption:""}},[A._v(A._s(A.project.description))])],1)],1),e("q-item",{attrs:{clickable:""}},[e("div",{staticClass:"flex flex-center"},A._l(A.project.tags,(function(A,t){return e("TagComponent",{key:t,staticStyle:{zoom:"0.6"},attrs:{tag:A}})})),1)])],1)],1)],1)},p=[],j=e("60a3"),w=e("b14b");class x extends w["a"]{}var b=e("753d");const C="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx//2wBDAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAJYAyADAREAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAEGBwQFAwL/xAA8EAEAAQEEBgYHBgcBAQAAAAAAAQIDBAURBhYxNVGSEjJUc7LRFSFTcXLC0hNBgqGxwRQiI1JhgZEkQv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDfYiMo9QGUcIBPRjgBlHADKOAHRjgB0Y4AjKOAGUcAMo4AnKOAIyjgBlHAE5RwAyp4AjKOAGUcATlHAEZRwBPRjgBlHADKOAIyjhAJyjgCMo4AnKOAGUcARlHADKOAJ6McAMo4AjKOAJyjgCMo4AZRwBOUcARlHAE5RwBGUcATlHADKngBlHAEZRwAyjgCco4QBlHCAOjHADoxwAyjgBlHAEZRwBOUcAOjHADKOAGUcAMo4AZRwA6McAMo4AjKOAJyjgBlHAEZRwAyjhAHRjgCejTwAyjgCMo4AnKOAGVPAEZRwBPRjgBlHADKOAHRjgCMo4AZRwBPRjgCMo4AnKOAGUcAOjHAEZRwBOUcAMo4AZRwBGUcATlHAEZRwgE5RwBGUcAMo4QCco4AZRwAyjhAGUcAMo4AZU8ARlHCAMo4ARsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKdkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU7IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjZAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjZAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI6sAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEU9WASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv6WYlfrlTdputtNlNc19PKI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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARGyASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKdkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiNkAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAinqwCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARHVgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiNkAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARGyASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHVgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z";var H,R=C;let m=class extends r["a"]{constructor(){super(...arguments),this.imgHolder=R}mounted(){console.log("%c⧭ project card: project====>","color: #00e600",this.project)}};a["b"]([Object(j["a"])(),a["c"]("design:type","function"===typeof(H="undefined"!==typeof x&&x)?H:Object)],m.prototype,"project",void 0),m=a["b"]([Object(n["b"])({components:{TagComponent:b["a"]}})],m);var E=m,q=E,v=(e("4392"),e("2877")),P=Object(v["a"])(q,B,p,!1,null,null,null),h=P.exports;let O=class extends r["a"]{constructor(){super(...arguments),this.projects=[],this.contentStyle={},this.contentActiveStyle={},this.thumbStyle={right:"2px",borderRadius:"0px",backgroundColor:"darkgoldenrod",width:"5px",opacity:.75}}mounted(){this.$q.loading.show({delay:400});const A=this.$route.params.id;y.loadProjectsPerTag(A).then(A=>{this.projects=A,console.log("%c⧭ projects: projects list ====> ","color: #f2ceb6",A),setTimeout(()=>{this.$q.loading.hide()},1e3)}).catch(A=>{this.$q.loading.hide(),console.log(A)})}};O=a["b"]([Object(n["b"])({components:{ProjectCardComponent:h}})],O);var Q=O,D=Q,I=(e("ed79"),Object(v["a"])(D,s,c,!1,null,null,null));t["default"]=I.exports},b14b:function(A,t,e){"use strict";e.d(t,"a",(function(){return s}));class s{}},cd0b:function(A,t,e){},ed79:function(A,t,e){"use strict";var s=e("2db6"),c=e.n(s);c.a}}]);