webpackJsonp([1],[function(e,t,n){/*!
	 * (c) The Timecube Team.
	 *
	 * Timecube-frontend - v0.0.1
	 * http://www.zktimecube.com/
	 */
"use strict";n(32),n(15),n(26),n(21)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={dictionaries:{accountType:{1:"手机",2:"邮箱"}},downloadUrl:{android:"http://www.pgyer.com/GyLE",ios:"http://www.pgyer.com/timecubeEnterprise"}};t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(23),i=r(o),a=n(22),c=r(a),u=n(24),s=r(u);n(3),t["default"]=angular.module("zk.login",["zk.user","toaster"]).service("loginService",s["default"]).service("loginModalService",i["default"]).controller("loginModalCtroller",c["default"]).name},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(27),i=r(o);t["default"]=angular.module("zk.user",[]).service("userService",i["default"]).name},function(e,t){var n,r=window.angular;try{n=r.module(["ng"])}catch(o){n=r.module("ng",[])}var i='<header id="header" class="header" ng-controller="appHeaderCtrls"> <div class="container"> <h5 class="logo"> <a href=""> <img class="img-responsive" src="images/logo/top-logo.png" alt=""> </a>  </h5>  <nav class="main-nav navbar-right" role="navigation">  <div id="navbar-collapse" class="navbar-collapse collapse"> <ul class="nav navbar-nav"> <li ng-show="isLogined" class="nav-item"> <a>{{userInfo.name}} </a> </li> <li ng-show="isLogined" class="nav-item"> <a href="/api/logout">退出</a> </li> <li ng-show="!isLogined&&!noNeedlogin" class="nav-item"> <button class="btn btn-default" ng-click="showLogin()">登录</button> </li> </ul>  </div>  </nav>  </div>  </header>';n.run(["$templateCache",function(e){e.put("header.html",i)}]),e.exports=i},,,,,,,,,,function(e,t){"use strict"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(4);var o=n(1),i=r(o),a=n(14),c=(r(a),n(16)),u=r(c),s=n(17),l=r(s),f=angular.module("zk.app",["zk.login","zk.user","ui.bootstrap","ngAnimate"]);f.controller("appMainCtrl",l["default"]),f.controller("appHeaderCtrls",u["default"]).constant("appConfig",i["default"]),t["default"]=f.name},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(e,t,r){n(this,o),this.scope=e,this.loginModalService=t,e.showLogin=function(n){var r={};r.refer=window.location.pathname,t.openLoginModal(r).then(function(t){e.userInfo=t,e.isLogined=!0},function(e){})},r.getUserInfo().then(function(t){e.isLogined=!0,e.userInfo=t}),e.$on("zk.login.success",function(t,n){e.isLogined=!0,e.userInfo=n})};t["default"]=r,r.$inject=["$scope","loginModalService","userService"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(e,t,r){n(this,o)};t["default"]=r,r.$inject=["$scope"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return e&&t?i["default"].dictionaries[t][e]:null};var o=n(1),i=r(o)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){n(this,e),this.$http=t,this.$q=r}return r(e,[{key:"getZktimeUrl",value:function(){var e=this.$q.defer();return this.$http.get("api/download/zktimeurl").then(function(t){"00000000"===t.data.code?e.resolve(t.data):e.reject(t.data)},function(t){e.reject(t)}),e.promise}}]),e}();t["default"]=o,o.$inject=["$http","$q"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r,o,i,a){n(this,e),this.scope=t,this.loginModalService=r,this.downloadService=o,this.downloadUrl=a.downloadUrl}return r(e,[{key:"downloadZktime",value:function(){var e=this;this.downloadService.getZktimeUrl().then(function(e){window.location.href=e.url},function(){var t={};t.refer=window.location.pathname,e.loginModalService.openLoginModal(t)})}}]),e}();t["default"]=o,o.$inject=["$scope","loginModalService","downloadService","userService","appConfig"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(2);var o=n(20),i=r(o),a=n(19),c=r(a);t["default"]=angular.module("zk.download",["ngAnimate","zk.app","zk.login","ui.bootstrap","validation","validation.rule"]).service("downloadService",c["default"]).controller("downloadCtrl",i["default"]).name},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(e,t,r,i,a,c,u){n(this,o),this.scope=e,this.uibModalInstance=t,this.loginService=r,this.userService=i,this.rootScope=c,this.status={logining:!1},e.account={},e.cancel=function(){t.dismiss()},e.registerUrl="/register.html",u.refer&&(e.registerUrl+="?refer="+u.refer),e.submit=function(){r.login(e.account).then(function(e){a.pop({type:"success",title:"登录成功"});var n=e.payload.results[0];c.$broadcast("zk.login.success",n),t.close(n)},function(e){a.pop({type:"error",title:"登录失败",body:e.message})})},e.verifyUserName=function(e){return i.isExist(e)}};t["default"]=r,r.$inject=["$scope","$uibModalInstance","loginService","userService","toaster","$rootScope","option"]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(33);var i=function(){function e(t){r(this,e),this.$uibModal=t}return o(e,[{key:"openLoginModal",value:function(e){e=e||{};var t=this.$uibModal.open({controller:"loginModalCtroller",templateUrl:"login-modal.html",resolve:{option:e}});return t.result}}]),e}();t["default"]=i,i.$inject=["$uibModal"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){n(this,e),this.$http=t,this.$q=r,this.status={isLogined:!1}}return r(e,[{key:"login",value:function(e){var t=this,n=this.$q.defer();return this.$http.post("api/login",e).then(function(e){"00000000"===e.data.code?(n.resolve(e.data),t.status.isLogined=!0):n.reject(e.data)},function(e){n.reject(e)}),n.promise}}]),e}();t["default"]=o,o.$inject=["$http","$q"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(28),c=r(a),u=function(){function e(t,n,r,i,a,u,s,l){o(this,e),this.urlQueryString=c["default"],this.$interval=n,this.$q=u,this.toaster=s,this.scope=t,this.loginModalService=r,this.userService=i,this.verifyService=a,this.rootScope=l,t.account={type:1},t.verifyImgCode=function(e){return a.verifyImgCode(t.account.picValidCode)},t.verifyPhoneCode=function(){var e={username:t.account.username,captchaCode:t.account.captchaCode};return a.verifyPhoneCode(e)},t.checkUser=function(){var e=u.defer();return i.isExist(t.account.username).then(function(){return e.reject()},function(){return e.resolve()}),e.promise},this.status={isopen:!1,originImgCodeUrl:"api/validate",imgCodeUrl:"api/validate",timeRemain:0}}return i(e,[{key:"refreshImgCode",value:function(){this.status.imgCodeUrl=this.status.originImgCodeUrl+"?new="+(new Date).getTime()}},{key:"chooseAcountType",value:function(e){this.scope.account.type=e}},{key:"sendCaptCha",value:function(){var e=this;this.verifyService.verifyImgCode(e.scope.account.picValidCode).then(function(t){e.verifyService.sendcaptcha({username:e.scope.account.username}).then(function(t){e.status.timeRemain=60,e.timecount=e.$interval(function(){e.status.timeRemain--,0==e.status.timeRemain&&e.timecount&&e.$interval.cancel(e.timecount)},1e3)})})}},{key:"registerAccount",value:function(){var e=this,t=this.scope.account,n=this;this.userService.save(t).then(function(){var r={type:"success",title:"注册成功"},o=e.urlQueryString().refer;n.rootScope.$broadcast("zk.login.success",t),o&&(r.body="即将返回注册前页面",r.onHideCallback=function(){window.location.href=o}),e.toaster.pop(r)},function(t){var n={type:"error",title:t.message};e.toaster.pop(n)})}}]),e}();t["default"]=u,u.$inject=["$scope","$interval","loginModalService","userService","verifyService","$q","toaster","$rootScope"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(4),n(29),n(2),n(3),n(31);var o=n(25),i=r(o),a=n(18),c=r(a);t["default"]=angular.module("zk.register",["ngAnimate","zk.app","zk.login","zk.user","zk.verify","toaster","ui.bootstrap","validation","validation.rule"]).filter("typeFilter",function(){return c["default"]}).controller("registerCtrl",i["default"]).name},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){n(this,e),this.$q=r,this.$http=t,this.status={}}return r(e,[{key:"getUserInfo",value:function(){var e=this.$q.defer();return this.$http.get("api/user/").then(function(t){if("00000000"==t.data.code){var n=t.data.payload.results[0];e.resolve(n)}else e.reject(t.data)},function(t){e.reject(t.data)}),e.promise}},{key:"isExist",value:function(e){var t=this.$q.defer();return this.$http.post("api/user/verify",{username:e}).then(function(e){"00000000"!==e.data.code?t.resolve(e.data):t.reject(e.data)},function(e){t.reject(e.data)}),t.promise}},{key:"save",value:function(e){var t=this.$q.defer();return this.$http.post("api/user/",e).then(function(e){"00000000"===e.data.code?t.resolve(e.data):t.reject(e.data)},function(e){t.reject(e.data)}),t.promise}}]),e}();t["default"]=o,o.$inject=["$http","$q"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){for(var e={},t=window.location.search.substring(1),n=t.split("&"),r=0;r<n.length;r++){var o=n[r].split("=");if("undefined"==typeof e[o[0]])e[o[0]]=decodeURIComponent(o[1]);else if("string"==typeof e[o[0]]){var i=[e[o[0]],decodeURIComponent(o[1])];e[o[0]]=i}else e[o[0]].push(decodeURIComponent(o[1]))}return e}},function(e,t){"use strict";angular.module("validation.rule",["validation"]).config(["$validationProvider",function(e){function t(e,t,n,r,o){var i=t.$eval(o);return angular.isFunction(i)?i(e).then(function(){return!0},function(){return!1}):!0}var n={required:function(e){return!!e},url:/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,email:/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,number:function(e,t,n,r,o){return e?/^\d+$/.test(e):!0},minlength:function(e,t,n,r,o){return e.length>=o},maxlength:function(e,t,n,r,o){return e.length<=o},equalto:function(e,t,n,r,o){return e===t.$eval(o)},mobileOrEmail:function(e,t,n,r,o){return 1===t.$eval(o)?/^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(e):2===t.$eval(o)?/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e):/^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(e)||/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e)},requiredAccountAndPic:function(e,t,n,r,o){for(var i=o.split("&"),a=!0,c=i.length-1;c>=0;c--)t.$eval(i[c])||(a=!1);return a},requiredWhen:function(e,t,n,r,o){return t.$eval(o)?!!e:!0},asyncVerify:t,isUserExist:t,isUnExist:t},r={required:{error:"此项为必录项"},url:{error:"请输入正确链接格式"},email:{error:"请输入正确邮箱格式"},number:{error:"请输入正确数字格式"},minlength:{error:"您输入的长度过短 "},maxlength:{error:"您输入的长度过长"},equalto:{error:"两次输入不一致"},mobileOrEmail:{error:"请输入正确的格式"},asyncVerify:{error:"您输入的值有误"},isUserExist:{error:"你输入的用户名不存在"},isUnExist:{error:"你输入的用户名己存在"},requiredWhen:{error:"此项为必录项"},requiredAccountAndPic:{error:"请输入正确的手机号或者邮箱以及验证码"}};e.setExpression(n).setDefaultMsg(r),e.showSuccessMessage=!1}])},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){n(this,e),this.$http=t,this.$q=r}return r(e,[{key:"verifyImgCode",value:function(e){var t=this.$q.defer(),n="api/validate/verify/img";return this.$http.post(n,{code:e}).then(function(e){e.data.result?t.resolve(e.data):t.reject(e.data)},function(e){t.reject(e)}),t.promise}},{key:"verifyPhoneCode",value:function(e){var t=this.$q.defer(),n="api/validate/verify/phone";return this.$http.post(n,e).then(function(e){"00000000"===e.data.code?t.resolve(e.data):t.reject(e.data)},function(e){t.reject(e)}),t.promise}},{key:"sendcaptcha",value:function(e){var t=this.$q.defer(),n="api/validate/sendcaptcha";return this.$http.post(n,e).then(function(e){"00000000"===e.data.code?t.resolve(e.data):t.reject(e.data)},function(e){t.reject(e)}),t.promise}}]),e}();t["default"]=o,o.$inject=["$http","$q"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(30),i=r(o);t["default"]=angular.module("zk.verify",[]).service("verifyService",i["default"]).name},function(e,t){},function(e,t){var n,r=window.angular;try{n=r.module(["ng"])}catch(o){n=r.module("ng",[])}var i='<div class="modal-header text-center"> <h4 class="modal-title"><img src="images/logo/logo-48x48.png"/>请登录\n<span class="glyphicon glyphicon-remove close" ng-click="cancel()"></span> </h4> </div> <div class="modal-body"> <form class="form-horizontal" name="regesterForm" role="form"> <div class="form-group"> <div class="col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 col-sm-12 col-xs-12"> <input type="text" class="form-control" name="username" ng-model="account.username" placeholder="请输入手机号或邮箱地址" validator="required,mobileOrEmail,isUserExist=verifyUserName" valid-method="blur"> </div> </div> <div class="form-group"> <div class="col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 col-sm-12 col-xs-12"> <input type="password" class="form-control" name="password" ng-model="account.password" placeholder="密码" validator="required"> </div> </div> <div class="form-group"> <div class="col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 col-sm-12 col-xs-12"> <button class="btn btn-success form-control" validation-submit="regesterForm" ng-click="submit()" validation-group="contact">登录</button> </div> </div> </form> </div> <div class="modal-footer"> <div class="col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 col-sm-12 col-xs-12"> <p>还没有账号？<a ng-href="{{registerUrl}}">立即注册</a></p> </div> </div>';n.run(["$templateCache",function(e){e.put("login-modal.html",i)}]),e.exports=i}]);
//# sourceMappingURL=app.bundle.0be09d07114a51e5765f.js.map