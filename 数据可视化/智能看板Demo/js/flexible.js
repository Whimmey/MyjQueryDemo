(function flexible(window, document) {
    // 获取html根元素
    var docEl = document.documentElement

    // 获取物理像素比。获取不到就设置为1
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize() {
        // 有body元素就设置body字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 没有body则等页面加载完毕再设置
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 24 设置html元素字体大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 24; //html宽度被划分为了二十四等分
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize 页面尺寸大小发生变化时，重新设置rem
    window.addEventListener('resize', setRemUnit) //pageshow页面加载会触发
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) { //true:页面从缓存取过来的
            setRemUnit() //缓存加载的也要重新加载
        }
    })

    // detect 0.5px supports 有些浏览器不支持0.5px的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))