import{u as d,r as n,j as e}from"./index-e0740332.js";const l="_container_jpdd6_1",p="_image_jpdd6_11",m="_text_jpdd6_16",_="_title_jpdd6_22",u="_description_jpdd6_26",j="_accent_jpdd6_30",t={container:l,image:p,text:m,title:_,description:u,accent:j},h=()=>{const s=d(),[a,c]=n.useState(5);return n.useEffect(()=>{const o=setInterval(()=>{c(r=>r-1)},1e3),i=setTimeout(()=>{s("/")},5e3);return()=>{clearInterval(o),clearTimeout(i)}},[s]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:t.container,children:[e.jsxs("h1",{className:t.title,children:[e.jsx("span",{className:t.text,children:"Oopsie!"})," We could not find this page"]}),e.jsxs("div",{className:t.description,children:["Mistakes happen... and that is okay. You will be redirected to",e.jsx("span",{className:t.accent,children:" The Home Page"})," and start your journey from there after",e.jsxs("span",{className:t.accent,children:[" ",a," seconds."]})]})]})})};export{h as default};
