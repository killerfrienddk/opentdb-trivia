import{T as n}from"./trivia-wrapper.27b79ef7.js";import{n as i}from"./index.630189c2.js";import"./score-counter.f5a292b2.js";import"./custom-button.a23d7d95.js";import"./index.7d405446.js";const a={name:"medium",components:{TriviaWrapper:n},beforeRouteEnter(o,r,t){t(async e=>{e.$store.commit(`${e.$store.state.difficulty.toLowerCase()}TriviaModuleState/CLEAR_INTERVAL`),e.$nextTick(()=>e.$store.commit("SET_DIFFICULTY","Medium"))})},data(){return{}}};var _=function(){var r=this,t=r._self._c;return t("trivia-wrapper")},s=[],m=i(a,_,s,!1,null,"e413ec2d",null,null);const f=m.exports;export{f as default};