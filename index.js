$(document).ready(function() {
    $('#myForm').on('submit', function(e) {
        e.preventDefault();
        $("#output").empty();
        var searchTerm = $("#searchTerm").val();
    	var url = 
        "https://en.wikipedia.org/w/api.php?action=query&format=json&list=usercontribs&ucuser="
         + searchTerm + "&ucdir=newer&uclimit=5&callback=?"; 
    	$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
       		dataType: "json",
            headers: { 'Api-User-Agent': 'useredits-tool/1.0' },
     		success: function(data, status, jqXHR) {
     			$("#output").html();
       			arr = data.query.usercontribs;
    			console.log(arr);
    			for(var i=0;i<arr.length;i++) {
     				$("#output").append(
                        "<div class='panel panel-default col-xs-4' > <div class='panel-body'>Title: "
                         + arr[i].title + "<br>Timestamp: " + arr[i].timestamp + "<br>Comment: " + 
                         arr[i].comment + "</div></div>");
     			}
            }
        })
    });
});