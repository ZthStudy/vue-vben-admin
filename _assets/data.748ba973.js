import{dk as e,W as t,u as a}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./colors.6c5ee752.js";import{T as r}from"./index.f2456bee.js";const{t:o}=a();function d(){return[{dataIndex:"type",title:o("sys.errorLog.tableColumnType"),width:80,customRender:({text:a})=>{const o=a===e.VUE?"green":a===e.RESOURCE?"cyan":a===e.PROMISE?"blue":e.AJAX?"red":"purple";return t(r,{color:o},(()=>a))}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:o("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:o("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:o("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:o("sys.errorLog.tableColumnStackMsg"),width:300}]}function l(){return d().map((e=>({field:e.dataIndex,label:e.title})))}export{d as getColumns,l as getDescSchema};