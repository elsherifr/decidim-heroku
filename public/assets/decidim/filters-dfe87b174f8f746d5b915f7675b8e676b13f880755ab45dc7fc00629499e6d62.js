"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _slicedToArray=function(){function t(t,e){var i=[],n=!0,r=!1,o=undefined;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&c["return"]&&c["return"]()}finally{if(r)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(t){_classCallCheck(this,e),this.$form=t,this.id=this.$form.attr("id")||this._getUID(),this.mounted=!1,this.select2Filters=[],this._onFormChange=this._onFormChange.bind(this),this._onPopState=this._onPopState.bind(this),window.Decidim.PopStateHandler?this.popStateSubmiter=!1:(this.popStateSubmiter=!0,window.Decidim.PopStateHandler=this.id)}return _createClass(e,[{key:"unmountComponent",value:function(){this.mounted&&(this.mounted=!1,this.$form.off("change","input:not(.select2-search__field), select",this._onFormChange),this.select2Filters.forEach(function(t){t.destroy()}),t.Decidim.History.unregisterCallback("filters-"+this.id))}},{key:"mountComponent",value:function(){var e=this;this.$form.length>0&&!this.mounted&&function(){e.mounted=!0;var i=e.select2Filters;e.$form.find("select.select2").each(function(t,e){i.push(new window.Decidim.Select2Field(e))}),e.$form.on("change","input:not(.select2-search__field), select",e._onFormChange),t.Decidim.History.registerCallback("filters-"+e.id,function(){e._onPopState()})}()}},{key:"_getLocation",value:function(){return t.location.toString()}},{key:"_getLocationParams",value:function(t){var e=decodeURIComponent(this._getLocation()),i=e.match(t);return i&&(i=i.map(function(t){return t.match(/=(.*)/)[1]})),i}},{key:"_parseLocationFilterValues",value:function(){var t=decodeURIComponent(this._getLocation()).match(/filter\[([^\]]*)\](?:\[\])?=([^&]*)/g);if(t){return t.reduce(function(t,e){var i=e.match(/filter\[([^\]]*)\](\[\])?=([^&]*)/),n=_slicedToArray(i,4),r=n[1],o=n[2],a=n[3];return o?(t[r]||(t[r]=[]),t[r].push(a)):t[r]=a,t},{})}return null}},{key:"_parseLocationOrderValue",value:function(){var t=this._getLocation(),e=t.match(/order=([^&]*)/),i=this.$form.find(".order-by .menu"),n=i.find(".menu a:first").data("order");return e&&(n=e[1]),n}},{key:"_clearForm",value:function(){this.$form.find("input[type=checkbox]").attr("checked",!1),this.$form.find("input[type=radio]").attr("checked",!1),this.$form.find("select.select2").val(null).trigger("change.select2"),this.$form.find("fieldset input[type=radio]:first").each(function(){$(this)[0].checked=!0})}},{key:"_onPopState",value:function(){var t=this;this._clearForm();var e=this._parseLocationFilterValues(),i=this._parseLocationOrderValue();if(this.$form.find("input.order_filter").val(i),e){Object.keys(e).forEach(function(i){var n=null;n=t.$form.find("input#filter_"+i+"_"+e[i]),n.length>0?n[0].checked=!0:(n=t.$form.find("input#filter_"+i+",select#filter_"+i),n.length>0&&(n.hasClass("select2")?n.val(e[i]).trigger("change.select2"):n.val(e[i])))})}this.popStateSubmiter&&this.$form.submit()}},{key:"_onFormChange",value:function(){var e=this.$form.attr("action"),i=this.$form.serialize(),n="";this.$form.submit(),n=e.indexOf("?")<0?e+"?"+i:e+"&"+i,t.Decidim.History.pushState(n)}},{key:"_getUID",value:function(){return"filter-form-"+(new Date).setUTCMilliseconds()+"-"+Math.floor(1e7*Math.random())}}]),e}();t.Decidim=t.Decidim||{},t.Decidim.FormFilterComponent=e}(window),function(t){var e=t.Decidim.FormFilterComponent;$(function(){$("form.new_filter").each(function(){new e($(this)).mountComponent()})})}(window);