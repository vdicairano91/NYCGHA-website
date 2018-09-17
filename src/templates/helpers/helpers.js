module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('list', function(context, options) {
        var ret = "<ul class='nav_main'>";
        for(var i=0, j=context.length; i<j; i++) {
            ret = ret + "<li>" + options.fn(context[i]).replace(/\n/g, "<br />") + "</li>";
        }
        return ret + "</ul>";
    });
    Handlebars.registerHelper('sidenavhelper', function(context, options) {
        var ret = "<ul class='links'>";
        for(var i=0, j=context.length; i<j; i++) {
            ret = ret + options.fn(context[i]);
        }
        return ret + "</ul>";
    });
    Handlebars.registerHelper('each', function(context, options) {
        var ret = "";

        for(var i=0, j=context.length; i<j; i++) {
            ret = ret + options.fn(context[i]);
        }

        return ret;
    });
};
