jQuery(document).ready(function() {
    $(".footnote").each(function() {
	// All footnote refs are the ID of the footnote prefixed by a # (an in-page reference):
	var footnote_id = $(this).attr("href");
	var footnote = $(footnote_id);
	console.log(footnote_id);
	console.log(footnote);
    });
});
