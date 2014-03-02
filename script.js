!function(a){function b(a,b){return function(c){return i(a.call(this,c),b)}}function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function d(){}function e(a){g(this,a)}function f(a){var b=a.years||a.year||a.y||0,c=a.months||a.month||a.M||0,d=a.weeks||a.week||a.w||0,e=a.days||a.day||a.d||0,f=a.hours||a.hour||a.h||0,g=a.minutes||a.minute||a.m||0,h=a.seconds||a.second||a.s||0,i=a.milliseconds||a.millisecond||a.ms||0;this._input=a,this._milliseconds=i+1e3*h+6e4*g+36e5*f,this._days=e+7*d,this._months=c+12*b,this._data={},this._bubble()}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function h(a){return 0>a?Math.ceil(a):Math.floor(a)}function i(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&H.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a,b){var c,d=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),f=0;for(c=0;d>c;c++)~~a[c]!==~~b[c]&&f++;return f+e}function m(a){return a?eb[a]||a.toLowerCase().replace(/(.)s$/,"$1"):a}function n(a,b){return b.abbr=a,L[a]||(L[a]=new d),L[a].set(b),L[a]}function o(a){if(!a)return H.fn._lang;if(!L[a]&&M)try{require("./lang/"+a)}catch(b){return H.fn._lang}return L[a]}function p(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function q(a){var b,c,d=a.match(P);for(b=0,c=d.length;c>b;b++)d[b]=ib[d[b]]?ib[d[b]]:p(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function r(a,b){function c(b){return a.lang().longDateFormat(b)||b}for(var d=5;d--&&Q.test(b);)b=b.replace(Q,c);return fb[b]||(fb[b]=q(b)),fb[b](a)}function s(a,b){switch(a){case"DDDD":return T;case"YYYY":return U;case"YYYYY":return V;case"S":case"SS":case"SSS":case"DDD":return S;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return W;case"a":case"A":return o(b._l)._meridiemParse;case"X":return Z;case"Z":case"ZZ":return X;case"T":return Y;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return R;default:return new RegExp(a.replace("\\",""))}}function t(a){var b=(X.exec(a)||[])[0],c=(b+"").match(bb)||["-",0,0],d=+(60*c[1])+~~c[2];return"+"===c[0]?-d:d}function u(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":e[1]=null==b?0:~~b-1;break;case"MMM":case"MMMM":d=o(c._l).monthsParse(b),null!=d?e[1]=d:c._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=b&&(e[2]=~~b);break;case"YY":e[0]=~~b+(~~b>68?1900:2e3);break;case"YYYY":case"YYYYY":e[0]=~~b;break;case"a":case"A":c._isPm=o(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[3]=~~b;break;case"m":case"mm":e[4]=~~b;break;case"s":case"ss":e[5]=~~b;break;case"S":case"SS":case"SSS":e[6]=~~(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=t(b)}null==b&&(c._isValid=!1)}function v(a){var b,c,d=[];if(!a._d){for(b=0;7>b;b++)a._a[b]=d[b]=null==a._a[b]?2===b?1:0:a._a[b];d[3]+=~~((a._tzm||0)/60),d[4]+=~~((a._tzm||0)%60),c=new Date(0),a._useUTC?(c.setUTCFullYear(d[0],d[1],d[2]),c.setUTCHours(d[3],d[4],d[5],d[6])):(c.setFullYear(d[0],d[1],d[2]),c.setHours(d[3],d[4],d[5],d[6])),a._d=c}}function w(a){var b,c,d=a._f.match(P),e=a._i;for(a._a=[],b=0;b<d.length;b++)c=(s(d[b],a).exec(e)||[])[0],c&&(e=e.slice(e.indexOf(c)+c.length)),ib[d[b]]&&u(d[b],c,a);e&&(a._il=e),a._isPm&&a._a[3]<12&&(a._a[3]+=12),a._isPm===!1&&12===a._a[3]&&(a._a[3]=0),v(a)}function x(a){var b,c,d,f,h,i=99;for(f=0;f<a._f.length;f++)b=g({},a),b._f=a._f[f],w(b),c=new e(b),h=l(b._a,c.toArray()),c._il&&(h+=c._il.length),i>h&&(i=h,d=c);g(a,d)}function y(a){var b,c=a._i,d=$.exec(c);if(d){for(a._f="YYYY-MM-DD"+(d[2]||" "),b=0;4>b;b++)if(ab[b][1].exec(c)){a._f+=ab[b][0];break}X.exec(c)&&(a._f+=" Z"),w(a)}else a._d=new Date(c)}function z(b){var c=b._i,d=N.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?y(b):k(c)?(b._a=c.slice(0),v(b)):b._d=c instanceof Date?new Date(+c):new Date(c)}function A(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function B(a,b,c){var d=K(Math.abs(a)/1e3),e=K(d/60),f=K(e/60),g=K(f/24),h=K(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",K(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,A.apply({},i)}function C(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=H(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function D(a){var b=a._i,c=a._f;return null===b||""===b?null:("string"==typeof b&&(a._i=b=o().preparse(b)),H.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?x(a):w(a):z(a),new e(a))}function E(a,b){H.fn[a]=H.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),H.updateOffset(this),this):this._d["get"+c+b]()}}function F(a){H.duration.fn[a]=function(){return this._data[a]}}function G(a,b){H.duration.fn["as"+a]=function(){return+this/b}}for(var H,I,J="2.1.0",K=Math.round,L={},M="undefined"!=typeof module&&module.exports,N=/^\/?Date\((\-?\d+)/i,O=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,P=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,Q=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,R=/\d\d?/,S=/\d{1,3}/,T=/\d{3}/,U=/\d{1,4}/,V=/[+\-]?\d{1,6}/,W=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,X=/Z|[\+\-]\d\d:?\d\d/i,Y=/T/i,Z=/[\+\-]?\d+(\.\d{1,3})?/,$=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,_="YYYY-MM-DDTHH:mm:ssZ",ab=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],bb=/([\+\-]|\d\d)/gi,cb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),db={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},eb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},fb={},gb="DDD w W M D d".split(" "),hb="M D H h m s w W".split(" "),ib={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return i(this.year()%100,2)},YYYY:function(){return i(this.year(),4)},YYYYY:function(){return i(this.year(),5)},gg:function(){return i(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return i(this.weekYear(),5)},GG:function(){return i(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return i(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return i(~~(this.milliseconds()/10),2)},SSS:function(){return i(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(~~(a/60),2)+":"+i(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(~~(10*a/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};gb.length;)I=gb.pop(),ib[I+"o"]=c(ib[I],I);for(;hb.length;)I=hb.pop(),ib[I+I]=b(ib[I],2);for(ib.DDDD=b(ib.DDD,3),d.prototype={set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=H([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=H([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return C(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},H=function(a,b,c){return D({_i:a,_f:b,_l:c,_isUTC:!1})},H.utc=function(a,b,c){return D({_useUTC:!0,_isUTC:!0,_l:c,_i:a,_f:b})},H.unix=function(a){return H(1e3*a)},H.duration=function(a,b){var c,d,e=H.isDuration(a),g="number"==typeof a,h=e?a._input:g?{}:a,i=O.exec(a);return g?b?h[b]=a:h.milliseconds=a:i&&(c="-"===i[1]?-1:1,h={y:0,d:~~i[2]*c,h:~~i[3]*c,m:~~i[4]*c,s:~~i[5]*c,ms:~~i[6]*c}),d=new f(h),e&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},H.version=J,H.defaultFormat=_,H.updateOffset=function(){},H.lang=function(a,b){return a?(b?n(a,b):L[a]||o(a),H.duration.fn._lang=H.fn._lang=o(a),void 0):H.fn._lang._abbr},H.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),o(a)},H.isMoment=function(a){return a instanceof e},H.isDuration=function(a){return a instanceof f},H.fn=e.prototype={clone:function(){return H(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return r(H(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!l(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=r(this,a||H.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?H.duration(+b,a):H.duration(a,b),j(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?H.duration(+b,a):H.duration(a,b),j(this,c,-1),this},diff:function(a,b,c){var d,e,f=this._isUTC?H(a).zone(this._offset||0):H(a).local(),g=6e4*(this.zone()-f.zone());return b=m(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-H(this).startOf("month")-(f-H(f).startOf("month")))/d,e-=6e4*(this.zone()-H(this).startOf("month").zone()-(f.zone()-H(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},from:function(a,b){return H.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(H(),a)},calendar:function(){var a=this.diff(H().startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},isLeapYear:function(){var a=this.year();return 0===a%4&&0!==a%100||0===a%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?"string"==typeof a&&(a=this.lang().weekdaysParse(a),"number"!=typeof a)?this:this.add({d:a-b}):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),H.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=m(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),this},endOf:function(a){return this.startOf(a).add(a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+H(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+H(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+H(a).startOf(b)},min:function(a){return a=H.apply(null,arguments),this>a?this:a},max:function(a){return a=H.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=t(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,H.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return H.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(a){var b=K((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},weekYear:function(a){var b=C(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=C(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=C(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},lang:function(b){return b===a?this._lang:(this._lang=o(b),this)}},I=0;I<cb.length;I++)E(cb[I].toLowerCase().replace(/s$/,""),cb[I]);E("year","FullYear"),H.fn.days=H.fn.day,H.fn.months=H.fn.month,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.fn.toJSON=H.fn.toISOString,H.duration.fn=f.prototype={_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(a){var b=+this,c=B(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=H.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=H.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=m(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=m(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:H.fn.lang};for(I in db)db.hasOwnProperty(I)&&(G(I,db[I]),F(I.toLowerCase()));G("Weeks",6048e5),H.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},H.lang("en",{ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),M&&(module.exports=H),"undefined"==typeof ender&&(this.moment=H),"function"==typeof define&&define.amd&&define("moment",[],function(){return H})}.call(this),function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,b=self.Prism={util:{type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var c=b.util.type(a);switch(c){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=b.util.clone(a[e]));return d;case"Array":return a.slice()}return a}},languages:{extend:function(a,c){var d=b.util.clone(b.languages[a]);for(var e in c)d[e]=c[e];return d},insertBefore:function(a,c,d,e){e=e||b.languages;var f=e[a],g={};for(var h in f)if(f.hasOwnProperty(h)){if(h==c)for(var i in d)d.hasOwnProperty(i)&&(g[i]=d[i]);g[h]=f[h]}return e[a]=g},DFS:function(a,c){for(var d in a)c.call(a,d,a[d]),"Object"===b.util.type(a)&&b.languages.DFS(a[d],c)}},highlightAll:function(a,c){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)b.highlightElement(d,a===!0,c)},highlightElement:function(d,e,f){for(var g,h,i=d;i&&!a.test(i.className);)i=i.parentNode;if(i&&(g=(i.className.match(a)||[,""])[1],h=b.languages[g]),h){d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+g,i=d.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(a,"").replace(/\s+/g," ")+" language-"+g);var j=d.textContent;if(j){j=j.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var k={element:d,language:g,grammar:h,code:j};if(b.hooks.run("before-highlight",k),e&&self.Worker){var l=new Worker(b.filename);l.onmessage=function(a){k.highlightedCode=c.stringify(JSON.parse(a.data),g),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(k.element),b.hooks.run("after-highlight",k)},l.postMessage(JSON.stringify({language:k.language,code:k.code}))}else k.highlightedCode=b.highlight(k.code,k.grammar,k.language),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(d),b.hooks.run("after-highlight",k)}}},highlight:function(a,d,e){return c.stringify(b.tokenize(a,d),e)},tokenize:function(a,c){var d=b.Token,e=[a],f=c.rest;if(f){for(var g in f)c[g]=f[g];delete c.rest}a:for(var g in c)if(c.hasOwnProperty(g)&&c[g]){var h=c[g],i=h.inside,j=!!h.lookbehind,k=0;h=h.pattern||h;for(var l=0;l<e.length;l++){var m=e[l];if(e.length>a.length)break a;if(!(m instanceof d)){h.lastIndex=0;var n=h.exec(m);if(n){j&&(k=n[1].length);var o=n.index-1+k,n=n[0].slice(k),p=n.length,q=o+p,r=m.slice(0,o+1),s=m.slice(q+1),t=[l,1];r&&t.push(r);var u=new d(g,i?b.tokenize(n,i):n);t.push(u),s&&t.push(s),Array.prototype.splice.apply(e,t)}}}}return e},hooks:{all:{},add:function(a,c){var d=b.hooks.all;d[a]=d[a]||[],d[a].push(c)},run:function(a,c){var d=b.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(c)}}},c=b.Token=function(a,b){this.type=a,this.content=b};if(c.stringify=function(a,d,e){if("string"==typeof a)return a;if("[object Array]"==Object.prototype.toString.call(a))return a.map(function(b){return c.stringify(b,d,a)}).join("");var f={type:a.type,content:c.stringify(a.content,d,e),tag:"span",classes:["token",a.type],attributes:{},language:d,parent:e};"comment"==f.type&&(f.attributes.spellcheck="true"),b.hooks.run("wrap",f);var g="";for(var h in f.attributes)g+=h+'="'+(f.attributes[h]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+g+">"+f.content+"</"+f.tag+">"},!self.document)return self.addEventListener("message",function(a){var c=JSON.parse(a.data),d=c.language,e=c.code;self.postMessage(JSON.stringify(b.tokenize(e,b.languages[d]))),self.close()},!1),void 0;var d=document.getElementsByTagName("script");d=d[d.length-1],d&&(b.filename=d.src,document.addEventListener&&!d.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",b.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),window.Modernizr=function(a,b,c){function d(a){n.cssText=a}function e(a,b){return typeof a===b}var f,g,h,i="2.6.2",j={},k=b.documentElement,l="modernizr",m=b.createElement(l),n=m.style,o=({}.toString,{}),p=[],q=p.slice,r={}.hasOwnProperty;h=e(r,"undefined")||e(r.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return r.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=q.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(q.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(q.call(arguments)))};return d}),o.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c};for(var s in o)h(o,s)&&(g=s.toLowerCase(),j[g]=o[s](),p.push((j[g]?"":"no-")+g));return j.addTest=function(a,b){if("object"==typeof a)for(var d in a)h(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(k.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),m=f=null,j._version=i,j}(this,this.document),function(){function a(){var a=moment().add(u.extraTime);a.clone().diff(x)<0?b():a.clone().diff(y)<0?c():a.clone().diff(v)<0?d():a.clone().diff(A)<0?e():a.clone().diff(z)<0?f():g()}function b(){h("before")&&(k(),i("Catch We Build SG LIVE"),n(),l(),w.setAttribute("data-state","before")),q("full")}function c(){h("pre")&&(m(),i("Catch We Build SG LIVE"),n(),j("radio",!1),w.setAttribute("data-state","pre")),q("full")}function d(){h("countdown")&&(m(),i("We Build SG LIVE is airing soon"),n(),j("live",!0),w.setAttribute("data-state","countdown")),q("short")}function e(){h("during-live")&&(m(),i("We Build SG LIVE is airing now!"),o("join us in the chat and conversation below"),j("live",!0),w.setAttribute("data-state","during-live"))}function f(){r("live",function(){h("during-live")&&(m(),i("We Build SG LIVE is airing now!"),o("join us in the chat and conversation below"),j("live",!0),w.setAttribute("data-state","during-live"))},function(){h("during-radio")&&(i("We Build SG LIVE just finished airing"),o("continue to join us in the chat below"),j("radio",!0),w.setAttribute("data-state","during-radio"))})}function g(){h("after")&&(m(),k(),p(),i("We Build SG LIVE just finished!"),o("we will publish info on the next live show shortly"),w.setAttribute("data-state","after"))}function h(a){return w.getAttribute("data-state")!=a}function i(a){var b=document.getElementById("liveHeading");null==b&&(b=document.createElement("h3"),b.setAttribute("id","liveHeading"),b.setAttribute("class","important"),w.appendChild(b)),b.innerHTML=a}function j(a,b){var c=document.getElementById("liveAudio");if(null==c&&(c=document.createElement("audio"),c.setAttribute("class","liveaudio"),c.setAttribute("id","liveAudio"),c.setAttribute("controls","controls"),w.appendChild(c)),Modernizr.audio.mp3||(a+="-ogg",console.log("Because FF is *&!%@%!$@ we're using ogg now.. Happy?? ")),c.src!==u.streamingServerName+a&&c.setAttribute("src",u.streamingServerName+a),b&&c.play(),u.usingiFrameIRC){var d=document.getElementById("liveChat");null==d&&(d=document.createElement("iframe"),d.setAttribute("id","liveChat"),d.setAttribute("class","livechat"),d.setAttribute("src","http://webchat.freenode.net?channels=webuildsg&uio=MT1mYWxzZSY5PXRydWUmMTE9NTEfe"),w.appendChild(d))}}function k(){var a=document.getElementById("liveAudio");null!=a&&w.removeChild(a);var b=document.getElementById("liveChat");null!=b&&w.removeChild(b)}function l(){var a=document.createElement("p");a.setAttribute("id","liveTime"),a.setAttribute("class","podcastTime"),a.innerHTML=v.format("D MMM YYYY, ddd @h:mm a Z")+" GMT",w.appendChild(a)}function m(){var a=document.getElementById("liveTime");null!=a&&w.removeChild(a)}function n(){var a=document.getElementById("liveCountdown");if(null==a){var b=document.createElement("p");b.setAttribute("class","countdown"),b.setAttribute("id","liveCountdown"),w.appendChild(b)}}function o(a){n();var b=document.getElementById("liveCountdown");b.innerHTML=a}function p(){var a=document.getElementById("liveCountdown");null!=a&&w.removeChild(a)}function q(a){var b=moment().add(u.extraTime);s=v.clone(),ms=s.diff(b,"milliseconds",!0),days=Math.floor(moment.duration(ms).asDays()),s.subtract("days",days),ms=s.diff(b,"milliseconds",!0),hours=Math.floor(moment.duration(ms).asHours()),s.subtract("hours",hours),ms=s.diff(b,"milliseconds",!0),minutes=Math.floor(moment.duration(ms).asMinutes()),s.subtract("minutes",minutes),ms=s.diff(b,"milliseconds",!0),seconds=Math.floor(moment.duration(ms).asSeconds()),diff="short"==a?"in <strong> "+seconds+"</strong>...":"in <strong>"+days+"</strong> days <strong>"+hours+"</strong> hours <strong>"+minutes+"</strong> minutes <strong>"+seconds+"</strong> seconds";var c=document.getElementById("liveCountdown");c.innerHTML=diff}function r(a,b,c){if(Modernizr.audio.mp3||(station+="-ogg"),null==t)t=new Audio(u.streamingServerName+a),t.preLoad="none",t.pause(),B=0;else if(t.src!=u.streamingServerName+a)t.src=u.streamingServerName+a,t.preLoad="none",t.pause(),B=0;else{if(B++,3>B)return;if(B>10)return t.src="",void 0;null!=t.error||t.networkState==HTMLMediaElement.NETWORK_NO_SOURCE||t.networkState==HTMLMediaElement.NETWORK_EMPTY?c():b()}}var s,t,u={extraTime:{days:0,hours:0,minutes:0},podcastTimeString:"2014-03-15 11:00 +0800",timeFormatString:"YYYY-MM-DD HH:mm Z",preMoment:{unit:"hours",amount:15},startMoment:{unit:"seconds",amount:15},liveEndMoment:{unit:"minutes",amount:30},stopMoment:{unit:"hours",amount:2},streamingServerName:"http://listen.webuild.sg:8000/",usingiFrameIRC:0},v=moment(u.podcastTimeString,u.timeFormatString),w=document.getElementById("liveDiv"),x=v.clone().subtract(u.preMoment.unit,u.preMoment.amount),y=v.clone().subtract(u.startMoment.unit,u.startMoment.amount),z=v.clone().add(u.stopMoment.unit,u.stopMoment.amount),A=v.clone().add(u.liveEndMoment.unit,u.liveEndMoment.amount),B=0;document.getElementsByTagName("header")[0].addEventListener("click",function(){window.parent.location.href="/"}),window.addEventListener("hashchange",function(){var a=window.location.hash;if("#t="==a.substring(0,3)){var b=a.replace(/#t=/,"").split(":"),c=parseInt(b[b.length]);b[b.length-1]&&(c+=60*parseInt(b[b.length-1])),b[b.length-2]&&(c+=60*60*parseInt(b[b.length-2]));var d=document.getElementsByTagName("audio")[0];d&&c&&(d.currentTime=c,d.play())}}),a(),setInterval(a,1e3)}();