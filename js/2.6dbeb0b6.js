(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{4392:function(A,t,e){"use strict";var o=e("cd0b"),a=e.n(o);a.a},"4f60":function(A,t,e){},"7afb":function(A,t,e){"use strict";var o=e("4f60"),a=e.n(o);a.a},"9b55":function(A,t,e){"use strict";e.r(t);var o=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("q-page",{staticClass:"bg-transparent projects"},[e("q-scroll-area",{attrs:{"thumb-style":A.thumbStyle,"content-style":A.contentStyle,"content-active-style":A.contentActiveStyle}},[e("div",{staticClass:"full-width row flex",staticStyle:{"justify-content":"center"}},A._l(A.projects,(function(A,t){return e("ProjectCardComponent",{key:t,staticClass:"projectCards ",attrs:{project:A}})})),1)])],1)},a=[],s=e("9ab4"),r=e("2fe1"),c=e("e2c7"),n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:" col-xs-12 col-md-4 q-pa-md"},[e("q-card",{staticClass:"my-card",attrs:{horizontal:"",bordered:"",flat:""}},[e("q-img",{class:"col-5 "+(A.project.mainImage?"":"apply_logo"),staticStyle:{"max-width":"100%","max-height":"200px"},attrs:{src:A.project.mainImage?A.project.cloudImageUrlPrefix+A.project.mainImage:A.project.company.logoPath,ratio:16/9,"img-class":"project_img","placeholder-src":A.imgHolder}}),e("q-list",[e("q-item",{attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{color:"grey",name:"subject"}})],1),e("q-item-section",[e("q-item-label",{staticClass:"text-black"},[A._v(A._s(A.project.name))]),e("q-item-label",{staticClass:"text-grey-6 ellipsis-2-lines",attrs:{caption:""}},[A._v(A._s(A.project.description))])],1)],1),e("q-item",{attrs:{clickable:""}},[e("div",{staticClass:"flex",staticStyle:{position:"relative"}},A._l(A.project.tags,(function(A,t){return e("TagComponent",{key:t,staticStyle:{zoom:"0.6",position:"relative"},attrs:{noTooltip:!0,tag:A}})})),1)])],1)],1)],1)},i=[],l=e("a026"),d=e("60a3"),g=e("6d20"),f=e("20c5");const B="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx//2wBDAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAJYAyADAREAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAEGBwQFAwL/xAA8EAEAAQEEBgYHBgcBAQAAAAAAAQIDBAURBhYxNVGSEjJUc7LRFSFTcXLC0hNBgqGxwRQiI1JhgZEkQv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDfYiMo9QGUcIBPRjgBlHADKOAHRjgB0Y4AjKOAGUcAMo4AnKOAIyjgBlHAE5RwAyp4AjKOAGUcATlHAEZRwBPRjgBlHADKOAIyjhAJyjgCMo4AnKOAGUcARlHADKOAJ6McAMo4AjKOAJyjgCMo4AZRwBOUcARlHAE5RwBGUcATlHADKngBlHAEZRwAyjgCco4QBlHCAOjHADoxwAyjgBlHAEZRwBOUcAOjHADKOAGUcAMo4AZRwA6McAMo4AjKOAJyjgBlHAEZRwAyjhAHRjgCejTwAyjgCMo4AnKOAGVPAEZRwBPRjgBlHADKOAHRjgCMo4AZRwBPRjgCMo4AnKOAGUcAOjHAEZRwBOUcAMo4AZRwBGUcATlHAEZRwgE5RwBGUcAMo4QCco4AZRwAyjhAGUcAMo4AZU8ARlHCAMo4ARsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKdkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU7IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjZAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjZAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI6sAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEU9WASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACv6WYlfrlTdputtNlNc19PKI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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARGyASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKdkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiNkAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAinqwCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARHVgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERsgEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiNkAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARGyASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI2QCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHVgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEbIBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z";var u,y=B;let p=class extends l["a"]{constructor(){super(...arguments),this.imgHolder=y}mounted(){}};s["b"]([Object(d["c"])(),s["c"]("design:type","function"===typeof(u="undefined"!==typeof g["a"]&&g["a"])?u:Object)],p.prototype,"project",void 0),p=s["b"]([Object(r["b"])({components:{TagComponent:f["a"]}})],p);var w=p,j=w,x=(e("4392"),e("2877")),H=Object(x["a"])(j,n,i,!1,null,null,null),R=H.exports,C=e("5f49"),E=e("4ba9"),b=e("cffa");let h=class extends(Object(d["b"])(C["a"],E["a"])){constructor(){super(...arguments),this.projects=[],this.contentStyle={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},this.contentActiveStyle={},this.pagination={sortBy:"desc",descending:!1,page:1,rowsPerPage:6},this.thumbStyle={right:"2px",borderRadius:"0px",backgroundColor:"darkgoldenrod",width:"5px",opacity:.75}}get routeID(){return"projects"+(this.$route.params.id?"_tag":"")}watchRoute(A,t){return s["a"](this,void 0,void 0,(function*(){A!==t&&(this.projects=yield this.loadProjects(this.pagination))}))}loadProjects(A){return s["a"](this,void 0,void 0,(function*(){let t=[];try{let e=yield c["a"].loadProjects(A);200===e.status?(setTimeout(()=>{this.$q.loading.hide(),this.notify("green-4","white","cloud_done","Projects loaded successfully !")},900),t=e.data&&e.data.list?e.data.list:[],this.pagination=Object.assign({rowsNumber:e.data.count?e.data.count:t.length},A)):setTimeout(()=>{this.$q.loading.hide(),this.notify("red","white","cloud_done","loading projects failed")},900)}catch(e){setTimeout(()=>{this.$q.loading.hide(),this.notify("red","white","cloud_done","loading projects failed")},900)}return t}))}mounted(){return s["a"](this,void 0,void 0,(function*(){this.$q.loading.show({delay:400});const A=this.$route.params.id;A?c["a"].loadProjectsPerTag(A).then(A=>{this.projects=A,setTimeout(()=>{this.$q.loading.hide()},1e3)}).catch(A=>{this.$q.loading.hide()}):this.projects=yield this.loadProjects(this.pagination)}))}beforeUpdate(){this.$nextTick(()=>{b["a"].from(document.querySelectorAll(".projectCards"),{duration:2,y:-10,opacity:0,delay:1,stagger:.2,ease:"power4.out",force3D:!0})})}};s["b"]([Object(d["e"])("routeID"),s["c"]("design:type",Function),s["c"]("design:paramtypes",[String,String]),s["c"]("design:returntype",Promise)],h.prototype,"watchRoute",null),h=s["b"]([Object(r["b"])({components:{ProjectCardComponent:R}})],h);var m=h,q=m,P=(e("7afb"),Object(x["a"])(q,o,a,!1,null,null,null));t["default"]=P.exports},cd0b:function(A,t,e){}}]);