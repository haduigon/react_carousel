(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(4),a=n.n(i),c=n(5),r=n(6),s=n(8),l=n(7),o=n(1),u=n.n(o),h=(n(13),n(2)),j=(n(14),n(0)),m=function(t){var e=t.images,n=t.infinite,i=t.frameSize,a=t.step,c=t.itemWidth,r=t.animationDuration,s=Object(o.useState)(0),l=Object(h.a)(s,2),u=l[0],m=l[1],b=Object(o.useState)(e.length),p=Object(h.a)(b,2),d=p[0],g=p[1],f=Object(o.useState)(0),O=Object(h.a)(f,2),x=O[0],v=O[1];function S(t,e){return t+e}function y(t,e){return t-e}var C=a;a>=e.length&&(C=e.length-1);var D=C*c,z=(e.length-1)*c;return Object(j.jsxs)("div",{className:"Carousel",children:[Object(j.jsx)("div",{className:"box",style:{width:i*c},children:Object(j.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(-u,"px)"),transitionDuration:"".concat(r/1e3,"s")},children:e.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:t,alt:"2",style:{width:"".concat(c,"px")}})},t)}))})}),Object(j.jsx)("button",{type:"button",onClick:function(){u>0&&u>C*c?(m((function(t){return y(t,D)})),g((function(t){return S(t,C)}))):(m(0),v(0),g(e.length))},children:"Prev"}),Object(j.jsx)("button",{type:"button",onClick:function(){!1===n?C<d?(g((function(t){return y(t,C)})),m((function(t){return S(t,D)}))):C>=d&&d>=1&&(m(z),g(1)):!0===n&&(d-C<i-1&&v(1),d>C?(g((function(t){return y(t,C)})),m((function(t){return S(t,D)}))):d<=C&&(x>0?(m(0),v(0),g(e.length)):(m(z),v(1))))},"data-cy":"next",children:"Next"})]})},b=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.handleLoop=function(){t.setState({infinite:!0})},t.handleFrameSize=function(e){t.setState({frameSize:+e.target.value})},t.handleStep=function(e){t.setState({step:+e.target.value})},t.handleItemWidth=function(e){t.setState({itemWidth:+e.target.value})},t.handleAnimationDuration=function(e){t.setState({animationDuration:+e.target.value})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.infinite,i=t.frameSize,a=t.step,c=t.itemWidth,r=t.animationDuration;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(m,{images:e,frameSize:i,step:a,itemWidth:c,animationDuration:r,infinite:n}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"number",name:"step",onChange:this.handleStep}),Object(j.jsx)("p",{children:"step"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"number",name:"frameSize",onChange:this.handleFrameSize}),Object(j.jsx)("p",{children:"frameSize"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"number",name:"itemWidth",onChange:this.handleItemWidth}),Object(j.jsx)("p",{children:"itemWidth"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"number",name:"animationDuration",onChange:this.handleAnimationDuration}),Object(j.jsx)("p",{children:"animationDuration"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",name:"loop",onChange:this.handleLoop}),Object(j.jsx)("p",{children:"infinite"})]})]})]})]})}}]),n}(u.a.Component),p=b;a.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dde364d6.chunk.js.map