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
function setWidthClass(p, c) {
    p.classList.remove("width12");
    p.classList.remove("width33");
    p.classList.remove("width25");
    p.classList.remove("width40");
    p.classList.remove("width50");
    p.classList.remove("width75");
    p.classList.remove("width91");
    p.classList.remove("width100");
    p.classList.add(c);
}


function setClasses() {
    for (let i = 1; i < arguments.length; i++) {
        arguments[0].classList.add(arguments[i]);
    }
}
function unsetClasses() {
    for (let i = 1; i < arguments.length; i++) {
        arguments[0].classList.remove(arguments[i]);
    }
}
