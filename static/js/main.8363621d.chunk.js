(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__vkYMU",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__32s6q"}},14:function(e,t,a){e.exports={Button:"Button_Button__1lujk",buttonWrapper:"Button_buttonWrapper__2oKxy"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2Uir6",Modal:"Modal_Modal__385_g"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2pOkc"}},30:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(25),c=a.n(o),s=a(31),i=a(16),l=a(4),u=a(5),m=a(7),h=a(6),d=a(12),g=a.n(d),b=a(26),p=a(27),j=a.n(p),f=function(){var e=Object(b.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://pixabay.com/api/?","&key=").concat("23763400-56e03b3c97aa031975e4c0255","&q=").concat(t).concat("&image_type=photo&orientation=horizontal&safesearch=true","&page=").concat(a,"&per_page=").concat("12"));case 2:if(!((n=e.sent).status>=200&&n.status<300)){e.next=5;break}return e.abrupt("return",n.data.hits);case 5:throw new Error(n.status);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=a(8),S=a.n(_),v=a(0),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchString:""},e.handleChange=function(t){return e.setState({searchString:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchString;""!==a.trim()?(e.props.onSubmit(a),e.resetForm()):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430...")},e.resetForm=function(){return e.setState({searchString:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.handleSubmit,t=this.handleChange,a=this.state.searchString;return Object(v.jsx)("header",{className:S.a.Searchbar,children:Object(v.jsxs)("form",{className:S.a.SearchForm,onSubmit:e,children:[Object(v.jsx)("button",{type:"submit",className:S.a.SearchForm_button,children:Object(v.jsx)("span",{className:S.a.SearchForm_button__label,children:"Search"})}),Object(v.jsx)("input",{className:S.a.SearchForm_input,type:"text",value:a,onChange:t,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),y=O,I=a(32),x=a(13),k=a.n(x);var w=function(e){var t=e.image,a=t.webformatURL,n=t.largeImageURL,r=t.tags,o=e.onShowModal;return Object(v.jsx)("li",{className:k.a.ImageGalleryItem,onClick:function(){return o({modalImage:{largeImageURL:n,tags:r}})},children:Object(v.jsx)("img",{src:a,alt:r,className:k.a.ImageGalleryItem_image})})},M=a(28),C=a.n(M),F=["id"];var L=function(e){var t=e.images,a=e.onShowModal;return Object(v.jsx)("ul",{className:C.a.ImageGallery,children:t.map((function(e){var t=e.id,n=Object(I.a)(e,F);return Object(v.jsx)(w,{image:n,onShowModal:a},t)}))})},N=a(14),G=a.n(N),H=function(e){var t=e.onClick;return Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:G.a.Button,type:"button",onClick:t,children:Object(v.jsx)("span",{className:G.a.LoadButtonLabel,children:"Load more"})})})},T=a(29),B=a.n(T),E=(a(77),a(30)),U=a.n(E);var A=function(){return Object(v.jsx)(B.a,{className:U.a.Loader,type:"MutatingDots",color:"#3f51b5",height:100,width:100,timeout:3e3})},D=a(15),R=a.n(D),W=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onEsc=function(t){"Escape"===t.code&&e.props.onToggleModalStatus()},e.handleClickBackdrop=function(t){t.currentTarget===t.target&&e.props.onToggleModalStatus()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEsc)}},{key:"render",value:function(){var e=this.props.modalImage,t=e.largeImageURL,a=e.tags;return Object(v.jsx)("div",{className:R.a.Overlay,onClick:this.handleClickBackdrop,children:Object(v.jsx)("div",{className:R.a.Modal,children:Object(v.jsx)("img",{src:t,alt:a})})})}}]),a}(n.Component),q=W,Z=(a(78),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:"",images:[],page:1,error:null,isLoading:!1,modalImage:{},modalIsHidden:!0},e.loadImages=function(t){var a=e.state,n=a.images,r=a.search;e.setState({page:t,error:null,isLoading:!0}),f(r,t).then((function(t){if(console.log(t),0===t.length)return Promise.reject(new Error("There is no pictures by ".concat(r," name, please try another request")));e.setState({images:[].concat(Object(i.a)(n||[]),Object(i.a)(t))})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleFormSubmit=function(t){e.setState({search:t})},e.handleToggleModalStatus=function(){e.setState((function(e){return{modalIsHidden:!e.modalIsHidden}}))},e.showModaHandlelClick=function(t){var a=t.modalImage;e.setState({modalImage:Object(s.a)({},a)}),e.handleToggleModalStatus()},e.loadMoreHandleClick=function(){e.loadImages(e.state.page+1)},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.search!==this.state.search&&this.setState({images:[]},(function(){a.loadImages(1)})),t.images!==this.state.images&&1!==this.state.page&&(window.scrollTo({top:document.body.clientHeight,behavior:"smooth"}),console.log(this.state.page))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=e.modalImage,o=e.modalIsHidden,c=this.handleFormSubmit,s=this.showModaHandlelClick,i=this.handleToggleModalStatus,l=this.loadMoreHandleClick;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{onSubmit:c}),n&&Object(v.jsx)("h1",{children:n.message}),Object(v.jsx)(L,{images:t,onShowModal:s}),a&&Object(v.jsx)(A,{}),!!t.length&&!a&&Object(v.jsx)(H,{onClick:l}),!o&&Object(v.jsx)(q,{onToggleModalStatus:i,modalImage:r})]})}}]),a}(n.Component)),J=Z;c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__W-TZp",SearchForm:"Searchbar_SearchForm__2H10Q",SearchForm_button:"Searchbar_SearchForm_button__2SHZ9",SearchForm_button__label:"Searchbar_SearchForm_button__label__1QgxA",SearchForm_input:"Searchbar_SearchForm_input__1Ze0c"}}},[[79,1,2]]]);
//# sourceMappingURL=main.8363621d.chunk.js.map