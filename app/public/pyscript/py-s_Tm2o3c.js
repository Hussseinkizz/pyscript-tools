import{e,d as t}from"./core-dxu5CaB1.js";const r=new WeakSet,n=({interpreter:e,io:t,run:r,type:n},{sync:i})=>{if("py"!==n||!i.is_pyterminal())return;r(["from polyscript import currentScript as _","__terminal__ = _.terminal","del _"].join(";"));let o="";const{pyterminal_read:a,pyterminal_write:d}=i,s=new TextDecoder,l={isatty:!1,write:e=>(o=s.decode(e),d(o),e.length)};t.stderr=e=>{d(String(e.message||e))},e.setStdout(l),e.setStderr(l),e.setStdin({isatty:!1,stdin:()=>a(o)})};var i=async i=>{const[{Terminal:o},{Readline:a},{FitAddon:d},{WebLinksAddon:s}]=await Promise.all([import("./xterm-BY7uk_OU.js"),import("./xterm-readline-CrMXBT1h.js"),import("./xterm_addon-fit--gyF3PcZ.js"),import("./xterm_addon-web-links-Cnej-nJ6.js")]),l=new a,m=e=>{let r=i;const n=i.getAttribute("target");if(n){if(r=document.getElementById(n)||document.querySelector(n),!r)throw new Error(`Unknown target ${n}`)}else r=document.createElement("py-terminal"),r.style.display="block",i.after(r);const a=new o({theme:{background:"#191A19",foreground:"#F5F2E7"},...e}),m=new d;return a.loadAddon(m),a.loadAddon(l),a.loadAddon(new s),a.open(r),m.fit(),a.focus(),t(i,{terminal:{value:a},process:{value:async e=>{for(const t of e.split(/(?:\r\n|\r|\n)/)){a.paste(`${t}`),a.write("\r\n");do{await new Promise((e=>setTimeout(e,0)))}while(!l.activeRead?.resolve);l.activeRead.resolve(t)}}}}),a};i.hasAttribute("worker")?(e.main.onWorker.add((function t(n,i){r.has(i)||(r.add(i),e.main.onWorker.delete(t),m({disableStdin:!1,cursorBlink:!0,cursorStyle:"block"}),i.sync.is_pyterminal=()=>!0,i.sync.pyterminal_read=l.read.bind(l),i.sync.pyterminal_write=l.write.bind(l))})),e.worker.onReady.add(n)):e.main.onReady.add((function t({interpreter:r,io:n,run:i,type:o}){if("py"!==o)return;console.warn("py-terminal is read only on main thread"),e.main.onReady.delete(t),globalThis.__py_terminal__=m({disableStdin:!0,cursorBlink:!1,cursorStyle:"underline"}),i("from js import __py_terminal__ as __terminal__"),delete globalThis.__py_terminal__,n.stderr=e=>{l.write(String(e.message||e))};let a="";const d=new TextDecoder,s={isatty:!1,write:e=>(a=d.decode(e),l.write(a),e.length)};r.setStdout(s),r.setStderr(s),r.setStdin({isatty:!1,stdin:()=>l.read(a)})}))};export{i as default};
//# sourceMappingURL=py-s_Tm2o3c.js.map
