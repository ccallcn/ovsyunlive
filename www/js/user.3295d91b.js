webpackJsonp([1],{"3GEF":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("aGHM"),s=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var i=r("VhRW"),o=r("XyMi"),u=Object(o.a)(s.a,i.a,i.b,!1,null,null,null);e.default=u.exports},LNfB:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=r("3GEF"),n=a(s),i=r("0iPh"),o=a(i);e.default={props:{page:{type:Number,default:1},q:{type:String,default:""}},data:function(){return{query:"",defaultPwd:"",pageSize:10,total:0,users:[]}},activated:function(){this.$refs.search.focus()},components:{UserFormDlg:n.default},mounted:function(){var t=this;this.query=this.q,this.$refs.search.focus(),this.load(),o.default.get("/user/defaultPwd").then(function(e){t.defaultPwd=e})},computed:{},methods:{load:function(){var t=this;o.default.post("/user/list",{q:this.q,start:(this.currentPage-1)*this.pageSize,limit:this.pageSize}).then(function(e){t.total=e.total,t.users=e.rows})},remove:function(t){var e=this;this.$confirm("确认删除用户 "+t.name+" ?","提示").then(function(){o.default.post("/user/remove",{id:t.id}).always(function(){e.load()})}).catch(function(){})},resetPwd:function(t){var e=this;this.$confirm("确认要重置用户 "+t.name+" 登录密码为默认密码 "+this.defaultPwd+" 吗?","提示").then(function(){o.default.post("/user/resetPwd",{id:t.id}).then(function(t){e.$message({type:"success",message:"密码重置成功"})})}).catch(function(){})},doSearch:function(){this.$router.push("/users/"+this.page+(this.query?"?q="+this.query:""))}},beforeRouteEnter:function(t,e,r){return t.params.page?(t.params.page=parseInt(t.params.page)||1,t.params.q=t.query.q,r()):r({path:"/users/1",replace:!0})},beforeRouteUpdate:function(t,e,r){var a=this;if(!t.params.page)return r({path:"/users/1",replace:!0});t.params.page=parseInt(t.params.page)||1,t.params.q=t.query.q,r(),this.$nextTick(function(){a.query=a.q,a.load()})}}},VhRW:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return s});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FormDlg",{ref:"dlg",attrs:{title:"编辑用户",disabled:t.errors.any()},on:{hide:t.onHide,submit:t.onSubmit}},[t.form.id?t._e():r("div",{staticClass:"alert alert-success alert-dismissible"},[r("small",[t._v("新增用户, 初始默认密码是 "+t._s(t.defaultPwd))]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.id,expression:"form.id",modifiers:{trim:!0}}],attrs:{type:"hidden",name:"id"},domProps:{value:t.form.id},on:{input:function(e){e.target.composing||t.$set(t.form,"id",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),r("div",{class:["form-group",{"has-error":t.errors.has("name")}]},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input-name"}},[r("span",{staticClass:"text-red"},[t._v("*")]),t._v(" 用户名")]),t._v(" "),r("div",{staticClass:"col-sm-7"},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model.trim",value:t.form.name,expression:"form.name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"input-name",name:"name","data-vv-as":"用户名"},domProps:{value:t.form.name},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),t.onSubmit(e)):null},input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),r("span",{staticClass:"help-block"},[t._v(t._s(t.errors.first("name")))])])])])},s=[]},XETu:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return s});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box box-success"},[r("div",{staticClass:"box-header"},[r("h4",{staticClass:"text-success text-center"},[t._v("用户列表")]),t._v(" "),r("div",{staticClass:"form-inline"},[r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.$refs.userDlg.show()}}},[r("i",{staticClass:"fa fa-plus"}),t._v(" 新增用户")])]),t._v(" "),r("div",{staticClass:"form-group pull-right"},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],ref:"search",staticClass:"form-control",attrs:{type:"text",spellcheck:"false",placeholder:"搜索"},domProps:{value:t.query},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.doSearch(e):null},input:function(e){e.target.composing||(t.query=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.doSearch(e)}}},[r("i",{staticClass:"fa fa-search"})])])])])])]),t._v(" "),r("div",{staticClass:"box-body"},[r("el-table",{attrs:{data:t.users,stripe:""}},[r("el-table-column",{attrs:{"min-width":"120",label:"用户名",prop:"name"}}),t._v(" "),r("el-table-column",{attrs:{width:"230",label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",{staticClass:"btn-group"},[r("a",{staticClass:"btn btn-success btn-xs",attrs:{role:"button"},on:{click:function(r){r.preventDefault(),t.$refs.userDlg.show(e.row)}}},[r("i",{staticClass:"fa fa-edit"}),t._v(" 编辑\n                            ")]),t._v(" "),r("a",{staticClass:"btn btn-warning btn-xs",attrs:{role:"button"},on:{click:function(r){r.preventDefault(),t.resetPwd(e.row)}}},[r("i",{staticClass:"fa fa-key"}),t._v(" 重置密码\n                            ")]),t._v(" "),r("a",{staticClass:"btn btn-danger btn-xs",attrs:{role:"button"},on:{click:function(r){r.preventDefault(),t.remove(e.row)}}},[r("i",{staticClass:"fa fa-remove"}),t._v(" 删除\n                            ")])])]}}])})],1)],1),t._v(" "),r("div",{staticClass:"box-footer clearfix"},[r("el-pagination",{staticClass:"pull-right",attrs:{layout:"prev,pager,next",total:t.total,"page-size":t.pageSize,"current-page":t.page},on:{"update:pageSize":function(e){t.pageSize=e}}})],1),t._v(" "),r("UserFormDlg",{ref:"userDlg",attrs:{defaultPwd:t.defaultPwd},on:{submit:t.load}})],1)},s=[]},aGHM:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function a(s,n){try{var i=e[s](n),o=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}return a("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var n=r("I3G/"),i=(a(n),r("A9K1")),o=a(i),u=r("0iPh"),l=a(u);e.default={props:{defaultPwd:{type:String,default:""}},data:function(){return{roles:[],form:this.defForm()}},components:{FormDlg:o.default},methods:{defForm:function(){return{id:"",name:""}},onHide:function(){this.errors.clear(),this.form=this.defForm()},onSubmit:function(){var t=this;return s(regeneratorRuntime.mark(function e(){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validator.validateAll();case 2:if(r=e.sent){e.next=8;break}return a=t.errors.items[0],t.$message({type:"error",message:a.msg}),document.querySelector("[name="+a.field+"]").focus(),e.abrupt("return");case 8:l.default.post("/user/save",t.form).then(function(e){t.$refs.dlg.hide(),t.$emit("submit")});case 9:case"end":return e.stop()}},e,t)}))()},show:function(t){this.errors.clear(),t&&Object.assign(this.form,t),this.$refs.dlg.show()}}}},m5jp:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("LNfB"),s=r.n(a);for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var i=r("XETu"),o=r("XyMi"),u=Object(o.a)(s.a,i.a,i.b,!1,null,null,null);e.default=u.exports}});