(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{281:function(t,n,e){"use strict";e.r(n);e(49),e(24);var r=e(4),o=e(260),c=e(268),d={layout:"incidents",components:{IncidentsHistory:e(267).a,IncidentsPaginator:c.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,r=t.params,c=new o.a(e.$axios,e.i18n.locale),n.next=4,c.getIncidentsHistory(r.page);case 4:return d=n.sent,n.abrupt("return",{periods:d.periods,pageInfo:{page:d.page,pageSize:d.page_size,totalPages:d.total_pages}});case 6:case"end":return n.stop()}}),n)})))()},head:function(){var t=this.$t.bind(this);return{title:"".concat(t("incidents.incidents-history")," - ").concat(t("incidents.paginator.page")," ").concat(this.pageInfo.page),meta:[{hid:"description",name:"description",content:t("incidents.incidents-history-description")}]}},validate:function(t){var n=t.params;return/^\d+$/.test(n.page)}},l=e(8),component=Object(l.a)(d,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("incidents-history",{attrs:{periods:this.periods}}),this._v(" "),n("incidents-paginator",{attrs:{info:this.pageInfo}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);