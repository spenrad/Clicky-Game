(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var s=n(1),t=n.n(s),c=n(4),i=n.n(c),o=(n(13),n(5)),r=n(6),m=n(8),l=n(7),d=n(0);var j=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Clicky Game!"}),Object(d.jsx)("h2",{children:"Click on a monkey to earn points, remember which monkey you picked and don't click them again!"})]})};var h=function(e){return Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"brand",children:Object(d.jsx)("a",{href:"/",children:"Clicky Game"})}),Object(d.jsx)("li",{children:e.message}),Object(d.jsxs)("li",{children:["Score: ",e.score," | Top Score: ",e.topScore]})]})})};var g=function(e){return Object(d.jsx)("div",{className:"wrapper",children:e.children})},b=n(2),u=(n(15),function(e){Object(m.a)(n,e);var a=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,t=new Array(s),c=0;c<s;c++)t[c]=arguments[c];return(e=a.call.apply(a,[this].concat(t))).state={monkey:b,score:0,topScore:0,message:"Click a monkey!",monkeyBin:[]},e.monkeyClick=function(a){var n=e.state.monkeyBin;n.includes(a)?e.setState({monkeyBin:[],monkey:b.sort((function(){return Math.random()-.5})),topScore:Math.max(e.state.score,e.state.topScore),score:0,message:"AHH AHH OOH (Wrong!)"}):(n.push(a),e.setState({score:n.length,monkey:b.sort((function(){return Math.random()-.5})),message:"OOOH OOH AHH (Correct!)"})),12===n.length&&e.setState({message:"OOOOOO AHHHHH AHHHH (You Win!)",topScore:12,score:0,monkeyBin:[]})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(g,{children:[Object(d.jsx)(h,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"container",children:e.state.monkey.map((function(a){return Object(d.jsx)("div",{id:a.id,name:a.name,className:"monkey",onClick:function(){return e.monkeyClick(a.id)},style:{backgroundImage:"url(".concat(a.image,")")}},a.id)}))})]})}}]),n}(t.a.Component));i.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/baboon.jpg","name":"baboon"},{"id":2,"image":"./assets/bobono.jpg","name":"Kanzi bobono"},{"id":3,"image":"./assets/capuchin.jpg","name":"capuchin"},{"id":4,"image":"./assets/chimpanzee.jpg","name":"chimpanzee"},{"id":5,"image":"./assets/gibbon.jpg","name":"gibbon"},{"id":6,"image":"./assets/Golden-Lion-Tamarin.jpg","name":"tamarin"},{"id":7,"image":"./assets/Howler.jpg","name":"howler"},{"id":8,"image":"./assets/Japanese-Macaque.jpg","name":"macaque"},{"id":9,"image":"./assets/mandrill-baboon.jpg","name":"mandrill"},{"id":10,"image":"./assets/marmoset.jpg","name":"marmoset"},{"id":11,"image":"./assets/Proboscis.jpg","name":"proboscis"},{"id":12,"image":"./assets/Rhesus-Macaque.jpg","name":"rhesus"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.b975e7ef.chunk.js.map