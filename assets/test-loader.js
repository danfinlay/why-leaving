!function(){define("ember-cli/test-loader",[],function(){"use strict";function e(e){u.push(e)}function o(e){r.push(e)}function n(e,o){for(var n,t=0,u=e.length;u>t;t++)if((n=e[t])(o))return!0;return!1}function t(){this._didLogMissingUnsee=!1}var u=[],r=[];return t.prototype={shouldLoadModule:function(e){return e.match(/[-_]test$/)},listModules:function(){return Object.keys(requirejs.entries)},loadModules:function(){var e,o,t,i=this.listModules();for(o=0,t=i.length;t>o;o++)e=i[o],n(r,e)||(n(u,e)||this.shouldLoadModule(e))&&(this.require(e),this.unsee(e))}},t.prototype.require=function(e){try{require(e)}catch(o){this.moduleLoadFailure(e,o)}},t.prototype.unsee=function(e){"function"==typeof require.unsee?require.unsee(e):this._didLogMissingUnsee||(this._didLogMissingUnsee=!0,"undefined"!=typeof console&&console.warn("unable to require.unsee, please upgrade loader.js to >= v3.3.0"))},t.prototype.moduleLoadFailure=function(e,o){console.error("Error loading: "+e,o.stack)},t.load=function(){(new t).loadModules()},{"default":t,addModuleIncludeMatcher:e,addModuleExcludeMatcher:o}})}();
//# sourceMappingURL=test-loader.map