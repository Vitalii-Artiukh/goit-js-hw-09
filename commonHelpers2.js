import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form");let a={email:"",message:""};const o=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){for(const r in e)e.hasOwnProperty(r)&&(t.elements[r].value=e[r]);a=e}};o();const l=e=>{a[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))},m=e=>{if(e.preventDefault(),t.elements.email.value===""||t.elements.message.value===""){alert("Fill please all fields");return}console.log(a),e.target.reset(),localStorage.removeItem("feedback-form-state")};t.addEventListener("input",l);t.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map
