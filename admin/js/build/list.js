!function(){"use strict";var e=window.wp.i18n;const t=e=>"#"===e[0]?document.getElementById(e.slice(1)):document.querySelectorAll(e);document.querySelector(".tablepress-all-tables").addEventListener("click",(e=>{if(e.target&&e.target.matches(".table-preview a")){const t=window.innerWidth-120,a=window.innerHeight-120;return tb_show(e.target.title,`${e.target.href}#TB_iframe=true&height=${a}&width=${t}`,!1),void e.preventDefault()}})),t("#tablepress-page").addEventListener("click",(t=>{if(t.target)return t.target.matches(".ajax-link")?(fetch(`${ajaxurl}?${t.target.href.split("?")[1]}`).then((e=>e.text())).then((a=>{if("1"===a&&"hide_message"===t.target.dataset.action){if("donation_nag"===t.target.dataset.item&&""!==t.target.dataset.target){let a=(0,e.__)("Thank you very much! Your donation is highly appreciated. You just contributed to the further development of TablePress!","tablepress");"maybe-later"===t.target.dataset.target&&(a=(0,e.sprintf)((0,e.__)('No problem! I still hope you enjoy the benefits that TablePress adds to your site. If you should change your mind, you&#8217;ll always find the &#8220;Donate&#8221; button on the <a href="%s">TablePress website</a>.',"tablepress"),"https://tablepress.org/")),t.target.closest("div").insertAdjacentHTML("afterend",`<div class="donation-message-after-click-message notice notice-success"><p><strong>${a}</strong></p></div>`);const s=document.querySelector(".donation-message-after-click-message");s.offsetWidth,s.style.opacity=0,s.addEventListener("transitionend",(()=>s.remove()))}t.target.closest("div").remove()}})),void t.preventDefault()):void 0}));const a=t("#doaction");a&&a.addEventListener("click",(a=>{const s=t("#bulk-action-selector-top").value,r=t(".tablepress-all-tables tbody input:checked").length;"-1"!==s&&0!==r&&("delete"!==s||confirm((0,e._n)("Do you really want to delete this table?","Do you really want to delete these tables?",r,"tablepress")))||a.preventDefault()}))}();