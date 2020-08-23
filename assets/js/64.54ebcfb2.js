(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{484:function(t,a,s){"use strict";s.r(a);var v=s(30),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h4",{attrs:{id:"什么是复杂度分析？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是复杂度分析？"}},[t._v("#")]),t._v(" 什么是复杂度分析？")]),t._v(" "),s("ul",[s("li",[t._v("1.数据结构和算法解决是“如何让计算机更快时间、更省空间的解决问题”。")]),t._v(" "),s("li",[t._v("2.因此需从执行时间和占用空间两个维度来评估数据结构和算法的性能。")]),t._v(" "),s("li",[t._v("3.分别用时间复杂度和空间复杂度两个概念来描述性能问题，二者统称为复杂度。")]),t._v(" "),s("li",[t._v("4.复杂度描述的是算法执行时间（或占用空间）与数据规模的增长关系。")])]),t._v(" "),s("h4",{attrs:{id:"为什么要进行复杂度分析？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要进行复杂度分析？"}},[t._v("#")]),t._v(" 为什么要进行复杂度分析？")]),t._v(" "),s("ul",[s("li",[t._v("1.和性能测试相比，复杂度分析有不依赖执行环境、成本低、效率高、易操作、指导性强的特点。")]),t._v(" "),s("li",[t._v("2.掌握复杂度分析，将能编写出性能更优的代码，有利于降低系统开发和维护成本。")])]),t._v(" "),s("h4",{attrs:{id:"如何进行复杂度分析？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何进行复杂度分析？"}},[t._v("#")]),t._v(" 如何进行复杂度分析？")]),t._v(" "),s("ul",[s("li",[t._v("1.大O表示法\n"),s("ul",[s("li",[t._v("1）来源\n"),s("ul",[s("li",[t._v("算法的执行时间与每行代码的执行次数成正比，用T(n) = O(f(n))表示，其中T(n)表示算法执行总时间，f(n)表示每行代码执行总次数，而n往往表示数据的规模。")])])]),t._v(" "),s("li",[t._v("2）特点\n以时间复杂度为例，由于时间复杂度描述的是算法执行时间与数据规模的增长变化趋势，所以常量阶、低阶以及系数实际上对这种增长趋势不产决定性影响，所以在做时间复杂度分析时忽略这些项。")])])]),t._v(" "),s("li",[t._v("2.复杂度分析法则\n"),s("ul",[s("li",[t._v("1）单段代码看高频：比如循环。")]),t._v(" "),s("li",[t._v("2）多段代码取最大：比如一段代码中有单循环和多重循环，那么取多重循环的复杂度。")]),t._v(" "),s("li",[t._v("3）嵌套代码求乘积：比如递归、多重循环等")]),t._v(" "),s("li",[t._v("4）多个规模求加法：比如方法有两个参数控制两个循环的次数，那么这时就取二者复杂度相加。")])])])]),t._v(" "),s("h4",{attrs:{id:"常用的复杂度级别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的复杂度级别？"}},[t._v("#")]),t._v(" 常用的复杂度级别？")]),t._v(" "),s("p",[t._v("算法的复杂度不考虑常数系数，例如2n 我们也说是n")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("多项式阶：随着数据规模的增长，算法的执行时间和空间占用，按照多项式的比例增长。\n当数据规模 n 越来越大时，非多项式量级算法的执行时间会急剧增加，求解问题的执行时间会无限增长。所以，非多项式时间复杂度的算法其实是非常低效的算法。")]),t._v(" "),s("ul",[s("li",[t._v("O(1)（常数阶）、")]),t._v(" "),s("li",[t._v("O(logn)（对数阶）、")]),t._v(" "),s("li",[t._v("O(n)（线性阶）、")]),t._v(" "),s("li",[t._v("O(nlogn)（线性对数阶）、")]),t._v(" "),s("li",[t._v("O(n^2)（平方阶）")]),t._v(" "),s("li",[t._v("O(n^3)（立方阶）")])])]),t._v(" "),s("li",[s("p",[t._v("非多项式阶：随着数据规模的增长，算法的执行时间和空间占用暴增，这类算法性能极差。包括，")]),t._v(" "),s("ul",[s("li",[t._v("O(2^n)（指数阶）、")]),t._v(" "),s("li",[t._v("O(n!)（阶乘阶）")])]),t._v(" "),s("p",[t._v("一般情况下，只要算法中不存在循环语句、递归语句，即使有成千上万行的代码，其时间复杂度也是Ο(1)")]),t._v(" "),s("img",{staticStyle:{width:"60%",margin:"0"},attrs:{src:"https://leiyiming.oss-cn-shenzhen.aliyuncs.com/img/image-20200524202130247.png",alt:"image-20200524202130247"}})])]),t._v(" "),s("h4",{attrs:{id:"空间复杂度分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度分析"}},[t._v("#")]),t._v(" 空间复杂度分析")]),t._v(" "),s("ul",[s("li",[t._v("常见的空间复杂度就是 O(1)、O(n)、O(n2)，像 O(logn)、O(nlogn) 这样的对数阶复杂度平时都用不到")])]),t._v(" "),s("h4",{attrs:{id:"复杂度分析的4个概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析的4个概念"}},[t._v("#")]),t._v(" 复杂度分析的4个概念")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.最坏情况时间复杂度：代码在最理想情况下执行的时间复杂度。")])]),t._v(" "),s("li",[s("p",[t._v("2.最好情况时间复杂度：代码在最坏情况下执行的时间复杂度。")])]),t._v(" "),s("li",[s("p",[t._v("3.平均时间复杂度：用代码在所有情况下执行的次数的加权平均值表示。")])]),t._v(" "),s("li",[s("p",[t._v("4.均摊时间复杂度：在代码执行的所有复杂度情况中绝大部分是低级别的复杂度，个别情况是高级别复杂度且发生具有时序关系时，可以将个别高级别复杂度均摊到低级别复杂度上。基本上均摊结果就等于低级别复杂度。")])])]),t._v(" "),s("h4",{attrs:{id:"为什么要引入这4个概念？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要引入这4个概念？"}},[t._v("#")]),t._v(" 为什么要引入这4个概念？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.同一段代码在不同情况下时间复杂度会出现量级差异，为了更全面，更准确的描述代码的时间复杂度，所以引入这4个概念。")])]),t._v(" "),s("li",[s("p",[t._v("2.代码复杂度在不同情况下出现量级差别时才需要区别这四种复杂度。大多数情况下，是不需要区别分析它们的。")])])]),t._v(" "),s("h4",{attrs:{id:"如何分析平均、均摊时间复杂度？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何分析平均、均摊时间复杂度？"}},[t._v("#")]),t._v(" 如何分析平均、均摊时间复杂度？")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.平均时间复杂度\n代码在不同情况下复杂度出现量级差别，则用代码所有可能情况下执行次数的加权平均值表示。")])]),t._v(" "),s("li",[s("p",[t._v("2.均摊时间复杂度\n两个条件满足时使用：1）代码在绝大多数情况下是低级别复杂度，只有极少数情况是高级别复杂度；2）低级别和高级别复杂度出现具有时序规律。均摊结果一般都等于低级别复杂度。")])])]),t._v(" "),s("h2",{attrs:{id:"如何简单快速地判断算法复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何简单快速地判断算法复杂度"}},[t._v("#")]),t._v(" 如何简单快速地判断算法复杂度")]),t._v(" "),s("p",[t._v("快速判断算法复杂度（适⽤用于绝⼤大多数简单情况）：")]),t._v(" "),s("ul",[s("li",[t._v("确定问题规模n")]),t._v(" "),s("li",[t._v("循环减半过程→logn")]),t._v(" "),s("li",[t._v("k层关于n的循环→nk")])]),t._v(" "),s("p",[t._v("复杂情况：根据算法执⾏行行过程判断")]),t._v(" "),s("p",[t._v("空间复杂度：⽤来评估算法内存占⽤⼤⼩的式⼦")]),t._v(" "),s("ul",[s("li",[t._v("空间复杂度的表示⽅方式与时间复杂度完全⼀一样")]),t._v(" "),s("li",[t._v("算法使⽤用了几个变量：O(1)")]),t._v(" "),s("li",[t._v("算法使⽤用了长度为n的一维列表：O(n)")]),t._v(" "),s("li",[t._v("算法使⽤用了m行n列的二维列表：O(mn)\n“空间换时间”")])]),t._v(" "),s("h4",{attrs:{id:"递归情况的复杂度分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归情况的复杂度分析"}},[t._v("#")]),t._v(" 递归情况的复杂度分析")]),t._v(" "),s("h5",{attrs:{id:"冗余的计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冗余的计算"}},[t._v("#")]),t._v(" 冗余的计算:")]),t._v(" "),s("p",[t._v("例:")]),t._v(" "),s("p",[t._v("计算斐波那契数列 Fib: 0, 1, 1, 2, 3, 5, 8, 13, 21,")]),t._v(" "),s("p",[t._v("通项公式F(n)= F(n-1)+F(n-2)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\nint "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("int n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果按照上这种方法来算的话，如下图，框选区域会多次计算，增加CPU计算量")]),t._v(" "),s("p",[t._v("解决：加一个缓存，把结构存下来，或是用循环来写")]),t._v(" "),s("img",{staticStyle:{width:"67%",margin:"0"},attrs:{src:"http://img.leiyiming.top/blog/image-20200524205403228.png",alt:"image-20200524205403228"}}),t._v(" "),s("h5",{attrs:{id:"主定理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主定理"}},[t._v("#")]),t._v(" 主定理")]),t._v(" "),s("p",[s("strong",[t._v("一般情形")])]),t._v(" "),s("ul",[s("li",[t._v("二分查找")]),t._v(" "),s("li",[t._v("二叉树")]),t._v(" "),s("li",[t._v("二维有序矩阵")]),t._v(" "),s("li",[t._v("归并排序")])]),t._v(" "),s("img",{staticStyle:{width:"67%",margin:"0"},attrs:{src:"http://img.leiyiming.top/blog/image-20200524210632708.png",alt:"image-20200524210632708"}}),t._v(" "),s("p",[t._v("对自己的要求：")]),t._v(" "),s("p",[t._v("​\t对自己所写的程序的复杂要了解，写完代码后要下意识的去想一下")])])}),[],!1,null,null,null);a.default=_.exports}}]);