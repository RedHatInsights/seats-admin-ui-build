"use strict";(self.webpackChunkseatsAdminUi=self.webpackChunkseatsAdminUi||[]).push([[784],{2958:(e,n,t)=>{t.d(n,{Z:()=>Re});var r=t(5893),o=t(2635),i=t(3215),a=t(5586),s=t(5140),u=t(2747),l=t(6911),c=t(3221),d=t(1663),f=t(6372),h=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((r=r.apply(e,n||[])).next())}))},p=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},v=function(){function e(){}return e.prototype.get=function(){return h(this,void 0,Promise,(function(){var e,n,t;return p(this,(function(r){switch(r.label){case 0:return[4,fetch("/aw-api/subscriptions")];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),n=e.totalSeats,t=e.availableSeats,[2,{total:n,available:t}]}}))}))},e.prototype.seats=function(){return h(this,void 0,Promise,(function(){return p(this,(function(e){switch(e.label){case 0:return[4,fetch("/aw-api/users")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))}))},e.prototype.assign=function(){return Promise.resolve()},e.prototype.unAssign=function(){return Promise.resolve()},e}(),g=t(3396),m=t(9826),y=function(){return y=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},y.apply(this,arguments)},b=g.runtime({baseUrl:"/"});function x(e,n,t){return b.ok(b.fetchJson("/v1alpha/orgs/".concat(encodeURIComponent(e),"/licenses/").concat(encodeURIComponent(n)),y({},t)))}function j(e,n,t,r){return b.ok(b.fetchJson("/v1alpha/orgs/".concat(encodeURIComponent(e),"/licenses/").concat(encodeURIComponent(n)),b.json(y(y({},r),{method:"POST",body:t}))))}function w(e,n,t,r){var o=void 0===t?{}:t,i=o.includeUsers,a=o.filter;return b.ok(b.fetchJson("/v1alpha/orgs/".concat(encodeURIComponent(e),"/licenses/").concat(encodeURIComponent(n),"/seats").concat(m.query(m.explode({includeUsers:i,filter:a}))),y({},r)))}var P=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((r=r.apply(e,n||[])).next())}))},S=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},C=function(){function e(e){this.baseUrl=e||""}return e.prototype.get=function(e){var n=e.orgId,t=e.serviceId,r=e.token;return P(this,void 0,Promise,(function(){var e,o;return S(this,(function(i){switch(i.label){case 0:return[4,this.requestHeader(r)];case 1:return e=i.sent(),[4,x(n,t,e)];case 2:return o=i.sent(),[2,{available:Number(o.seatsAvailable)||0,total:Number(o.seatsTotal)||0}]}}))}))},e.prototype.seats=function(e,n,t){var r,o,i=e.orgId,a=e.serviceId,s=e.token;return void 0===t&&(t=!0),P(this,void 0,Promise,(function(){var e,n;return S(this,(function(u){switch(u.label){case 0:return[4,this.requestHeader(s)];case 1:return e=u.sent(),[4,w(i,a,{filter:t?"assigned":"assignable"},e)];case 2:return n=u.sent(),[2,{users:(null===(r=n.users)||void 0===r?void 0:r.map((function(e){return{id:e.id||"",firstName:e.firstName||"",lastName:e.lastName||"",userName:e.username||"",assigned:!!e.assigned}})))||[],count:(null===(o=n.users)||void 0===o?void 0:o.length)||0}]}}))}))},e.prototype.requestHeader=function(e){return P(this,void 0,void 0,(function(){return S(this,(function(n){switch(n.label){case 0:return[4,F(e,this.baseUrl)];case 1:return[2,n.sent()]}}))}))},e.prototype.assign=function(e,n){return P(this,void 0,Promise,(function(){var t;return S(this,(function(r){switch(r.label){case 0:return t={assign:n},[4,this.modify(e,t)];case 1:return r.sent(),[2]}}))}))},e.prototype.unAssign=function(e,n){return P(this,void 0,Promise,(function(){var t;return S(this,(function(r){switch(r.label){case 0:return t={unassign:n},[4,this.modify(e,t)];case 1:return r.sent(),[2]}}))}))},e.prototype.modify=function(e,n){var t=e.orgId,r=e.serviceId,o=e.token;return P(this,void 0,Promise,(function(){var e;return S(this,(function(i){switch(i.label){case 0:return[4,this.requestHeader(o)];case 1:return e=i.sent(),[2,j(t,r,n,e)]}}))}))},e}(),k=function(){return k=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},k.apply(this,arguments)},O=g.runtime({baseUrl:"/api/entitlements/v1/"});function A(e,n){var t=void 0===e?{}:e,r=t.limit,o=t.offset;return O.ok(O.fetchJson("/seats".concat(m.query(m.explode({limit:r,offset:o}))),k({},n)))}function T(e,n){return O.ok(O.fetchJson("/seats",O.json(k(k({},n),{method:"POST",body:e}))))}function U(e,n){return O.ok(O.fetchJson("/seats/".concat(encodeURIComponent(e)),k(k({},n),{method:"DELETE"})))}var I=function(){return I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},I.apply(this,arguments)},L=g.runtime({baseUrl:"/api/rbac/v1"});function N(e,n){var t=void 0===e?{}:e,r=t.limit,o=t.offset,i=t.matchCriteria,a=t.usernames,s=t.sortOrder,u=t.email,l=t.status,c=t.adminOnly,d=t.orderBy,f=t.usernameOnly;return L.ok(L.fetchJson("/principals/".concat(m.query(m.explode({limit:r,offset:o,match_criteria:i,usernames:a,sort_order:s,email:u,status:l,admin_only:c,order_by:d,username_only:f}))),I({},n)))}var E=function(){return E=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},E.apply(this,arguments)},q=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((r=r.apply(e,n||[])).next())}))},R=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},B=function(){function e(e){this.baseUrl=e||""}return e.prototype.requestHeader=function(e){return q(this,void 0,void 0,(function(){return R(this,(function(n){switch(n.label){case 0:return[4,F(e.token,this.baseUrl+"api/entitlements/v1/")];case 1:return[2,n.sent()]}}))}))},e.prototype.get=function(e,n){return q(this,void 0,Promise,(function(){var t,r,o,i,a;return R(this,(function(s){switch(s.label){case 0:return r=A,o=[{limit:n.perPage,offset:n.page*n.perPage}],[4,this.requestHeader(e)];case 1:return[4,r.apply(void 0,o.concat([s.sent()]))];case 2:return t=s.sent(),i=t.allowed||0,a=i-(t.consumed||0),[2,{available:i,total:a}]}}))}))},e.prototype.seats=function(e,n,t){var r,o;return void 0===t&&(t=!0),q(this,void 0,Promise,(function(){var i,a,s,u;return R(this,(function(l){switch(l.label){case 0:return t?(i=A,a=[{limit:n.perPage,offset:n.page*n.perPage}],[4,this.requestHeader(e)]):[3,3];case 1:return[4,i.apply(void 0,a.concat([l.sent()]))];case 2:return[2,{users:(u=l.sent()).data.map((function(e){return{id:e.subscription_id||"",userName:e.account_username||"",firstName:"",lastName:"",assigned:!0}})),count:(null===(r=u.meta)||void 0===r?void 0:r.count)||0}];case 3:return[4,this.requestHeader(e)];case 4:return s=l.sent(),[4,N({usernameOnly:!1},E(E({},s),{baseUrl:this.baseUrl+"api/rbac/v1/"}))];case 5:return[2,{users:(u=l.sent()).data.map((function(e){var n=e.username;return{id:n,firstName:e.first_name||"",lastName:e.last_name||"",userName:n,assigned:!1}})),count:(null===(o=u.meta)||void 0===o?void 0:o.count)||0}]}}))}))},e.prototype.assign=function(e,n){return q(this,void 0,Promise,(function(){var t=this;return R(this,(function(r){switch(r.label){case 0:return[4,Promise.all(n.map((function(n){return q(t,void 0,void 0,(function(){var t,r;return R(this,(function(o){switch(o.label){case 0:return t=T,r=[{account_username:n}],[4,this.requestHeader(e)];case 1:return[2,t.apply(void 0,r.concat([o.sent()]))]}}))}))})))];case 1:return r.sent(),[2,Promise.resolve()]}}))}))},e.prototype.unAssign=function(e,n){return q(this,void 0,Promise,(function(){var t=this;return R(this,(function(r){switch(r.label){case 0:return[4,Promise.all(n.map((function(n){return q(t,void 0,void 0,(function(){var t,r;return R(this,(function(o){switch(o.label){case 0:return t=U,r=[n],[4,this.requestHeader(e)];case 1:return[2,t.apply(void 0,r.concat([o.sent()]))]}}))}))})))];case 1:return r.sent(),[2,Promise.resolve()]}}))}))},e}(),F=function(e,n){return t=void 0,r=void 0,i=function(){var t;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(r){switch(r.label){case 0:return[4,e()];case 1:return t=r.sent(),[2,{headers:{Authorization:"Bearer ".concat(t)},baseUrl:n}]}}))},new((o=Promise)||(o=Promise))((function(e,n){function a(e){try{u(i.next(e))}catch(e){n(e)}}function s(e){try{u(i.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}u((i=i.apply(t,r||[])).next())}));var t,r,o,i};function M(e,n){switch(e){case"CIAM_Authz":return new C(n);case"entitlements":return new B(n);case"mock":return new v;default:throw new Error("no implementation found for "+e)}}var H=function(){return H=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},H.apply(this,arguments)},W=(0,u.createContext)(void 0),z=function(){return function(e){var n=(0,u.useContext)(e);if(null!=n)return n;throw new Error("No provider found for context, make sure it is included in your component hierarchy.")}(W)},_=function(e){var n=e.serviceName,t=e.baseUrl,o=e.children;return(0,r.jsx)(W.Provider,H({value:M(n,t)},{children:o}))},D=t(950),K=t(5157),G=t(9609),J=function(){return J=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},J.apply(this,arguments)},V=function(){var e=(0,d.useNavigate)();return function(n,t){return e(function(e,n){return void 0===n&&(n="/ansible/seats-administration"),"string"==typeof e?"".concat(n).concat(e).replace("^".concat(n,"//"),"/"):J(J({},e),{pathname:"".concat(n).concat(e.pathname).replace("^".concat(n,"//"),"/")})}(n),t)}},Z=t(3047),Y=function(){return Y=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Y.apply(this,arguments)},Q=function(){return(0,r.jsx)(l.Icon,Y({status:"danger",size:"xl"},{children:(0,r.jsx)(Z.$O,{})}))},$=function(){return(0,r.jsxs)(l.EmptyState,Y({isFullHeight:!0},{children:[(0,r.jsx)(l.EmptyStateIcon,{component:Q,variant:"container"}),(0,r.jsx)(l.Title,Y({headingLevel:"h2",size:"lg"},{children:"Your organization no longer has an Ansible Lightspeed with Watson Code Assistant subscription."})),(0,r.jsx)(l.EmptyStateBody,{children:"Please contact Red Hat if there is an issue with your subscription or if you wish to continue."})]}))},X=t(9957),ee=function(){return ee=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},ee.apply(this,arguments)},ne=function(e){var n=e.usersToRemove,t=e.onOk;return(0,r.jsxs)(l.Modal,ee({id:"remove-users-modal",variant:l.ModalVariant.small,isOpen:!0,"aria-label":"Remove users from Ansible Lightspeed with Watson Code Assistant",header:(0,r.jsxs)(l.Title,ee({headingLevel:"h1",style:{display:"flex"}},{children:[(0,r.jsx)(X.LP,{size:"lg",style:{color:"var(--pf-global--warning-color--100)"}}),(0,r.jsx)("span",ee({className:"pf-u-ml-md"},{children:"Remove users from Ansible Lightspeed with Watson Code Assistant."}))]})),showClose:!1,"aria-describedby":"modal-message",actions:[(0,r.jsx)(l.Button,ee({onClick:t,variant:l.ButtonVariant.primary},{children:"Ok"}),1)]},{children:["Your organization has reduced the number of users in Opt in to Ansible Lightspeed with Watson Code Assistant to ",n,". Please remove"," ",n," users to continue using the Opt in to Ansible Lightspeed with Watson Code Assistant subscription."]}))},te=function(){return te=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},te.apply(this,arguments)},re=function(e){var n=e.availableSeats,t=e.totalSeats;return(0,r.jsx)(l.PageSection,te({variant:"light",hasShadowBottom:!0},{children:(0,r.jsxs)(l.TextContent,{children:[(0,r.jsx)(l.Title,te({headingLevel:"h1"},{children:"Ansible Lightspeed with Watson Code Assistant"})),(0,r.jsxs)(l.Level,{children:[(0,r.jsx)(l.LevelItem,{children:(0,r.jsx)(l.Text,{children:"This group contains all users assigned seats within your organization."})}),t>0&&(0,r.jsx)(l.LevelItem,{children:(0,r.jsxs)(l.Text,{children:["Seats available: ",(0,r.jsxs)(l.Label,te({isCompact:!0},{children:[n," of ",t]}))]})})]})]})}))},oe=t(6889),ie=t(8090),ae=t(4474),se=t.n(ae),ue=t(5316),le=t.n(ue),ce=t(7081),de=function(){return de=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},de.apply(this,arguments)},fe=function(e){var n=e.totalSeats,t=e.onAddUsers;return(0,r.jsxs)(l.EmptyState,de({isFullHeight:!0},{children:[(0,r.jsx)(l.EmptyStateIcon,{icon:ce.wl}),(0,r.jsxs)(l.Title,de({headingLevel:"h2",size:"lg"},{children:["There are currently no users in your organization assigned Ansible Lightspeed with Watson Code Assistant seats.",(0,r.jsx)("br",{}),"Your organization has ",n," Ansible Lightspeed with Watson Code Assistant seats available."]})),(0,r.jsx)(l.EmptyStateBody,{children:"Please add users by using the button below."}),(0,r.jsx)(l.Button,de({ouiaId:"button-create",variant:"primary",onClick:function(){return t()}},{children:"Add users"}))]}))},he=t(810),pe=function(){return pe=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},pe.apply(this,arguments)},ve=function(e){var n=e.onClearAllFilters;return(0,r.jsxs)(l.EmptyState,pe({variant:l.EmptyStateVariant.xs},{children:[(0,r.jsx)(l.EmptyStateIcon,{icon:he.W1}),(0,r.jsx)(l.Title,pe({headingLevel:"h2",size:"lg"},{children:"No results found"})),(0,r.jsxs)(l.EmptyStateBody,{children:["Adjust your filters and try again, or ",(0,r.jsx)("a",pe({onClick:n},{children:"clear all filters"})),"."]})]}))},ge=function(){return ge=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},ge.apply(this,arguments)},me=["userName","firstName","lastName"],ye={userName:"Username",firstName:"First name",lastName:"Last name"},be=function(e){var n=e.columns,t=e.rows,o=new Array(n).fill(0).map((function(e,n){return(0,r.jsx)(ie.Td,{children:(0,r.jsx)(l.Skeleton,{screenreaderText:0===n?"Loading content":void 0})},"cell_".concat(n))})),i=new Array(t).fill(0).map((function(e,n){return(0,r.jsx)(ie.Tr,{children:o},"row_".concat(n))}));return(0,r.jsx)(r.Fragment,{children:i})},xe=function(e){var n=e.perPage,t=e.itemCount,o=e.select,i=(0,u.useState)(!1),a=i[0],s=i[1],c=(0,u.useState)(!1),d=c[0],f=c[1];return(0,r.jsx)(l.Popper,{trigger:(0,r.jsx)(l.MenuToggle,{onClick:function(){return s(!a)},isExpanded:a,splitButtonOptions:{items:[(0,r.jsx)(l.MenuToggleCheckbox,{id:"select-all","aria-label":"Select all",isChecked:d,onChange:function(e){f(e),o(e?"all":"none")}},"select-all")]},"aria-label":"Full table selection checkbox"}),popper:(0,r.jsx)(l.Menu,ge({id:"select",onSelect:function(e,n){f(1===n||2===n),o(1===n?"page":2===n?"all":"none"),s(!a)}},{children:(0,r.jsx)(l.MenuContent,{children:(0,r.jsxs)(l.MenuList,{children:[(0,r.jsx)(l.MenuItem,ge({itemId:0},{children:"Select none (0 items)"})),(0,r.jsxs)(l.MenuItem,ge({itemId:1},{children:["Select page (",n>t?t:n," items)"]})),(0,r.jsxs)(l.MenuItem,ge({itemId:2},{children:["Select all (",t," items)"]}))]})})})),isVisible:a,popperMatchesTriggerWidth:!1})},je=function(e){var n=e.users,t=e.itemCount,o=e.page,i=e.perPage,a=e.totalSeats,s=e.canAddUser,c=void 0!==s&&s,d=e.isUserChecked,f=e.onCheckUser,h=e.setSelectedUser,p=e.onPageChange,v=e.onRemoveSeat,g=e.onAddUser,m=e.isPicker,y=void 0!==m&&m,b=(0,u.useState)(),x=b[0],j=b[1],w=(0,u.useState)(),P=w[0],S=w[1],C=(0,u.useState)(me[0]),k=C[0],O=C[1],A=(0,u.useState)(""),T=A[0],U=A[1],I=(0,u.useState)(""),L=I[0],N=I[1],E=(0,u.useState)(!1),q=E[0],R=E[1],B=(o-1)*(i||20),F=(0,u.useMemo)((function(){var e=(null==n?void 0:n.slice(B,B+(i||20)))||[];return void 0!==x&&(e=le()(e,me[x],P)),""!==L&&(e=se()(e,(function(e){return e[k].includes(L)}))),e}),[n,B,i,x,P,L,k]);return null===n?(0,r.jsx)(l.Bullseye,{children:(0,r.jsx)(l.Spinner,{})}):0!==(null==n?void 0:n.length)||""!==L||y?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Toolbar,ge({clearAllFilters:function(){return N("")}},{children:(0,r.jsxs)(l.ToolbarContent,{children:[!y&&(0,r.jsx)(l.ToolbarItem,{children:(0,r.jsx)(xe,{perPage:i||20,itemCount:t||0,select:function(e){switch(e){case"all":null==h||h(n||[]);break;case"page":null==h||h(F||[]);break;default:null==h||h([])}}})}),(0,r.jsx)(l.ToolbarToggleGroup,ge({toggleIcon:(0,r.jsx)(oe.ZP,{}),breakpoint:"xl"},{children:(0,r.jsxs)(l.ToolbarGroup,ge({variant:"filter-group"},{children:[(0,r.jsx)(l.ToolbarItem,{children:(0,r.jsx)(l.Popper,{isVisible:q,trigger:(0,r.jsx)(l.MenuToggle,ge({onClick:function(){return R(!q)},isExpanded:q,icon:(0,r.jsx)(oe.ZP,{})},{children:ye[k]})),popper:(0,r.jsx)(l.Menu,ge({onSelect:function(e,n){O(null==n?void 0:n.toString()),R(!1)}},{children:(0,r.jsx)(l.MenuContent,{children:(0,r.jsx)(l.MenuList,{children:me.map((function(e){return(0,r.jsx)(l.MenuItem,ge({itemId:e},{children:ye[e]}),e)}))})})}))})}),(0,r.jsx)(l.ToolbarFilter,ge({chips:""!==L?[L]:[],deleteChip:function(){return N("")},deleteChipGroup:function(){return N("")},categoryName:ye[k],widths:y?{default:"500px"}:void 0},{children:(0,r.jsx)(l.SearchInput,{"aria-label":"Filter table based on column",placeholder:"Filter by ".concat(ye[k]),onChange:function(e,n){return U(n)},onSearch:function(e,n){return N(n)},value:T,onClear:function(){U("")}})}))]}))})),!y&&c&&(0,r.jsx)(l.ToolbarItem,{children:(0,r.jsx)(l.Button,ge({onClick:g},{children:"Assign user(s)"}))}),!y&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ToolbarItem,{children:(0,r.jsx)(l.Button,ge({onClick:function(){return null==v?void 0:v()},variant:"secondary"},{children:"Remove user(s)"}))}),(0,r.jsx)(l.ToolbarItem,ge({alignment:{default:"alignRight"}},{children:(0,r.jsx)(l.Pagination,{itemCount:t||0,page:o,perPage:i||20,onSetPage:function(e,n){return p(n,i)},onPerPageSelect:function(e,n){return p(1,n)},isCompact:!0,variant:"top"})}))]})]})})),(0,r.jsxs)(ie.TableComposable,ge({"aria-label":"Ansible Lightspeed with Watson Code Assistant users"},{children:[(0,r.jsx)(ie.Thead,{children:(0,r.jsxs)(ie.Tr,{children:[(0,r.jsx)(ie.Th,{}),me.map((function(e,n){return(0,r.jsx)(ie.Th,ge({sort:{sortBy:{index:x,direction:P,defaultDirection:"asc"},onSort:function(e,n,t){j(n),S(t)},columnIndex:n}},{children:ye[e]}),e)}))]})}),(0,r.jsxs)(ie.Tbody,{children:[void 0===n&&(0,r.jsx)(be,{columns:me.length+1,rows:3}),null==F?void 0:F.map((function(e,n){return(0,r.jsxs)(ie.Tr,{children:[(0,r.jsx)(ie.Td,{select:{rowIndex:n,onSelect:function(n,t){return f(e,t)},isSelected:d(e)}}),me.map((function(n){return(0,r.jsx)(ie.Td,ge({dataLabel:ye[n]},{children:e[n]}),"".concat(e.id,"-").concat(n))})),!y&&(0,r.jsx)(ie.Td,ge({isActionCell:!0},{children:(0,r.jsx)(ie.ActionsColumn,{items:[{title:"Remove user",onClick:function(){return null==v?void 0:v(e)}}]})}))]},e.id)})),0===(null==F?void 0:F.length)&&""!==L&&(0,r.jsx)(ie.Tr,{children:(0,r.jsx)(ie.Td,ge({colSpan:me.length},{children:(0,r.jsx)(ve,{onClearAllFilters:function(){return N("")}})}))})]})]})),(0,r.jsx)(l.Toolbar,{children:(0,r.jsx)(l.Pagination,{itemCount:t||0,page:o,perPage:i||20,onSetPage:function(e,n){return p(n,i)},onPerPageSelect:function(e,n){return p(1,n)},isCompact:!0,variant:"bottom"})})]}):(0,r.jsx)(fe,{totalSeats:a||0,onAddUsers:function(){return null==g?void 0:g()}})},we=function(){return we=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},we.apply(this,arguments)},Pe=function(e){var n=e.users,t=e.onConfirm,o=e.onCancel,i=(0,u.useState)(n.slice(0,5)),a=i[0],s=i[1],c=(0,u.useState)(5),d=c[0],f=c[1],h=(0,u.useState)(1),p=h[0],v=h[1];return(0,r.jsxs)(l.Modal,we({title:"Remove users",titleIconVariant:"warning",isOpen:!0,variant:"small",actions:[(0,r.jsx)(l.Button,we({variant:"danger",onClick:function(){return t()}},{children:"Remove user(s)"}),"remove"),(0,r.jsx)(l.Button,we({variant:"link",onClick:function(){return o()}},{children:"Cancel"}),"cancel")],onClose:o},{children:["Are you sure you want to remove the user(s) below from Ansible Lightspeed with Watson Code Assistant?",n.length>1?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ie.TableComposable,we({variant:"compact"},{children:[(0,r.jsx)(ie.Thead,{children:(0,r.jsx)(ie.Tr,{children:(0,r.jsx)(ie.Th,{children:"Name"})})}),(0,r.jsx)(ie.Tbody,{children:a.map((function(e){return(0,r.jsx)(ie.Tr,{children:(0,r.jsxs)(ie.Td,we({dataLabel:"Name"},{children:[e.firstName," ",e.lastName]}))},e.id)}))})]})),(0,r.jsx)(l.Pagination,{isCompact:!0,perPageComponent:"button",itemCount:n.length,perPage:d,page:p,variant:l.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5},{title:"10",value:10},{title:"20",value:20}],onPerPageSelect:function(e,t){f(t),s(n.slice((p-1)*t,p*t))},onSetPage:function(e,t){v(t),s(n.slice((t-1)*d,t*d))}})]}):(0,r.jsx)("p",we({className:"pf-u-pt-md"},{children:n.map((function(e,t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("b",{children:[e.firstName," ",e.lastName]}),t!==n.length-1?", ":""]})}))}))]}))};function Se(){var e=(0,u.useState)({page:1,perPage:10}),n=e[0],t=n.page,r=n.perPage,o=e[1];return[t,r,function(e,n){return o({page:e,perPage:n})}]}var Ce=function(){return Ce=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Ce.apply(this,arguments)},ke=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},Oe=function(e){var n,t,o,i,a,s,c,f,h,p,v,g=e.user,m=e.onSuccess,y=e.onError,b=V(),x=(0,u.useState)([]),j=x[0],w=x[1],P=(0,u.useState)(!1),S=P[0],C=P[1],k=(0,u.useState)(!0),O=k[0],A=k[1],T=Se(),U=T[0],I=T[1],L=T[2],N=z(),E=(0,D.NL)(),q=(0,K.a)({queryKey:["subscriptions",{page:U,perPage:I}],queryFn:function(){return N.get(g,{page:U,perPage:I})}}),R=(0,K.a)({queryKey:["users",{page:U,perPage:I}],queryFn:function(){return N.seats(g,{page:U,perPage:I})}}),B=((null===(n=q.data)||void 0===n?void 0:n.available)||0)<0,F=Math.abs((null===(t=q.data)||void 0===t?void 0:t.available)||0),M=((null===(o=q.data)||void 0===o?void 0:o.total)||0)>0&&0===(null===(i=q.data)||void 0===i?void 0:i.available),H=(0,G.D)((function(e){return n=void 0,t=void 0,o=function(){return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(n){switch(n.label){case 0:return[4,N.unAssign(g,e.map((function(e){return e.id})))];case 1:return n.sent(),C(!1),w([]),[2]}}))},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function s(e){try{u(o.throw(e))}catch(e){i(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((o=o.apply(n,t||[])).next())}));var n,t,r,o}),{onSuccess:function(){m&&m("Successfully removed users"),E.invalidateQueries({queryKey:["users"]})},onError:function(e){y&&y("there was an error: "+e)}}).mutate;return(0,r.jsxs)(l.Page,{children:[(0,r.jsx)(re,{totalSeats:(null===(a=q.data)||void 0===a?void 0:a.total)||0,availableSeats:(null===(s=q.data)||void 0===s?void 0:s.available)||0}),0===(null===(c=q.data)||void 0===c?void 0:c.total)&&(0,r.jsx)($,{}),B&&F&&(0,r.jsx)(ne,{usersToRemove:F,onOk:function(){return b("/remove-users")}}),S&&(0,r.jsx)(Pe,{users:j,onConfirm:function(){return H(j)},onCancel:function(){return C(!1)}}),M&&O?(0,r.jsx)(l.PageSection,Ce({style:{paddingBottom:0}},{children:(0,r.jsx)(l.Alert,{title:"There are 0 seats left in your organization's subscription. Contact Red Hat to manage your Ansible Lightspeed with Watson Code Assistant license.",variant:"warning",actionClose:(0,r.jsx)(l.AlertActionCloseButton,{onClose:function(){return A(!1)}})})})):null,(0,r.jsx)(l.PageSection,{children:0!==(null===(f=q.data)||void 0===f?void 0:f.total)&&(0,r.jsx)(je,{totalSeats:null===(h=q.data)||void 0===h?void 0:h.total,users:null===(p=R.data)||void 0===p?void 0:p.users,itemCount:null===(v=R.data)||void 0===v?void 0:v.count,canAddUser:!M,page:U,perPage:I,onPageChange:L,onAddUser:function(){b("/add-users")},isUserChecked:function(e){return j.includes(e)},onCheckUser:function(e,n){w(n?ke(ke([],j,!0),[e],!1):j.filter((function(n){return n!==e})))},setSelectedUser:function(e){return w(e)},onRemoveSeat:function(e){e&&w([e]),C(!0)}})}),(0,r.jsx)(d.Outlet,{})]})},Ae=function(){return Ae=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Ae.apply(this,arguments)},Te=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},Ue=function(e){var n,t,o,i,a,s,c,d=e.user,f=e.onSuccess,h=e.onError,p=V(),v=z(),g=function(){return p("/")},m=Se(),y=m[0],b=m[1],x=m[2],j=(0,K.a)({queryKey:["subscriptions",{page:y,perPage:b}],queryFn:function(){return v.get(d,{page:y,perPage:b})}}),w=(0,D.NL)(),P=(0,K.a)({queryKey:["availableUsers",{page:y,perPage:b,usernames:[]}],queryFn:function(){return v.seats(d,{page:y,perPage:b},!1)}}),S=(0,G.D)((function(){return v.assign(d,A)}),{onSuccess:function(){g(),f("Successfully assigned users"),w.invalidateQueries({queryKey:["users","availableUsers","subscriptions"]})},onError:function(e){h("there was an error: "+e)}}),C=S.mutate,k=S.isLoading,O=(0,u.useState)([]),A=O[0],T=O[1],U=((null===(n=j.data)||void 0===n?void 0:n.total)||0)-((null===(t=j.data)||void 0===t?void 0:t.available)||0),I=void 0===(null===(o=j.data)||void 0===o?void 0:o.total)||!(A.length>0)||A.length+U>j.data.total;return(0,r.jsxs)(l.Modal,Ae({isOpen:!0,title:"Assign users",variant:"medium",onClose:g,actions:[(0,r.jsx)(l.Button,Ae({onClick:function(){return C()},isDisabled:I,isLoading:k},{children:"Assign"}),"assign"),(0,r.jsx)(l.Button,Ae({onClick:g,variant:l.ButtonVariant.link},{children:"Cancel"}),"cancel")]},{children:[A.length+U>((null===(i=j.data)||void 0===i?void 0:i.total)||0)&&(0,r.jsx)(l.Alert,{variant:"warning",isInline:!0,title:"Your organization does not have enough Ansible Lightspeed with Watson Code Assistant seats available for the assignments below"}),(0,r.jsx)(je,{isPicker:!0,totalSeats:null===(a=j.data)||void 0===a?void 0:a.total,users:null===(s=P.data)||void 0===s?void 0:s.users,itemCount:null===(c=P.data)||void 0===c?void 0:c.count,page:y,perPage:b,onPageChange:x,isUserChecked:function(e){return A.includes(e.id)},onCheckUser:function(e,n){T(n?Te(Te([],A,!0),[e.id],!1):A.filter((function(n){return n!==e.id})))}})]}))},Ie=function(){return Ie=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Ie.apply(this,arguments)},Le=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))},Ne=function(e){var n,t,o,i,a,s=e.user,c=e.onSuccess,d=e.onError,f=V(),h=z(),p=(0,K.a)({queryKey:["subscriptions"],queryFn:function(){return h.get(s,{page:g,perPage:m})}}),v=Se(),g=v[0],m=v[1],y=v[2],b=(0,D.NL)(),x=(0,K.a)({queryKey:["assignedUsers",{page:g,perPage:m,usernames:[]}],queryFn:function(){return h.seats(s,{page:g,perPage:m})}}),j=(0,u.useState)([]),w=j[0],P=j[1],S=((null===(n=p.data)||void 0===n?void 0:n.total)||0)-((null===(t=p.data)||void 0===t?void 0:t.available)||0),C=(0,G.D)((function(){return P([]),h.unAssign(s,w)}),{onSuccess:function(){c("Successfully removed users"),b.invalidateQueries({queryKey:["users","assignedUsers","subscriptions"]})},onError:function(e){d("there was an error: "+e)}}),k=C.mutate,O=C.isLoading,A=function(){return f("/")};return(0,r.jsx)(l.Modal,Ie({isOpen:!0,title:"Remove ".concat(S," users from their assigned seats"),variant:"medium",onClose:A,actions:[(0,r.jsx)(l.Button,Ie({onClick:function(){return k()},isDisabled:w.length>S,isLoading:O},{children:"Remove"}),"remove"),(0,r.jsx)(l.Button,Ie({onClick:A,variant:l.ButtonVariant.link,isDisabled:O},{children:"Cancel"}),"cancel")]},{children:(0,r.jsx)(je,{isPicker:!0,totalSeats:null===(o=p.data)||void 0===o?void 0:o.total,users:null===(i=x.data)||void 0===i?void 0:i.users,itemCount:null===(a=x.data)||void 0===a?void 0:a.count,page:g,perPage:m,onPageChange:y,isUserChecked:function(e){return w.includes(e.id)},onCheckUser:function(e,n){P(n?Le(Le([],w,!0),[e.id],!1):w.filter((function(n){return n!==e.id})))}})}))},Ee=function(){return Ee=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Ee.apply(this,arguments)},qe=function(){var e=(0,u.useState)(),n=e[0],t=e[1],o=(0,f.I0)(),a=function(e,n){void 0===n&&(n="success"),o((0,i.wN)({variant:n,title:e}))},h=function(e){return a(e,"danger")},p=(0,s.Z)().auth,v=p.getToken,g=p.getUser;return(0,u.useEffect)((function(){var e,n,r,o;e=void 0,n=void 0,o=function(){var e;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(n){switch(n.label){case 0:return[4,g()];case 1:return(e=n.sent())&&t({orgId:e.identity.org_id,serviceId:"smarts",token:v}),[2]}}))},new((r=void 0)||(r=Promise))((function(t,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function s(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,s)}u((o=o.apply(e,n||[])).next())}))}),[]),n?(0,r.jsx)(u.Suspense,Ee({fallback:(0,r.jsx)(l.Bullseye,{children:(0,r.jsx)(l.Spinner,{})})},{children:(0,r.jsx)(_,Ee({serviceName:"entitlements",baseUrl:"https://console.stage.redhat.com/"},{children:(0,r.jsxs)(d.Routes,{children:[(0,r.jsxs)(d.Route,Ee({path:"/",element:(0,r.jsx)(Oe,{user:n,onSuccess:a,onError:h})},{children:[(0,r.jsx)(d.Route,{path:"add-users",element:(0,r.jsx)(Ue,{user:n,onSuccess:a,onError:h})}),(0,r.jsx)(d.Route,{path:"remove-users",element:(0,r.jsx)(Ne,{user:n,onSuccess:a,onError:h})})]})),(0,r.jsx)(d.Route,{element:(0,r.jsx)(c.Z,{})})]})}))})):(0,r.jsx)(l.Bullseye,{children:(0,r.jsx)(l.Spinner,{})})};const Re=function(){var e=(0,s.Z)().updateDocumentTitle;return(0,u.useEffect)((function(){(0,a.JH)().register({notifications:i.ee}),e("Ansible Lightspeed with Watson Code Assistant")}),[]),(0,r.jsxs)(u.Fragment,{children:[(0,r.jsx)(o.ZP,{}),(0,r.jsx)(qe,{})]})}},8161:(e,n,t)=>{t.d(n,{S:()=>u});var r=t(5586),o=t(8573),i=t.n(o),a=t(4885),s=function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))};function u(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return(0,r.JH)({},s([i(),(0,a.ZP)({errorDescriptionKey:["detail","stack"]})],e,!0))}}}]);
//# sourceMappingURL=../sourcemaps/784.0199979afa7cff5758f034304438e94e.js.map