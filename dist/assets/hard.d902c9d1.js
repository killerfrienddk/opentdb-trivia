import{T as a}from"./trivia-wrapper.e8557445.js";import{n}from"./index.c01fabb1.js";import"./score-counter.98396a3f.js";import"./custom-button.85bc662d.js";import"./index.d1cf40fd.js";const _={name:"hard",components:{TriviaWrapper:a},beforeRouteEnter(o,t,r){r(async e=>{e.$store.commit(`${e.$store.state.difficulty.toLowerCase()}TriviaModuleState/CLEAR_INTERVAL`),e.$nextTick(()=>e.$store.commit("SET_DIFFICULTY","Hard"))})},data(){return{}}};var s=function(){var t=this,r=t._self._c;return r("trivia-wrapper")},c=[],i=n(_,s,c,!1,null,"c8a22c2e",null,null);const u=i.exports;export{u as default};