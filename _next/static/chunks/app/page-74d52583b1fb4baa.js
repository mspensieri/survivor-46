(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1053:function(e,t,n){Promise.resolve().then(n.bind(n,2882))},2882:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var i,l,a=n(3827),d=n(1497),s=n(4290),r=n(8826),c=n(6459),o=n(5097),h=n(590),u=n(5914),y=n(703);(i=l||(l={})).JEM="JEM",i.BEN="BEN",i.JESS="JESS",i.BHANU="BHANU",i.KENZIE="KENZIE",i.CHARLIE="CHARLIE",i.LIZ="LIZ",i.JELINSKY="JELINSKY",i.MARIA="MARIA",i.HUNTER="HUNTER",i.MORIAH="MORIAH",i.Q="Q",i.SODA="SODA",i.RANDEN="RANDEN",i.TIFFANY="TIFFANY",i.TEVIN="TEVIN",i.VENUS="VENUS",i.TIM="TIM";let m={JEM:{key:"JEM",name:"Jem",status:"active"},BEN:{key:"BEN",name:"Ben",status:"eliminated"},JESS:{key:"JESS",name:"Jess",status:"jury"},BHANU:{key:"BHANU",name:"Bhanu",status:"winner"},KENZIE:{key:"KENZIE",name:"Kenzie",status:"active"},CHARLIE:{key:"CHARLIE",name:"Charlie",status:"active"},LIZ:{key:"LIZ",name:"Liz",status:"active"},JELINSKY:{key:"JELINSKY",name:"Jelinsky",status:"active"},MARIA:{key:"MARIA",name:"Maria",status:"active"},HUNTER:{key:"HUNTER",name:"Hunter",status:"active"},MORIAH:{key:"MORIAH",name:"Moriah",status:"active"},Q:{key:"Q",name:"Q",status:"active"},SODA:{key:"SODA",name:"Soda",status:"active"},RANDEN:{key:"RANDEN",name:"Randen",status:"active"},TIFFANY:{key:"TIFFANY",name:"Tiffany",status:"active"},TEVIN:{key:"TEVIN",name:"Tevin",status:"active"},VENUS:{key:"VENUS",name:"Venus",status:"active"},TIM:{key:"TIM",name:"Tim",status:"active"}},v=Object.values(m),x=[{[l.BEN]:{individualImmunity:3},[l.BHANU]:{idolFound:10}},{[l.JEM]:{teamImmunity:2},[l.KENZIE]:{idolUsed:1},[l.CHARLIE]:{placement:3},[l.TEVIN]:{advantage:5}},{[l.VENUS]:{idolFound:20}}];function j(e,t,n){let i=0;for(let h of x.slice(0,t+1)){var l,a,d,s,r,c,o;"total"===n?i+=((null===(l=h[e.key])||void 0===l?void 0:l.teamImmunity)||0)+((null===(a=h[e.key])||void 0===a?void 0:a.individualImmunity)||0)+((null===(d=h[e.key])||void 0===d?void 0:d.advantage)||0)+((null===(s=h[e.key])||void 0===s?void 0:s.idolFound)||0)+((null===(r=h[e.key])||void 0===r?void 0:r.idolUsed)||0)+((null===(c=h[e.key])||void 0===c?void 0:c.placement)||0):i+=(null===(o=h[e.key])||void 0===o?void 0:o[n])||0}return i}let k=[{name:"First Time in Fiji",players:[m.MORIAH,m.JESS,m.BHANU,m.CHARLIE,m.RANDEN,m.TEVIN]},{name:"Survivor Vanguard",players:[m.MORIAH,m.JESS,m.JEM,m.CHARLIE,m.HUNTER,m.VENUS]},{name:"Survivor Vanguard2",players:[m.MORIAH,m.JESS,m.JEM,m.CHARLIE,m.HUNTER,m.VENUS]},{name:"Survivor Vanguard3",players:[m.MORIAH,m.JESS,m.JEM,m.CHARLIE,m.HUNTER,m.VENUS]},{name:"Survivor Vanguard4",players:[m.MORIAH,m.JESS,m.JEM,m.CHARLIE,m.HUNTER,m.VENUS]},{name:"Survivor Vanguard5",players:[m.MORIAH,m.JESS,m.JEM,m.CHARLIE,m.HUNTER,m.VENUS]}];var E=n(8543);let N=x.length,I=Array(x.length).fill(void 0).map((e,t)=>(function(e){let t=[...k].map(t=>({team:t,total:function(e,t){let n=0;for(let i of e.players)n+=j(i,t,"total");return n}(t,e)})).sort((e,t)=>t.total-e.total),n=[{...t[0],rank:0}];for(let e=1;e<t.length;e++){let i=t[e],l=n[e-1];n.push({...i,rank:i.total===l.total?l.rank:l.rank+1})}return n})(t)),Z=Array(x.length).fill(void 0).map((e,t)=>(function(e){let t=[...v].map(t=>({player:t,total:j(t,e,"total"),points:{teamImmunity:j(t,e,"teamImmunity"),individualImmunity:j(t,e,"individualImmunity"),advantage:j(t,e,"advantage"),idolFound:j(t,e,"idolFound"),idolUsed:j(t,e,"idolUsed"),placement:j(t,e,"placement")}})).sort((e,t)=>t.total-e.total),n=[{...t[0],rank:0}];for(let e=1;e<t.length;e++){let i=t[e],l=n[e-1];n.push({...i,rank:i.total===l.total?l.rank:l.rank+1})}return n})(t)),A={badge:{width:"90px"},indicatorGreen:{fontSize:"10pt",color:"green"},indicatorRed:{fontSize:"10pt",color:"red"},cardNumber:{fontSize:"80pt"}};function b(e){let t=I[e]||[],n=I[e-1];return(0,a.jsxs)(r.Z,{striped:!0,responsive:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Rank"}),(0,a.jsx)("th",{children:"Team Name"}),(0,a.jsx)("th",{children:"Score"})]})}),(0,a.jsx)("tbody",{children:[...t.map(e=>{let t;let i=null==n?void 0:n.find(t=>t.team===e.team);return t=i?e.rank<i.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:A.indicatorGreen,children:["(▲ ",i.rank-e.rank,")"]})]}):e.rank>i.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:A.indicatorRed,children:["(▼ ",e.rank-i.rank,")"]})]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}),(0,a.jsxs)("tr",{children:[t,(0,a.jsx)("td",{children:e.team.name}),(0,a.jsx)("td",{children:i&&e.total>i.total?(0,a.jsxs)("td",{children:[e.total," ",(0,a.jsxs)("span",{style:A.indicatorGreen,children:["(+",e.total-i.total,")"]})]}):(0,a.jsx)("td",{children:e.total||"-"})})]},e.team.name)})]})]})}function p(e){let t=Z[e]||[],n=Z[e-1];return(0,a.jsxs)(r.Z,{striped:!0,responsive:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Rank"}),(0,a.jsx)("th",{children:"Player Name"}),(0,a.jsx)("th",{children:"Status"}),(0,a.jsx)("th",{children:"Total"}),(0,a.jsx)("th",{children:"Team Immunity"}),(0,a.jsx)("th",{children:"Individual Immunity"}),(0,a.jsx)("th",{children:"Advantage"}),(0,a.jsx)("th",{children:"Idols Found"}),(0,a.jsx)("th",{children:"Idols Used"}),(0,a.jsx)("th",{children:"Jury Placement"})]})}),(0,a.jsx)("tbody",{children:[...t.map(e=>{var t;let i;let l=null==n?void 0:n.find(t=>t.player===e.player);function d(t){let n=("total"===t?e.total:e.points[t])||0,i=("total"===t?null==l?void 0:l.total:null==l?void 0:l.points[t])||0;return l&&n>i?(0,a.jsxs)("td",{children:[n," ",(0,a.jsxs)("span",{style:A.indicatorGreen,children:["(+",n-i,")"]})]}):(0,a.jsx)("td",{children:n||"-"})}return i=l?e.rank<l.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:A.indicatorGreen,children:["(▲ ",l.rank-e.rank,")"]})]}):e.rank>l.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:A.indicatorRed,children:["(▼ ",e.rank-l.rank,")"]})]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}),(0,a.jsxs)("tr",{children:[i,(0,a.jsx)("td",{children:e.player.name}),(0,a.jsx)("td",{children:"active"===(t=e.player).status?(0,a.jsx)(o.Z,{bg:"secondary",style:A.badge,children:"Active"}):"eliminated"===t.status?(0,a.jsx)(o.Z,{bg:"danger",style:A.badge,children:"Eliminated"}):"jury"===t.status?(0,a.jsx)(o.Z,{bg:"info",style:A.badge,children:"Jury"}):(0,a.jsx)(o.Z,{bg:"success",style:A.badge,children:"Winner"})}),(0,a.jsx)("td",{children:d("total")}),(0,a.jsx)("td",{children:d("teamImmunity")}),(0,a.jsx)("td",{children:d("individualImmunity")}),(0,a.jsx)("td",{children:d("advantage")}),(0,a.jsx)("td",{children:d("idolFound")}),(0,a.jsx)("td",{children:d("idolUsed")}),(0,a.jsx)("td",{children:d("placement")})]},e.player.name)})]})]})}var S=function(){let e=I[N-1]||[];return(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(E.Z,{className:"bg-body-tertiary",children:(0,a.jsxs)(E.Z.Brand,{children:[(0,a.jsx)(y.default,{src:"/torch.webp",alt:"survivor logo",width:30,height:30,style:{display:"inline"}}),"Survivor Pool Season 46"]})}),(0,a.jsxs)(s.Z,{defaultActiveKey:"leaderboard",id:"uncontrolled-tab-example",className:"mb-3",style:{marginLeft:"15px"},children:[(0,a.jsx)(d.Z,{eventKey:"leaderboard",title:"Leaderboard",children:(0,a.jsxs)(s.Z,{defaultActiveKey:N,id:"week-selector-leaderboard",className:"mb-3",children:[(0,a.jsx)(d.Z,{eventKey:"1",title:"Week 1",children:b(0)}),(0,a.jsx)(d.Z,{eventKey:"2",title:"Week 2",disabled:N<2,children:b(1)}),(0,a.jsx)(d.Z,{eventKey:"3",title:"Week 3",disabled:N<3,children:b(2)}),(0,a.jsx)(d.Z,{eventKey:"4",title:"Week 4",disabled:N<4,children:b(3)}),(0,a.jsx)(d.Z,{eventKey:"5",title:"Week 5",disabled:N<5,children:b(4)}),(0,a.jsx)(d.Z,{eventKey:"6",title:"Week 6",disabled:N<6,children:b(5)}),(0,a.jsx)(d.Z,{eventKey:"7",title:"Week 7",disabled:N<7,children:b(6)}),(0,a.jsx)(d.Z,{eventKey:"8",title:"Week 8",disabled:N<8,children:b(7)}),(0,a.jsx)(d.Z,{eventKey:"9",title:"Week 9",disabled:N<9,children:b(8)}),(0,a.jsx)(d.Z,{eventKey:"10",title:"Week 10",disabled:N<10,children:b(9)}),(0,a.jsx)(d.Z,{eventKey:"11",title:"Week 11",disabled:N<11,children:b(10)}),(0,a.jsx)(d.Z,{eventKey:"12",title:"Week 12",disabled:N<12,children:b(11)}),(0,a.jsx)(d.Z,{eventKey:"13",title:"Week 13",disabled:N<13,children:b(12)})]})}),(0,a.jsx)(d.Z,{eventKey:"teams",title:"Teams",children:(0,a.jsx)(u.Z,{children:[...e.map(e=>(0,a.jsx)(h.Z,{xs:12,sm:6,md:4,lg:3,children:(0,a.jsx)(c.Z,{className:"text-center",children:(0,a.jsxs)(c.Z.Body,{children:[(0,a.jsxs)(c.Z.Title,{style:A.cardNumber,children:[0===e.rank?"\uD83D\uDC51":"#".concat(e.rank+1)," "]}),(0,a.jsx)(c.Z.Title,{children:e.team.name}),...[...e.team.players].sort((e,t)=>j(t,N,"total")-j(e,N,"total")).map((e,t)=>(0,a.jsxs)(c.Z.Text,{children:[e.name," (",j(e,N,"total"),")"]},t))]})})},e.team.name))]})}),(0,a.jsx)(d.Z,{eventKey:"scores",title:"Scores",children:(0,a.jsxs)(s.Z,{defaultActiveKey:N,id:"week-selector-scores",className:"mb-3",children:[(0,a.jsx)(d.Z,{eventKey:"1",title:"Week 1",children:p(0)}),(0,a.jsx)(d.Z,{eventKey:"2",title:"Week 2",disabled:N<2,children:p(1)}),(0,a.jsx)(d.Z,{eventKey:"3",title:"Week 3",disabled:N<3,children:p(2)}),(0,a.jsx)(d.Z,{eventKey:"4",title:"Week 4",disabled:N<4,children:p(3)}),(0,a.jsx)(d.Z,{eventKey:"5",title:"Week 5",disabled:N<5,children:p(4)}),(0,a.jsx)(d.Z,{eventKey:"6",title:"Week 6",disabled:N<6,children:p(5)}),(0,a.jsx)(d.Z,{eventKey:"7",title:"Week 7",disabled:N<7,children:p(6)}),(0,a.jsx)(d.Z,{eventKey:"8",title:"Week 8",disabled:N<8,children:p(7)}),(0,a.jsx)(d.Z,{eventKey:"9",title:"Week 9",disabled:N<9,children:p(8)}),(0,a.jsx)(d.Z,{eventKey:"10",title:"Week 10",disabled:N<10,children:p(9)}),(0,a.jsx)(d.Z,{eventKey:"11",title:"Week 11",disabled:N<11,children:p(10)}),(0,a.jsx)(d.Z,{eventKey:"12",title:"Week 12",disabled:N<12,children:p(11)}),(0,a.jsx)(d.Z,{eventKey:"13",title:"Week 13",disabled:N<13,children:p(12)})]})})]})]})}}},function(e){e.O(0,[809,971,69,744],function(){return e(e.s=1053)}),_N_E=e.O()}]);