(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(20),o=n.n(s),r=(n(31),n(24)),u=n(2),p=n.p+"static/media/header_logo.c2821b38.svg",l=n(4),d=n(10);var j=function(e){var t=e.email,n=e.onSignOut,i=Object(c.useRef)(),s=Object(c.useRef)(),o=Object(c.useRef)();return Object(a.jsxs)("header",{className:"header",ref:o,children:[Object(a.jsx)("img",{className:"header__logo",src:p,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: \u043b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(a.jsx)(l.b,{path:"/sign-in",children:Object(a.jsx)(d.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(l.b,{path:"/sign-up",children:Object(a.jsx)(d.b,{className:"header__link",to:"/sign-in",children:"\u0412\u0445\u043e\u0434"})}),Object(a.jsx)(l.b,{exact:!0,path:"/",children:Object(a.jsxs)("nav",{className:"menu",children:[Object(a.jsx)("button",{className:"menu__button",ref:i,onClick:function(){i.current.classList.toggle("menu__button_open"),s.current.classList.toggle("menu__list_open"),o.current.classList.toggle("header_active")}}),Object(a.jsxs)("ul",{className:"menu__list",ref:s,children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{className:"header__useremail",children:t})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"header__logout",type:"button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})})]})},b=n(6),_=n(3);var h=function(e){var t=e.onRegister,n={email:"",password:""},i=Object(c.useState)(n),s=Object(u.a)(i,2),o=s[0],r=s[1],p=Object(c.useState)({email:!0,password:!0}),l=Object(u.a)(p,2),j=l[0],h=l[1],m=Object(c.useState)(n),O=Object(u.a)(m,2),f=O[0],g=O[1];function v(e){var t=e.target.name;r((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(b.a)({},t,e.target.value))})),g((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(b.a)({},t,e.target.validationMessage))})),h((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(b.a)({},t,e.target.validity.valid))}))}return Object(a.jsxs)("section",{className:"register",children:[Object(a.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"popup__form popup__form_type_login",name:"login",onSubmit:function(e){e.preventDefault(),t(o),r(n),g(n),h((function(e){return Object(_.a)(Object(_.a)({},e),{},{email:!0,password:!0})}))},children:[Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"email-input",className:"popup__input popup__input_type_email ".concat(!j.email&&"popup__input_state_invalid"," "),type:"email",name:"email",value:o.email,placeholder:"Email",required:!0,onChange:v}),Object(a.jsx)("span",{id:"email-input-error",className:"error",children:f.email})]}),Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"password-input",className:"popup__input popup__input_type_password ".concat(!j.password&&"popup__input_state_invalid"," "),type:"password",name:"password",value:o.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:v}),Object(a.jsx)("span",{id:"password-input-error",className:"error",children:f.password})]}),Object(a.jsx)("button",{className:"button popup__save popup__save_type_login",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(a.jsxs)("p",{className:"register__enter",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(a.jsx)(d.b,{className:"register__link",to:"/react-mesto-auth/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var m=function(e){var t=e.onLogin,n={email:"",password:""},i=Object(c.useState)(n),s=Object(u.a)(i,2),o=s[0],r=s[1],p=Object(c.useState)({email:!0,password:!0}),l=Object(u.a)(p,2),d=l[0],j=l[1],h=Object(c.useState)(n),m=Object(u.a)(h,2),O=m[0],f=m[1];function g(e){var t=e.target.name;r((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(b.a)({},t,e.target.value))})),f((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(b.a)({},t,e.target.validationMessage))})),j((function(n){return Object(_.a)(Object(_.a)({},n),{},Object(b.a)({},t,e.target.validity.valid))}))}return Object(a.jsxs)("section",{className:"login",children:[Object(a.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"popup__form popup__form_type_login",name:"login",onSubmit:function(e){e.preventDefault(),t(o),r(n),f(n),j((function(e){return Object(_.a)(Object(_.a)({},e),{},{email:!0,password:!0})}))},children:[Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"email-input",className:"popup__input popup__input_type_email ".concat(!d.email&&"popup__input_state_invalid"," "),type:"email",name:"email",value:o.email,placeholder:"Email",required:!0,onChange:g}),Object(a.jsx)("span",{id:"email-input-error",className:"error",children:O.email})]}),Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"password-input",className:"popup__input popup__input_type_password ".concat(!d.password&&"popup__input_state_invalid"," "),type:"password",minLength:"2",name:"password",value:o.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:g}),Object(a.jsx)("span",{id:"password-input-error",className:"error",children:O.password})]}),Object(a.jsx)("button",{className:"button popup__save popup__save_type_login",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},O="https://auth.nomoreparties.co",f=i.a.createContext();var g=function(e){var t=e.card,n=e.onCardClick,i=e.onCardLike,s=e.onCardDelete,o=Object(c.useContext)(f),r=t.owner._id===o._id,u=t.likes.some((function(e){return e._id===o._id}));return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("button",{className:"button card__trash ".concat(r&&"card__trash_active"),type:"button","aria-label":"\u043a\u043e\u0440\u0437\u0438\u043d\u0430",onClick:function(){s(t)}}),Object(a.jsx)("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"card__info",children:[Object(a.jsx)("h3",{className:"card__title",children:t.name}),Object(a.jsxs)("div",{className:"card__like-container",children:[Object(a.jsx)("button",{className:"button card__like ".concat(u&&"card__like_active"),type:"button","aria-label":"\u0441\u0435\u0440\u0434\u0435\u0447\u043a\u043e",onClick:function(){i(t)}}),Object(a.jsx)("p",{className:"card__like-amount",children:!(0===t.likes.length)&&t.likes.length})]})]})]})};var v=function(e){var t=e.onEditProfile,n=e.onAddPlace,i=e.onEditAvatar,s=e.onCardClick,o=e.cards,r=e.isLoading,u=e.onCardLike,p=e.onCardDelete,l=Object(c.useContext)(f);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__image",children:[Object(a.jsx)("div",{className:"profile__overlay",children:Object(a.jsx)("button",{className:"button button_type_avatar",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:i})}),Object(a.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__container",children:[Object(a.jsx)("h1",{className:"profile__title",children:l.name}),Object(a.jsx)("button",{className:"button button_type_edit",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:t})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(a.jsx)("button",{className:"button button_type_add",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:n})]}),Object(a.jsx)("section",{className:"elements",children:r?Object(a.jsx)("p",{style:{color:"white"},children:"loading..."}):Object(a.jsx)("ul",{className:"elements__list",children:o.map((function(e){return Object(a.jsx)(g,{card:e,onCardClick:s,onCardLike:u,onCardDelete:p},e._id)}))})})]})};var x=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var y=function(e){var t=e.name,n=e.title,i=e.button,s=e.isOpen,o=e.onClose,r=e.children,u=e.onSubmit,p=e.isFormValid;return Object(c.useEffect)((function(){if(s){var e=function(e){"Escape"===e.key&&o()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[s,o]),Object(a.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(s&&"popup_opened"),onMouseDown:function(e){e.target.classList.contains("popup")&&o()},children:Object(a.jsxs)("div",{className:"popup__container popup__container_type_".concat(t),children:[Object(a.jsx)("button",{className:"button popup__close popup__close_type".concat(t),type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:o}),Object(a.jsx)("h2",{className:"popup__title",children:n}),Object(a.jsxs)("form",{className:"popup__form popup__form_type_".concat(t),name:t,onSubmit:u,children:[r,Object(a.jsx)("button",{className:"button popup__save popup__save_type_".concat(t," ").concat(!p&&"popup__save_invalid"),"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:i})]})]})})};var k=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,s=e.isLoading,o={name:"",link:""},r=Object(c.useState)(o),p=Object(u.a)(r,2),l=p[0],d=p[1],j=Object(c.useState)({}),h=Object(u.a)(j,2),m=h[0],O=h[1],f=Object(c.useState)({}),g=Object(u.a)(f,2),v=g[0],x=g[1],k=Object(c.useState)(!1),N=Object(u.a)(k,2),C=N[0],S=N[1];function w(e){var t=e.target,n=e.target.name;d((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(b.a)({},n,e.target.value))})),O((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(b.a)({},n,e.target.validationMessage))})),x((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(b.a)({},n,e.target.validity.valid))})),S(t.closest("form").checkValidity())}return Object(c.useEffect)((function(){t&&(d(o),O(o),x({name:!0,link:!0}),S(!1))}),[t,n]),Object(a.jsx)(y,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:s?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:l.name,link:l.link})},isFormValid:C,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"image-input",className:"popup__input popup__input_type_image ".concat(!v.name&&"popup__input_state_invalid"," "),type:"text",name:"name",value:l.name,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,onChange:w}),Object(a.jsx)("span",{id:"image-input-error",className:"error",children:m.name})]}),Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"link-input",className:"popup__input popup__input_type_link ".concat(!v.link&&"popup__input_state_invalid"," "),type:"url",name:"link",value:l.link,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:w}),Object(a.jsx)("span",{id:"link-input-error",className:"error",children:m.link})]})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,s=e.isLoading,o={name:"",description:""},r=Object(c.useContext)(f),p=Object(c.useState)(o),l=Object(u.a)(p,2),d=l[0],j=l[1],h=Object(c.useState)({}),m=Object(u.a)(h,2),O=m[0],g=m[1],v=Object(c.useState)({}),x=Object(u.a)(v,2),k=x[0],N=x[1],C=Object(c.useState)(!0),S=Object(u.a)(C,2),w=S[0],L=S[1];function E(e){var t=e.target,n=e.target.name;j((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(b.a)({},n,e.target.value))})),g((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(b.a)({},n,e.target.validationMessage))})),N((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(b.a)({},n,e.target.validity.valid))})),L(t.closest("form").checkValidity())}return Object(c.useEffect)((function(){t&&(j((function(e){return Object(_.a)(Object(_.a)({},e),{},{name:r.name,description:r.about})})),g(o),N({name:!0,description:!0}),L(!0))}),[t,n,r]),Object(a.jsx)(y,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:d.name,about:d.description})},isFormValid:w,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"name-input",className:"popup__input popup__input_type_name ".concat(!k.name&&"popup__input_state_invalid"," "),type:"text",maxLength:"40",minLength:"2",name:"name",value:d.name,placeholder:"\u0418\u043c\u044f",required:!0,onChange:E}),Object(a.jsx)("span",{id:"name-input-error",className:"error",children:O.name})]}),Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"about-input",className:"popup__input popup__input_type_about ".concat(!k.description&&"popup__input_state_invalid"," "),type:"text",maxLength:"200",minLength:"2",name:"description",value:d.description,placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,onChange:E}),Object(a.jsx)("span",{id:"about-input-error",className:"error",children:O.description})]})]})})};var C=function(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,s=e.isLoading,o=Object(c.useState)(""),r=Object(u.a)(o,2),p=r[0],l=r[1],d=Object(c.useState)(""),j=Object(u.a)(d,2),b=j[0],_=j[1],h=Object(c.useState)(!0),m=Object(u.a)(h,2),O=m[0],f=m[1],g=Object(c.useState)(!1),v=Object(u.a)(g,2),x=v[0],k=v[1];return Object(c.useEffect)((function(){t&&(l(""),_(""),f(!0),k(!1))}),[t,n]),Object(a.jsx)(y,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i(p)},isFormValid:x,children:Object(a.jsxs)("div",{className:"popup__input-container",children:[Object(a.jsx)("input",{id:"avatar-input",className:"popup__input popup__input_type_avatar ".concat(!O&&"popup__input_state_invalid"," "),type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:p,required:!0,onChange:function(e){var t=e.target;l(t.value),_(t.validationMessage),f(t.validity.valid),k(t.closest("form").checkValidity())}}),Object(a.jsx)("span",{id:"avatar-input-error",className:"error",children:b})]})})};var S=function(e){var t=e.card,n=e.isOpen,i=e.onClose;return Object(c.useEffect)((function(){if(n){var e=function(e){"Escape"===e.key&&i()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[n,i]),Object(a.jsx)("div",{className:"popup popup_type_image ".concat(n&&"popup_opened"),onMouseDown:function(e){e.target.classList.contains("popup")&&i()},children:Object(a.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(a.jsx)("button",{className:"button popup__close popup__close_type_image",type:"button","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430: \u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:i}),Object(a.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(a.jsx)("h3",{className:"popup__image-title",children:t.name})]})})},w=n.p+"static/media/OK.1b6082f8.svg",L=n.p+"static/media/NOK.df8eddf6.svg",E=n.p+"static/media/Spin.be48c027.svg";var D=function(e){var t=e.isOpen,n=e.onClose,i=e.registered,s=e.isLoading;return Object(c.useEffect)((function(){if(t){var e=function(e){"Escape"===e.key&&n()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[t,n]),Object(a.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),onMouseDown:function(e){e.target.classList.contains("popup")&&n()},children:Object(a.jsx)("div",{className:"popup__container popup__container_type_indicator",children:s?Object(a.jsx)("img",{src:E,alt:"spin"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"button popup__close popup__close_type_indicator",onClick:n}),Object(a.jsx)("img",{className:"popup__indicator",src:i?w:L,alt:"\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440"}),Object(a.jsx)("h3",{className:"popup__message",children:i?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})})};var T=function(e){var t=e.isOpen,n=e.onClose,c=e.onConfirmDeletion;return Object(a.jsx)(y,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b ?",button:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c()}})},I=n(22),P=n(23),R=new(function(){function e(t){var n=t.address,a=t.token,c=t.groupId;Object(I.a)(this,e),this._address=n,this._token=a,this._groupId=c}return Object(P.a)(e,[{key:"getCardsData",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponseStatus(t)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponseStatus(t)}))}},{key:"changeUserData",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"setCardData",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkResponseStatus(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._checkResponseStatus(e)})):fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._checkResponseStatus(e)}))}},{key:"_checkResponseStatus",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}}]),e}())({address:"https://mesto.nomoreparties.co/v1",token:"94f8771a-5db3-4407-bf14-903dd1dba9af",groupId:"cohort-19"}),A=n(25),F=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return Object(a.jsx)(l.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(_.a)({},n)):Object(a.jsx)(l.a,{to:"/sign-in"})}})};var U=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),p=o[0],d=o[1],b=Object(c.useState)(!1),_=Object(u.a)(b,2),g=_[0],y=_[1],w=Object(c.useState)(!1),L=Object(u.a)(w,2),E=L[0],I=L[1],P=Object(c.useState)(!1),A=Object(u.a)(P,2),U=A[0],M=A[1],q=Object(c.useState)({}),z=Object(u.a)(q,2),J=z[0],V=z[1],B=Object(c.useState)(!1),H=Object(u.a)(B,2),K=H[0],G=H[1],Q=Object(c.useState)({name:"",about:"",avatar:""}),W=Object(u.a)(Q,2),X=W[0],Y=W[1],Z=Object(c.useState)([]),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(!1),ae=Object(u.a)(ne,2),ce=ae[0],ie=ae[1],se=Object(c.useState)(!1),oe=Object(u.a)(se,2),re=oe[0],ue=oe[1],pe=Object(c.useState)(!1),le=Object(u.a)(pe,2),de=le[0],je=le[1],be=Object(c.useState)(""),_e=Object(u.a)(be,2),he=_e[0],me=_e[1],Oe=Object(l.g)();function fe(){i(!1),d(!1),y(!1),V({}),G(!1),M(!1)}return Object(c.useEffect)((function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(O,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){if(200===e.status)return e.json();throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))})).then((function(e){return e}))).then((function(e){e&&(ue(!0),me(e.data.email))})).then((function(){Oe.push("/")})).catch((function(e){console.log(e)}))}var t}),[Oe]),Object(c.useEffect)((function(){ie(!0),Promise.all([R.getUserData(),R.getCardsData()]).then((function(e){Y(e[0]),te(e[1])})).catch((function(e){console.log(e)})).finally((function(){ie(!1)}))}),[]),Object(a.jsx)(f.Provider,{value:X,children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(j,{email:he,onSignOut:function(){localStorage.removeItem("jwt"),ue(!1),Oe.push("/sign-in"),me("")}}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/sign-up",children:Object(a.jsx)(h,{onRegister:function(e){ie(!0),function(e){return fetch("".concat(O,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(201===e.status)return e.json();throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText," "))})).then((function(e){return e}))}(e).then((function(e){e&&(je(!0),I(!0))})).catch((function(e){console.log(e),je(!1),I(!0)})).finally((function(){return ie(!1)}))}})}),Object(a.jsx)(l.b,{path:"/sign-in",children:Object(a.jsx)(m,{onLogin:function(e){e.email&&e.password&&function(e){return fetch("".concat(O,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200===e.status)return e.json();throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText," "))})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))}(e).then((function(t){t.token&&(me(e.email),ue(!0))})).then((function(){Oe.push("/")})).catch((function(e){console.log(e)}))},history:Oe})}),Object(a.jsx)(F,{path:"/",loggedIn:re,component:v,onEditProfile:function(){i(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){y(!0)},onCardClick:function(e){V(e),G(!0)},isLoading:ce,cards:ee,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===X._id}));R.changeLikeCardStatus(e._id,t).then((function(t){var n=ee.map((function(n){return n._id===e._id?t:n}));te(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){M(!0),V(e)}})]}),Object(a.jsx)(x,{}),Object(a.jsx)(N,{isOpen:n,onClose:fe,onUpdateUser:function(e){ie(!0),R.changeUserData(e).then((function(e){Y(e),fe()})).catch((function(e){console.log(e)})).finally((function(){ie(!1)}))},isLoading:ce}),Object(a.jsx)(k,{isOpen:p,onClose:fe,onAddPlace:function(e){ie(!0),R.setCardData(e).then((function(e){te([e].concat(Object(r.a)(ee))),fe()})).catch((function(e){console.log(e)})).finally((function(){ie(!1)}))},isLoading:ce}),Object(a.jsx)(C,{isOpen:g,onClose:fe,onUpdateAvatar:function(e){ie(!0),R.changeAvatar(e).then((function(e){Y(e),fe()})).catch((function(e){console.log(e)})).finally((function(){ie(!1)}))},isLoading:ce}),Object(a.jsx)(T,{isOpen:U,onClose:fe,onConfirmDeletion:function(){R.deleteCard(J._id).then((function(){var e=ee.filter((function(e){return!(e._id===J._id)&&e}));te(e),fe()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(S,{isOpen:K,onClose:fe,card:J}),Object(a.jsx)(D,{isOpen:E,onClose:function(){I(!1),!0===de&&Oe.push("/sign-in")},registered:de,isLoading:ce})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(U,{})})}),document.getElementById("root")),M()}},[[37,1,2]]]);
//# sourceMappingURL=main.8da70701.chunk.js.map