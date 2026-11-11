"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{1976:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},338:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]])},2468:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},2873:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},4841:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]])},8094:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]])},4697:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(8030).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},4446:function(e,t,n){n.d(t,{M:function(){return g}});var r=n(7437),o=n(2265),i=n(5050),u=n(458),s=n(7797),c=n(9791);class l extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f(e){let{children:t,isPresent:n}=e,i=(0,o.useId)(),u=(0,o.useRef)(null),s=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:f}=(0,o.useContext)(c._);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:o}=s.current;if(n||!u.current||!e||!t)return;u.current.dataset.motionPopId=i;let c=document.createElement("style");return f&&(c.nonce=f),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[n]),(0,r.jsx)(l,{isPresent:n,childRef:u,sizeRef:s,children:o.cloneElement(t,{ref:u})})}let a=e=>{let{children:t,initial:n,isPresent:i,onExitComplete:c,custom:l,presenceAffectsLayout:a,mode:d}=e,p=(0,u.h)(h),m=(0,o.useId)(),y=(0,o.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;c&&c()},[p,c]),g=(0,o.useMemo)(()=>({id:m,initial:n,isPresent:i,custom:l,onExitComplete:y,register:e=>(p.set(e,!1),()=>p.delete(e))}),a?[Math.random(),y]:[i,y]);return(0,o.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[i]),o.useEffect(()=>{i||p.size||!c||c()},[i]),"popLayout"===d&&(t=(0,r.jsx)(f,{isPresent:i,children:t})),(0,r.jsx)(s.O.Provider,{value:g,children:t})};function h(){return new Map}var d=n(3241);let p=e=>e.key||"";function m(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var y=n(9033);let g=e=>{let{children:t,custom:n,initial:s=!0,onExitComplete:c,presenceAffectsLayout:l=!0,mode:f="sync",propagate:h=!1}=e,[g,x]=(0,d.oO)(h),k=(0,o.useMemo)(()=>m(t),[t]),v=h&&!g?[]:k.map(p),w=(0,o.useRef)(!0),E=(0,o.useRef)(k),M=(0,u.h)(()=>new Map),[Z,b]=(0,o.useState)(k),[C,R]=(0,o.useState)(k);(0,y.L)(()=>{w.current=!1,E.current=k;for(let e=0;e<C.length;e++){let t=p(C[e]);v.includes(t)?M.delete(t):!0!==M.get(t)&&M.set(t,!1)}},[C,v.length,v.join("-")]);let P=[];if(k!==Z){let e=[...k];for(let t=0;t<C.length;t++){let n=C[t],r=p(n);v.includes(r)||(e.splice(t,0,n),P.push(n))}"wait"===f&&P.length&&(e=P),R(m(e)),b(k);return}let{forceRender:z}=(0,o.useContext)(i.p);return(0,r.jsx)(r.Fragment,{children:C.map(e=>{let t=p(e),o=(!h||!!g)&&(k===C||v.includes(t));return(0,r.jsx)(a,{isPresent:o,initial:(!w.current||!!s)&&void 0,custom:o?void 0:n,presenceAffectsLayout:l,mode:f,onExitComplete:o?void 0:()=>{if(!M.has(t))return;M.set(t,!0);let e=!0;M.forEach(t=>{t||(e=!1)}),e&&(null==z||z(),R(E.current),h&&(null==x||x()),c&&c())},children:e},t)})})}},4501:function(e,t,n){n.d(t,{J:function(){return u}});var r=n(2265),o=n(3629),i=n(1016);function u(){i.O.current||(0,o.A)();let[e]=(0,r.useState)(i.n.current);return e}},7476:function(e,t,n){n.d(t,{Y:function(){return u}});var r=n(2265),o=n(6167);let i={some:0,all:1};function u(e,{root:t,margin:n,amount:u,once:s=!1}={}){let[c,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||s&&c)return;let r={root:t&&t.current||void 0,margin:n,amount:u};return function(e,t,{root:n,margin:r,amount:u="some"}={}){let s=(0,o.IG)(e),c=new WeakMap,l=new IntersectionObserver(e=>{e.forEach(e=>{let n=c.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?c.set(e.target,n):l.unobserve(e.target)}else"function"==typeof n&&(n(e),c.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof u?u:i[u]});return s.forEach(e=>l.observe(e)),()=>l.disconnect()}(e.current,()=>(l(!0),s?void 0:()=>l(!1)),r)},[t,e,n,s,u]),c}}}]);