(this.webpackJsonpeventcalendar=this.webpackJsonpeventcalendar||[]).push([[0],{45:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(12),s=a.n(o),l=(a(50),a(11)),c=a(38),d=a(39),i=a(42),u=a(40),m=(a(51),a(83)),E=a(27),f=a(79),v=a(80),p=a(81),h=a(82),g=a(84),N=a(0),b=function(e){return Object(N.X)(a(52),a(53),a(54),a(55)),N.q.load(a(56)),console.log(e.issues),r.a.createElement(m.a,{height:"550px",width:"82%",selectedDate:new Date,eventSettings:{dataSource:e.issues},currentView:"Month",readonly:!0,locale:"ru",firstDayOfWeek:1,popupOpen:e.onPopupOpen},r.a.createElement(E.b,{services:[f.a,v.a,p.a,h.a,g.a]}))},C=a(41);a(57);function w(){return e="context-path",window.AJS.Meta.get(e);var e}function S(){return window.AJS}"undefined"==typeof window.AJS&&(window.AJS={Meta:{get:function(e){return"user-locale"===e?"en-US":e}}});var F=function(e){var t=Object(n.useState)(!1),a=Object(C.a)(t,2),o=a[0],s=a[1],l=e.events,c=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e}),[e]),t.current}(l);return Object(n.useEffect)((function(){var e=S();o?l.length>c.length&&e.$("#tCalendarDropDown"+l.length).dropDown("Standard"):e.$(document).ready((function(){l.map((function(t,a){return e.$("#tCalendarDropDown"+(a+1)).dropDown("Standard"),null})),s(!0)}))}),[l]),r.a.createElement("div",{className:"tCalendarEvents"},r.a.createElement("div",{className:"tCalendarEventsTitle"},r.a.createElement("h4",null,r.a.createElement("b",null,"Deployment Plan")),r.a.createElement("ul",{id:"tCalendarDropDown",className:"styled-parent"},r.a.createElement("li",{className:"aui-dd-parent"},r.a.createElement("button",{className:"aui-button aui-dd-trigger",id:"dropdown-trigger"},r.a.createElement("img",{src:w()+"/download/resources/kz.hcb.tCalendarsHcbConfluence.tCalendarsHcbConfluence:tCalendarsHcbConluence-resources/images/tCalendarEventsMore.png",alt:""})),r.a.createElement("ul",{className:"aui-dropdown"},r.a.createElement("li",{className:"dropdown-item",onClick:e.addEvent},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0431\u044b\u0442\u0438\u0435"))))),r.a.createElement("ul",{className:"tCalendarEventsList"},e.events.map((function(t,a){return r.a.createElement("li",{key:t.id,"data-index":a,onClick:e.handleClickEventLi,className:e.selectedIndex===a?"active":""},r.a.createElement("p",null,r.a.createElement("img",{className:"jiraIssueImg",src:w()+"/download/resources/kz.hcb.tCalendarsHcbConfluence.tCalendarsHcbConfluence:tCalendarsHcbConluence-resources/images/tCalendarJiraIssue.png",alt:""}),t.eventName),r.a.createElement("ul",{id:"tCalendarDropDown"+(a+1),className:"styled-parent"},r.a.createElement("li",{className:"aui-dd-parent"},r.a.createElement("button",{className:"aui-button aui-dd-trigger",id:"dropdown-trigger"},r.a.createElement("img",{src:w()+"/download/resources/kz.hcb.tCalendarsHcbConfluence.tCalendarsHcbConfluence:tCalendarsHcbConluence-resources/images/tCalendarEventsMore.png",alt:""})),r.a.createElement("ul",{className:"aui-dropdown"},r.a.createElement("li",{className:"dropdown-item","data-id":t.id,"data-eventname":t.eventName,"data-filtername":t.filterName,onClick:e.updateEvent},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("li",{className:"dropdown-item","data-id":t.id,"data-index":a,onClick:e.deleteEvent},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))))}))))},O=a(16),x=a.n(O),D=w()+"/rest/tCalendarsHcbConfluence/1/",I="http://localhost:2990/jira/rest/tCalendarsHcbJira/1/",y=function(e,t){return x.a.post(D+"createEvent",{eventName:e,filterName:t}).then((function(e){return e.data}))},j=function(){return x.a.get(D+"getEvents").then((function(e){return e.data}))},M=function(e){return x.a.delete(D+"deleteEvent/"+e).then((function(e){return e.data}))},k=function(e,t,a){return x.a.put(D+"updateEvent",{id:e,eventName:t,filterName:a}).then((function(e){return e.data}))},T=function(e){return x.a.get(I+"getJiraIssuesByFilterNameAnonym?filterName="+e).then((function(e){return e.data.issues}))},A=function(e){return r.a.createElement("section",{id:"addUpdateEvent-dialog",className:"aui-dialog2 aui-dialog2-small aui-layer",role:"dialog","aria-hidden":"true"},r.a.createElement("header",{className:"aui-dialog2-header"},r.a.createElement("a",{href:"#",className:"aui-dialog2-header-close","aria-label":"close"},r.a.createElement("span",{className:"aui-icon aui-icon-small aui-iconfont-close-dialog"}))),r.a.createElement("div",{className:"aui-dialog2-content"},r.a.createElement("form",{className:"aui",onSubmit:e.formSubmit},r.a.createElement("div",{className:"field-group"},r.a.createElement("label",{htmlFor:"eventName"},"\u0418\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0438",r.a.createElement("span",{className:"aui-icon icon-required"},"(required)")),r.a.createElement("input",{className:"text medium-field",type:"text",id:"eventName",placeholder:"\u0418\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0438",value:e.eventName,onChange:e.handleEventNameChange})),r.a.createElement("div",{className:"field-group"},r.a.createElement("label",{htmlFor:"filterName"},"\u0418\u043c\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430",r.a.createElement("span",{className:"aui-icon icon-required"},"(required)")),r.a.createElement("input",{className:"text medium-field",type:"text",id:"filterName",placeholder:"\u0418\u043c\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430",value:e.filterName,onChange:e.handleFilterNameChange})),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("div",{className:"buttons"},r.a.createElement("input",{className:"button submit",type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",id:"comment-save-button"}))))),r.a.createElement("footer",{className:"aui-dialog2-footer"},r.a.createElement("div",{className:"aui-dialog2-footer-actions"},r.a.createElement("button",{id:"dialog-submit-button",className:"aui-button aui-button-primary",onClick:e.AddUpdateEventFormCloseButton},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))))},_=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],calendarMainErrors:[],calendarModalFormErrors:[],successEvent:[],formEventId:"0",formEventName:"",formFilterName:"",issues:[],selectedIndex:0},e._getEvents=function(){j().then((function(t){e.setState({events:t.responseObject},(function(){console.log("delaaaaaaaaaaaaaaaai"),t.responseObject.length>0?e._getIssues(e.state.selectedIndex):e.setState({issues:[]})}))})).catch((function(t){t.response.data.errorText&&e.setState({calendarMainErrors:[].concat(Object(l.a)(e.state.calendarMainErrors),[t.response.data.errorText])})}))},e._getIssues=function(t){T(e.state.events[t].filterName).then((function(a){e.setState({selectedIndex:t,issues:a.map((function(e){return{Id:Number.parseInt(e.id),Subject:e.key,StartTime:new Date(e.fields.duedate+"T00:00:00.000+0600"),EndTime:new Date(e.fields.duedate+"T00:00:00.000+0600"),Description:e.fields.description,Status:e.fields.status.name,Creator:e.fields.creator.displayName,IsAllDay:!1}}))})}))},e._resetAddUpdateEventForm=function(){e.setState({formEventId:"0",formEventName:"",formFilterName:""})},e._closeModal=function(){e._resetAddUpdateEventForm(),S().dialog2("#addUpdateEvent-dialog").hide()},e.onPopupOpen=function(e){console.log(e)},e.handleFormSubmit=function(t){t.preventDefault();var a=[];e.state.formEventName||(a=[].concat(Object(l.a)(a),["\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043c\u044f \u0441\u043e\u0431\u0438\u0442\u0438\u0438"])),e.state.formFilterName||(a=[].concat(Object(l.a)(a),["\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0438\u043c\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430"])),a.length>0?e.setState({calendarModalFormErrors:a}):"0"===e.state.formEventId?y(e.state.formEventName,e.state.formFilterName).then((function(t){e.setState({successEvent:[].concat(Object(l.a)(e.state.successEvent),["\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"])}),e._closeModal(),e._getEvents()})).catch((function(t){t.response.data.errorText&&e.setState({calendarModalFormErrors:[].concat(Object(l.a)(e.state.calendarModalFormErrors),[t.response.data.errorText])})})):k(e.state.formEventId,e.state.formEventName,e.state.formFilterName).then((function(t){e.setState({successEvent:[].concat(Object(l.a)(e.state.successEvent),["\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d"])}),e._closeModal(),e._getEvents()})).catch((function(t){t.response.data.errorText&&e.setState({calendarModalFormErrors:[].concat(Object(l.a)(e.state.calendarModalFormErrors),[t.response.data.errorText])})}))},e.handleClickEventLi=function(t){e._getIssues(Number.parseInt(t.currentTarget.dataset.index||"0"))},e.handleDeleteEvent=function(t){M(t.currentTarget.dataset.id).then((function(a){var n=Number.parseInt(t.currentTarget.dataset.index||"0");e.state.selectedIndex===n&&e.setState({selectedIndex:0}),e._getEvents(),console.log(n+"deleted"),e.setState({successEvent:[].concat(Object(l.a)(e.state.successEvent),["\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d"])})})).catch((function(t){t.response.data.errorText&&e.setState({calendarMainErrors:[].concat(Object(l.a)(e.state.calendarMainErrors),[t.response.data.errorText])})}))},e.handleUpdateEvent=function(t){e.setState({formEventId:t.currentTarget.dataset.id,formEventName:t.currentTarget.dataset.eventname,formFilterName:t.currentTarget.dataset.filtername}),S().dialog2("#addUpdateEvent-dialog").show()},e.handleAddEvent=function(t){e._resetAddUpdateEventForm(),S().dialog2("#addUpdateEvent-dialog").show()},e.AddUpdateEventFormCloseButton=function(t){t.preventDefault(),e._closeModal()},e.handleEventNameChange=function(t){e.setState({formEventName:t.currentTarget.value})},e.handleFilterNameChange=function(t){e.setState({formFilterName:t.currentTarget.value})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=S();this._getEvents(),e.$("#tCalendarDropDown").dropDown("Standard")}},{key:"render",value:function(){var e=this.state,t=e.events,a=e.formEventId,n=e.formEventName,o=e.formFilterName,s=e.selectedIndex,l=e.issues;return r.a.createElement("div",{className:"tCalendarsHcbBody"},r.a.createElement(b,{onPopupOpen:this.onPopupOpen,issues:l}),r.a.createElement(F,{events:t,addEvent:this.handleAddEvent,updateEvent:this.handleUpdateEvent,deleteEvent:this.handleDeleteEvent,handleClickEventLi:this.handleClickEventLi,selectedIndex:s}),r.a.createElement("div",{className:"modals"},r.a.createElement(A,{id:a,eventName:n,filterName:o,handleEventNameChange:this.handleEventNameChange,handleFilterNameChange:this.handleFilterNameChange,AddUpdateEventFormCloseButton:this.AddUpdateEventFormCloseButton,formSubmit:this.handleFormSubmit})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.addEventListener("DOMContentLoaded",(function(e){s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("tCalendarsHcbConfluence"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);