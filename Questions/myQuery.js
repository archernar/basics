function dq(sz) {
    return "\"" + sz + "\"";
}
function sq(sz) {
    return "\'" + sz + "\'";
}
function createElementWithClasss(e, c) {
        var ele=document.createElement(e);
        ele.classList.add(c);
        return ele;
}
function createElementWithClassAndTextNode(e, c) {
        var ele=document.createElement(e);
        ele.classList.add(c);
        return ele;
}

function swapClass(ele,oldclass,newclass) {
    const p=ele.cloneNode(true);
    p.classList.remove(oldclass);
    p.classList.add(newclass);
    return p;
}
