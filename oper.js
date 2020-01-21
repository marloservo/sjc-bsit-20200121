$(document).ready(function() {
    $('#make-select').click(function(){
        var sel = document.createElement("select");
        var items = {
                "plus": "&#9547;",
                "minus": "&mdash;",
                "multiply": "&#9587;",
                "divide": "&#9585;",
                "square_root": "&#8730;&#175;"
        };
        $.each(items, function(key, value) {
            var opt = document.createElement("option");
            var opt = $(opt);
            opt.html(value);
            opt.val(key);
            $(sel).append(opt);
        });

        $("#ops").append(sel);

        $(this).unbind('click');
    });
});