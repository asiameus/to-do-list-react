(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),c=a.n(s),r=(a(8),a(9),function(){return o.a.createElement("form",{className:"form"},o.a.createElement("input",{className:"form__input",name:"newTask",placeholder:"Co jest do zrobienia?"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),i=(a(10),function(e){var t=e.tasks,a=e.hideDoneTasks;return o.a.createElement("ul",{className:"taskList"},t.map((function(e){return o.a.createElement("li",{className:"taskList__item".concat(e.done&&a?" taskList__item--hidden":"")},o.a.createElement("button",{className:"taskList__button taskList__button--toggleDone"},e.done?"\u2714":""),o.a.createElement("span",{className:"taskList__name".concat(e.done?" taskList__name--done":"")},e.name),o.a.createElement("button",{className:"taskList__button taskList__button--remove"},"\ud83d\uddd1\ufe0f"))})))}),l=(a(11),function(e){var t=e.tasks,a=e.hideDoneTasks;return o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"buttons__button buttons__button--hideDone"},a?"Poka\u017c uko\u0144czone":"Ukryj uko\u0144czone"),o.a.createElement("button",{className:"buttons__button buttons__button--toggleAllDone",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie")))}),m=(a(12),function(e){var t=e.title,a=e.body,n=e.extraHeaderContent;return o.a.createElement("section",{className:"section"},o.a.createElement("div",{className:"section__header"},o.a.createElement("h2",{className:"section__title"},t),n),a)}),u=(a(13),function(e){var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},t))}),d=(a(14),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)}),_=[{id:1,name:"przej\u015b\u0107 na Reacta",done:!1},{id:2,name:"zje\u015b\u0107 obiad",done:!0}];var k=function(){return o.a.createElement(d,null,o.a.createElement(u,{title:"Lista zada\u0144"}),o.a.createElement(m,{title:"Dodaj nowe zadanie",body:o.a.createElement(r,null)}),o.a.createElement(m,{title:"Lista zada\u0144",body:o.a.createElement(i,{tasks:_,hideDoneTasks:!1}),extraHeaderContent:o.a.createElement(l,{tasks:_,hideDoneTasks:!1})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.39e0fc18.chunk.js.map