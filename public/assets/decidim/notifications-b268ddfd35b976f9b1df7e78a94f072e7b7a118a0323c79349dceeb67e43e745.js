"use strict";$(function(){var t=$("#notifications"),i=t.find("section#notifications-list"),n=t.find(".empty-notifications"),e=t.find("ul.pagination"),o=500,a=function(){return t.find(".card--list__item").length>0},c=function(){a()||(i.remove(),n.removeClass("hide"))};i.on("click",".mark-as-read-button",function(t){var i=$(t.target).parents(".card--list__item");i.fadeOut(o,function(){i.remove(),c()})}),t.on("click",".mark-all-as-read-button",function(){i.fadeOut(o,function(){e.remove(),t.find(".card--list__item").remove(),c()})}),c()});