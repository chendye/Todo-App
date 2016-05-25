/**
 * Created by onlycrazy on 16/5/25.
 */
function myFocus(sel, start, end) {
    if (sel.setSelectionRange) {
        sel.focus();
        sel.setSelectionRange(start,end);
    }
    else if (sel.createTextRange) {
        var range = sel.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        range.select();
    }
}

export default  {
    setFocus : function setFocus (sel) {
        length=sel.value.length;
        myFocus(sel, length, length);
    }
}