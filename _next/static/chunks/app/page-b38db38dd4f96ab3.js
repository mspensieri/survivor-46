(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1053:function(e,t,s){Promise.resolve().then(s.bind(s,1886))},1886:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return E}});var n=s(3827),i=s(1497),l=s(1707),d=s(8826),a=s(5095),r=s(5097),c=s(590),h=s(5914),x=s(703);let j={JEM:{name:"Jem",status:"active",weeks:[{},{teamImmunity:2},{}]},BEN:{name:"Ben",status:"eliminated",weeks:[{individualImmunity:3}]},JESS:{name:"Jess",status:"jury",weeks:[]},BHANU:{name:"Bhanu",status:"winner",weeks:[{},{idolFound:10}]},KENZIE:{name:"Kenzie",status:"active",weeks:[{},{idolUsed:1}]},CHARLIE:{name:"Charlie",status:"active",weeks:[{},{placement:3}]},LIZ:{name:"Liz",status:"active",weeks:[{}]},JELINSKY:{name:"Jelinsky",status:"active",weeks:[{}]},MARIA:{name:"Maria",status:"active",weeks:[{}]},HUNTER:{name:"Hunter",status:"active",weeks:[{}]},MORIAH:{name:"Moriah",status:"active",weeks:[{},{}]},Q:{name:"Q",status:"active",weeks:[{}]},SODA:{name:"Soda",status:"active",weeks:[{}]},RANDEN:{name:"Randen",status:"active",weeks:[{}]},TIFFANY:{name:"Tiffany",status:"active",weeks:[{}]},TEVIN:{name:"Tevin",status:"active",weeks:[{advantage:5}]},VENUS:{name:"Venus",status:"active",weeks:[{},{},{idolFound:20}]},TIM:{name:"Tim",status:"active",weeks:[{}]}},o=Object.values(j);function u(e,t,s){let n=0;for(let i of e.weeks.slice(0,t))"total"===s?n+=(i.teamImmunity||0)+(i.individualImmunity||0)+(i.advantage||0)+(i.idolFound||0)+(i.idolUsed||0)+(i.placement||0):n+=i[s]||0;return n}let m=[{name:"First Time in Fiji",players:[j.MORIAH,j.JESS,j.BHANU,j.CHARLIE,j.RANDEN,j.TEVIN]},{name:"Survivor Vanguard",players:[j.MORIAH,j.JESS,j.JEM,j.CHARLIE,j.HUNTER,j.VENUS]},{name:"Survivor Vanguard2",players:[j.MORIAH,j.JESS,j.JEM,j.CHARLIE,j.HUNTER,j.VENUS]},{name:"Survivor Vanguard3",players:[j.MORIAH,j.JESS,j.JEM,j.CHARLIE,j.HUNTER,j.VENUS]},{name:"Survivor Vanguard4",players:[j.MORIAH,j.JESS,j.JEM,j.CHARLIE,j.HUNTER,j.VENUS]},{name:"Survivor Vanguard5",players:[j.MORIAH,j.JESS,j.JEM,j.CHARLIE,j.HUNTER,j.VENUS]}];function v(e,t){let s=0;for(let n of e.players)s+=u(n,t,"total");return s}let y=o[0].weeks.length,k={badge:{width:"90px"},indicatorGreen:{fontSize:"10pt",color:"green"},indicatorRed:{fontSize:"10pt",color:"red"},cardNumber:{fontSize:"80pt"}};function Z(e){let t=[...m].sort((t,s)=>v(s,e)-v(t,e)),s=[...m].sort((t,s)=>v(s,e-1)-v(t,e-1));return(0,n.jsxs)(d.Z,{striped:!0,responsive:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Rank"}),(0,n.jsx)("th",{children:"Team Name"}),(0,n.jsx)("th",{children:"Score"})]})}),(0,n.jsx)("tbody",{children:[...t.map((t,i)=>{let l;if(1===e)l=(0,n.jsxs)("td",{children:["#",i+1]});else{let e=s.indexOf(t);l=i<e?(0,n.jsxs)("td",{children:["#",i+1," ",(0,n.jsxs)("span",{style:k.indicatorGreen,children:["(▲ ",e-i,")"]})]}):i>e?(0,n.jsxs)("td",{children:["#",i+1," ",(0,n.jsxs)("span",{style:k.indicatorRed,children:["(▼ ",i-e,")"]})]}):(0,n.jsxs)("td",{children:["#",i+1]})}return(0,n.jsxs)("tr",{children:[l,(0,n.jsx)("td",{children:t.name}),(0,n.jsx)("td",{children:function(){let s=v(t,e),i=e>1?v(t,e-1):0;return 1===e?(0,n.jsx)("td",{children:s||"-"}):s>i?(0,n.jsxs)("td",{children:[s," ",(0,n.jsxs)("span",{style:k.indicatorGreen,children:["(+",s-i,")"]})]}):(0,n.jsx)("td",{children:s||"-"})}()})]},t.name)})]})]})}function b(e){let t=[...o].sort((t,s)=>u(s,e,"total")-u(t,e,"total")),s=[...o].sort((t,s)=>u(s,e-1,"total")-u(t,e-1,"total"));return(0,n.jsxs)(d.Z,{striped:!0,responsive:!0,children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Rank"}),(0,n.jsx)("th",{children:"Player Name"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Total"}),(0,n.jsx)("th",{children:"Team Immunity"}),(0,n.jsx)("th",{children:"Individual Immunity"}),(0,n.jsx)("th",{children:"Advantage"}),(0,n.jsx)("th",{children:"Idols Found"}),(0,n.jsx)("th",{children:"Idols Used"}),(0,n.jsx)("th",{children:"Jury Placement"})]})}),(0,n.jsx)("tbody",{children:[...t.map((t,i)=>{let l;function d(s){let i=u(t,e,s),l=e>1?u(t,e-1,s):0;return 1===e?(0,n.jsx)("td",{children:i||"-"}):i>l?(0,n.jsxs)("td",{children:[i," ",(0,n.jsxs)("span",{style:k.indicatorGreen,children:["(+",i-l,")"]})]}):(0,n.jsx)("td",{children:i||"-"})}if(1===e)l=(0,n.jsxs)("td",{children:["#",i+1]});else{let e=s.indexOf(t);l=i<e?(0,n.jsxs)("td",{children:["#",i+1," ",(0,n.jsxs)("span",{style:k.indicatorGreen,children:["(▲ ",e-i,")"]})]}):i>e?(0,n.jsxs)("td",{children:["#",i+1," ",(0,n.jsxs)("span",{style:k.indicatorRed,children:["(▼ ",i-e,")"]})]}):(0,n.jsxs)("td",{children:["#",i+1]})}return(0,n.jsxs)("tr",{children:[l,(0,n.jsx)("td",{children:t.name}),(0,n.jsx)("td",{children:"active"===t.status?(0,n.jsx)(r.Z,{bg:"secondary",style:k.badge,children:"Active"}):"eliminated"===t.status?(0,n.jsx)(r.Z,{bg:"danger",style:k.badge,children:"Eliminated"}):"jury"===t.status?(0,n.jsx)(r.Z,{bg:"info",style:k.badge,children:"Jury"}):(0,n.jsx)(r.Z,{bg:"success",style:k.badge,children:"Winner"})}),(0,n.jsx)("td",{children:d("total")}),(0,n.jsx)("td",{children:d("teamImmunity")}),(0,n.jsx)("td",{children:d("individualImmunity")}),(0,n.jsx)("td",{children:d("advantage")}),(0,n.jsx)("td",{children:d("idolFound")}),(0,n.jsx)("td",{children:d("idolUsed")}),(0,n.jsx)("td",{children:d("placement")})]},t.name)})]})]})}var E=function(){let e=[...m].sort((e,t)=>v(t,-1)-v(e,-1));return(0,n.jsx)(h.Z,{children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(x.default,{src:"/torch.webp",alt:"survivor logo",width:30,height:30,style:{position:"fixed"}}),(0,n.jsxs)(l.Z,{defaultActiveKey:"leaderboard",id:"uncontrolled-tab-example",className:"mb-3",style:{marginLeft:"40px"},children:[(0,n.jsx)(i.Z,{eventKey:"leaderboard",title:"Leaderboard",children:(0,n.jsxs)(l.Z,{defaultActiveKey:"overall",id:"week-selector-leaderboard",className:"mb-3",children:[(0,n.jsx)(i.Z,{eventKey:"1",title:"Week 1",children:Z(1)}),(0,n.jsx)(i.Z,{eventKey:"2",title:"Week 2",disabled:y<2,children:Z(2)}),(0,n.jsx)(i.Z,{eventKey:"3",title:"Week 3",disabled:y<3,children:Z(3)}),(0,n.jsx)(i.Z,{eventKey:"4",title:"Week 4",disabled:y<4,children:Z(4)}),(0,n.jsx)(i.Z,{eventKey:"5",title:"Week 5",disabled:y<5,children:Z(5)}),(0,n.jsx)(i.Z,{eventKey:"6",title:"Week 6",disabled:y<6,children:Z(6)}),(0,n.jsx)(i.Z,{eventKey:"7",title:"Week 7",disabled:y<7,children:Z(7)}),(0,n.jsx)(i.Z,{eventKey:"8",title:"Week 8",disabled:y<8,children:Z(8)}),(0,n.jsx)(i.Z,{eventKey:"9",title:"Week 9",disabled:y<9,children:Z(9)}),(0,n.jsx)(i.Z,{eventKey:"10",title:"Week 10",disabled:y<10,children:Z(10)}),(0,n.jsx)(i.Z,{eventKey:"11",title:"Week 11",disabled:y<11,children:Z(11)}),(0,n.jsx)(i.Z,{eventKey:"12",title:"Week 12",disabled:y<12,children:Z(12)}),(0,n.jsx)(i.Z,{eventKey:"13",title:"Week 13",disabled:y<13,children:Z(13)}),(0,n.jsx)(i.Z,{eventKey:"overall",title:"Overall",children:Z(y)})]})}),(0,n.jsx)(i.Z,{eventKey:"teams",title:"Teams",children:(0,n.jsx)(h.Z,{children:[...e.map((e,t)=>(0,n.jsx)(c.Z,{xs:12,sm:6,md:4,lg:3,children:(0,n.jsx)(a.Z,{className:"text-center",children:(0,n.jsxs)(a.Z.Body,{children:[(0,n.jsxs)(a.Z.Title,{style:k.cardNumber,children:[0===t?"\uD83D\uDC51":"#".concat(t+1)," "]}),(0,n.jsx)(a.Z.Title,{children:e.name}),...[...e.players].sort((e,t)=>u(t,y,"total")-u(e,y,"total")).map((e,t)=>(0,n.jsxs)(a.Z.Text,{children:[e.name," (",u(e,y,"total"),")"]},t))]})})},e.name))]})}),(0,n.jsx)(i.Z,{eventKey:"scores",title:"Scores",children:(0,n.jsxs)(l.Z,{defaultActiveKey:"overall",id:"week-selector-scores",className:"mb-3",children:[(0,n.jsx)(i.Z,{eventKey:"1",title:"Week 1",children:b(1)}),(0,n.jsx)(i.Z,{eventKey:"2",title:"Week 2",disabled:y<2,children:b(2)}),(0,n.jsx)(i.Z,{eventKey:"3",title:"Week 3",disabled:y<3,children:b(3)}),(0,n.jsx)(i.Z,{eventKey:"4",title:"Week 4",disabled:y<4,children:b(4)}),(0,n.jsx)(i.Z,{eventKey:"5",title:"Week 5",disabled:y<5,children:b(5)}),(0,n.jsx)(i.Z,{eventKey:"6",title:"Week 6",disabled:y<6,children:b(6)}),(0,n.jsx)(i.Z,{eventKey:"7",title:"Week 7",disabled:y<7,children:b(7)}),(0,n.jsx)(i.Z,{eventKey:"8",title:"Week 8",disabled:y<8,children:b(8)}),(0,n.jsx)(i.Z,{eventKey:"9",title:"Week 9",disabled:y<9,children:b(9)}),(0,n.jsx)(i.Z,{eventKey:"10",title:"Week 10",disabled:y<10,children:b(10)}),(0,n.jsx)(i.Z,{eventKey:"11",title:"Week 11",disabled:y<11,children:b(11)}),(0,n.jsx)(i.Z,{eventKey:"12",title:"Week 12",disabled:y<12,children:b(12)}),(0,n.jsx)(i.Z,{eventKey:"13",title:"Week 13",disabled:y<13,children:b(13)}),(0,n.jsx)(i.Z,{eventKey:"overall",title:"Overall",children:b(y)})]})})]})]})})}}},function(e){e.O(0,[197,971,69,744],function(){return e(e.s=1053)}),_N_E=e.O()}]);