(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{37:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(22),i=a(64),c=a(65),o=a(66),l=a(9),u=a(10),h=a(12),m=a(11);function p(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function d(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).storeName=n.a.createRef(),e.handleSubmit=function(t){t.preventDefault(),e.props.history.push("/store/".concat(e.storeName.current.value))},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmit,action:"#",className:"store-selector"},n.a.createElement("h2",null," please enter a store"),n.a.createElement("input",{ref:this.storeName,name:"store",defaultValue:d()}),n.a.createElement("button",{type:"submit"},"bezoek"))}}]),a}(n.a.Component),b=function(){return n.a.createElement("h1",null,"Nothing found thx")},g=a(15),y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"top"},n.a.createElement("h1",null,"Catch",n.a.createElement("span",{className:"ofThe"},n.a.createElement("span",{className:"of"},"of"),n.a.createElement("span",{className:"the"},"the")),"day"),n.a.createElement("h3",{className:"tagline"},n.a.createElement("span",null,this.props.tagline)))}}]),a}(n.a.Component),E=a(26),j=a(19),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).orderRow=function(t){var a=Object(E.a)(t,2),r=a[0],s=a[1];return s?n.a.createElement(j.CSSTransition,{classNames:"order",key:"orderKey",timeout:{enter:250,exit:250}},n.a.createElement("li",{key:r},s," x ",r,": ",p(e.props.fishes[r].price),n.a.createElement("button",{onClick:function(){e.props.removeFromCart(r)}}," X "))):n.a.createElement(j.CSSTransition,{classNames:"order",key:"orderKey",timeout:{enter:250,exit:250}})},e}return Object(u.a)(a,[{key:"totalPrice",get:function(){var e=this;return Object.entries(this.props.order).reduce((function(t,a){var r=Object(E.a)(a,2),n=r[0],s=r[1];return t+e.props.fishes[n].price*s}),0)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"order-wrap"},n.a.createElement("h2",null,"Order"),n.a.createElement(j.TransitionGroup,{component:"ul",className:"order"},Object.entries(this.props.order).map((function(t){var a=Object(E.a)(t,2),r=a[0],s=a[1];return s?n.a.createElement(j.CSSTransition,{classNames:"order",key:r,timeout:{enter:250,exit:250}},n.a.createElement("li",{key:r},s," x ",r,": ",p(e.props.fishes[r].price),n.a.createElement("button",{onClick:function(){e.props.removeFromCart(r)}}," X "))):n.a.createElement(j.CSSTransition,{classNames:"order",key:r,timeout:{enter:250,exit:250}})}))),n.a.createElement("div",{className:"total"},n.a.createElement("strong",null,"total")," ",p(this.totalPrice)))}}]),a}(n.a.Component),k=a(20),w=a.n(k),C=a(27),S=a(23),F=a(18),N=a(35),x=a.n(N),R=F.a.initializeApp({apiKey:"AIzaSyBHLmYZ6E1F-hVjSD_CmOx9kDH4BsKRmpA",authDomain:"react-test-f5b91.firebaseapp.com",databaseURL:"https://react-test-f5b91-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"react-test-f5b91",storageBucket:"react-test-f5b91.appspot.com",messagingSenderId:"2131754899",appId:"1:2131754899:web:5f0f8f5e0971401fe03266",measurementId:"G-6EMHDK6HP4"}),D=x.a.createClass(R.database()),I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.createFish,className:"fish-edit"},n.a.createElement("input",{type:"text",name:"name",ref:this.nameRef,placeholder:"name"}),n.a.createElement("input",{type:"text",name:"price",ref:this.priceRef,placeholder:"price"}),n.a.createElement("select",{name:"status",ref:this.statusRef},n.a.createElement("option",{value:"available"},"available"),n.a.createElement("option",{value:"unavailable"},"sold out")),n.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"desc"}),n.a.createElement("input",{type:"text",name:"image",ref:this.imageRef,placeholder:"image"}),n.a.createElement("button",{type:"submit"},"verstuur"))}}]),a}(n.a.Component),T=a(24),A=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t){var a=Object(g.a)(Object(g.a)({},e.props.fishDetail),{},Object(T.a)({},t.currentTarget.name,t.currentTarget.value));e.props.updateFish(e.props.fishKey,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"fish-edit"},n.a.createElement("input",{name:"name",type:"text",onChange:this.handleChange,className:"fish-name",value:this.props.fishDetail.name}),n.a.createElement("input",{name:"price",type:"text",className:"fish-price",onChange:this.handleChange,value:this.props.fishDetail.price}),n.a.createElement("textarea",{name:"desc",className:"fish-desc",onChange:this.handleChange,value:this.props.fishDetail.desc}),n.a.createElement("select",{onChange:this.handleChange,name:"status",value:this.props.fishDetail.status},n.a.createElement("option",{value:"available"},"available"),n.a.createElement("option",{value:"unavailable"},"sold out")),n.a.createElement("button",{onClick:function(){e.props.deleteFish(e.props.fishKey)}},"Delete"))}}]),a}(n.a.Component),K=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("nav",{className:"login"},n.a.createElement("h2",null,"Login for inventory"),n.a.createElement("button",{className:"github",onClick:function(){e.props.authenticate("Github")}},"Log in with github"))}}]),a}(n.a.Component),M=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={uid:null,owner:null},e.editFishRow=function(t){return n.a.createElement(A,{updateFish:e.props.updateFish,deleteFish:e.props.deleteFish,key:t,fishKey:t,fishDetail:e.props.fishes[t]})},e.authHandler=function(){var t=Object(C.a)(w.a.mark((function t(a){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.fetch(e.props.storeId,{context:Object(S.a)(e)}).catch((function(e){alert("store fetch error!"),console.error(e)}));case 2:if((r=t.sent).owner){t.next=6;break}return t.next=6,D.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid}).catch((function(e){alert("owner post error!"),console.error(e)}));case 6:e.setState({uid:a.user.uid,owner:r.owner||a.user.uid});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new F.a.auth.GithubAuthProvider;R.auth().signInWithRedirect(a).then(e.authHandler).catch((function(e){alert("aith error!"),console.error(e)}))},e.logout=Object(C.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:F.a.auth().signOut(),e.setState({uid:null});case 2:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t}).catch((function(e){alert("auth handler error"),console.error(e)}))}))}},{key:"render",value:function(){return this.state.uid?this.state.uid!==this.state.owner?n.a.createElement("div",null,"You're not the owner of this database.",n.a.createElement("button",{onClick:this.logout},"log out!")):n.a.createElement("div",{className:"inventory"},n.a.createElement("h2",null,"inventory"),n.a.createElement(I,{addFish:this.props.addFish}),n.a.createElement("button",{onClick:this.props.loadSampleFishes},"load samples"),Object.keys(this.props.fishes).map(this.editFishRow)):n.a.createElement(K,{authenticate:this.authenticate})}}]),a}(n.a.Component),H={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},B=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(t){e.props.addToCart(e.props.key2)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.fishDetail,t=e.image,a=e.name,r=e.desc,s=e.price,i="available"===e.status;return n.a.createElement("li",{className:"menu-fish"},n.a.createElement("img",{src:t}),n.a.createElement("h3",{className:"fish-name"},a),n.a.createElement("span",{className:"price"},p(s)),n.a.createElement("p",null,r),n.a.createElement("button",{disabled:!i,onClick:this.handleClick},i?"add to cart":"uitgverkocht"))}}]),a}(n.a.Component),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(g.a)({},e.state.fishes);a[Date.now()]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var r=Object(g.a)({},e.state.fishes);r[t]=a,e.setState({fishes:r})},e.deleteFish=function(t){var a=Object(g.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.addToCart=function(t){var a=Object(g.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromCart=function(t){var a=Object(g.a)({},e.state.order);a[t]=null,e.setState({order:a})},e.loadSampleFishes=function(){e.setState({fishes:H})},e}return Object(u.a)(a,[{key:"storeId",get:function(){var e=this.props.match.params;return e.storeId&&void 0!==e.storeId?e.storeId:null}},{key:"componentDidMount",value:function(){this.storeId&&(this.ref=D.syncState("".concat(this.storeId,"/fishes"),{context:this,state:"fishes"}))}},{key:"componentWillUnmount",value:function(){D.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"catch-of-the-day"},n.a.createElement("div",{className:"menu"},n.a.createElement(y,{tagline:"Fresh seafood Markert",number:500}),n.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(t){return n.a.createElement(B,{key2:t,addToCart:e.addToCart,fishDetail:e.state.fishes[t],key:t})})))),n.a.createElement(O,{removeFromCart:this.removeFromCart,order:this.state.order,fishes:this.state.fishes}),n.a.createElement(M,{storeId:this.storeId,fishes:this.state.fishes,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,addFish:this.addFish}))}}]),a}(n.a.Component),P=function(){return n.a.createElement(i.a,null,n.a.createElement(c.a,null,n.a.createElement(o.a,{exact:!0,path:"/",component:v}),n.a.createElement(o.a,{path:"/store/:storeId",component:L}),n.a.createElement(o.a,{component:b})))};a(60);Object(s.render)(n.a.createElement(P,null),document.getElementById("main"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c6b5c02e.chunk.js.map