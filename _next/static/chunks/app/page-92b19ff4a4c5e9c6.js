(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1053:function(e,t,n){Promise.resolve().then(n.bind(n,2882))},2882:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i,l,a=n(3827),s=n(1497),r=n(4290),d=n(8826),c=n(6459),o=n(5097),h=n(590),y=n(5914);(i=l||(l={})).JEM="JEM",i.BEN="BEN",i.JESS="JESS",i.BHANU="BHANU",i.KENZIE="KENZIE",i.CHARLIE="CHARLIE",i.LIZ="LIZ",i.JELINSKY="JELINSKY",i.MARIA="MARIA",i.HUNTER="HUNTER",i.MORIAH="MORIAH",i.Q="Q",i.SODA="SODA",i.RANDEN="RANDEN",i.TIFFANY="TIFFANY",i.TEVIN="TEVIN",i.VENUS="VENUS",i.TIM="TIM";let m={JEM:{key:"JEM",name:"Jem",status:"active"},BEN:{key:"BEN",name:"Ben",status:"eliminated"},JESS:{key:"JESS",name:"Jess",status:"jury"},BHANU:{key:"BHANU",name:"Bhanu",status:"winner"},KENZIE:{key:"KENZIE",name:"Kenzie",status:"active"},CHARLIE:{key:"CHARLIE",name:"Charlie",status:"active"},LIZ:{key:"LIZ",name:"Liz",status:"active"},JELINSKY:{key:"JELINSKY",name:"Jelinsky",status:"active"},MARIA:{key:"MARIA",name:"Maria",status:"active"},HUNTER:{key:"HUNTER",name:"Hunter",status:"active"},MORIAH:{key:"MORIAH",name:"Moriah",status:"active"},Q:{key:"Q",name:"Q",status:"active"},SODA:{key:"SODA",name:"Soda",status:"active"},RANDEN:{key:"RANDEN",name:"Randen",status:"active"},TIFFANY:{key:"TIFFANY",name:"Tiffany",status:"active"},TEVIN:{key:"TEVIN",name:"Tevin",status:"active"},VENUS:{key:"VENUS",name:"Venus",status:"active"},TIM:{key:"TIM",name:"Tim",status:"active"}},u=Object.values(m),x=[{[l.BEN]:{individualImmunity:3},[l.BHANU]:{idolFound:10}},{[l.JEM]:{teamImmunity:2},[l.KENZIE]:{voteNullified:1},[l.CHARLIE]:{placement:3},[l.TEVIN]:{advantage:5}},{[l.VENUS]:{idolFound:20}}];function j(e,t,n){let i=0;for(let h of x.slice(0,t+1)){var l,a,s,r,d,c,o;"total"===n?i+=((null===(l=h[e.key])||void 0===l?void 0:l.teamImmunity)||0)+((null===(a=h[e.key])||void 0===a?void 0:a.individualImmunity)||0)+((null===(s=h[e.key])||void 0===s?void 0:s.advantage)||0)+((null===(r=h[e.key])||void 0===r?void 0:r.idolFound)||0)+((null===(d=h[e.key])||void 0===d?void 0:d.voteNullified)||0)+((null===(c=h[e.key])||void 0===c?void 0:c.placement)||0):i+=(null===(o=h[e.key])||void 0===o?void 0:o[n])||0}return i}let v=[{name:"First Time in Fiji",winner:m.MORIAH,players:[m.MORIAH,m.JESS,m.BHANU,m.CHARLIE,m.RANDEN,m.TEVIN]},{name:"Momma J",winner:m.TIM,players:[m.TIM,m.MORIAH,m.BEN,m.VENUS,m.BHANU,m.JESS]},{name:"Sandy's Spynest",winner:m.MORIAH,players:[m.MORIAH,m.TEVIN,m.KENZIE,m.BEN,m.HUNTER,m.TIFFANY]},{name:"4BlackCats",winner:m.VENUS,players:[m.VENUS,m.JESS,m.CHARLIE,m.HUNTER,m.KENZIE,m.JEM]},{name:"Leafs Nation",winner:m.HUNTER,players:[m.HUNTER,m.LIZ,m.VENUS,m.CHARLIE,m.JELINSKY,m.KENZIE]},{name:"Wendy's Chickens",winner:m.TIFFANY,players:[m.TIFFANY,m.JEM,m.JELINSKY,m.MORIAH,m.SODA,m.TEVIN]},{name:"Dean's M List (Money Team)",winner:m.MARIA,players:[m.MARIA,m.MORIAH,m.Q,m.RANDEN,m.SODA,m.TEVIN]},{name:"Hang in there, Jeremy!",winner:m.SODA,players:[m.SODA,m.Q,m.TEVIN,m.TIFFANY,m.MORIAH,m.TIM]},{name:"Challenge Beasts",winner:m.HUNTER,players:[m.HUNTER,m.BEN,m.JESS,m.KENZIE,m.TEVIN,m.TIFFANY]}];var N=n(8543);let I=x.length,k=Array(x.length).fill(void 0).map((e,t)=>(function(e){let t=[...v].map(t=>({team:t,total:function(e,t){let n=0;for(let i of e.players)n+=j(i,t,"total");return n}(t,e)})).sort((e,t)=>t.total-e.total),n=[{...t[0],rank:0}];for(let e=1;e<t.length;e++){let i=t[e],l=n[e-1];n.push({...i,rank:i.total===l.total?l.rank:l.rank+1})}return n})(t)),p=Array(x.length).fill(void 0).map((e,t)=>(function(e){let t=[...u].map(t=>({player:t,total:j(t,e,"total"),points:{teamImmunity:j(t,e,"teamImmunity"),individualImmunity:j(t,e,"individualImmunity"),advantage:j(t,e,"advantage"),idolFound:j(t,e,"idolFound"),voteNullified:j(t,e,"voteNullified"),placement:j(t,e,"placement")}})).sort((e,t)=>t.total-e.total),n=[{...t[0],rank:0}];for(let e=1;e<t.length;e++){let i=t[e],l=n[e-1];n.push({...i,rank:i.total===l.total?l.rank:l.rank+1})}return n})(t)),E={badge:{width:"90px"},indicatorGreen:{fontSize:"10pt",color:"green"},indicatorGreenLarge:{fontSize:"12pt",color:"green"},indicatorRed:{fontSize:"10pt",color:"red"},cardNumber:{fontSize:"80pt"},bold:{fontWeight:"bold",textDecoration:"underline"},rulesList:{listStyleType:"disc",lineHeight:2},firstListItem:{marginTop:"10px"}};function A(e){let t=k[e]||[],n=k[e-1];return(0,a.jsxs)(d.Z,{striped:!0,responsive:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Rank"}),(0,a.jsx)("th",{children:"Team Name"}),(0,a.jsx)("th",{children:"Score"})]})}),(0,a.jsx)("tbody",{children:[...t.map(e=>{let t;let i=null==n?void 0:n.find(t=>t.team===e.team);return t=i?e.rank<i.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:E.indicatorGreen,children:["(▲ ",i.rank-e.rank,")"]})]}):e.rank>i.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:E.indicatorRed,children:["(▼ ",e.rank-i.rank,")"]})]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}),(0,a.jsxs)("tr",{children:[t,(0,a.jsx)("td",{children:e.team.name}),(0,a.jsx)("td",{children:i&&e.total>i.total?(0,a.jsxs)("td",{children:[e.total," ",(0,a.jsxs)("span",{style:E.indicatorGreen,children:["(+",e.total-i.total,")"]})]}):(0,a.jsx)("td",{children:e.total||"-"})})]},e.team.name)})]})]})}function f(e){let t=p[e]||[],n=p[e-1];return(0,a.jsxs)(d.Z,{striped:!0,responsive:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Rank"}),(0,a.jsx)("th",{children:"Player Name"}),(0,a.jsx)("th",{children:"Total Points"}),(0,a.jsx)("th",{children:"Status"}),(0,a.jsx)("th",{children:"Immunity (team)"}),(0,a.jsx)("th",{children:"Immunity (indiv.)"}),(0,a.jsx)("th",{children:"Advantage"}),(0,a.jsx)("th",{children:"Idols Found"}),(0,a.jsx)("th",{children:"Votes Nullified"}),(0,a.jsx)("th",{children:"Jury Placement"})]})}),(0,a.jsx)("tbody",{children:[...t.map(e=>{var t;let i;let l=null==n?void 0:n.find(t=>t.player===e.player);function s(t){let n=("total"===t?e.total:e.points[t])||0,i=("total"===t?null==l?void 0:l.total:null==l?void 0:l.points[t])||0;return l&&n>i?(0,a.jsxs)("td",{children:[n," ",(0,a.jsxs)("span",{style:E.indicatorGreen,children:["(+",n-i,")"]})]}):(0,a.jsx)("td",{children:n||"-"})}return i=l?e.rank<l.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:E.indicatorGreen,children:["(▲ ",l.rank-e.rank,")"]})]}):e.rank>l.rank?(0,a.jsxs)("td",{children:["#",e.rank+1," ",(0,a.jsxs)("span",{style:E.indicatorRed,children:["(▼ ",e.rank-l.rank,")"]})]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}):(0,a.jsxs)("td",{children:["#",e.rank+1]}),(0,a.jsxs)("tr",{children:[i,(0,a.jsx)("td",{children:e.player.name}),(0,a.jsx)("td",{children:s("total")}),(0,a.jsx)("td",{children:"active"===(t=e.player).status?(0,a.jsx)(o.Z,{bg:"secondary",style:E.badge,children:"Active"}):"eliminated"===t.status?(0,a.jsx)(o.Z,{bg:"danger",style:E.badge,children:"Eliminated"}):"jury"===t.status?(0,a.jsx)(o.Z,{bg:"info",style:E.badge,children:"Jury"}):(0,a.jsx)(o.Z,{bg:"success",style:E.badge,children:"Winner"})}),(0,a.jsx)("td",{children:s("teamImmunity")}),(0,a.jsx)("td",{children:s("individualImmunity")}),(0,a.jsx)("td",{children:s("advantage")}),(0,a.jsx)("td",{children:s("idolFound")}),(0,a.jsx)("td",{children:s("voteNullified")}),(0,a.jsx)("td",{children:s("placement")})]},e.player.name)})]})]})}var b=function(){let e=k[I-1]||[];return(0,a.jsxs)(y.Z,{children:[(0,a.jsx)(N.Z,{className:"bg-body-tertiary",children:(0,a.jsxs)(N.Z.Brand,{children:[(0,a.jsx)("img",{src:"torch.webp",alt:"survivor logo",width:30,height:30,style:{display:"inline"}}),"Survivor Pool Season 46"]})}),(0,a.jsxs)(r.Z,{defaultActiveKey:"leaderboard",id:"uncontrolled-tab-example",variant:"underline",className:"mb-3",style:{marginLeft:"15px"},children:[(0,a.jsx)(s.Z,{eventKey:"leaderboard",title:"Leaderboard",children:(0,a.jsxs)(r.Z,{defaultActiveKey:I,id:"week-selector-leaderboard",className:"mb-3",children:[(0,a.jsx)(s.Z,{eventKey:"1",title:"Week 1",children:A(0)}),(0,a.jsx)(s.Z,{eventKey:"2",title:"Week 2",disabled:I<2,children:A(1)}),(0,a.jsx)(s.Z,{eventKey:"3",title:"Week 3",disabled:I<3,children:A(2)}),(0,a.jsx)(s.Z,{eventKey:"4",title:"Week 4",disabled:I<4,children:A(3)}),(0,a.jsx)(s.Z,{eventKey:"5",title:"Week 5",disabled:I<5,children:A(4)}),(0,a.jsx)(s.Z,{eventKey:"6",title:"Week 6",disabled:I<6,children:A(5)}),(0,a.jsx)(s.Z,{eventKey:"7",title:"Week 7",disabled:I<7,children:A(6)}),(0,a.jsx)(s.Z,{eventKey:"8",title:"Week 8",disabled:I<8,children:A(7)}),(0,a.jsx)(s.Z,{eventKey:"9",title:"Week 9",disabled:I<9,children:A(8)}),(0,a.jsx)(s.Z,{eventKey:"10",title:"Week 10",disabled:I<10,children:A(9)}),(0,a.jsx)(s.Z,{eventKey:"11",title:"Week 11",disabled:I<11,children:A(10)}),(0,a.jsx)(s.Z,{eventKey:"12",title:"Week 12",disabled:I<12,children:A(11)}),(0,a.jsx)(s.Z,{eventKey:"13",title:"Week 13",disabled:I<13,children:A(12)})]})}),(0,a.jsx)(s.Z,{eventKey:"teams",title:"Teams",children:(0,a.jsx)(y.Z,{children:[...e.map(e=>(0,a.jsx)(h.Z,{xs:12,sm:6,md:4,lg:3,children:(0,a.jsx)(c.Z,{className:"text-center",children:(0,a.jsxs)(c.Z.Body,{children:[(0,a.jsxs)(c.Z.Title,{style:E.cardNumber,children:[0===e.rank?"\uD83D\uDC51":"#".concat(e.rank+1)," "]}),(0,a.jsx)(c.Z.Title,{children:e.team.name}),...[...e.team.players].sort((e,t)=>j(t,I,"total")-j(e,I,"total")).map((t,n)=>(0,a.jsxs)(c.Z.Text,{children:[t===e.team.winner?(0,a.jsxs)("span",{style:E.indicatorGreenLarge,children:["(W)"," "]}):"",t.name," (",j(t,I,"total"),")"]},n))]})})},e.team.name))]})}),(0,a.jsx)(s.Z,{eventKey:"players",title:"Players",children:(0,a.jsxs)(r.Z,{defaultActiveKey:I,id:"week-selector-players",className:"mb-3",children:[(0,a.jsx)(s.Z,{eventKey:"1",title:"Week 1",children:f(0)}),(0,a.jsx)(s.Z,{eventKey:"2",title:"Week 2",disabled:I<2,children:f(1)}),(0,a.jsx)(s.Z,{eventKey:"3",title:"Week 3",disabled:I<3,children:f(2)}),(0,a.jsx)(s.Z,{eventKey:"4",title:"Week 4",disabled:I<4,children:f(3)}),(0,a.jsx)(s.Z,{eventKey:"5",title:"Week 5",disabled:I<5,children:f(4)}),(0,a.jsx)(s.Z,{eventKey:"6",title:"Week 6",disabled:I<6,children:f(5)}),(0,a.jsx)(s.Z,{eventKey:"7",title:"Week 7",disabled:I<7,children:f(6)}),(0,a.jsx)(s.Z,{eventKey:"8",title:"Week 8",disabled:I<8,children:f(7)}),(0,a.jsx)(s.Z,{eventKey:"9",title:"Week 9",disabled:I<9,children:f(8)}),(0,a.jsx)(s.Z,{eventKey:"10",title:"Week 10",disabled:I<10,children:f(9)}),(0,a.jsx)(s.Z,{eventKey:"11",title:"Week 11",disabled:I<11,children:f(10)}),(0,a.jsx)(s.Z,{eventKey:"12",title:"Week 12",disabled:I<12,children:f(11)}),(0,a.jsx)(s.Z,{eventKey:"13",title:"Week 13",disabled:I<13,children:f(12)})]})}),(0,a.jsxs)(s.Z,{eventKey:"rules",title:"Rules",className:"rules",children:["The score per team is the sum of the scores of all players on the team across all weeks of play. In the event of a tie, the team whose predicted winner made it farthest in the season will win the pool.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," The scores per player are calculated according to the following rules:",(0,a.jsxs)("ul",{style:E.rulesList,children:[(0,a.jsxs)("li",{style:E.firstListItem,children:[(0,a.jsx)("span",{style:E.bold,children:"Immunity (team):"})," If a player is part of a team winning immunity: they receive 1 point"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{style:E.bold,children:"Immunity (indiv.):"})," If a player wins individual immunity: they receive 2 points"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{style:E.bold,children:"Advantage:"})," If a player receives an advantage (from a journey, a random twist, etc.): they receive 1 point"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{style:E.bold,children:"Idols Found:"})," If a player finds a hidden immunity idol: they receive 2 points"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{style:E.bold,children:"Votes Nullified:"})," If a player properly uses an idol: they receive 1 point for every vote nullified"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{style:E.bold,children:"Jury Placement:"})," Initial jury members will receive 2 points, the 5th and 4th runner up get 3 points, 3rd and 2nd runner up will receive 5 points, and the winner will receive 7 points. The player who wins fire will receive 1 extra point."," "]})]})]})]})]})}}},function(e){e.O(0,[585,971,69,744],function(){return e(e.s=1053)}),_N_E=e.O()}]);