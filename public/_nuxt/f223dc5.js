(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{237:function(t,e,r){var content=r(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("2d951ecd",content,!0,{sourceMap:!1})},248:function(t,e,r){"use strict";r(237)},249:function(t,e,r){var o=r(49)(!1);o.push([t.i,".SignUp[data-v-16956165]{margin-top:10%;margin-bottom:10%}.container[data-v-16956165],.SignUp[data-v-16956165]{display:flex;justify-content:center;align-items:center;min-height:50vh}",""]),t.exports=o},256:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{email:"",password:"",userName:""}},methods:{userSignUp:function(t){var e=this;t||this.$store.dispatch("USER_SIGN_UP_EMAIL",{email:this.email,password:this.password,userName:this.userName}).then((function(){e.$router.push("/user/profile")})).catch((function(t){alert(t.message)}))}}},n=(r(248),r(27)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"SignUp"},[r("div",{staticClass:"p-6 w-1/4 container mx-auto shadow-md"},[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("h2",{staticClass:"mb-2 text-xl text-black-800 font-bold"},[t._v("Sign Up")]),t._v(" "),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block mb-2 text-gray-500",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"border w-full px-2 py-1",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block mb-2 text-gray-500",attrs:{for:"email"}},[t._v("User Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"border w-full px-2 py-1",attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block mb-2 text-gray-500",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"border w-full px-2 py-1",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"bg-green-500 text-white uppercase py-2 w-full shadow",on:{click:function(e){return t.userSignUp()}}},[t._v("Sign Up")])])])])}),[],!1,null,"16956165",null);e.default=component.exports}}]);