(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2a4e":function(e,t,o){"use strict";var i=o("adfb"),a=o.n(i);a.a},"2abe":function(e,t,o){},"4af5":function(e,t,o){"use strict";var i=o("2abe"),a=o.n(i);a.a},"7e45":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"bg-transparent createTag"},[o("div",{staticClass:"full-width row justify-center q-pa-md"},[o("q-table",{staticClass:"table--grey",attrs:{title:"Projects",data:e.projects,columns:e.columns,"row-key":"name",pagination:e.pagination,loading:e.loadingProjects,"binary-state-sort":""},on:{"update:pagination":function(t){e.pagination=t},request:e.onRequest},scopedSlots:e._u([{key:"top",fn:function(){return[o("q-btn",{attrs:{color:"green",disable:e.loading,label:"Add Project"},on:{click:function(t){t.preventDefault(),e.setCurrentProject(null)}}}),o("q-space"),o("q-input",{attrs:{borderless:"",dense:"",debounce:"300",color:"white"},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"header",fn:function(t){return[o("q-tr",{attrs:{props:t}},[e._l(t.cols,(function(i){return o("q-th",{key:i.name,attrs:{props:t}},[e._v("\n            "+e._s(i.label)+"\n          ")])})),o("q-th",[e._v("\n            Action\n          ")])],2)]}},{key:"body",fn:function(t){return[o("q-tr",{key:"m_"+t.row.id,attrs:{props:t}},[e._l(t.cols,(function(i){return o("q-td",{key:i.name,attrs:{props:t}},[e._v("\n            "+e._s("rating"!==i.name?i.value:"")+"\n            "),"rating"===i.name?o("q-rating",{attrs:{size:"1em",max:5,color:"yellow",readonly:""},model:{value:i.value,callback:function(t){e.$set(i,"value",t)},expression:"col.value"}}):e._e()],1)})),o("q-td",{key:"action",staticStyle:{"text-align":"center"}},[o("q-btn",{staticClass:"custom--button",staticStyle:{color:"green"},attrs:{outline:"",color:"green",icon:"edit"},on:{click:function(o){return e.setCurrentProject(t.row)}}}),o("q-btn",{staticClass:"custom--button",staticStyle:{color:"red"},attrs:{outline:"",color:"red",icon:"remove"},on:{click:function(o){return e.deleteProject(t.row.id)}}})],1)],2)]}}])}),o("q-dialog",{attrs:{"full-width":"","transition-show":"slide-down","transition-hide":"slide-up","content-style":{background:"#4c4848"}},model:{value:e.projectDialog,callback:function(t){e.projectDialog=t},expression:"projectDialog"}},[o("CreateProject",{attrs:{project:e.currentProject},on:{"emission-from-create-project":e.onEmissionFromChild}})],1)],1)])},a=[],n=o("9ab4"),s=o("2fe1"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-card",{attrs:{dark:""}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[e._v(e._s(e.project.id?"Edit":"Create")+" Project")])]),o("q-separator"),o("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[o("q-form",{staticClass:"createProjectForm q-pa-sm col-xs-12 row",attrs:{dark:""},on:{reset:e.onReset}},[o("div",{staticClass:" col-xs-12 col-md-8 col-lg-9 q-pa-md project--inputs"},[o("div",{staticClass:"row"},[e._l(["name","link"],(function(t,i){return o("div",{key:"project-"+i,class:"col-xs-12 col-md-6 q-pa-md"},[o("q-input",{key:"project-input-"+i,attrs:{dark:"",filled:"",label:t,hint:"Add "+t,"lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please add "+t}]},scopedSlots:e._u(["name"===t?{key:"append",fn:function(){},proxy:!0}:null],null,!0),model:{value:e.project[t],callback:function(o){e.$set(e.project,t,o)},expression:"project[input]"}})],1)})),e._l(["beginDate","endDate"],(function(t,i){return o("div",{key:"date-"+i,staticClass:" col-xs-12 col-md-6 col-lg-6 q-pa-md"},[o("q-input",{key:"input-date-"+i,attrs:{dark:"",filled:"",mask:"####/##/##",rules:[function(e){return/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e)||"Please enter a valid "+("beginDate"===t?"begin date":"end date")}],label:"beginDate"===t?"begin date":"end date",hint:"Enter a "+("beginDate"===t?"begin date":"end date")},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[o("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[o("q-date",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{landscape:"",dark:"",color:"green"},model:{value:e.project[t],callback:function(o){e.$set(e.project,t,o)},expression:"project[input]"}})],1)],1)]},proxy:!0}],null,!0),model:{value:e.project[t],callback:function(o){e.$set(e.project,t,o)},expression:"project[input]"}})],1)})),o("div",{staticClass:" col-xs-12 col-md-6 col-lg-12 q-pa-md"},[o("q-select",{attrs:{dark:"",filled:"","use-chips":"",options:e.tags,rules:[function(e){return e.length||"Please don't forget to add tags"}],label:"Multi with toggle",multiple:"","map-options":"","emit-value":""},scopedSlots:e._u([{key:"selected-item",fn:function(t){return[o("q-chip",{attrs:{removable:"",dense:"",tabindex:t.tabindex,color:"white","text-color":"green"},on:{remove:function(e){return t.removeAtIndex(t.index)}}},[e._v("\n                  "+e._s(t.opt.name)+"\n                ")])]}},{key:"option",fn:function(t){return[o("q-item",e._g(e._b({staticStyle:{background:"#565656"}},"q-item",t.itemProps,!1),t.itemEvents),[o("q-item-section",[o("q-item-label",{domProps:{innerHTML:e._s(t.opt.name)}})],1),o("q-item-section",{attrs:{side:""}},[o("q-toggle",{attrs:{val:t.opt},model:{value:e.project.tags,callback:function(t){e.$set(e.project,"tags",t)},expression:"project.tags"}})],1)],1)]}}]),model:{value:e.project.tags,callback:function(t){e.$set(e.project,"tags",t)},expression:"project.tags"}})],1),e._l(["category","company"],(function(t,i){return o("div",{key:t+"-"+i,staticClass:" col-xs-12 col-md-6 col-lg-6 q-pa-md"},[o("q-select",{key:"select-"+t+"-"+i,attrs:{dark:"",filled:"","use-chips":"",options:"company"===t?e.companies:e.categories,rules:[function(e){return!!e||"Please don't forget to add a "+t}],label:"Select a "+t,"map-options":"","emit-value":""},scopedSlots:e._u([{key:"selected-item",fn:function(t){return[o("q-chip",{attrs:{removable:"",dense:"",tabindex:t.tabindex,color:"white","text-color":"green"},on:{remove:function(e){return t.removeAtIndex(t.index)}}},[e._v("\n                  "+e._s(t.opt.name)+"\n                ")])]}},{key:"option",fn:function(t){return[o("q-item",e._g(e._b({staticStyle:{background:"#565656"}},"q-item",t.itemProps,!1),t.itemEvents),[o("q-item-section",[o("q-item-label",{domProps:{innerHTML:e._s(t.opt.name)}})],1),t.opt.logoPath?o("q-item-section",{staticStyle:{display:"flex",width:"40px",padding:"5px",background:"rgb(255, 255, 255)",border:"1px solid rgb(84, 84, 84)","border-radius":"5px"},attrs:{side:""}},[t.opt.logoPath?o("q-img",{staticStyle:{width:"100%"},attrs:{src:t.opt.logoPath.startsWith("http")?t.opt.logoPath:e.link_API+"/images/"+(t.opt.logoPath?e.target:e.company),"spinner-color":"white",contain:""}}):e._e()],1):e._e()],1)]}}],null,!0),model:{value:e.project[t],callback:function(o){e.$set(e.project,t,o)},expression:"project[input]"}})],1)})),o("div",{staticClass:" col-xs-12 col-md-6 col-lg-12 q-pa-md"},[o("q-editor",{staticClass:"bg-transparent",attrs:{dark:"","min-height":"5rem"},model:{value:e.project.description,callback:function(t){e.$set(e.project,"description",t)},expression:"project.description"}})],1)],2)]),o("div",{staticClass:" col-xs-12 col-md-4 col-lg-3 q-pa-md project--image"},[o("div",{staticClass:"row",staticStyle:{height:"100%"}},[o("div",{staticClass:" col-xs-12 col-md-12 col-lg-12 q-pt-md q-pb-md"},[o("q-uploader",{staticStyle:{"max-width":"100%",overflow:"hidden",height:"100%",background:"#565656","max-height":"100%"},attrs:{dark:"",multiple:"",label:"Filtered (png only)",filter:e.checkFileType,accept:"image/png","hide-upload-btn":"",color:"red","text-color":"white"},on:{added:function(t){return e.checkFile(t)},removed:function(t){return e.checkFile(t)}},scopedSlots:e._u([{key:"header",fn:function(t){return[o("div",{staticClass:"row no-wrap items-center q-pa-sm q-gutter-xs",style:{background:"#fff"!==e.project.backgroundColor?e.project.backgroundColor:"red"}},[t.queuedFiles.length>0?o("q-btn",{attrs:{icon:"clear_all",round:"",dense:"",flat:""},on:{click:function(e){t.removeQueuedFiles}}},[o("q-tooltip",[e._v("Clear All")])],1):e._e(),t.uploadedFiles.length>0?o("q-btn",{attrs:{icon:"done_all",round:"",dense:"",flat:""},on:{click:t.removeUploadedFiles}},[o("q-tooltip",[e._v("Remove Uploaded Files")])],1):e._e(),o("div",{staticClass:"col"},[o("div",{staticClass:"q-uploader__title"},[e._v("Upload your files")]),o("div",{staticClass:"q-uploader__subtitle"},[e._v("\n                      "+e._s(t.uploadSizeLabel)+" / "+e._s(t.uploadProgressLabel)+"\n                    ")])]),t.canAddFiles?o("q-btn",{attrs:{type:"a",icon:"add_box",round:"",dense:"",flat:""},on:{add:function(e){t.removeQueuedFiles}}},[o("q-uploader-add-trigger"),o("q-tooltip",[e._v("Pick Files")])],1):e._e()],1)]}},{key:"list",fn:function(t){return[o("q-list",{attrs:{separator:""}},e._l(e.projectImages.map((function(e){return e.file})),(function(i,a){return o("q-item",{key:i.name},[o("q-item-section",[o("q-item-label",{staticClass:"full-width ellipsis"},[e._v("\n                        "+e._s(i.name)+"\n                      ")]),o("q-item-label",{attrs:{caption:""}},[e._v("\n                        Main image:\n                      ")]),o("q-toggle",{attrs:{value:e.project.mainImage===i.name},on:{input:function(t){e.project.mainImage=i.name,e.projectImages=e.projectImages.map((function(e){return e.file.name===i.name?e.selected=!0:e.selected=!1,e}))}},model:{value:e.projectImages[a].selected,callback:function(t){e.$set(e.projectImages[a],"selected",t)},expression:"projectImages[index].selected"}})],1),i.__img?o("q-item-section",{staticClass:"gt-xs",attrs:{thumbnail:""}},[o("img",{staticStyle:{width:"auto"},attrs:{src:i.__img.src}})]):e._e(),o("q-item-section",{attrs:{top:"",side:""}},[o("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(o){e.projectImages=e.projectImages.filter((function(e){return e.file.name!==i.name})),e.projectImages.filter((function(e){return e.selected})).length||(e.projectImages[0].selected=!0,e.project.mainImage=e.projectImages[0].file.name),t.removeFile(i)}}})],1)],1)})),1)]}}])})],1)])])])],1),o("q-separator"),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{attrs:{label:"Submit",type:"submit",color:"green",loading:e.isCreatingProject,percenprojecte:e.loadingPercentage,disabled:!e.checkIfCanSaveProject},on:{click:function(t){return e.saveProject()}}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"green",flat:""}})],1)],1)},c=[],l=o("6d20"),d=o("e2c7"),p=o("0763"),u=o("60a3"),m=o("5f49"),g=o("8d27"),h=o("0613"),f=o("bc3a"),j=o.n(f);class y{static loadCompanies(){return n["a"](this,void 0,void 0,(function*(){let e=[];return yield j.a.get("/api/companies/").then(t=>{e=t.data}),e}))}static createCompany(e){return n["a"](this,void 0,void 0,(function*(){return yield j.a.post("/api/companies",e).then(t=>{e=t.data}),e}))}static updateCompany(e){return n["a"](this,void 0,void 0,(function*(){return yield j.a.patch("/api/companies",e).then(t=>{e=t.data}),e}))}}let b=class extends g["d"]{loadCompanies(){return n["a"](this,void 0,void 0,(function*(){let e=[];return e=yield y.loadCompanies(),e}))}};n["b"]([g["a"],n["c"]("design:type",Function),n["c"]("design:paramtypes",[]),n["c"]("design:returntype",Promise)],b.prototype,"loadCompanies",null),b=n["b"]([g["b"]],b);const v=new b({store:h["a"],name:"company"});class q{static loadCategories(){return n["a"](this,void 0,void 0,(function*(){let e=[];return yield j.a.get("/api/categories/").then(t=>{e=t.data}),e}))}static createCategory(e){return n["a"](this,void 0,void 0,(function*(){return yield j.a.post("/api/categories",e).then(t=>{e=t.data}),e}))}static updateCategory(e){return n["a"](this,void 0,void 0,(function*(){return yield j.a.patch("/api/categories",e).then(t=>{e=t.data}),e}))}}let k=class extends g["d"]{loadCategories(){return n["a"](this,void 0,void 0,(function*(){let e=[];return e=yield q.loadCategories(),e}))}};n["b"]([g["a"],n["c"]("design:type",Function),n["c"]("design:paramtypes",[]),n["c"]("design:returntype",Promise)],k.prototype,"loadCategories",null),k=n["b"]([Object(g["b"])()],k);const P=new k({store:h["a"],name:"category"});var _;let x=class extends(Object(u["b"])(m["a"])){constructor(){super(...arguments),this.isCreatingProject=!1,this.projectImages=[],this.canSaveProject=!1,this.contentStyle={},this.contentActiveStyle={},this.tags=[],this.companies=[],this.categories=[],this.thumbStyle={right:"2px",borderRadius:"0px",backgroundColor:"darkgoldenrod",width:"5px",opacity:.75}}get link_API(){return"https://porfolio-api-nestjs.herokuapp.com"}emitProjectToProjectsList(e){}checkFile(e){}checkFileType(e){return e.filter(e=>"image/png"===e.type)&&(e.filter(e=>"image/png"===e.type).forEach(e=>{this.projectImages.filter(t=>t.file.name===e.name).length||this.projectImages.push({selected:!this.projectImages.length,file:e})}),this.project.mainImage=this.projectImages.filter(e=>e.selected)[0].file.name),e.filter(e=>"image/png"===e.type)}get checkIfCanSaveProject(){return this.canSaveProject=!!this.projectImages||!!this.project.id,this.canSaveProject}saveProject(){return n["a"](this,void 0,void 0,(function*(){this.isCreatingProject=!0;const e=new FormData;this.projectImages.forEach((t,o)=>{e.append("image",t.file)}),e.append("project",JSON.stringify(this.project));try{let t=this.project.id?yield d["a"].editProject(e):yield d["a"].createProject(e);t.data&&(!t.data||201!==t.status&&200!==t.status?setTimeout(()=>{this.isCreatingProject=!1,this.$q.notify({color:"red",textColor:"white",icon:"cloud_done",message:(this.project.id?"editing":"saving")+" project failed"})},900):(this.emitProjectToProjectsList(JSON.stringify(t.data)),this.startComputing(300),setTimeout(()=>{this.isCreatingProject=!1,this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:`Project ${this.project.id?"edited":"saved"} successfully !`})},900)))}catch(t){setTimeout(()=>{this.isCreatingProject=!1,this.$q.notify({color:"red",textColor:"white",icon:"cloud_done",message:(this.project.id?"editing":"saving")+" project failed,error server, please try later"})},900)}}))}onReset(){this.project=new l["a"],this.projectImages=[]}mounted(){return n["a"](this,void 0,void 0,(function*(){this.tags=yield p["a"].loadTags(),this.companies=yield v.loadCompanies(),this.categories=yield P.loadCategories()}))}};n["b"]([Object(u["c"])(),n["c"]("design:type","function"===typeof(_="undefined"!==typeof l["a"]&&l["a"])?_:Object)],x.prototype,"project",void 0),n["b"]([Object(u["d"])("name",{type:String}),n["c"]("design:type",String)],x.prototype,"syncedName",void 0),n["b"]([Object(u["a"])("emission-from-create-project"),n["c"]("design:type",Function),n["c"]("design:paramtypes",[String]),n["c"]("design:returntype",void 0)],x.prototype,"emitProjectToProjectsList",null),x=n["b"]([Object(s["b"])({components:{}})],x);var C=x,w=C,S=(o("4af5"),o("2877")),I=Object(S["a"])(w,r,c,!1,null,null,null),$=I.exports,T=o("4ba9");let F=class extends(Object(u["b"])(m["a"],T["a"])){constructor(){super(...arguments),this.projects=[],this.loading=!1,this.projectDialog=!1,this.currentProject=new l["a"],this.filter="",this.pagination={sortBy:"desc",descending:!1,page:1,rowsPerPage:5},this.loadingProjects=!1,this.columns=[{name:"name",required:!0,label:"Name",align:"left",field:e=>e.name,format:e=>""+e,classes:" ellipsis",style:"max-width: 100px; background: #545454;",headerClasses:"bg-grey-9 text-white",sortable:!0},{name:"category",label:"Category",field:e=>e.category.name,format:e=>""+e,sortable:!0},{name:"company",label:"Company",field:e=>e.company.name,format:e=>""+e},{name:"tag",label:"Tag",field:e=>e.tags.map((function(e){return e.name})).join(", ")},{name:"rating",label:"Rating",field:"rating"}]}onEmissionFromChild(e){let t=JSON.parse(e);t&&t.id&&(this.projects.filter(e=>e.id===t.id)?this.projects=this.projects.map(e=>(e.id===t.id&&(e=t),e)):this.projects.push(t),setTimeout(()=>{this.projectDialog=!1,this.currentProject=new l["a"]},1500))}setCurrentProject(e){this.currentProject=e?Object.assign({},e):new l["a"],this.projectDialog=!0}deleteProject(e){return n["a"](this,void 0,void 0,(function*(){this.$q.loading.show({delay:400});try{let t=yield d["a"].deleteProject(e);200===t.status?setTimeout(()=>{this.projects=this.projects.filter(t=>t.id!==e),this.$q.loading.hide(),this.notify("green-4","white","cloud_done","Project deleted successfully !")},900):setTimeout(()=>{this.$q.loading.hide(),this.notify("red","white","cloud_done","delete project failed")},900)}catch(t){setTimeout(()=>{this.$q.loading.hide(),this.notify("red","white","cloud_done","delete project failed")},900)}}))}onRequest(e){return n["a"](this,void 0,void 0,(function*(){this.projects=yield this.loadProjects(Object.assign({},e.pagination),!1)}))}loadProjects(e,t){return n["a"](this,void 0,void 0,(function*(){let o=[];this.loadingProjects=!t;e.page,e.rowsPerPage;try{let i=yield d["a"].loadProjects(e);200===i.status?(t?setTimeout(()=>{this.$q.loading.hide(),this.notify("green-4","white","cloud_done","Projects loaded successfully !")},900):setTimeout(()=>{this.loadingProjects=!1},900),o=i.data&&i.data.list?i.data.list:[],this.pagination=Object.assign({rowsNumber:i.data.count?i.data.count:o.length},e)):t?setTimeout(()=>{this.$q.loading.hide(),this.notify("red","white","cloud_done","loading projects failed")},900):setTimeout(()=>{this.loadingProjects=!1},900)}catch(i){t?setTimeout(()=>{this.$q.loading.hide(),this.notify("red","white","cloud_done","loading projects failed")},900):setTimeout(()=>{this.loadingProjects=!1},900)}return o}))}created(){this.$q.loading.show()}mounted(){return n["a"](this,void 0,void 0,(function*(){this.projects=yield this.loadProjects(Object.assign({},this.pagination),!0)}))}afterMount(){}updated(){}};F=n["b"]([Object(s["b"])({components:{CreateProject:$}})],F);var O=F,D=O,A=(o("2a4e"),Object(S["a"])(D,i,a,!1,null,null,null));t["default"]=A.exports},adfb:function(e,t,o){}}]);