import{T as a}from"./trivia-wrapper.27b79ef7.js";import{n}from"./index.630189c2.js";import"./score-counter.f5a292b2.js";import"./custom-button.a23d7d95.js";import"./index.7d405446.js";const _={name:"hard",components:{TriviaWrapper:a},beforeRouteEnter(o,t,r){r(async e=>{e.$store.commit(`${e.$store.state.difficulty.toLowerCase()}TriviaModuleState/CLEAR_INTERVAL`),e.$nextTick(()=>e.$store.commit("SET_DIFFICULTY","Hard"))})},data(){return{}}};var s=function(){var t=this,r=t._self._c;return r("trivia-wrapper")},c=[],i=n(_,s,c,!1,null,"c8a22c2e",null,null);const u=i.exports;export{u as default};