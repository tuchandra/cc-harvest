// var userids contained in separate file

var patch_stem = "http://www.clickcritters.com/haunted_harvest.php?act=viewplot&userid=";

// Users Online list is table with class niceTable
var rows = document.getElementsByClassName("niceTable")[0].rows;
var num_rows = rows.length;

// Add label to table header
var new_cell = rows[0].insertCell(1);
new_cell.innerHTML = "<b>Patch</b>";

// Add patch links to table
for (var i = 1; i < num_rows; ++i) {
    var new_cell = rows[i].insertCell(1);
    var username = rows[i].cells[0].textContent;

    // Only add the link if we have the userID
    if (username in userids) {
        var userid = userids[username]
        new_cell.innerHTML = "<a href='" + patch_stem + userid + "'>patch</a>";
    }
}