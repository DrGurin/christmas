(function(t){function e(e){for(var s,c,r=e[0],o=e[1],l=e[2],v=0,d=[];v<r.length;v++)c=r[v],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var o=i[r];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=i[0]))}return t}var s={},a={app:0},n=[];function c(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=s,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(i,s,function(e){return t[e]}.bind(null,s));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var m=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"017a":function(t,e,i){t.exports=i.p+"img/8.8242495a.jpg"},"0344":function(t,e,i){t.exports=i.p+"media/background.d9a93b69.mp4"},"0c55":function(t,e,i){t.exports=i.p+"img/traditions.d71afa8b.jpg"},"129c":function(t,e,i){t.exports=i.p+"img/6.a1959131.jpg"},4281:function(t,e,i){t.exports=i.p+"img/10.c2ea8544.jpg"},"546a":function(t,e,i){t.exports=i.p+"img/5.59c457da.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[t._m(0),s("div",{staticClass:"header_right"},[s("p",{staticClass:"header_item header_item_main",class:[t.changeTabMain?"active-tab":""],on:{click:t.changeTabMain}},[t._v("Різдво")]),s("p",{staticClass:"header_item header_item_about",class:[t.changeTabTraditions?"active-tab":""],on:{click:t.changeTabTraditions}},[t._v("Звичаї")]),s("p",{staticClass:"header_item header_item_service",class:[t.changeTabSupper?"active-tab":""],on:{click:t.changeTabSupper}},[t._v("Вечеря")]),s("p",{staticClass:"header_item header_item_contacts",class:[t.changeTabPhoto?"active-tab":""],on:{click:t.changeTabPhoto}},[t._v("Світлини")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.isTabActive,expression:"isTabActive"}],attrs:{id:"burger",type:"checkbox"},domProps:{checked:Array.isArray(t.isTabActive)?t._i(t.isTabActive,null)>-1:t.isTabActive},on:{change:function(e){var i=t.isTabActive,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=null,c=t._i(i,n);s.checked?c<0&&(t.isTabActive=i.concat([n])):c>-1&&(t.isTabActive=i.slice(0,c).concat(i.slice(c+1)))}else t.isTabActive=a}}}),t._m(1),s("nav",[s("ul",[s("li",{staticClass:"nav_tab",on:{click:t.changeTabMain}},[t._v("Різдво")]),s("li",{staticClass:"nav_tab",on:{click:t.changeTabTraditions}},[t._v("Звичаї")]),s("li",{staticClass:"nav_tab",on:{click:t.changeTabSupper}},[t._v("Вечеря")]),s("li",{staticClass:"nav_tab",on:{click:t.changeTabPhoto}},[t._v("Cвітлини")])])])])]),t._m(2),s("div",{staticClass:"content"},[t.anyActive?t._e():s("div",{staticClass:"content-item main"},[s("h1",{staticClass:"main-title"},[t._v("святкування різдва на поділлі")])]),t.isChridtmasIs?s("div",{staticClass:"content-item chridtmasIs"},[t._m(3),s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("a5ab"),alt:"christmas image"}}),t._m(4)]):t._e(),t.isTraditions?s("div",{staticClass:"content-item traditions"},[t._m(5),t._m(6),t._m(7),s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("0c55"),alt:"christmas image"}})]):t._e(),t.isSupper?s("div",{staticClass:"content-item supper"},[t._m(8),s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("c8ec"),alt:"christmas image"}}),s("p",{staticClass:"content-item-element content-item-text"},[t._v("Підготовка до святкової вечері мала всі ознаки церемоніалу та складалася з чіткої послідовності дій. Під образами на покуті стелили чисте сіно, а на нього ставили горщики з узваром і кутею і приказували: «Щоб кутя на покуть, а узвар на базар». Особливо підготовлювали стіл – його зверху притрушували соломою, по кутках клали часник як оберіг, а потім все вкривали скатертиною. На підлогу під стіл теж клали сіно, в яке було прийнято ховати сокиру та інші інструменти та господарські знаряддя із заліза, які за повір’ям мали захистити членів сім’ї від злих сил та забезпечити їм здоров’я. Усі предмети, які торкалися столу, за народними уявленнями, набували особливої сили і могли стати важливим магічним або ж лікувальним засобом.")]),s("p",{staticClass:"content-item-element content-item-text"},[t._v("На вечерю готували дванадцять страв. Чому саме дванадцять страв? Етнографи кажуть, що це може бути пов’язано з дванадцятьма місяцями та певними календарними ритуалами у дохристиянські часи. У наш час число дванадцять трактують як згадку про дванадцять апостолів Ісуса Христа. Звичайно до Святвечора споживали всі продукти, наявні у господарстві, за винятком заборонених у піст. Різноманітність і багатство наїдків у цей день повинні були сприяти добробуту родини наступного року. Навіть найбідніші селяни докладали максимум зусиль, щоб гідно зустріти Різдво. Щоб встигнути приготувати дванадцять страв на святкову вечерю, господиня вставала дуже рано, розпалювала піч, обов’язково добуваючи «живий» вогонь (за допомогою шматків дерева, або кресала). У піч клала дванадцять полін. Для приготування страв набиралася досхідня вода, нею заливали пшеницю, сушені фрукти, і спершу ставили в піч варити дві головні страви – кутю та узвар.")]),s("p",{staticClass:"content-item-element content-item-text"},[t._v("Кутя – варена пшениця з медом. Кутя з’явилася ще в дохристиянську добу та було глибоко символічною стравою. Пшениця, як зерно, щороку оживає, тому є символом вічності, а мед – символ вічного щастя святих у небі. Варили кутю у спеціальному горщику, в якому нічого іншого не варилося, або купували щораз новий. Узвар варився з сушених яблук, грушок, слив. На Поділлі узвар інколи ще називали сушеницею.")]),s("p",{staticClass:"content-item-element content-item-text"},[t._v("Святкові страви починали куштувати як сходила вечірня зоря. Починали із куті. Поклавши в рукавицю гроші (щоб водились), господиня несла кутю на покуть, а діти під час цієї ходи завзято мекали, мукали, іржали, квоктали, крякали – щоб уся свійська живність плодилася, щоб курчата й каченята водилися. Перша ложка куті була для бджіл – кутю кидали до стелі, щоб рої велися. Друга – для самого морозу, щоб отак задобрений, він не чинив збитків, не морозив посівів. До того ж, серед подолян широко побутувало повір'я, що душі померлих родичів беруть участь у святковій трапезі, їх обов'язково згадували добрим словом. Для них після вечері залишали рештки їжі на столі (мити посуд у цей день вважалося гріхом). На ніч усі члени родини клали свої ложки у горщик з кутею. Це робилося для того, щоб святої каші могли поїсти предки.")]),s("p",{staticClass:"content-item-element content-item-text"},[t._v("Повечерявши, брав господар зі столу потроху кожної із страв і ніс до хліва худобі, щоб не скаржилася. Бо, за повір'ям, у ніч під Різдво дарує їй Бог мову – за те, що колись у давнину спав у яслах маленький Христос. Кутю давали курям, «щоб гарно неслися». Її несли на гостинець хрещеним батькам, бабі-повитусі, родичам.")]),s("p",{staticClass:"content-item-element content-item-text"},[t._v("На багату кутю відбувався також обмін ритуальними стравами. Вочевидь, ця традиція теж має дохристиянське коріння. Вечеря, що її посилали з дітьми бабі-повитусі, родичам, хрещеним батькам, як правило, складалася з куті, книшів, пирогів, риби тощо. Прийнявши обрядові страви, господарі дякували і обов’язково передавали дари у відповідь зі свого столу. В такий спосіб відбувався ритуальний обмін вечерею, який символізував спорідненість сімей та їх взаємну щедрість. Діток, які приносили вечерю, було прийнято пригощати та обдаровувати гостинцями (горіхами, яблуками, пиріжками, цукерками).")])]):t._e(),t.isPhoto?s("div",{staticClass:"content-item photo"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{someSwiperEvent:t.callback}},[s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("98a8"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("593c"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("6800"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("ffd7"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("546a"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("129c"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("017a"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("959c"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("4281"),alt:"christmas image"}})]),s("swiper-slide",[s("img",{staticClass:"content-item-element content-item-image",attrs:{src:i("baa1"),alt:"christmas image"}})]),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),s("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),s("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],1)],1):t._e()])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header_left"},[i("h1",{staticClass:"logo"},[t._v("РІЗДВО")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"label",attrs:{for:"burger"}},[i("span"),i("span"),i("span")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"video-bg"}},[s("video",{attrs:{width:"100%",height:"auto",preload:"auto",autoplay:"autoplay",loop:"loop",poster:i("a79f")}},[s("source",{attrs:{src:i("0344"),type:"video/mp4"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"content-item-element content-item-title"},[i("b",[t._v("Що таке Христове Різдво?")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"content-item-element content-item-text"},[i("b",[t._v("Різдво Христове")]),t._v(" — велике християнське свято, день Народження Ісуса Христа, Спасителя світу і Відкупителя людей з полону гріха."),i("br"),t._v("Римо-Католицька Церква, більшість протестантських церков, а також більшість православних, включаючи Константинопольську, Антіохійську, Александрійську, Кіпрську, Болгарську, Румунську й Грецьку церкви, святкують Різдво в ніч з 24 на 25 грудня."),i("br"),t._v("Єрусалимська, Російська, Сербська, Грузинська православні церкви, усі Українські православні церкви, а також Українська греко-католицька церква святкують Різдво в ніч на 25 грудня за старим Юліанським календарем, що в XX-ХХІ століттях відповідає ночі з 6 січня на 7 січня за сучасним Григоріанським календарем."),i("br"),t._v("Вірменська апостольська церква святкує Різдво 6 січня, в один день із Хрещенням Господнім.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"myTree"},[i("div",{staticClass:"container-christmass-tree"},[i("div",{staticClass:"star"},[i("div",{staticClass:"layer2"},[i("div")]),i("div",{staticClass:"tree"},[i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")]),i("div",{staticClass:"branch"},[i("div"),i("div"),i("div"),i("div"),i("div")])])]),i("div",{staticClass:"stump"})]),i("div",{staticClass:"snowFlakes"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"content-item-element content-item-title"},[i("b",[t._v("Звичаї")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"content-item-element content-item-text"},[t._v("Традиційно Україна святкує Рождення Христове 7 січня. А перед тим 6 числа разом з першою (Віфлиємською) зіркою на небі. Уся родина сідає за спільну святкову вечерю біля Різдвяної ялинки, щоб відсвяткувати народження Ісуса."),i("br"),t._v(" Є певні традиції святкування Різдва, які присутні в усіх регіонах України."),i("br"),t._v(" Головна традиція – це свята вечеря, яка складається зі дванадцяти страв. Але \"королевою\" столу, звісно, є кутя. Колись із нею навіть проводили певний обряд. Господар хрестив страву, пробував першу ложку, а потім трохи підкидав вгору. Якщо до стелі прилипне хоч трохи, то наступний рік буде врожайним. Зараз, звісно, ця традиція не виконується.Традиційно святвечір починається молитвою за здоров'я тих, хто живий, і за упокій тих, хто помер. Її виголошує хазяїн дому. Якщо за минулий рік у сім'ї хтось помер, то йому теж ставили тарілку і клали туди трохи куті.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"content-item-element content-item-title"},[i("b",[t._v("Свята вечеря")])])}],c=(i("dfa4"),i("7212")),r=i.n(c),o={name:"app",components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"]},data:function(){return{isTabActive:!1,anyActive:!1,isChridtmasIs:!1,isTraditions:!1,isSupper:!1,isPhoto:!1,swiperOption:{}}},methods:{changeTabMain:function(){this.isChridtmasIs=!0,this.isTraditions=!1,this.isSupper=!1,this.isPhoto=!1,this.isTabActive=!1,this.anyActive=!0},changeTabTraditions:function(){this.isChridtmasIs=!1,this.isTraditions=!0,this.isSupper=!1,this.isPhoto=!1,this.isTabActive=!1,this.anyActive=!0},changeTabSupper:function(){this.isChridtmasIs=!1,this.isTraditions=!1,this.isSupper=!0,this.isPhoto=!1,this.isTabActive=!1,this.anyActive=!0},changeTabPhoto:function(){this.isChridtmasIs=!1,this.isTraditions=!1,this.isSupper=!1,this.isPhoto=!0,this.isTabActive=!1,this.anyActive=!0}}},l=o,m=(i("5c0b"),i("2877")),v=Object(m["a"])(l,a,n,!1,null,null,null),d=v.exports;s["a"].config.productionTip=!1,s["a"].use(r.a),new s["a"]({render:function(t){return t(d)}}).$mount("#app")},"593c":function(t,e,i){t.exports=i.p+"img/2.a1959131.jpg"},"5c0b":function(t,e,i){"use strict";var s=i("9c0c"),a=i.n(s);a.a},6800:function(t,e,i){t.exports=i.p+"img/3.418d1506.jpg"},"959c":function(t,e,i){t.exports=i.p+"img/9.f3185db4.jpg"},"98a8":function(t,e,i){t.exports=i.p+"img/1.ac4b8450.jpg"},"9c0c":function(t,e,i){},a5ab:function(t,e,i){t.exports=i.p+"img/christmasIs.1a5c4619.jpg"},a79f:function(t,e,i){t.exports=i.p+"img/poster.a619a0e0.jpg"},baa1:function(t,e,i){t.exports=i.p+"img/11.71a4ee30.jpg"},c8ec:function(t,e,i){t.exports=i.p+"img/supper.e5702f77.jpg"},ffd7:function(t,e,i){t.exports=i.p+"img/4.ed9d0c43.jpg"}});
//# sourceMappingURL=app.8a60c4cc.js.map