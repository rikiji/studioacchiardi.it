function sub(a) {
    return a.replace(" chiocciola ","@").replace(/ punto /g,".");
}

$(document).ready(function() {  
    $('.sub').each(function(e){
	$(this).attr("href",sub($(this).attr("href")));
	$(this).html(sub($(this).html()));
    });
});

