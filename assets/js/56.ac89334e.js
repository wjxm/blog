(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{475:function(a,t,v){"use strict";v.r(t);var e=v(30),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h3",{attrs:{id:"web结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web结构"}},[a._v("#")]),a._v(" web结构")]),a._v(" "),v("p",[a._v("**网站的前端：**通过用户肉眼看到的网站的布局，内容，对网站的操作的功能，一切可以让用户可以直接接触与操作的部分。")]),a._v(" "),v("p",[a._v("**网站的后端：**大量的业务逻辑，数据库io，用户不可见，不可直接接触的部分。")]),a._v(" "),v("p",[a._v("Ps：用户通过访问前端的功能，前端分为静态功能和动态功能。")]),a._v(" "),v("p",[a._v("静态功能则不会和后端服务器进行交互，仅在前端处理并响应用户")]),a._v(" "),v("p",[a._v("动态功能则通过与后端的交互，通过前端发送给后端的指令，在后端接到指令并作出相应逻辑处理后响应给前端，前端在收到后端响应后，将结果直接或二次加工后呈现给用户。")]),a._v(" "),v("h4",{attrs:{id:"前后端不分离结构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前后端不分离结构图"}},[a._v("#")]),a._v(" 前后端不分离结构图")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://leiyiming.oss-cn-shenzhen.aliyuncs.com/img/image-20200625220402237.png",alt:"image-20200625220402237"}})]),a._v(" "),v("h4",{attrs:{id:"前后端分离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离"}},[a._v("#")]),a._v(" 前后端分离")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://leiyiming.oss-cn-shenzhen.aliyuncs.com/img/image-20200625220411700.png",alt:"image-20200625220411700"}})]),a._v(" "),v("h3",{attrs:{id:"virtualenv"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv"}},[a._v("#")]),a._v(" "),v("strong",[a._v("Virtualenv")])]),a._v(" "),v("ul",[v("li",[a._v("Virtualenv是一个Python的虚拟环境库，通过它可以防止各个项目之间因为Python版本不同或第三方库版本不同引起冲突，每个虚拟环境都是独立，干净的")]),a._v(" "),v("li",[a._v("pip install virtualenv")]),a._v(" "),v("li",[a._v("创建虚拟环境路径：virtualenv -p python3 env")]),a._v(" "),v("li",[a._v("启动虚拟环境：. env/bin/active")]),a._v(" "),v("li",[a._v("推出虚拟环境： deactive")])]),a._v(" "),v("p",[a._v("Ps：虚拟环境不是必须的，根据个人情况和习惯使用")]),a._v(" "),v("h3",{attrs:{id:"django基础命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#django基础命令"}},[a._v("#")]),a._v(" django基础命令")]),a._v(" "),v("ul",[v("li",[a._v("django-admin startproject 项目名->创建一个django项目")]),a._v(" "),v("li",[a._v("python manage.py startapp 应用名->项目中创建一个应用")]),a._v(" "),v("li",[a._v("Python manage.py shell -> 进入调试代码的调试模式")]),a._v(" "),v("li",[a._v("python manage.py makemigrations -> 数据库创建更改文件")]),a._v(" "),v("li",[a._v("python manage.py migrate -> 同步到数据库进行更新")]),a._v(" "),v("li",[a._v("python manage.py flush -> 清空数据库")]),a._v(" "),v("li",[a._v("python manage.py runserver 0.0.0.0:8000 -> 启动开发服务器")]),a._v(" "),v("li",[a._v("python manage.py + 回车 可查看更多命令")])]),a._v(" "),v("h2",{attrs:{id:"路由器url的变量-参数-设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路由器url的变量-参数-设置"}},[a._v("#")]),a._v(" 路由器url的变量(参数)设置")]),a._v(" "),v("h3",{attrs:{id:"url的参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#url的参数"}},[a._v("#")]),a._v(" url的参数")]),a._v(" "),v("ol",[v("li",[a._v("在url后边用?开始，键与值用等号连接，每对键值用&号区分，如: http://127.0.0.1:8000/app?name=dewei&age=30")]),a._v(" "),v("li",[a._v("在路由的参数中用分隔符分开，如: http://127.0.0.1:8000/app/dewei/30")])]),a._v(" "),v("p",[a._v("django2的url变量类型")]),a._v(" "),v("p",[a._v("字符串类型：匹配任何非空字符串，但不包含斜杠，在不指定类型的前提下，默认字符串类型 "),v("a",{attrs:{href:"str:name"}},[a._v("str:name")])]),a._v(" "),v("p",[a._v("整型：匹配0和正整数 "),v("a",{attrs:{href:"int:age"}},[a._v("int:age")])]),a._v(" "),v("p",[a._v("slug:  可理解为注释，后缀或附属等概念 <slug: day>")]),a._v(" "),v("p",[a._v("uuid：匹配一个uuid格式的对象 <uuid: uid> 类似xxx-xx-xx")])])}),[],!1,null,null,null);t.default=r.exports}}]);