(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"01ba":function(t,e,a){"use strict";var i=a("3575"),n=a.n(i);n.a},"0763":function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var i=a("9ab4"),n=a("8d27"),o=a("bc3a"),s=a.n(o);class r{static loadTags(){return i["a"](this,void 0,void 0,(function*(){let t=[];return yield s.a.get("/api/tags/all").then(e=>{t=e.data}),t}))}static getTagImage(t){return i["a"](this,void 0,void 0,(function*(){let e="";return yield s.a.get(`/api/images/${t}?target=tags`).then(t=>{e=t.data}).catch(t=>Promise.reject(t)),e}))}static createTag(t){return i["a"](this,void 0,void 0,(function*(){return yield s.a.post("/api/tags/",t,{headers:{"Content-Type":"multipart/form-data"}})}))}static editTag(t){return i["a"](this,void 0,void 0,(function*(){return yield s.a.put("/api/tags/",t,{headers:{"Content-Type":"multipart/form-data"}})}))}static deleteTag(t){return i["a"](this,void 0,void 0,(function*(){return yield s.a.delete("/api/tags/"+t)}))}}var c,l,d,u,g,p,f,m=a("0613");let y=class extends n["d"]{loadTags(){return i["a"](this,void 0,void 0,(function*(){let t=[];return t=yield r.loadTags(),t}))}getTagImage(t){return i["a"](this,void 0,void 0,(function*(){return yield r.getTagImage(t)}))}createTag(t){return i["a"](this,void 0,void 0,(function*(){return yield r.createTag(t)}))}editTag(t){return i["a"](this,void 0,void 0,(function*(){return yield r.editTag(t)}))}deleteTag(t){return i["a"](this,void 0,void 0,(function*(){return yield r.deleteTag(t)}))}};i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",[]),i["c"]("design:returntype","function"===typeof(c="undefined"!==typeof Promise&&Promise)?c:Object)],y.prototype,"loadTags",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",[String]),i["c"]("design:returntype","function"===typeof(l="undefined"!==typeof Promise&&Promise)?l:Object)],y.prototype,"getTagImage",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",["function"===typeof(d="undefined"!==typeof FormData&&FormData)?d:Object]),i["c"]("design:returntype","function"===typeof(u="undefined"!==typeof Promise&&Promise)?u:Object)],y.prototype,"createTag",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",["function"===typeof(g="undefined"!==typeof FormData&&FormData)?g:Object]),i["c"]("design:returntype","function"===typeof(p="undefined"!==typeof Promise&&Promise)?p:Object)],y.prototype,"editTag",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",[String]),i["c"]("design:returntype","function"===typeof(f="undefined"!==typeof Promise&&Promise)?f:Object)],y.prototype,"deleteTag",null),y=i["b"]([n["b"]],y);const h=new y({store:m["a"],name:"tag"})},"20c5":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"5px"}},[a("q-btn",{staticClass:"q-mr-sm",style:{backgroundColor:t.tag.backgroundColor,color:t.tag.backgroundColor,"text-transform":"capitalize",margin:"0px"},attrs:{outline:"",icon:t.tag.icon?t.tag.icon:"mdi-code-braces-box",label:"#"+t.tag.hashtag},on:{click:function(e){t.$router.push("/tags/"+t.tag.id).catch((function(t){}))}}},[t.tag.projects?a("q-badge",{style:{backgroundColor:t.tag.backgroundColor,color:t.tag.textColor},attrs:{floating:""}},[t._v(t._s(t.tag.projects))]):t._e(),t.noTooltip?t._e():a("q-tooltip",{attrs:{"content-class":"merzaq",value:!1,"text-white":""}},[a("div",[a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"350px"}},[a("q-list",[a("q-item",[a("q-item-section",{staticClass:"col-sm-9"},[a("q-item-label",{staticStyle:{"font-size":"medium"}},[t._v(t._s(t.tag.name))]),a("q-item-label",{staticStyle:{color:"white","font-size":"smaller"},attrs:{caption:"",lines:"2"}},[t._v("\n                  "+t._s(t.tag.description)+"\n                ")])],1),a("q-item-section",{staticClass:"col-sm-3",attrs:{side:"",top:""}},[t.tag.cloudImageUrl?a("q-img",{staticStyle:{"max-width":"40px"},attrs:{src:t.tag.cloudImageUrl,"spinner-color":"white"}}):t._e()],1)],1),a("q-separator",{attrs:{spaced:"",inset:""}})],1)],1)])])],1)],1)},o=[],s=a("9ab4"),r=a("a026"),c=a("2fe1"),l=a("60a3"),d=a("7746");let u=class extends r["a"]{get link_API(){return"https://porfolio-api-nestjs.herokuapp.com"}mounted(){}};s["b"]([Object(l["c"])(),s["c"]("design:type","function"===typeof(i="undefined"!==typeof d["a"]&&d["a"])?i:Object)],u.prototype,"tag",void 0),s["b"]([Object(l["c"])(),s["c"]("design:type",Boolean)],u.prototype,"noTooltip",void 0),u=s["b"]([Object(c["b"])({components:{}})],u);var g=u,p=g,f=(a("01ba"),a("2877")),m=Object(f["a"])(p,n,o,!1,null,null,null);e["a"]=m.exports},2319:function(t,e,a){"use strict";(function(t){var i,n,o=a("9ab4"),s=a("2fe1"),r=a("20c5"),c=a("7746"),l=a("b14b"),d=a("bc3a"),u=a.n(d),g=a("0763"),p=a("60a3"),f=a("5f49");let m=class extends(Object(p["b"])(f["a"])){constructor(){super(...arguments),this.isCreatingTag=!1,this.tagImage=Object.assign({},new File([""],"image.png",{type:"image/png"}),{__img:{src:""}}),this.canSaveTag=!1,this.contentStyle={},this.contentActiveStyle={},this.thumbStyle={right:"2px",borderRadius:"0px",backgroundColor:"darkgoldenrod",width:"5px",opacity:.75}}get inputs(){return Object.keys(new c["a"]).filter(t=>[...Object.keys(new l["a"]),"textColor","backgroundColor","description"].indexOf(t)<0)}get colorPicks(){return["textColor","backgroundColor"]}get link_API(){return"https://porfolio-api-nestjs.herokuapp.com"}emitTagToTagsList(t){}checkFile(t){}checkFileType(t){return t.filter(t=>"image/png"===t.type)&&(this.tagImage=t[0]),t.filter(t=>"image/png"===t.type)}get checkIfCanSaveTag(){return this.canSaveTag=!(!this.tagImage||!this.tagImage.size)||!!this.tag.id,this.canSaveTag}saveTag(){return o["a"](this,void 0,void 0,(function*(){this.isCreatingTag=!0;const t=new FormData;this.tagImage&&t.append("tagImage",this.tagImage),t.append("tag",JSON.stringify(this.tag));try{let e=this.tag.id?yield g["a"].editTag(t):yield g["a"].createTag(t);e.data&&(!e.data||201!==e.status&&200!==e.status?setTimeout(()=>{this.isCreatingTag=!1,this.$q.notify({color:"red",textColor:"white",icon:"cloud_done",message:(this.tag.id?"editing":"saving")+" tag failed"})},900):(this.emitTagToTagsList(e.data),this.startComputing(300),setTimeout(()=>{this.isCreatingTag=!1,this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:`Tag ${this.tag.id?"edited":"saved"} successfully !`})},900)))}catch(e){setTimeout(()=>{this.isCreatingTag=!1,this.$q.notify({color:"red",textColor:"white",icon:"cloud_done",message:(this.tag.id?"editing":"saving")+" tag failed,error server, please try later"})},900)}}))}onReset(){this.tag=new c["a"],this.tagImage=new File([""],"image.png",{type:"image/png"})}mounted(){return o["a"](this,void 0,void 0,(function*(){this.tag.id&&u.a.get(`${this.link_API}/images/${this.tag.logoPath}?target=tags`,{responseType:"arraybuffer"}).then(e=>{this.tagImage.name=this.tag.logoPath,this.tagImage.__img.src="data:image/png;base64,"+t.from(e.data,"binary").toString("base64")}),this.syncedName="merssssss"}))}};o["b"]([Object(p["c"])(),o["c"]("design:type","function"===typeof(i="undefined"!==typeof c["a"]&&c["a"])?i:Object)],m.prototype,"tag",void 0),o["b"]([Object(p["d"])("name",{type:String}),o["c"]("design:type",String)],m.prototype,"syncedName",void 0),o["b"]([Object(p["a"])("emission-from-child"),o["c"]("design:type",Function),o["c"]("design:paramtypes",["function"===typeof(n="undefined"!==typeof c["a"]&&c["a"])?n:Object]),o["c"]("design:returntype",void 0)],m.prototype,"emitTagToTagsList",null),m=o["b"]([Object(s["b"])({components:{TagComponent:r["a"]}})],m),e["a"]=m}).call(this,a("1c35").Buffer)},3575:function(t,e,a){},"3ff2":function(t,e){},"49dd":function(t,e,a){},"4ba9":function(t,e,a){"use strict";var i=a("9ab4"),n=a("a026"),o=a("2fe1");let s=class extends n["a"]{notify(t,e,a,i){this.$q.notify({color:t,textColor:e,icon:a,message:i})}};s=i["b"]([o["b"]],s),e["a"]=s},5660:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{attrs:{dark:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.tag.id?"Edit":"Create")+" Tag")])]),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[a("q-form",{staticClass:"createTagForm q-pa-sm col-xs-12 row",attrs:{dark:""},on:{reset:t.onReset}},[a("div",{staticClass:" col-xs-12 col-md-8 col-lg-9 q-pa-md tag--inputs"},[a("div",{staticClass:"row"},[t._l(t.inputs,(function(e,i){return a("div",{key:"tag-"+i,class:"col-xs-12 col-md-"+("link"===e?"12":"6")+" q-pa-md"},[a("q-input",{key:"tag-input-"+i,attrs:{dark:"",filled:"",label:e,hint:"Add "+e,"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Please add "+e}]},scopedSlots:t._u(["name"===e?{key:"append",fn:function(){return[a("q-avatar",{attrs:{square:""}},[t.tagImage.__img.src?a("q-img",{staticStyle:{"max-width":"40px"},attrs:{src:t.tagImage.__img.src,"spinner-color":"white"}}):t._e()],1)]},proxy:!0}:null],null,!0),model:{value:t.tag[e],callback:function(a){t.$set(t.tag,e,a)},expression:"tag[input]"}})],1)})),t._l(t.colorPicks,(function(e,i){return a("div",{key:"colorPick-"+i,staticClass:" col-xs-12 col-md-6 col-lg-6 q-pa-md"},[a("q-input",{staticClass:"my-input",attrs:{dark:"",filled:"",hint:"pick a "+e},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-color",{attrs:{"no-header":"","default-value":"#c0c0c0","format-model":"hex",value:t.tag[e]},on:{change:function(a){t.tag[e]=a}}})],1)],1)]},proxy:!0}],null,!0),model:{value:t.tag[e],callback:function(a){t.$set(t.tag,e,a)},expression:"tag[colorPick]"}})],1)})),a("div",{staticClass:" col-xs-12 col-md-6 col-lg-12 q-pa-md"},[a("q-editor",{staticClass:"bg-transparent",attrs:{dark:"","min-height":"5rem"},model:{value:t.tag.description,callback:function(e){t.$set(t.tag,"description",e)},expression:"tag.description"}})],1)],2)]),a("div",{staticClass:" col-xs-12 col-md-4 col-lg-3 q-pa-md tag--image"},[a("div",{staticClass:"row",staticStyle:{height:"100%"}},[a("div",{staticClass:" col-xs-12 col-md-12 col-lg-12 q-pt-md q-pb-md"},[a("q-uploader",{staticStyle:{"max-width":"100%",overflow:"hidden",height:"100%",background:"#565656","max-height":"100%"},attrs:{dark:"",label:"Filtered (png only)",filter:t.checkFileType,color:"red"},on:{add:function(e){return t.checkFile(e)}},scopedSlots:t._u([{key:"header",fn:function(e){return[a("div",{staticClass:"row no-wrap items-center q-pa-sm q-gutter-xs",style:{background:"#fff"!==t.tag.backgroundColor?t.tag.backgroundColor:"red"}},[e.queuedFiles.length>0?a("q-btn",{attrs:{icon:"clear_all",round:"",dense:"",flat:""},on:{click:e.removeQueuedFiles}},[a("q-tooltip",[t._v("Clear All")])],1):t._e(),e.uploadedFiles.length>0?a("q-btn",{attrs:{icon:"done_all",round:"",dense:"",flat:""},on:{click:e.removeUploadedFiles}},[a("q-tooltip",[t._v("Remove Uploaded Files")])],1):t._e(),a("div",{staticClass:"col"},[a("div",{staticClass:"q-uploader__title"},[t._v("Upload your files")]),a("div",{staticClass:"q-uploader__subtitle"},[t._v("\n                      "+t._s(e.uploadSizeLabel)+" / "+t._s(e.uploadProgressLabel)+"\n                    ")])]),e.canAddFiles?a("q-btn",{attrs:{type:"a",icon:"add_box",round:"",dense:"",flat:""}},[a("q-uploader-add-trigger"),a("q-tooltip",[t._v("Pick Files")])],1):t._e(),e.canUpload?a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{icon:"cloud_upload",round:"",dense:"",flat:""},on:{click:e.upload}},[a("q-tooltip",[t._v("Upload Files")])],1):t._e(),e.isUploading?a("q-btn",{attrs:{icon:"clear",round:"",dense:"",flat:""},on:{click:e.abort}},[a("q-tooltip",[t._v("Abort Upload")])],1):t._e()],1)]}},{key:"list",fn:function(e){return[!e.files.length&&t.tag.logoPath?a("div",{staticClass:"q-uploader__file relative-position q-uploader__file--img",style:{"background-image":"url("+t.tagImage.__img.src+")"}},[a("div",{staticClass:"q-uploader__file-header row flex-center no-wrap"},[a("div",{staticClass:"q-uploader__file-header-content col"},[a("div",{staticClass:"q-uploader__title"},[t._v(t._s(t.tag.logoPath))]),a("div",{staticClass:"q-uploader__subtitle row items-center no-wrap"},[t._v("\n                        0.0 B / 0.00%\n                      ")])])])]):t._e(),t._l(e.files,(function(i,n){return a("div",{key:i.name+"--"+n,staticClass:"q-uploader__file relative-position q-uploader__file--img",style:{"background-image":"url("+i.__img.src+")"}},[a("div",{staticClass:"q-uploader__file-header row flex-center no-wrap"},[a("div",{staticClass:"q-uploader__file-header-content col"},[a("div",{staticClass:"q-uploader__title"},[t._v(t._s(i.name))]),a("div",{staticClass:"q-uploader__subtitle row items-center no-wrap"},[t._v("\n                        "+t._s(i.__status)+"\n                      ")])]),a("button",{staticClass:"q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--dense",attrs:{role:"button",type:"button"}},[a("div",{staticClass:"q-focus-helper"}),a("div",{staticClass:"q-btn__wrapper col row q-anchor--skip"},[a("div",{staticClass:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[a("i",{staticClass:"material-icons q-icon notranslate",attrs:{"aria-hidden":"true",role:"presentation"},on:{click:function(t){return e.removeFile(i)}}},[t._v("clear")])])])])])])}))]}}])})],1)])])])],1),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{label:"Submit",type:"submit",color:"green",loading:t.isCreatingTag,percentage:t.loadingPercentage,disabled:!t.checkIfCanSaveTag},on:{click:function(e){return t.saveTag()}}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"green",flat:""},on:{click:function(e){t.canSaveTag=!1}}})],1)],1)},n=[],o=a("2319"),s=o["a"],r=(a("c822"),a("2877")),c=Object(r["a"])(s,i,n,!1,null,null,null);e["default"]=c.exports},"5f49":function(t,e,a){"use strict";var i=a("9ab4"),n=a("a026"),o=a("2fe1");let s=class extends n["a"]{constructor(){super(...arguments),this.loadingPercentage=0,this.isProcessing=!1}startComputing(t){this.loadingPercentage=0,this.interval=setInterval(()=>{this.loadingPercentage+=Math.floor(8*Math.random()+10),this.loadingPercentage>=100&&clearInterval(this.interval)},t)}};s=i["b"]([o["b"]],s),e["a"]=s},"6d20":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("b14b");class n extends i["a"]{constructor(){super(...arguments),this.name="",this.description="",this.link="",this.categoryId="",this.companyId="",this.tagIds=[],this.beginDate=new Date,this.endDate=new Date,this.tags=[]}}},7746:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("b14b");class n extends i["a"]{constructor(){super(...arguments),this.name="",this.hashtag="",this.link="",this.icon="",this.description="",this.textColor="#fff",this.backgroundColor="#fff"}}},b14b:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));class i{constructor(){this.createdAt=new Date,this.updatedAt=new Date}}},c822:function(t,e,a){"use strict";var i=a("49dd"),n=a.n(i);n.a},e2c7:function(t,e,a){"use strict";a.d(e,"a",(function(){return _}));var i=a("9ab4"),n=a("8d27"),o=a("bc3a"),s=a.n(o);class r{static loadProjects(t,e){return i["a"](this,void 0,void 0,(function*(){const a=e||t?`?skip=${e}&take=${t}`:"";return yield s.a.get("/api/projects"+a)}))}static loadProjectsPerTag(t){return i["a"](this,void 0,void 0,(function*(){let e=[];return yield s.a.get("/api/projects/tag/"+t).then(t=>{e=t.data}),e}))}static createProject(t){return i["a"](this,void 0,void 0,(function*(){return yield s.a.post("/api/projects/",t,{headers:{"Content-Type":"multipart/form-data"}})}))}static editProject(t){return i["a"](this,void 0,void 0,(function*(){return yield s.a.put("/api/projects/",t,{headers:{"Content-Type":"multipart/form-data"}})}))}static deleteProject(t){return i["a"](this,void 0,void 0,(function*(){return yield s.a.delete("/api/projects/"+t)}))}}var c,l,d,u,g,p,f,m,y=a("3ff2"),h=a.n(y),b=a("0613");let v=class extends n["d"]{loadProjects(t){return i["a"](this,void 0,void 0,(function*(){return yield r.loadProjects(t.rowsPerPage,(t.page-1)*t.rowsPerPage)}))}loadProjectsPerTag(t){return i["a"](this,void 0,void 0,(function*(){return yield r.loadProjectsPerTag(t)}))}createProject(t){return i["a"](this,void 0,void 0,(function*(){return yield r.createProject(t)}))}editProject(t){return i["a"](this,void 0,void 0,(function*(){return yield r.editProject(t)}))}deleteProject(t){return i["a"](this,void 0,void 0,(function*(){return yield r.deleteProject(t)}))}};i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",["function"===typeof(c="undefined"!==typeof h.a&&h.a)?c:Object]),i["c"]("design:returntype","function"===typeof(l="undefined"!==typeof Promise&&Promise)?l:Object)],v.prototype,"loadProjects",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",[String]),i["c"]("design:returntype","function"===typeof(d="undefined"!==typeof Promise&&Promise)?d:Object)],v.prototype,"loadProjectsPerTag",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",["function"===typeof(u="undefined"!==typeof FormData&&FormData)?u:Object]),i["c"]("design:returntype","function"===typeof(g="undefined"!==typeof Promise&&Promise)?g:Object)],v.prototype,"createProject",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",["function"===typeof(p="undefined"!==typeof FormData&&FormData)?p:Object]),i["c"]("design:returntype","function"===typeof(f="undefined"!==typeof Promise&&Promise)?f:Object)],v.prototype,"editProject",null),i["b"]([n["a"],i["c"]("design:type",Function),i["c"]("design:paramtypes",[String]),i["c"]("design:returntype","function"===typeof(m="undefined"!==typeof Promise&&Promise)?m:Object)],v.prototype,"deleteProject",null),v=i["b"]([n["b"]],v);const _=new v({store:b["a"],name:"project"})}}]);