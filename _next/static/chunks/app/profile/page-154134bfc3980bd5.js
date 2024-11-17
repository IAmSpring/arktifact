(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{83512:function(e,t,n){Promise.resolve().then(n.bind(n,36072))},36072:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(57437),l=n(10732),i=n(97823),r=n(79508),s=n(16691),c=n.n(s),o=()=>{let{wallet:e,userNFTs:t}=(0,r.useWallet)();return e?(0,a.jsxs)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-gray-800 rounded-lg p-6 mb-8",children:[(0,a.jsx)("h2",{className:"text-2xl font-cinzel font-bold mb-4",children:"Your Wallet"}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("p",{className:"text-gray-400",children:"Connected Address"}),(0,a.jsx)("p",{className:"font-mono text-purple-400",children:e})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Your Arktifacts"}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(e=>(0,a.jsxs)("div",{className:"bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors",children:[(0,a.jsx)("div",{className:"relative aspect-square mb-4",children:(0,a.jsx)(c(),{src:e.image,alt:e.name,fill:!0,className:"rounded-lg object-cover"})}),(0,a.jsx)("h4",{className:"font-bold mb-1",children:e.name}),(0,a.jsx)("p",{className:"text-sm text-gray-400",children:e.collection}),(0,a.jsxs)("p",{className:"text-xs text-purple-400 mt-2",children:["Token ID: ",e.tokenId]})]},e.id))})]})]}):null},u=()=>{let{wallet:e}=(0,r.useWallet)();return(0,a.jsx)("main",{className:"min-h-screen bg-gray-900 pt-24",children:(0,a.jsx)("div",{className:"container mx-auto px-6 max-w-7xl",children:(0,a.jsxs)(l.E.div,{variants:i.Jm,initial:"initial",animate:"animate",className:"w-full",children:[(0,a.jsxs)(l.E.div,{variants:i.eu,className:"text-center mb-16",children:[(0,a.jsx)("h1",{className:"text-4xl md:text-6xl font-cinzel font-bold mb-6",children:(0,a.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",children:"Your Collection"})}),e?(0,a.jsx)("p",{className:"text-xl text-gray-300",children:"View and manage your Arktifact collection"}):(0,a.jsx)("p",{className:"text-xl text-gray-300",children:"Connect your wallet to view your Arktifacts"})]}),(0,a.jsx)(o,{})]})})})}},79508:function(e,t,n){"use strict";n.r(t),n.d(t,{WalletProvider:function(){return r},useWallet:function(){return s}});var a=n(57437),l=n(2265);let i=(0,l.createContext)({wallet:null,isConnecting:!1,error:null,userNFTs:[],connectWallet:async()=>{},disconnectWallet:()=>{}});function r(e){let{children:t}=e,[n,r]=(0,l.useState)(null),[s,c]=(0,l.useState)(!1),[o,u]=(0,l.useState)(null),[d,m]=(0,l.useState)([]),x=async()=>{c(!0),u(null),await new Promise(e=>setTimeout(e,1500)),r("0x742d35Cc6634C0532925a3b844Bc454e4438f44e"),c(!1),m([{id:"1",name:"Ancient Scroll",image:"/images/nfts/drum.jpg",collection:"Arktifacts",tokenId:"0001"},{id:"2",name:"Tribal Mask",image:"/images/nfts/scroll.jpg",collection:"Arktifacts",tokenId:"0002"},{id:"3",name:"Futuristic Relic",image:"/images/nfts/crest.jpg",collection:"Arktifacts",tokenId:"0003"}])};return(0,a.jsx)(i.Provider,{value:{wallet:n,isConnecting:s,error:o,userNFTs:d,connectWallet:x,disconnectWallet:()=>{r(null),u(null),m([])}},children:t})}let s=()=>(0,l.useContext)(i)},80679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return c},default:function(){return o}});let a=n(21024),l=n(7929),i=n(92637),r=n(90413),s=a._(n(69950)),c=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/arktifact/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},o=r.Image},36304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let a=n(21024),l=a._(n(2265)),i=l.default.createContext(null)},97823:function(e,t,n){"use strict";n.d(t,{Jm:function(){return l},eu:function(){return a}});let a={initial:{y:60,opacity:0},animate:{y:0,opacity:1,transition:{duration:.6,ease:[.6,-.05,.01,.99]}}},l={animate:{transition:{staggerChildren:.1}}}},16691:function(e,t,n){e.exports=n(80679)}},function(e){e.O(0,[600,413,971,472,744],function(){return e(e.s=83512)}),_N_E=e.O()}]);