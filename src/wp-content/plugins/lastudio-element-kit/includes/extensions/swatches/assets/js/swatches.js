!function(t){"use strict";function a(t,a){this.recalc_needed=!0,this.variation_attributes=t,this.variations_available=a,this.variations_current={},this.variations_selected={},this.reset_current=function(){for(var t in this.variation_attributes){this.variations_current[t]={};for(var a=0;a<this.variation_attributes[t].length;a++)this.variations_current[t.toString()][this.variation_attributes[t][a].toString()]=0}},this.update_current=function(){this.reset_current();for(var t=0;t<this.variations_available.length;t++)if(this.variations_available[t].variation_is_active){var a=this.variations_available[t].attributes;for(var e in a){var i=a[e],r=this.variations_selected[e];if(r&&r===i)this.variations_current[e][i]=1;else{var s=!0;for(var o in this.variations_selected)if(o!==e){var n=this.variations_selected[o],c=a[o];n&&c&&n!==c&&(s=!1)}if(s)if(""===i)for(var l in this.variations_current[e])this.variations_current[e][l]=1;else this.variations_current[e][i]=1}}}this.recalc_needed=!1},this.get_current=function(){return this.recalc_needed&&this.update_current(),this.variations_current},this.reset_selected=function(){this.recalc_needed=!0,this.variations_selected={}},this.set_selected=function(t,a){this.recalc_needed=!0,this.variations_selected[t]=a},this.get_selected=function(){return this.variations_selected}}function e(a,e){var i=a.closest(".product").find(".woocommerce-product-gallery.images").parent(),r="",s=!1,o=!1;if(a.closest(".product_item").length&&(s=a.closest(".product_item")),s){if(null!==e){var n=s.find(".p_img-first img");n.wc_set_variation_attr("src",e.image.src),n.wc_set_variation_attr("height",e.image.src_h),n.wc_set_variation_attr("width",e.image.src_w),n.wc_set_variation_attr("srcset",e.image.srcset),n.wc_set_variation_attr("sizes",e.image.sizes),n.wc_set_variation_attr("title",e.image.title),n.wc_set_variation_attr("data-caption",e.image.caption),n.wc_set_variation_attr("alt",e.image.alt),n.wc_set_variation_attr("data-src",e.image.full_src),n.wc_set_variation_attr("data-large_image",e.image.full_src),n.wc_set_variation_attr("data-large_image_width",e.image.full_src_w),n.wc_set_variation_attr("data-large_image_height",e.image.full_src_h)}}else{if(i.closest(".elementor-widget").length&&(o=!0),null!==e)r=function(a,e){let i="";return void 0!==a&&t.isArray(a.lakit_additional_images)&&t.each(a.lakit_additional_images,(function(t,a){let r=a.large[0],s=!1;if(i+="<div",a?.lakit_extra&&("video"===a?.lakit_extra?.type&&a?.lakit_extra?.videoUrl&&(i+=' data-media-attach-type="video"',i+=' data-media-attach-video="'+a?.lakit_extra?.videoUrl+'"',r=a?.lakit_extra?.videoUrl,s=!0),"threesixty"===a?.lakit_extra?.type&&a?.lakit_extra?.spriteSource)){let t={source:a?.lakit_extra?.spriteSource,totalframes:a?.lakit_extra?.totalFrames??0,framesperrow:a?.lakit_extra?.framesPerRow??0};i+=' data-media-attach-type="threesixty"',i+=` data-media-attach-threesixty='${JSON.stringify(t)}'`}i+=' data-thumb="'+a.thumb[0]+'" class="woocommerce-product-gallery__image">',e||(i+='<div class="zoomouter"><div class="zoominner">'),i+='<a href="'+r+'"',s&&(i+=' lapopup="yes"'),i+=' data-elementor-open-lightbox="no">',i+="<img ",i+='width="'+a.single[1]+'" ',i+='height="'+a.single[2]+'" ',i+='src="'+a.single[0]+'" ',i+='class="attachment-shop_single size-shop_single" ',i+='alt="'+a.alt+'" ',i+='title="'+a.title+'" ',i+='data-caption="'+a.caption+'" ',i+='data-src="'+a.large[0]+'" ',i+='data-large_image="'+a.large[0]+'" ',i+='data-large_image_width="'+a.large[1]+'" ',i+='data-large_image_height="'+a.large[2]+'" ',a.srcset&&(i+='srcset="'+a.srcset+'" ',i+='sizes="'+a.sizes+'" />'),i+="</a>",e||(i+="</div></div>"),i+="</div>"})),i}(e,o);else{var c=i.data("old_gallery")||!1;c?r=c:i.data("old_gallery",i.find(".woocommerce-product-gallery__wrapper").html())}if(t(document).trigger("lastudiokit/woocommerce/before_apply_swatches",i),""!==r&&!s){if(i.data("prev_gallery")){var l=t(i.data("prev_gallery")),d=t(r),_=!0;if(l.length===d.length)for(var h=0;h<l.length;h++)t(l[h]).attr("data-thumb")!==t(d[h]).attr("data-thumb")&&(_=!1);else _=!1;if(_)return}i.data("prev_gallery",r);var u='<div class="woocommerce-product-gallery--with-images woocommerce-product-gallery la-woo-product-gallery images" data-columns="'+i.find(".woocommerce-product-gallery.images").data("columns")+'">';i.data("gallery_action")&&(u+=i.data("gallery_action")),u+='<figure class="woocommerce-product-gallery__wrapper">'+r+'</figure><div class="la_woo_loading"><div class="la-loader spinner3"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',i.removeAttr("data-element-loaded").css({"max-height":i.height(),"min-height":i.height()}).addClass("swatch-loading"),i.html(u);var f=i.find(".woocommerce-product-gallery.images");try{f.wc_product_gallery().addClass("swatch-loaded")}catch(t){}i.css({"max-height":"none","min-height":"200px"}),setTimeout((function(){i.removeClass("swatch-loading")}),150),t(document).trigger("lastudiokit/woocommerce/apply_swatches",i),"undefined"!=typeof LaStudioKits&&o&&LaStudioKits.wooGallery(i.closest(".elementor-widget"))}}}function i(t,a,e){var i=new RegExp("([?&])"+a+"=.*?(&|$)","i"),r=-1!==t.indexOf("?")?"&":"?";return t.match(i)?t.replace(i,"$1"+a+"="+e+"$2"):t+r+a+"="+e}t.fn.lakit_variation_form=function(){var i=this,r=parseInt(i.data("product_id"),10),s=null,o=!1,n=null,c=!1;if(i.closest(".product_item").length&&(c=!0),i.addClass("la-init-swatches"),i.find("th.label").each((function(){t(this).find("label").append('<span class="swatch-label"></span>')})),c){var l=parseInt(LaStudioKitSettings.i18n.swatches_max_item)||0;if(l>0){var d=i.closest(".product_item").find("a.woocommerce-loop-product__link").first().attr("href")||i.attr("action");i.find(".swatch-control").each((function(){t(".swatch-wrapper",t(this)).eq(l).before('<div class="swatch-wrapper-more"><a href="'+d+'"><i class="lastudioicon-i-add"></i><span>'+LaStudioKitSettings.i18n.swatches_more_text+"</span></a></div>")}))}}i.on("bind_calculator",(function(){var e=i.data("product_variations");(o=!1===e)&&i.block({message:null,overlayCSS:{background:"#fff",opacity:.6}});var c={};if(i.find(".select-option.selected").each((function(a,e){var i=t(this),r=i.closest("div.select").eq(0),s=r.closest("tr").find(".swatch-label").eq(0),o=r.find("select").first(),n=t("<div/>").html(i.data("value")).text();n=(n=n.replace(/'/g,"\\'")).replace(/"/g,'\\"'),s&&s.html(o.children("[value='"+n+"']").eq(0).text()),o.trigger("change")})),i.find(".variations select").each((function(a,e){var i=t(e),r=i.data("attribute_name")||i.attr("name");c[r]=[];var s;if((s=i.find("option:gt(0)").get()).length)for(var o=0;o<s.length;o++){var n=s[o];c[r].push(t(n).val())}})),o){n&&n.abort();var l={action:"lakit_ajax",_nonce:LaStudioKitSettings.ajaxNonce,actions:JSON.stringify({swatches_get_product_variations:{action:"swatches_get_product_variations",data:{product_id:r}}})};n=t.ajax({url:LaStudioKitSettings.ajaxUrl,type:"POST",data:l,success:function(t){s=new a(c,t.data.responses.swatches_get_product_variations.data,null,null),i.unblock()}})}else s=new a(c,e,null,null);i.trigger("woocommerce_variation_has_changed")})),i.on("change",".wc-default-select",(function(a){var e=t(this),i=e.closest("tr").find(".swatch-label").eq(0);""!==e.val()?i.html(e.find("option:selected").html()):i.html("")})),i.find(".wc-default-select").trigger("change"),i.on("click",".reset_variations",(function(){if(i.find(".swatch-label").html(""),i.find(".select-option").removeClass("selected"),i.find(".radio-option").prop("checked",!1),i.closest(".product_item").length){var t=i.closest(".product_item").find(".p_img-first img");t.wc_reset_variation_attr("src"),t.wc_reset_variation_attr("width"),t.wc_reset_variation_attr("height"),t.wc_reset_variation_attr("srcset"),t.wc_reset_variation_attr("sizes"),t.wc_reset_variation_attr("title"),t.wc_reset_variation_attr("data-caption"),t.wc_reset_variation_attr("alt"),t.wc_reset_variation_attr("data-src"),t.wc_reset_variation_attr("data-large_image"),t.wc_reset_variation_attr("data-large_image_width"),t.wc_reset_variation_attr("data-large_image_height")}return!1})).on("click",".select-option",(function(a){a.preventDefault();var e=t(this),i=e.closest("div.select").eq(0),r=i.closest("tr").find(".swatch-label").eq(0),s=i.find("select").first();if(e.hasClass("disabled"))return!1;if(e.hasClass("selected"))e.removeClass("selected"),s.children("option:eq(0)").prop("selected","selected").change(),r&&r.html("");else{i.find(".select-option").removeClass("selected"),e.addClass("selected");var o=t("<div/>").html(e.data("value")).text();o=(o=o.replace(/'/g,"\\'")).replace(/"/g,'\\"'),s.trigger("focusin").children("[value='"+o+"']").prop("selected","selected").change(),r&&r.html(s.children("[value='"+o+"']").eq(0).text())}})).on("change",".radio-option",(function(a){var e=t(this),i=e.closest("div.select").eq(0).find("select").first(),r=t("<div/>").html(e.val()).text();r=(r=r.replace(/'/g,"\\'")).replace(/"/g,'\\"'),i.trigger("focusin").children("[value='"+r+"']").prop("selected","selected").change()})).on("woocommerce_variation_has_changed",(function(){if(null!==s){i.find(".variations select").each((function(){var a=t(this).data("attribute_name")||t(this).attr("name");s.set_selected(a,t(this).val())}));var a=s.get_current();i.find("div.select").each((function(e,i){var r=t(i).find("select").first(),s=r.data("attribute_name")||r.attr("name"),o=a[s];t(i).find("div.select-option").each((function(a,e){o[t(e).data("value")]?t(e).removeClass("disabled"):t(e).addClass("disabled")})),t(i).find("input.radio-option").each((function(a,e){o[t(e).val()]?(t(e).removeAttr("disabled"),t(e).parent().removeClass("disabled")):(t(e).attr("disabled","disabled"),t(e).parent().addClass("disabled"))}))})),o&&i.find(".wc-default-select").each((function(e,i){var r=t(i),s=r.data("attribute_name")||r.attr("name"),o=a[s];r.find("option:gt(0)").removeClass("attached"),r.find("option:gt(0)").removeClass("enabled"),r.find("option:gt(0)").removeAttr("disabled"),r.find("option:gt(0)").each((function(a,e){o[t(e).val()]?(t(e).addClass("attached"),t(e).addClass("enabled")):t(e).addClass("disabled")})),r.find("option:gt(0):not(.enabled)").attr("disabled","disabled")}))}})).on("found_variation",(function(t,a){e(i,a)})).on("reset_image",(function(t){if(c){var a=i.closest(".lakit-product"),r=a.find(".button.la-addcart").first().data("oldtext")||!1;r&&(a.find(".button.la-addcart").removeClass("allow-ajax").attr("data-hint",r),a.find(".button.la-addcart .lakit-btn--text").text(r).attr("data-hint",r))}e(i,null)})),0===t(".swatch-control.select option[selected]").length&&t(".swatch-control .select-option:not(.disabled)",i).eq(0).click(),0===t(".swatch-control.radio-select input[checked]").length&&t(".swatch-control .radio-option:not(.disabled)",i).eq(0).click(),i.find(".single_variation").on("show_variation",(function(a,e,r){if(c){var s=i.closest(".lakit-product");""!=e.price_html&&t(".product_item--price",s).html(t(e.price_html).html());var o,n=s.find(".button.la-addcart").first();n.data("oldtext")||n.data("oldtext",n.data("hint")),n.data("tmptext")?o=n.data("tmptext"):(o=n.text(),n.data("tmptext",o)),r&&i.find(".single_add_to_cart_button").length&&(o=i.find(".single_add_to_cart_button").text(),n.data("oktext",o)),s.find(".button.la-addcart").addClass("allow-ajax").attr("data-hint",o),s.find(".button.la-addcart .lakit-btn--text").text(o).attr("data-hint",o)}else{var l=t('.single-price-wrapper[data-product_id="'+i.data("product_id")+'"]');""!=e.price_html&&(t(".price",l).remove(),l.append(e.price_html))}}))},t((function(){let a=[];t(document).on("mouseenter",".product_item .lakit-swatch-control .swatch-wrapper",(function(a){a.preventDefault();let e=t(this),r=e.closest(".product_item").find(".p_img-first img").first(),s=e.closest(".product_item").find(".la-addcart"),o=e.closest(".product_item").find(".woocommerce-loop-product__link, .product_item--title a");if(!e.hasClass("selected")){if(e.addClass("selected").siblings().removeClass("selected"),r.hasClass("--has-changed")||r.attr("data-o-src",r.attr("src")).attr("data-o-sizes",r.attr("sizes")).attr("data-o-srcset",r.attr("srcset")).addClass("--has-changed"),r.attr("src",e.attr("data-thumb")?e.attr("data-thumb"):r.attr("data-o-src")).removeAttr("sizes srcset"),s.length>0){let t=s.attr("href");t=i(t,"attribute_"+e.attr("data-attribute"),e.attr("data-value")),s.attr("href",t)}if(o.length>0){let t=o.eq(0).attr("href");t=i(t,"attribute_"+e.attr("data-attribute"),e.attr("data-value")),o.attr("href",t)}}})),t(document).on("wc_variation_form","form.variations_form",(function(e){let i=t(e.target);a.push(i),i.data("lakit_has_swatches_form")||i.find(".swatch-control").length&&(i.data("lakit_has_swatches_form",!0),i.lakit_variation_form(),i.trigger("bind_calculator"),i.on("reload_product_variations",(function(){for(var t=0;t<a.length;t++)a[t].trigger("woocommerce_variation_has_changed"),a[t].trigger("bind_calculator"),a[t].trigger("woocommerce_variation_has_changed")})))})),t(document).on("lastudio-kit/ajax-loadmore/success lastudio-kit/ajax-pagination/success lastudio-kit/ajax-load-template/after lastudio-kit/carousel/init_success lastudio-kit/hamburger/after",(function(a,e){t("form.variations_form").trigger("wc_variation_form");let i=parseInt(LaStudioKitSettings.i18n.swatches_max_item)||0;i>0&&t(".lakit-swatch-control",e.parentContainer).each((function(){if(0===t(".swatch-wrapper-more",t(this)).length){let a=t(this).closest(".product_item").find("a.woocommerce-loop-product__link").first().attr("href");t(".swatch-wrapper",t(this)).eq(i).before('<div class="swatch-wrapper-more"><a href="'+a+'"><i class="lastudioicon-i-add"></i><span>'+LaStudioKitSettings.i18n.swatches_more_text+"</span></a></div>")}}))})),t(window).on("elementor/frontend/init",(function(){window.elementorFrontend.hooks.addAction("frontend/element_ready/lakit-wooproducts.default",(function(a){let e=parseInt(LaStudioKitSettings.i18n.swatches_max_item)||0;e>0&&a.find(".lakit-swatch-control").each((function(){if(0===t(".swatch-wrapper-more",t(this)).length){let a=t(this).closest(".product_item").find("a.woocommerce-loop-product__link").first().attr("href");t(".swatch-wrapper",t(this)).eq(e).before('<div class="swatch-wrapper-more"><a href="'+a+'"><i class="lastudioicon-i-add"></i><span>'+LaStudioKitSettings.i18n.swatches_more_text+"</span></a></div>")}}))}))}))}))}(jQuery);