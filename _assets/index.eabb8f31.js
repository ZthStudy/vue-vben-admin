import{a as e,i as t,o as a,j as s,k as r,w as i}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import{a as o}from"./index.4eeb0172.js";import"./RightOutlined.28ca736c.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import{B as l,t as d}from"./data.29557062.js";var c=e({components:{BasicTree:l,CollapseContainer:o},setup:()=>({treeData:d})});const p={class:"flex p-4"};c.render=function(e,o,l,d,c,m){const n=t("BasicTree"),j=t("CollapseContainer");return a(),s("div",p,[r(j,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:i((()=>[r(n,{treeData:e.treeData},null,8,["treeData"])])),_:1}),r(j,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:i((()=>[r(n,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),r(j,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:i((()=>[r(n,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default c;