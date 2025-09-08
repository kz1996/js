/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
for (let key in p){
    if(object.prototype.hasOwnPropertie.call(p,key)){
        o[key]=p[key];
}
}
return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for (let key in o){
        if(object.prototype.hasOwmPropertie.call(o,key)&& !(key in p)){
            delete o[key];}
}

    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
   const a={}
    for (let key in o){
        if(object.prototype.hasOwmPropertie.call(o,key)&& key in p)
            a[key]=o[key];
}
    return a;
}
