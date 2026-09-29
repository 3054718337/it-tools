import{d as ve,n as P,cg as en,ch as tn,ag as Ze,b3 as vt,R as c,ce as nn,ck as on,cH as gt,am as kt,H as B,aB as E,G as ce,K as Ot,L as ye,cI as ln,ao as ht,aR as an,b as $,N as be,O as Je,b2 as Ft,cJ as pt,aq as lt,cK as Pe,T as Rt,J as ae,aD as ut,bW as Mt,as as ne,cL as rn,cM as sn,q as $e,a1 as dn,b7 as it,ar as bt,cN as cn,aG as un,S as fn,aP as vn,b1 as hn,cd as Ke,cO as pn,Q as gn,cP as bn,cQ as mn,F as ke,cR as wn,aE as mt,cS as yn,P as xn,bY as Cn,bZ as ft,b$ as _n,c0 as Sn,c1 as kn,c2 as On,ak as Fn,c3 as wt,b_ as Rn,aI as fe,E as yt,v as Mn,o as Q,f as ee,k as H,w as te,i as Y,x as at,g as U,l as _e,c as rt,h as ze,W as xt,t as de,y as Tn,m as zn,z as Pn,bJ as $n,aT as In}from"./index-41488c2b.js";import{u as Tt}from"./use-locale-88d59d76.js";import{u as Bn}from"./use-form-item-31f48739.js";import{a as An}from"./Input-28ecc78e.js";import{_ as st}from"./Tag-f8170a3c.js";import{F as Nn,V as En,m as Ln}from"./FocusDetector-3dfdedcc.js";import{_ as Dn}from"./Button-c6e87a77.js";import{_ as Vn}from"./Alert-cf4c04ec.js";import{_ as Wn}from"./InputNumber-6c09e294.js";import{_ as Un}from"./Table-dfdbd681.js";import"./color-to-class-b0332f36.js";import"./is-browser-fc34c9a6.js";import"./Remove-b9a35800.js";function jn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function dt(e){const l=e.filter(n=>n!==void 0);if(l.length!==0)return l.length===1?l[0]:n=>{e.forEach(a=>{a&&a(n)})}}const Se="v-hidden",Hn=on("[v-hidden]",{display:"none!important"}),Ct=ve({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:l}){const n=P(null),a=P(null);function o(){const{value:f}=n,{getCounter:i,getTail:y}=e;let g;if(i!==void 0?g=i():g=a.value,!f||!g)return;g.hasAttribute(Se)&&g.removeAttribute(Se);const{children:b}=f,S=f.offsetWidth,F=[],R=l.tail?y?.():null;let w=R?R.offsetWidth:0,k=!1;const D=f.children.length-(l.tail?1:0);for(let m=0;m<D-1;++m){if(m<0)continue;const L=b[m];if(k){L.hasAttribute(Se)||L.setAttribute(Se,"");continue}else L.hasAttribute(Se)&&L.removeAttribute(Se);const K=L.offsetWidth;if(w+=K,F[m]=K,w>S){const{updateCounter:J}=e;for(let V=m;V>=0;--V){const O=D-1-V;J!==void 0?J(O):g.textContent=`${O}`;const C=g.offsetWidth;if(w-=F[V],w+C<=S||V===0){k=!0,m=V-1,R&&(m===-1?(R.style.maxWidth=`${S-C}px`,R.style.boxSizing="border-box"):R.style.maxWidth="");break}}}}const{onUpdateOverflow:x}=e;k?x!==void 0&&x(!0):(x!==void 0&&x(!1),g.setAttribute(Se,""))}const d=en();return Hn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:tn,ssr:d}),Ze(o),{selfRef:n,counterRef:a,sync:o}},render(){const{$slots:e}=this;return vt(this.sync),c("div",{class:"v-overflow",ref:"selfRef"},[nn(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function zt(e,l){l&&(Ze(()=>{const{value:n}=e;n&&gt.registerHandler(n,l)}),kt(()=>{const{value:n}=e;n&&gt.unregisterHandler(n)}))}const Kn=ve({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),qn=ve({name:"Empty",render(){return c("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),c("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Gn=B("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[E("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ce("+",[E("description",`
 margin-top: 8px;
 `)])]),E("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),E("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Zn=Object.assign(Object.assign({},ye.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Jn=ve({name:"Empty",props:Zn,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:n}=Ot(e),a=ye("Empty","-empty",Gn,ln,e,l),{localeRef:o}=Tt("Empty"),d=ht(an,null),f=$(()=>{var b,S,F;return(b=e.description)!==null&&b!==void 0?b:(F=(S=d?.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||F===void 0?void 0:F.description}),i=$(()=>{var b,S;return((S=(b=d?.mergedComponentPropsRef.value)===null||b===void 0?void 0:b.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>c(qn,null))}),y=$(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:S},self:{[be("iconSize",b)]:F,[be("fontSize",b)]:R,textColor:w,iconColor:k,extraTextColor:D}}=a.value;return{"--n-icon-size":F,"--n-font-size":R,"--n-bezier":S,"--n-text-color":w,"--n-icon-color":k,"--n-extra-text-color":D}}),g=n?Je("empty",$(()=>{let b="";const{size:S}=e;return b+=S[0],b}),y,e):void 0;return{mergedClsPrefix:l,mergedRenderIcon:i,localizedDescription:$(()=>f.value||o.value.description),cssVars:n?void 0:y,themeClass:g?.themeClass,onRender:g?.onRender}},render(){const{$slots:e,mergedClsPrefix:l,onRender:n}=this;return n?.(),c("div",{class:[`${l}-empty`,this.themeClass],style:this.cssVars},this.showIcon?c("div",{class:`${l}-empty__icon`},e.icon?e.icon():c(Ft,{clsPrefix:l},{default:this.mergedRenderIcon})):null,this.showDescription?c("div",{class:`${l}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?c("div",{class:`${l}-empty__extra`},e.extra()):null)}});function Qn(e,l){return c(Rt,{name:"fade-in-scale-up-transition"},{default:()=>e?c(Ft,{clsPrefix:l,class:`${l}-base-select-option__check`},{default:()=>c(Kn)}):null})}const _t=ve({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:l,pendingTmNodeRef:n,multipleRef:a,valueSetRef:o,renderLabelRef:d,renderOptionRef:f,labelFieldRef:i,valueFieldRef:y,showCheckmarkRef:g,nodePropsRef:b,handleOptionClick:S,handleOptionMouseEnter:F}=ht(pt),R=lt(()=>{const{value:x}=n;return x?e.tmNode.key===x.key:!1});function w(x){const{tmNode:m}=e;m.disabled||S(x,m)}function k(x){const{tmNode:m}=e;m.disabled||F(x,m)}function D(x){const{tmNode:m}=e,{value:L}=R;m.disabled||L||F(x,m)}return{multiple:a,isGrouped:lt(()=>{const{tmNode:x}=e,{parent:m}=x;return m&&m.rawNode.type==="group"}),showCheckmark:g,nodeProps:b,isPending:R,isSelected:lt(()=>{const{value:x}=l,{value:m}=a;if(x===null)return!1;const L=e.tmNode.rawNode[y.value];if(m){const{value:K}=o;return K.has(L)}else return x===L}),labelField:i,renderLabel:d,renderOption:f,handleMouseMove:D,handleMouseEnter:k,handleClick:w}},render(){const{clsPrefix:e,tmNode:{rawNode:l},isSelected:n,isPending:a,isGrouped:o,showCheckmark:d,nodeProps:f,renderOption:i,renderLabel:y,handleClick:g,handleMouseEnter:b,handleMouseMove:S}=this,F=Qn(n,e),R=y?[y(l,n),d&&F]:[Pe(l[this.labelField],l,n),d&&F],w=f?.(l),k=c("div",Object.assign({},w,{class:[`${e}-base-select-option`,l.class,w?.class,{[`${e}-base-select-option--disabled`]:l.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:o,[`${e}-base-select-option--pending`]:a,[`${e}-base-select-option--show-checkmark`]:d}],style:[w?.style||"",l.style||""],onClick:dt([g,w?.onClick]),onMouseenter:dt([b,w?.onMouseenter]),onMousemove:dt([S,w?.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},R));return l.render?l.render({node:k,option:l,selected:n}):i?i({node:k,option:l,selected:n}):k}}),St=ve({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:l,labelFieldRef:n,nodePropsRef:a}=ht(pt);return{labelField:n,nodeProps:a,renderLabel:e,renderOption:l}},render(){const{clsPrefix:e,renderLabel:l,renderOption:n,nodeProps:a,tmNode:{rawNode:o}}=this,d=a?.(o),f=l?l(o,!1):Pe(o[this.labelField],o,!1),i=c("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d?.class]}),f);return o.render?o.render({node:i,option:o}):n?n({node:i,option:o,selected:!1}):i}}),Yn=B("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[B("scrollbar",`
 max-height: var(--n-height);
 `),B("virtual-list",`
 max-height: var(--n-height);
 `),B("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[E("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),B("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),B("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),E("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),E("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),E("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),B("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),B("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ae("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ce("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ce("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ae("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ae("pending",[ce("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ae("selected",`
 color: var(--n-option-text-color-active);
 `,[ce("&::before",`
 background-color: var(--n-option-color-active);
 `),ae("pending",[ce("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ae("disabled",`
 cursor: not-allowed;
 `,[ut("selected",`
 color: var(--n-option-text-color-disabled);
 `),ae("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),E("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Mt({enterScale:"0.5"})])])]),Xn=ve({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const l=ye("InternalSelectMenu","-internal-select-menu",Yn,rn,e,ne(e,"clsPrefix")),n=P(null),a=P(null),o=P(null),d=$(()=>e.treeMate.getFlattenedNodes()),f=$(()=>sn(d.value)),i=P(null);function y(){const{treeMate:s}=e;let v=null;const{value:j}=e;j===null?v=s.getFirstAvailableNode():(e.multiple?v=s.getNode((j||[])[(j||[]).length-1]):v=s.getNode(j),(!v||v.disabled)&&(v=s.getFirstAvailableNode())),G(v||null)}function g(){const{value:s}=i;s&&!e.treeMate.getNode(s.key)&&(i.value=null)}let b;$e(()=>e.show,s=>{s?b=$e(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?y():g(),vt(A)):g()},{immediate:!0}):b?.()},{immediate:!0}),kt(()=>{b?.()});const S=$(()=>dn(l.value.self[be("optionHeight",e.size)])),F=$(()=>it(l.value.self[be("padding",e.size)])),R=$(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),w=$(()=>{const s=d.value;return s&&s.length===0});function k(s){const{onToggle:v}=e;v&&v(s)}function D(s){const{onScroll:v}=e;v&&v(s)}function x(s){var v;(v=o.value)===null||v===void 0||v.sync(),D(s)}function m(){var s;(s=o.value)===null||s===void 0||s.sync()}function L(){const{value:s}=i;return s||null}function K(s,v){v.disabled||G(v,!1)}function J(s,v){v.disabled||k(v)}function V(s){var v;Ke(s,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,s)}function O(s){var v;Ke(s,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,s)}function C(s){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,s),!e.focusable&&s.preventDefault()}function X(){const{value:s}=i;s&&G(s.getNext({loop:!0}),!0)}function q(){const{value:s}=i;s&&G(s.getPrev({loop:!0}),!0)}function G(s,v=!1){i.value=s,v&&A()}function A(){var s,v;const j=i.value;if(!j)return;const pe=f.value(j.key);pe!==null&&(e.virtualScroll?(s=a.value)===null||s===void 0||s.scrollTo({index:pe}):(v=o.value)===null||v===void 0||v.scrollTo({index:pe,elSize:S.value}))}function le(s){var v,j;!((v=n.value)===null||v===void 0)&&v.contains(s.target)&&((j=e.onFocus)===null||j===void 0||j.call(e,s))}function he(s){var v,j;!((v=n.value)===null||v===void 0)&&v.contains(s.relatedTarget)||(j=e.onBlur)===null||j===void 0||j.call(e,s)}bt(pt,{handleOptionMouseEnter:K,handleOptionClick:J,valueSetRef:R,pendingTmNodeRef:i,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),bt(cn,n),Ze(()=>{const{value:s}=o;s&&s.sync()});const oe=$(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:v},self:{height:j,borderRadius:pe,color:Ie,groupHeaderTextColor:Be,actionDividerColor:Ae,optionTextColorPressed:Oe,optionTextColor:Fe,optionTextColorDisabled:ge,optionTextColorActive:ie,optionOpacityDisabled:Re,optionCheckColor:me,actionTextColor:Ne,optionColorPending:xe,optionColorActive:Ce,loadingColor:Ee,loadingSize:Le,optionColorActivePending:De,[be("optionFontSize",s)]:Me,[be("optionHeight",s)]:Te,[be("optionPadding",s)]:re}}=l.value;return{"--n-height":j,"--n-action-divider-color":Ae,"--n-action-text-color":Ne,"--n-bezier":v,"--n-border-radius":pe,"--n-color":Ie,"--n-option-font-size":Me,"--n-group-header-text-color":Be,"--n-option-check-color":me,"--n-option-color-pending":xe,"--n-option-color-active":Ce,"--n-option-color-active-pending":De,"--n-option-height":Te,"--n-option-opacity-disabled":Re,"--n-option-text-color":Fe,"--n-option-text-color-active":ie,"--n-option-text-color-disabled":ge,"--n-option-text-color-pressed":Oe,"--n-option-padding":re,"--n-option-padding-left":it(re,"left"),"--n-option-padding-right":it(re,"right"),"--n-loading-color":Ee,"--n-loading-size":Le}}),{inlineThemeDisabled:se}=e,p=se?Je("internal-select-menu",$(()=>e.size[0]),oe,e):void 0,N={selfRef:n,next:X,prev:q,getPendingTmNode:L};return zt(n,e.onResize),Object.assign({mergedTheme:l,virtualListRef:a,scrollbarRef:o,itemSize:S,padding:F,flattenedNodes:d,empty:w,virtualListContainer(){const{value:s}=a;return s?.listElRef},virtualListContent(){const{value:s}=a;return s?.itemsElRef},doScroll:D,handleFocusin:le,handleFocusout:he,handleKeyUp:V,handleKeyDown:O,handleMouseDown:C,handleVirtualListResize:m,handleVirtualListScroll:x,cssVars:se?void 0:oe,themeClass:p?.themeClass,onRender:p?.onRender},N)},render(){const{$slots:e,virtualScroll:l,clsPrefix:n,mergedTheme:a,themeClass:o,onRender:d}=this;return d?.(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,o,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?c("div",{class:`${n}-base-select-menu__loading`},c(fn,{clsPrefix:n,strokeWidth:20})):this.empty?c("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0,"data-action":!0},hn(e.empty,()=>[c(Jn,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty})])):c(vn,{ref:"scrollbarRef",theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:l?this.virtualListContainer:void 0,content:l?this.virtualListContent:void 0,onScroll:l?void 0:this.doScroll},{default:()=>l?c(En,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?c(St,{key:f.key,clsPrefix:n,tmNode:f}):f.ignored?null:c(_t,{clsPrefix:n,key:f.key,tmNode:f})}):c("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?c(St,{key:f.key,clsPrefix:n,tmNode:f}):c(_t,{clsPrefix:n,key:f.key,tmNode:f})))}),un(e.action,f=>f&&[c("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},f),c(Nn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),eo=ce([B("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[B("base-loading",`
 color: var(--n-loading-color);
 `),B("base-selection-tags","min-height: var(--n-height);"),E("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),E("state-border",`
 z-index: 1;
 border-color: #0000;
 `),B("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[E("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),B("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[E("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),B("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[E("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),B("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[B("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[E("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),E("render-label",`
 color: var(--n-text-color);
 `)]),ut("disabled",[ce("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ae("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ae("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),B("base-selection-label","background-color: var(--n-color-active);"),B("base-selection-tags","background-color: var(--n-color-active);")])]),ae("disabled","cursor: not-allowed;",[E("arrow",`
 color: var(--n-arrow-color-disabled);
 `),B("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[B("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),E("render-label",`
 color: var(--n-text-color-disabled);
 `)]),B("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),B("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),B("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[E("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),E("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ae(`${e}-status`,[E("state-border",`border: var(--n-border-${e});`),ut("disabled",[ce("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ae("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),B("base-selection-label",`background-color: var(--n-color-active-${e});`),B("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ae("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),B("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),B("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ce("&:last-child","padding-right: 0;"),B("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[E("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),to=ve({name:"InternalSelection",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const l=P(null),n=P(null),a=P(null),o=P(null),d=P(null),f=P(null),i=P(null),y=P(null),g=P(null),b=P(null),S=P(!1),F=P(!1),R=P(!1),w=ye("InternalSelection","-internal-selection",eo,pn,e,ne(e,"clsPrefix")),k=$(()=>e.clearable&&!e.disabled&&(R.value||e.active)),D=$(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Pe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),x=$(()=>{const r=e.selectedOption;if(r)return r[e.labelField]}),m=$(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function L(){var r;const{value:h}=l;if(h){const{value:W}=n;W&&(W.style.width=`${h.offsetWidth}px`,e.maxTagCount!=="responsive"&&((r=g.value)===null||r===void 0||r.sync()))}}function K(){const{value:r}=b;r&&(r.style.display="none")}function J(){const{value:r}=b;r&&(r.style.display="inline-block")}$e(ne(e,"active"),r=>{r||K()}),$e(ne(e,"pattern"),()=>{e.multiple&&vt(L)});function V(r){const{onFocus:h}=e;h&&h(r)}function O(r){const{onBlur:h}=e;h&&h(r)}function C(r){const{onDeleteOption:h}=e;h&&h(r)}function X(r){const{onClear:h}=e;h&&h(r)}function q(r){const{onPatternInput:h}=e;h&&h(r)}function G(r){var h;(!r.relatedTarget||!(!((h=a.value)===null||h===void 0)&&h.contains(r.relatedTarget)))&&V(r)}function A(r){var h;!((h=a.value)===null||h===void 0)&&h.contains(r.relatedTarget)||O(r)}function le(r){X(r)}function he(){R.value=!0}function oe(){R.value=!1}function se(r){!e.active||!e.filterable||r.target!==n.value&&r.preventDefault()}function p(r){C(r)}function N(r){if(r.key==="Backspace"&&!s.value&&!e.pattern.length){const{selectedOptions:h}=e;h?.length&&p(h[h.length-1])}}const s=P(!1);let v=null;function j(r){const{value:h}=l;if(h){const W=r.target.value;h.textContent=W,L()}e.ignoreComposition&&s.value?v=r:q(r)}function pe(){s.value=!0}function Ie(){s.value=!1,e.ignoreComposition&&q(v),v=null}function Be(r){var h;F.value=!0,(h=e.onPatternFocus)===null||h===void 0||h.call(e,r)}function Ae(r){var h;F.value=!1,(h=e.onPatternBlur)===null||h===void 0||h.call(e,r)}function Oe(){var r,h;if(e.filterable)F.value=!1,(r=f.value)===null||r===void 0||r.blur(),(h=n.value)===null||h===void 0||h.blur();else if(e.multiple){const{value:W}=o;W?.blur()}else{const{value:W}=d;W?.blur()}}function Fe(){var r,h,W;e.filterable?(F.value=!1,(r=f.value)===null||r===void 0||r.focus()):e.multiple?(h=o.value)===null||h===void 0||h.focus():(W=d.value)===null||W===void 0||W.focus()}function ge(){const{value:r}=n;r&&(J(),r.focus())}function ie(){const{value:r}=n;r&&r.blur()}function Re(r){const{value:h}=i;h&&h.setTextContent(`+${r}`)}function me(){const{value:r}=y;return r}function Ne(){return n.value}let xe=null;function Ce(){xe!==null&&window.clearTimeout(xe)}function Ee(){e.active||(Ce(),xe=window.setTimeout(()=>{m.value&&(S.value=!0)},100))}function Le(){Ce()}function De(r){r||(Ce(),S.value=!1)}$e(m,r=>{r||(S.value=!1)}),Ze(()=>{gn(()=>{const r=f.value;r&&(e.disabled?r.removeAttribute("tabindex"):r.tabIndex=F.value?-1:0)})}),zt(a,e.onResize);const{inlineThemeDisabled:Me}=e,Te=$(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:h},self:{borderRadius:W,color:Ve,placeholderColor:Qe,textColor:Ye,paddingSingle:Xe,paddingMultiple:et,caretColor:We,colorDisabled:Ue,textColorDisabled:je,placeholderColorDisabled:tt,colorActive:nt,boxShadowFocus:He,boxShadowActive:we,boxShadowHover:t,border:u,borderFocus:_,borderHover:I,borderActive:T,arrowColor:M,arrowColorDisabled:z,loadingColor:Z,colorActiveWarning:ue,boxShadowFocusWarning:ot,boxShadowActiveWarning:$t,boxShadowHoverWarning:It,borderWarning:Bt,borderFocusWarning:At,borderHoverWarning:Nt,borderActiveWarning:Et,colorActiveError:Lt,boxShadowFocusError:Dt,boxShadowActiveError:Vt,boxShadowHoverError:Wt,borderError:Ut,borderFocusError:jt,borderHoverError:Ht,borderActiveError:Kt,clearColor:qt,clearColorHover:Gt,clearColorPressed:Zt,clearSize:Jt,arrowSize:Qt,[be("height",r)]:Yt,[be("fontSize",r)]:Xt}}=w.value;return{"--n-bezier":h,"--n-border":u,"--n-border-active":T,"--n-border-focus":_,"--n-border-hover":I,"--n-border-radius":W,"--n-box-shadow-active":we,"--n-box-shadow-focus":He,"--n-box-shadow-hover":t,"--n-caret-color":We,"--n-color":Ve,"--n-color-active":nt,"--n-color-disabled":Ue,"--n-font-size":Xt,"--n-height":Yt,"--n-padding-single":Xe,"--n-padding-multiple":et,"--n-placeholder-color":Qe,"--n-placeholder-color-disabled":tt,"--n-text-color":Ye,"--n-text-color-disabled":je,"--n-arrow-color":M,"--n-arrow-color-disabled":z,"--n-loading-color":Z,"--n-color-active-warning":ue,"--n-box-shadow-focus-warning":ot,"--n-box-shadow-active-warning":$t,"--n-box-shadow-hover-warning":It,"--n-border-warning":Bt,"--n-border-focus-warning":At,"--n-border-hover-warning":Nt,"--n-border-active-warning":Et,"--n-color-active-error":Lt,"--n-box-shadow-focus-error":Dt,"--n-box-shadow-active-error":Vt,"--n-box-shadow-hover-error":Wt,"--n-border-error":Ut,"--n-border-focus-error":jt,"--n-border-hover-error":Ht,"--n-border-active-error":Kt,"--n-clear-size":Jt,"--n-clear-color":qt,"--n-clear-color-hover":Gt,"--n-clear-color-pressed":Zt,"--n-arrow-size":Qt}}),re=Me?Je("internal-selection",$(()=>e.size[0]),Te,e):void 0;return{mergedTheme:w,mergedClearable:k,patternInputFocused:F,filterablePlaceholder:D,label:x,selected:m,showTagsPanel:S,isComposing:s,counterRef:i,counterWrapperRef:y,patternInputMirrorRef:l,patternInputRef:n,selfRef:a,multipleElRef:o,singleElRef:d,patternInputWrapperRef:f,overflowRef:g,inputTagElRef:b,handleMouseDown:se,handleFocusin:G,handleClear:le,handleMouseEnter:he,handleMouseLeave:oe,handleDeleteOption:p,handlePatternKeyDown:N,handlePatternInputInput:j,handlePatternInputBlur:Ae,handlePatternInputFocus:Be,handleMouseEnterCounter:Ee,handleMouseLeaveCounter:Le,handleFocusout:A,handleCompositionEnd:Ie,handleCompositionStart:pe,onPopoverUpdateShow:De,focus:Fe,focusInput:ge,blur:Oe,blurInput:ie,updateCounter:Re,getCounter:me,getTail:Ne,renderLabel:e.renderLabel,cssVars:Me?void 0:Te,themeClass:re?.themeClass,onRender:re?.onRender}},render(){const{status:e,multiple:l,size:n,disabled:a,filterable:o,maxTagCount:d,bordered:f,clsPrefix:i,onRender:y,renderTag:g,renderLabel:b}=this;y?.();const S=d==="responsive",F=typeof d=="number",R=S||F,w=c(bn,null,{default:()=>c(An,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var D,x;return(x=(D=this.$slots).arrow)===null||x===void 0?void 0:x.call(D)}})});let k;if(l){const{labelField:D}=this,x=A=>c("div",{class:`${i}-base-selection-tag-wrapper`,key:A.value},g?g({option:A,handleClose:()=>{this.handleDeleteOption(A)}}):c(st,{size:n,closable:!A.disabled,disabled:a,onClose:()=>{this.handleDeleteOption(A)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>b?b(A,!0):Pe(A[D],A,!0)})),m=()=>(F?this.selectedOptions.slice(0,d):this.selectedOptions).map(x),L=o?c("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:a,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,K=S?()=>c("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(st,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:a})):void 0;let J;if(F){const A=this.selectedOptions.length-d;A>0&&(J=c("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},c(st,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:a},{default:()=>`+${A}`})))}const V=S?o?c(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:m,counter:K,tail:()=>L}):c(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:m,counter:K}):F?m().concat(J):m(),O=R?()=>c("div",{class:`${i}-base-selection-popover`},S?m():this.selectedOptions.map(x)):void 0,C=R?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,q=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},c("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,G=o?c("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},V,S?null:L,w):c("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:a?void 0:0},V,w);k=c(ke,null,R?c(mn,Object.assign({},C,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>G,default:O}):G,q)}else if(o){const D=this.pattern||this.isComposing,x=this.active?!D:!this.selected,m=this.active?!1:this.selected;k=c("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:a,disabled:a,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),m?c("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},c("div",{class:`${i}-base-selection-overlay__wrapper`},g?g({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):Pe(this.label,this.selectedOption,!0))):null,x?c("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,w)}else k=c("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${i}-base-selection-input`,title:jn(this.label),key:"input"},c("div",{class:`${i}-base-selection-input__content`},g?g({option:this.selectedOption,handleClose:()=>{}}):b?b(this.selectedOption,!0):Pe(this.label,this.selectedOption,!0))):c("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),w);return c("div",{ref:"selfRef",class:[`${i}-base-selection`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,f?c("div",{class:`${i}-base-selection__border`}):null,f?c("div",{class:`${i}-base-selection__state-border`}):null)}});function qe(e){return e.type==="group"}function Pt(e){return e.type==="ignored"}function ct(e,l){try{return!!(1+l.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function no(e,l){return{getIsGroup:qe,getIgnored:Pt,getKey(a){return qe(a)?a.name||a.key||"key-required":a[e]},getChildren(a){return a[l]}}}function oo(e,l,n,a){if(!l)return e;function o(d){if(!Array.isArray(d))return[];const f=[];for(const i of d)if(qe(i)){const y=o(i[a]);y.length&&f.push(Object.assign({},i,{[a]:y}))}else{if(Pt(i))continue;l(n,i)&&f.push(i)}return f}return o(e)}function lo(e,l,n){const a=new Map;return e.forEach(o=>{qe(o)?o[n].forEach(d=>{a.set(d[l],d)}):a.set(o[l],o)}),a}const io=ce([B("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),B("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Mt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ao=Object.assign(Object.assign({},ye.props),{to:ft.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),ro=ve({name:"Select",props:ao,setup(e){const{mergedClsPrefixRef:l,mergedBorderedRef:n,namespaceRef:a,inlineThemeDisabled:o}=Ot(e),d=ye("Select","-select",io,wn,e,l),f=P(e.defaultValue),i=ne(e,"value"),y=mt(i,f),g=P(!1),b=P(""),S=$(()=>{const{valueField:t,childrenField:u}=e,_=no(t,u);return yn(A.value,_)}),F=$(()=>lo(q.value,e.valueField,e.childrenField)),R=P(!1),w=mt(ne(e,"show"),R),k=P(null),D=P(null),x=P(null),{localeRef:m}=Tt("Select"),L=$(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:m.value.placeholder}),K=xn(e,["items","options"]),J=[],V=P([]),O=P([]),C=P(new Map),X=$(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:_}=e;return I=>({[u]:String(I),[_]:I})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),q=$(()=>O.value.concat(V.value).concat(K.value)),G=$(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:_}=e;return(I,T)=>{if(!T)return!1;const M=T[u];if(typeof M=="string")return ct(I,M);const z=T[_];return typeof z=="string"?ct(I,z):typeof z=="number"?ct(I,String(z)):!1}}),A=$(()=>{if(e.remote)return K.value;{const{value:t}=q,{value:u}=b;return!u.length||!e.filterable?t:oo(t,G.value,u,e.childrenField)}});function le(t){const u=e.remote,{value:_}=C,{value:I}=F,{value:T}=X,M=[];return t.forEach(z=>{if(I.has(z))M.push(I.get(z));else if(u&&_.has(z))M.push(_.get(z));else if(T){const Z=T(z);Z&&M.push(Z)}}),M}const he=$(()=>{if(e.multiple){const{value:t}=y;return Array.isArray(t)?le(t):[]}return null}),oe=$(()=>{const{value:t}=y;return!e.multiple&&!Array.isArray(t)?t===null?null:le([t])[0]||null:null}),se=Bn(e),{mergedSizeRef:p,mergedDisabledRef:N,mergedStatusRef:s}=se;function v(t,u){const{onChange:_,"onUpdate:value":I,onUpdateValue:T}=e,{nTriggerFormChange:M,nTriggerFormInput:z}=se;_&&fe(_,t,u),T&&fe(T,t,u),I&&fe(I,t,u),f.value=t,M(),z()}function j(t){const{onBlur:u}=e,{nTriggerFormBlur:_}=se;u&&fe(u,t),_()}function pe(){const{onClear:t}=e;t&&fe(t)}function Ie(t){const{onFocus:u,showOnFocus:_}=e,{nTriggerFormFocus:I}=se;u&&fe(u,t),I(),_&&ge()}function Be(t){const{onSearch:u}=e;u&&fe(u,t)}function Ae(t){const{onScroll:u}=e;u&&fe(u,t)}function Oe(){var t;const{remote:u,multiple:_}=e;if(u){const{value:I}=C;if(_){const{valueField:T}=e;(t=he.value)===null||t===void 0||t.forEach(M=>{I.set(M[T],M)})}else{const T=oe.value;T&&I.set(T[e.valueField],T)}}}function Fe(t){const{onUpdateShow:u,"onUpdate:show":_}=e;u&&fe(u,t),_&&fe(_,t),R.value=t}function ge(){N.value||(Fe(!0),R.value=!0,e.filterable&&je())}function ie(){Fe(!1)}function Re(){b.value="",O.value=J}const me=P(!1);function Ne(){e.filterable&&(me.value=!0)}function xe(){e.filterable&&(me.value=!1,w.value||Re())}function Ce(){N.value||(w.value?e.filterable?je():ie():ge())}function Ee(t){var u,_;!((_=(u=x.value)===null||u===void 0?void 0:u.selfRef)===null||_===void 0)&&_.contains(t.relatedTarget)||(g.value=!1,j(t),ie())}function Le(t){Ie(t),g.value=!0}function De(t){g.value=!0}function Me(t){var u;!((u=k.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(g.value=!1,j(t),ie())}function Te(){var t;(t=k.value)===null||t===void 0||t.focus(),ie()}function re(t){var u;w.value&&(!((u=k.value)===null||u===void 0)&&u.$el.contains(Rn(t))||ie())}function r(t){if(!Array.isArray(t))return[];if(X.value)return Array.from(t);{const{remote:u}=e,{value:_}=F;if(u){const{value:I}=C;return t.filter(T=>_.has(T)||I.has(T))}else return t.filter(I=>_.has(I))}}function h(t){W(t.rawNode)}function W(t){if(N.value)return;const{tag:u,remote:_,clearFilterAfterSelect:I,valueField:T}=e;if(u&&!_){const{value:M}=O,z=M[0]||null;if(z){const Z=V.value;Z.length?Z.push(z):V.value=[z],O.value=J}}if(_&&C.value.set(t[T],t),e.multiple){const M=r(y.value),z=M.findIndex(Z=>Z===t[T]);if(~z){if(M.splice(z,1),u&&!_){const Z=Ve(t[T]);~Z&&(V.value.splice(Z,1),I&&(b.value=""))}}else M.push(t[T]),I&&(b.value="");v(M,le(M))}else{if(u&&!_){const M=Ve(t[T]);~M?V.value=[V.value[M]]:V.value=J}Ue(),ie(),v(t[T],t)}}function Ve(t){return V.value.findIndex(_=>_[e.valueField]===t)}function Qe(t){w.value||ge();const{value:u}=t.target;b.value=u;const{tag:_,remote:I}=e;if(Be(u),_&&!I){if(!u){O.value=J;return}const{onCreate:T}=e,M=T?T(u):{[e.labelField]:u,[e.valueField]:u},{valueField:z,labelField:Z}=e;K.value.some(ue=>ue[z]===M[z]||ue[Z]===M[Z])||V.value.some(ue=>ue[z]===M[z]||ue[Z]===M[Z])?O.value=J:O.value=[M]}}function Ye(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&ie(),pe(),u?v([],[]):v(null,null)}function Xe(t){!Ke(t,"action")&&!Ke(t,"empty")&&t.preventDefault()}function et(t){Ae(t)}function We(t){var u,_,I,T,M;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=k.value)===null||u===void 0)&&u.isComposing)){if(w.value){const z=(_=x.value)===null||_===void 0?void 0:_.getPendingTmNode();z?h(z):e.filterable||(ie(),Ue())}else if(ge(),e.tag&&me.value){const z=O.value[0];if(z){const Z=z[e.valueField],{value:ue}=y;e.multiple&&Array.isArray(ue)&&ue.some(ot=>ot===Z)||W(z)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;w.value&&((I=x.value)===null||I===void 0||I.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;w.value?(T=x.value)===null||T===void 0||T.next():ge();break;case"Escape":w.value&&(Ln(t),ie()),(M=k.value)===null||M===void 0||M.focus();break}}function Ue(){var t;(t=k.value)===null||t===void 0||t.focus()}function je(){var t;(t=k.value)===null||t===void 0||t.focusInput()}function tt(){var t;w.value&&((t=D.value)===null||t===void 0||t.syncPosition())}Oe(),$e(ne(e,"options"),Oe);const nt={focus:()=>{var t;(t=k.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=k.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=k.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=k.value)===null||t===void 0||t.blurInput()}},He=$(()=>{const{self:{menuBoxShadow:t}}=d.value;return{"--n-menu-box-shadow":t}}),we=o?Je("select",void 0,He,e):void 0;return Object.assign(Object.assign({},nt),{mergedStatus:s,mergedClsPrefix:l,mergedBordered:n,namespace:a,treeMate:S,isMounted:Cn(),triggerRef:k,menuRef:x,pattern:b,uncontrolledShow:R,mergedShow:w,adjustedTo:ft(e),uncontrolledValue:f,mergedValue:y,followerRef:D,localizedPlaceholder:L,selectedOption:oe,selectedOptions:he,mergedSize:p,mergedDisabled:N,focused:g,activeWithoutMenuOpen:me,inlineThemeDisabled:o,onTriggerInputFocus:Ne,onTriggerInputBlur:xe,handleTriggerOrMenuResize:tt,handleMenuFocus:De,handleMenuBlur:Me,handleMenuTabOut:Te,handleTriggerClick:Ce,handleToggle:h,handleDeleteOption:W,handlePatternInput:Qe,handleClear:Ye,handleTriggerBlur:Ee,handleTriggerFocus:Le,handleKeydown:We,handleMenuAfterLeave:Re,handleMenuClickOutside:re,handleMenuScroll:et,handleMenuKeydown:We,handleMenuMousedown:Xe,mergedTheme:d,cssVars:o?void 0:He,themeClass:we?.themeClass,onRender:we?.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(_n,null,{default:()=>[c(Sn,null,{default:()=>c(to,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,l;return[(l=(e=this.$slots).arrow)===null||l===void 0?void 0:l.call(e)]}})}),c(kn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ft.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(Rt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,l,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),On(c(Xn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(l=this.menuProps)===null||l===void 0?void 0:l.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var a,o;return[(o=(a=this.$slots).empty)===null||o===void 0?void 0:o.call(a)]},action:()=>{var a,o;return[(o=(a=this.$slots).action)===null||o===void 0?void 0:o.call(a)]}}),this.displayDirective==="show"?[[Fn,this.mergedShow],[wt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[wt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),so={一:1,二:2,三:3,四:4,五:5,六:6,日:7,天:7},co=16;function uo(e){return e.replace(/[,，、;；:：|()（）\s]+$/g,"").trim()}function fo(e){const l=[],n=[];for(const a of e.split(/\r?\n/)){const o=a.trim();if(!o||/^(星期|周|节次|时间|课程)/.test(o)&&!/\d/.test(o))continue;const d=[...o.matchAll(/(?:周|星期)\s*([一二三四五六日天])/g)].map(m=>so[m[1]]),f=[...o.matchAll(/第?\s*(\d{1,2})\s*[-–~至]\s*(\d{1,2})\s*节/g)],i=o.match(/第\s*(\d{1,2})\s*节/),y=o.match(/(\d{1,2})\s*[-–~至]\s*(\d{1,2})\s*周/),g=o.match(/第\s*(\d{1,2})\s*周/),b=/单周|\(单\)|（单）/.test(o)?"odd":/双周|\(双\)|（双）/.test(o)?"even":"all",S=y?Number(y[1]):g?Number(g[1]):1,F=y?Number(y[2]):g?Number(g[1]):co,R=f.map(m=>[Number(m[1]),Number(m[2])]);if(R.length===0&&i){const m=Number(i[1]);R.push([m,m])}if(d.length===0||R.length===0||S<1||F<S){n.push(o);continue}const w=/(?:周|星期)\s*[一二三四五六日天]|第?\s*\d{1,2}\s*[-–~至]\s*\d{1,2}\s*节|第\s*\d{1,2}\s*节|第?\s*\d{1,2}\s*[-–~至]\s*\d{1,2}\s*周|第\s*\d{1,2}\s*周/g,k=[...o.matchAll(w)].map(m=>m.index??0),D=k.length>0&&uo(o.slice(0,Math.min(...k)))||"未命名课程";let x=0;for(const m of d)for(const[L,K]of R)L<1||K<L||(l.push({id:crypto.randomUUID(),name:D,weekday:m,startSection:L,endSection:K,startWeek:S,endWeek:F,parity:b}),x+=1);x===0&&n.push(o)}return{slots:l,failedLines:n}}function Ge(e){const l=[];for(let n=e.startWeek;n<=e.endWeek;n+=1)e.parity==="odd"&&n%2===0||e.parity==="even"&&n%2===1||l.push(n);return l}function vo(e){const l=[];for(let n=0;n<e.length;n+=1)for(let a=n+1;a<e.length;a+=1){const o=e[n],d=e[a];if(o.weekday!==d.weekday)continue;const f=Math.max(o.startSection,d.startSection),i=Math.min(o.endSection,d.endSection);if(f>i)continue;const y=new Set(Ge(d)),g=Ge(o).filter(b=>y.has(b));g.length!==0&&l.push({a:o,b:d,weekday:o.weekday,sectionFrom:f,sectionTo:i,weeks:g})}return l}function ho(e,l,n){const a=[];for(let o=1;o<=7;o+=1){const d=new Set;for(const i of e)if(i.weekday===o&&Ge(i).includes(l))for(let y=i.startSection;y<=i.endSection;y+=1)d.add(y);let f=null;for(let i=1;i<=n;i+=1){const y=!d.has(i);if(y&&f===null&&(f=i),(!y||i===n)&&f!==null){const g=y?i:i-1;g>=f&&a.push({weekday:o,fromSection:f,toSection:g}),f=null}}}return a}function po(e,l,n){const a=Array.from({length:n},()=>Array.from({length:7},()=>null));for(const o of e)if(Ge(o).includes(l))for(let d=o.startSection;d<=Math.min(o.endSection,n);d+=1)a[d-1]&&a[d-1][o.weekday-1]===null&&(a[d-1][o.weekday-1]=o);return a}function go(e){if(e.length===0)return"";const l=[...e].sort((d,f)=>d-f),n=[];let a=l[0],o=a;for(const d of l.slice(1)){if(d===o+1){o=d;continue}n.push(a===o?`${a}`:`${a}-${o}`),a=d,o=d}return n.push(a===o?`${a}`:`${a}-${o}`),n.join("、")}const bo={class:"flex flex-wrap gap-2"},mo={key:0,class:"py-4 text-center text-sm opacity-60"},wo=U("span",{class:"opacity-60"},"-",-1),yo=U("span",{class:"text-xs opacity-60"},"第",-1),xo=U("span",{class:"text-xs opacity-60"},"-",-1),Co=U("span",{class:"text-xs opacity-60"},"周",-1),_o={class:"mb-3 flex flex-wrap items-center gap-3"},So=U("span",{class:"text-sm opacity-70"},"查看周次：",-1),ko=U("span",{class:"text-sm opacity-70"},"每天节次数：",-1),Oo=U("th",{class:"w-12 text-center"}," 节 ",-1),Fo={class:"text-center text-xs opacity-60"},Ro={key:1,class:"opacity-20"},Mo=U("p",{class:"mt-2 text-xs opacity-60"}," 红框标记的课程存在时间冲突；单双周课程只在对应周次显示。 ",-1),To={class:"flex flex-wrap items-center gap-3"},zo={class:"text-xs opacity-60"},Po={class:"mt-3 whitespace-pre-wrap rounded bg-gray-100 p-3 text-xs leading-6"},$o=U("ul",{class:"ml-4 list-disc text-sm leading-6 opacity-80"},[U("li",null,"每行一门课，示例：高等数学 周一 1-2节 1-16周；同一行可写多个星期（如「周一周三」）。"),U("li",null,"支持「星期一/周一」、单节「第3节」、节次范围「1-2节/第1-2节」、周次「第3周/1-16周」以及「单周/双周/(单)/(双)」。"),U("li",null,"冲突判定：同一天、节次重叠、且周次（含单双周）有交集；空闲时段按当前所选周次实时计算并合并连续节次。"),U("li",null,"教务系统复制格式千差万别，识别失败的行会列在上方提示里，可直接在课程时段表中手动修改。")],-1),qo=ve({__name:"timetable-conflict",setup(e){const l=P(""),n=P([]),a=P([]),o=yt("timetable-conflict--week",1),d=yt("timetable-conflict--max-section",12),f=["周一","周二","周三","周四","周五","周六","周日"],i=f.map((O,C)=>({label:O,value:C+1})),y=[{label:"每周",value:"all"},{label:"单周",value:"odd"},{label:"双周",value:"even"}],g=["#18a058","#2080f0","#f0a020","#d03050","#7c3aed","#0891b2","#db2777","#65a30d","#d97706","#4f46e5"];function b(){const O=fo(l.value);n.value=O.slots,a.value=O.failedLines}function S(){l.value=["高等数学 周一 1-2节 1-16周","高等数学 周三 3-4节 1-16周","大学英语 周一 1-2节 1-16周(双)","数据结构 周二 3-4节 1-16周","数据结构 周四 3-4节 1-16周","思想道德与法治 周三 1-2节 1-8周","中国近现代史纲要 周三 1-2节 5-16周","体育 周五 5-6节 1-16周"].join(`
`),b()}function F(){l.value="",n.value=[],a.value=[]}function R(){n.value.push({id:crypto.randomUUID(),name:"新课程",weekday:1,startSection:1,endSection:2,startWeek:1,endWeek:16,parity:"all"})}function w(O){n.value=n.value.filter(C=>C.id!==O)}function k(O){const C=n.value.findIndex(X=>X.id===O.id);return g[(C<0?0:C)%g.length]}function D(O){return O.startSection===O.endSection?`第${O.startSection}节`:`第${O.startSection}-${O.endSection}节`}const x=$(()=>vo(n.value)),m=$(()=>new Set(x.value.flatMap(({a:O,b:C})=>[O.id,C.id]))),L=$(()=>ho(n.value,o.value,d.value)),K=$(()=>po(n.value,o.value,d.value).map((C,X)=>({section:X+1,cells:C.map(q=>q?{name:q.name,color:k(q),conflicted:m.value.has(q.id)}:null)}))),J=$(()=>{const O=f.map((C,X)=>{const G=L.value.filter(A=>A.weekday===X+1).map(A=>A.fromSection===A.toSection?`第${A.fromSection}节`:`第${A.fromSection}-${A.toSection}节`).join("、");return`${C}：${G||"无空闲"}`});return`第 ${o.value} 周空闲时段
${O.join(`
`)}`}),{copy:V}=Mn({text:"空闲时段已复制到剪贴板"});return(O,C)=>{const X=Tn,q=zn,G=Dn,A=Vn,le=Pn,he=ro,oe=Wn,se=Un;return Q(),ee("div",null,[H(le,{title:"第一步：粘贴课表"},{default:te(()=>[H(X,{value:Y(l),"onUpdate:value":C[0]||(C[0]=p=>at(l)?l.value=p:null),multiline:"",rows:"6",label:"从教务系统或同学处复制的课表文本",placeholder:"每行一门课，如：高等数学 周一 1-2节 1-16周；支持 星期一、第3周、1-16周(单)、双周 等","mb-3":""},null,8,["value"]),U("div",bo,[H(q,{onClick:C[1]||(C[1]=p=>b())},{default:te(()=>[_e("解析课表")]),_:1}),H(G,{onClick:C[2]||(C[2]=p=>S())},{default:te(()=>[_e("填入示例")]),_:1}),H(G,{quaternary:"",onClick:C[3]||(C[3]=p=>F())},{default:te(()=>[_e("清空")]),_:1})]),Y(a).length?(Q(),rt(A,{key:0,type:"warning",class:"mt-3",title:"部分行未能识别，可在下方手动补录"},{default:te(()=>[(Q(!0),ee(ke,null,ze(Y(a),p=>(Q(),ee("div",{key:p,class:"text-xs"},de(p),1))),128))]),_:1})):xt("",!0)]),_:1}),H(le,{title:"课程时段（可手动修改）",class:"mt-4"},{default:te(()=>[Y(n).length===0?(Q(),ee("div",mo," 暂无课程，请先解析课表或点击「添加一行」。 ")):xt("",!0),(Q(!0),ee(ke,null,ze(Y(n),p=>(Q(),ee("div",{key:p.id,class:"mb-2 flex flex-wrap items-center gap-2"},[H(X,{value:p.name,"onUpdate:value":N=>p.name=N,placeholder:"课程名",class:"w-40 min-w-36"},null,8,["value","onUpdate:value"]),H(he,{value:p.weekday,"onUpdate:value":N=>p.weekday=N,options:Y(i),class:"w-28"},null,8,["value","onUpdate:value","options"]),H(oe,{value:p.startSection,"onUpdate:value":N=>p.startSection=N,min:1,max:20,class:"w-28",placeholder:"开始节"},null,8,["value","onUpdate:value"]),wo,H(oe,{value:p.endSection,"onUpdate:value":N=>p.endSection=N,min:1,max:20,class:"w-28",placeholder:"结束节"},null,8,["value","onUpdate:value"]),yo,H(oe,{value:p.startWeek,"onUpdate:value":N=>p.startWeek=N,min:1,max:30,class:"w-28"},null,8,["value","onUpdate:value"]),xo,H(oe,{value:p.endWeek,"onUpdate:value":N=>p.endWeek=N,min:1,max:30,class:"w-28"},null,8,["value","onUpdate:value"]),Co,H(he,{value:p.parity,"onUpdate:value":N=>p.parity=N,options:y,class:"w-24"},null,8,["value","onUpdate:value"]),H(G,{quaternary:"",type:"error",size:"small",onClick:N=>w(p.id)},{default:te(()=>[_e("删除")]),_:2},1032,["onClick"])]))),128)),H(G,{dashed:"",class:"mt-2",onClick:C[4]||(C[4]=p=>R())},{default:te(()=>[_e("+ 添加一行")]),_:1})]),_:1}),H(le,{title:"每周课表总览",class:"mt-4"},{default:te(()=>[U("div",_o,[So,H(oe,{value:Y(o),"onUpdate:value":C[5]||(C[5]=p=>at(o)?o.value=p:null),min:1,max:30,class:"w-32"},null,8,["value"]),ko,H(oe,{value:Y(d),"onUpdate:value":C[6]||(C[6]=p=>at(d)?d.value=p:null),min:1,max:20,class:"w-32"},null,8,["value"])]),H(se,{bordered:!1,"single-line":!1,size:"small"},{default:te(()=>[U("thead",null,[U("tr",null,[Oo,(Q(),ee(ke,null,ze(f,p=>U("th",{key:p,class:"text-center"},de(p),1)),64))])]),U("tbody",null,[(Q(!0),ee(ke,null,ze(Y(K),p=>(Q(),ee("tr",{key:p.section},[U("td",Fo,de(p.section),1),(Q(!0),ee(ke,null,ze(p.cells,(N,s)=>(Q(),ee("td",{key:s,class:"p-1 text-center text-xs"},[N?(Q(),ee("div",{key:0,class:$n(["rounded px-1 py-2 leading-tight text-white",N.conflicted?"ring-2 ring-red-600":""]),style:In({backgroundColor:N.color})},de(N.name),7)):(Q(),ee("span",Ro,"·"))]))),128))]))),128))])]),_:1}),Mo]),_:1}),H(le,{title:"冲突与空闲时段",class:"mt-4"},{default:te(()=>[Y(x).length?(Q(),rt(A,{key:0,type:"error",class:"mb-3",title:`发现 ${Y(x).length} 处时间冲突`},{default:te(()=>[(Q(!0),ee(ke,null,ze(Y(x),(p,N)=>(Q(),ee("div",{key:N,class:"text-sm"}," 「"+de(p.a.name)+"」与「"+de(p.b.name)+"」在"+de(f[p.weekday-1])+de(D(p.a))+"重叠（第 "+de(Y(go)(p.weeks))+" 周） ",1))),128))]),_:1},8,["title"])):(Q(),rt(A,{key:1,type:"success",class:"mb-3",title:"无冲突"},{default:te(()=>[_e(" 所选课程之间没有时间冲突。 ")]),_:1})),U("div",To,[H(q,{onClick:C[7]||(C[7]=p=>Y(V)(Y(J)))},{default:te(()=>[_e("复制空闲时段")]),_:1}),U("span",zo,"按当前选择的周次（第 "+de(Y(o))+" 周）计算。",1)]),U("pre",Po,de(Y(J)),1)]),_:1}),H(le,{title:"使用说明",class:"mt-4"},{default:te(()=>[$o]),_:1})])}}});export{qo as default};
