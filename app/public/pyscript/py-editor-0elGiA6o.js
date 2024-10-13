import{T as e,X as t,d as r,a as n,r as o,o as s,H as i,s as a}from"./core-dxu5CaB1.js";import{notify as c}from"./error-Cj7rlRNu.js";let l=0;const d=e=>`${e}-editor-${l++}`,u=new Map,p=new Map,m={worker:{codeBeforeRun:()=>a,onReady:({runAsync:e,io:t},{sync:r})=>{t.stdout=t.buffered(r.write),t.stderr=t.buffered(r.writeErr),r.revoke(),r.runAsync=e}}},f=(e,t)=>{if("boolean"==typeof t)throw`Invalid source: ${e}`;return t};async function g({currentTarget:e}){const{env:r,pySrc:n,outDiv:a}=this,l=!!e;if(l&&(e.disabled=!0,a.innerHTML=""),!u.has(r)){const e=URL.createObjectURL(new Blob([""])),n={type:this.interpreter,serviceWorker:this.serviceWorker},{config:a}=this;if(a)try{if(n.configURL=o(a),a.endsWith(".toml")){const[{parse:e},t]=await Promise.all([import("./toml-CvAfdf9_.js"),fetch(a).then((e=>e.ok&&e.text()))]);n.config=e(f(a,t))}else if(a.endsWith(".json")){const e=await fetch(a).then((e=>e.ok&&e.json()));n.config=f(a,e)}else n.configURL=o("./config.txt"),n.config=JSON.parse(a);n.version=s(n.config)}catch(e){return void c(e)}else n.config={};const l=t.call(new i(null,m),e,n),{sync:d}=l,{promise:p,resolve:g}=Promise.withResolvers();u.set(r,p),d.revoke=()=>{URL.revokeObjectURL(e),g(l)}}return u.get(r).then((t=>{t.onerror=({error:e})=>{l&&a.insertAdjacentHTML("beforeend",`<span style='color:red'>${e.message||e}</span>\n`),console.error(e)};const r=()=>{l&&(e.disabled=!1)},{sync:o}=t;o.write=e=>{l?a.innerText+=`${e}\n`:console.log(e)},o.writeErr=e=>{l?a.insertAdjacentHTML("beforeend",`<span style='color:red'>${e}</span>\n`):(c(e),console.error(e))},o.runAsync(n).then(r,r)}))}const h=(e,t)=>{const r=document.createElement("div");r.className=`${t}-editor-input`,r.setAttribute("aria-label","Python Script Area");const n=((e,t)=>{const r=document.createElement("button");return r.className=`absolute ${t}-editor-run-button`,r.innerHTML='<svg style="height:20px;width:20px;vertical-align:-.125em;transform-origin:center;overflow:visible;color:green" viewBox="0 0 384 512" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g transform="translate(192 256)" transform-origin="96 0"><g transform="translate(0,0) scale(1,1)"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" fill="currentColor" transform="translate(-192 -256)"></path></g></g></svg>',r.setAttribute("aria-label","Python Script Run Button"),r.addEventListener("click",(async t=>{r.blur(),await e.handleEvent(t)})),r})(e,t),o=document.createElement("div");return o.addEventListener("keydown",(e=>{e.stopPropagation()})),r.append(n,o),r},v=(e,t)=>{const r=document.createElement("div");r.className=`${t}-editor-box`;const n=h(e,t),o=(e=>{const t=document.createElement("div");return t.className=`${e}-editor-output`,t.id=`${d(e)}-output`,t})(t);return r.append(n,o),[r,o,n.querySelector("button")]},y=async(e,o,s)=>{const[{basicSetup:i,EditorView:a},{Compartment:l},{python:u},{indentUnit:m},{keymap:h},{defaultKeymap:y,indentWithTab:b}]=await Promise.all([import("./codemirror-DB7FRNwF.js"),import("./codemirror_state-D1qTXrff.js"),import("./codemirror_lang-python-7zVjHNNQ.js"),import("./codemirror_language-CpVzVLTK.js").then((function(e){return e.x})),import("./codemirror_view-Dlz0Kbbt.js").then((function(e){return e.q})),import("./codemirror_commands--b8EAhGs.js")]);let w=e.hasAttribute("setup");const E=e.hasAttribute("config"),k=e.getAttribute("service-worker"),$=`${s}-${e.getAttribute("env")||d(o)}`;if(k&&(new t("data:application/javascript,postMessage(0)",{type:"dummy",serviceWorker:k}).onmessage=({target:e})=>e.terminate()),E&&p.has($))throw new SyntaxError(p.get($)?`duplicated config for env: ${$}`:`unable to add a config to the env: ${$}`);p.set($,E);let A=e.textContent;const{src:x}=e;if(x)try{A=f(x,await fetch(x).then((e=>e.ok&&e.text())))}catch(e){return void c(e)}const j={handleEvent:g,serviceWorker:k,interpreter:s,env:$,config:E&&e.getAttribute("config"),get pySrc(){return w?A:q.state.doc.toString()},get outDiv(){return w?null:M}};let L;r(e,{target:{get:()=>L},handleEvent:{get:()=>j.handleEvent,set:e=>{j.handleEvent=e===g?g:async t=>{const{currentTarget:n}=t;r(t,{code:{value:j.pySrc}}),!1!==await e(t)&&await g.call(j,{currentTarget:n})}}},code:{get:()=>j.pySrc,set:e=>{w||q.update([q.state.update({changes:{from:0,to:q.state.doc.length,insert:e}})])}},process:{value(e){const t=w,r=A;w=!0,A=e;const n=()=>{w=t,A=r};return j.handleEvent({currentTarget:null}).then(n,n)}}});const S=()=>{const t=new Event(`${o}-editor`,{bubbles:!0});e.dispatchEvent(t)};if(w)return await j.handleEvent({currentTarget:null}),void S();const C=e.getAttribute("target");if(C){if(L=document.getElementById(C)||document.querySelector(C),!L)throw new Error(`Unknown target ${C}`)}else L=document.createElement(`${o}-editor`),L.style.display="block",e.after(L);L.id||(L.id=d(o)),L.hasAttribute("exec-id")||L.setAttribute("exec-id",0),L.hasAttribute("root")||L.setAttribute("root",L.id);const[T,M,R]=v(j,o);T.dataset.env=e.hasAttribute("env")?$:s;const U=T.querySelector(`.${o}-editor-input > div`).attachShadow({mode:"open"});U.innerHTML="<style> :host { all: initial; }</style>",L.appendChild(T);const P=n(e.textContent).trim(),W=/^([ \t]+)/m.test(P)?RegExp.$1:"    ",H=()=>R.click(),q=new a({extensions:[m.of(W),(new l).of(u()),h.of([...y,{key:"Ctrl-Enter",run:H,preventDefault:!0},{key:"Cmd-Enter",run:H,preventDefault:!0},{key:"Shift-Enter",run:H,preventDefault:!0},b]),i],foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],parent:U,doc:P});q.focus(),S()};let b=0,w=Promise.resolve();const E=()=>{b=0,k()},k=()=>{if(!b){b=setTimeout(E,250);for(const[t,r]of e){const e=`script[type="${t}-editor"]`;for(const n of document.querySelectorAll(e))n.type+="-active",w=w.then((()=>y(n,t,r)))}return w}};new MutationObserver(k).observe(document,{childList:!0,subtree:!0});var $=k();export{$ as default};
//# sourceMappingURL=py-editor-0elGiA6o.js.map
