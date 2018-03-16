"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:t.default});(0,n.default)(a,o.default.modulePrefix),e.default=a}),define("dummy/components/x-button/component",["exports","sample-addon/components/x-button/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/index/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/index/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"/XOfxb71",block:'{"symbols":[],"statements":[[4,"link-to",["x-button"],null,{"statements":[[0,"x-button"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/index/template.hbs"}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var o,a=t.default.exportApplicationGlobal
o="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),n[o]||(n[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("x-button")}),e.default=n}),define("dummy/routes/x-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"cO0cAiHm",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","title"],[7],[0,"Welcome to Ember"],[8],[0,"\\n\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/x-button",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"AIvbygK0",block:'{"symbols":[],"statements":[[4,"x-button",null,null,{"statements":[[0," Sample "]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/x-button.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t="dummy/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),o=JSON.parse(unescape(n)),a={default:o}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({})