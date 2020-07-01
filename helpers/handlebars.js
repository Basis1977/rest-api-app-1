var register = function(Handlebars) {
    var helpers = {
        inc: function(value, options) {
            return parseInt(value) + 1;
        },
        json: function(context) {
            return JSON.parse(context);
        }, 
        objToList: function(context, options) {
            function toList(obj, indent) {
            var res=""
            for (var k in obj) { 
                if (obj[k] instanceof Object) {
                    res=res+k+"\n"+toList(obj[k], ("   " + indent)) ;
                }
                else{
                    res=res+indent+k+" : "+obj[k]+"\n";
                }
            }
            return res;
            }    
            return toList(context,"");
        }
    };

if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
} else {
    return helpers;
}

};

module.exports.register = register;
module.exports.helpers = register(null); 