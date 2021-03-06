"use strict";

function OnAspectChanged(narrow)
{
    if (narrow) {
        cssNarrow_.href = "../../../css/entry-narrow.css";
    }
    else {
        cssNarrow_.href = "";
    }
}

function OnResize()
{
    // Called from resize.js
}

function OnCategoriesLoaded(categories)
{
	// Called from header.js
}

$(document).ready(function() {
    $("#content").css("visibility", "visible");
});
