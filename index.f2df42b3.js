function t(t){var e;const r=null!==(e=JSON.parse(localStorage.getItem("cartsKey")))&&void 0!==e?e:[];r.push(t),localStorage.setItem("cartsKey",JSON.stringify(r))}function e(){const t={};return new FormData(event.currentTarget).forEach(((e,r)=>{t[r]=e})),t}({form:document.querySelector("#task-form"),list:document.querySelector("#task-list")}).form.addEventListener("submit",(function(r){r.preventDefault();t(e())}));
//# sourceMappingURL=index.f2df42b3.js.map
