    
function DecodeImpactType(inputType) {
    if (inputType == '')
        return 'Episode';
    else if (inputType == 'EQ')
        return '&nbsp;&nbsp;&nbsp;&nbsp;Earthquake';
    else if (inputType == 'SM')
        return '&nbsp;&nbsp;&nbsp;&nbsp;Shakemap';
    else if (inputType == 'SP')
        return '&nbsp;&nbsp;&nbsp;&nbsp;Rapid Impact';
    else if (inputType == 'TS')
        return '&nbsp;&nbsp;&nbsp;&nbsp;Tsunami';
    return '--';
}
function GetIconImage(inputAlertLevel, inputAlerReference) {
    var result = "<img src=\"../images/gdacs_icons/alerts/{alertlevel}/{iconname}.png\" height=\"16px\"/>";
    if (inputAlerReference == 'SM')
        result = result.replace('{iconname}', 'EQ_SHAKE');
    else if(inputAlerReference == 'SP')
    result = result.replace('{iconname}', 'EQ_Rapid');
    else
        result = result.replace('{iconname}', inputAlerReference);
    result = result.replace('{alertlevel}', inputAlertLevel);
    return result;
}
function RemoteBuildTableEpisode(layerDetail, episodeId) {

    var response = "";
    console.log(layerDetail);
    $.getJSON(layerDetail, function (data) {
        console.log(data);
        response = data;
    });
    return response;
}

function GetRemote(url, episodeId) {
    var result;
    alert(url);
    alert(episodeId);
    $.ajax({
        type: "GET",
        url: url, param: '{}',
        contentType: "application/json; charset=utf-8", dataType: "json",
        success: function (data) { result = data; }
    });
    return CreateTable(result, episodeId);
}

function CreateTable(data, episodeId) {
    var items = [];
    var empty = true;
    items.push("<div class=\"css-table\">");
    items.push("<div class=\"css-table-header\">");
    items.push("<div class=\"cell_detail_center\">Reference</div>");
    items.push("<div class=\"cell_detail_center\">Level</div>");
    items.push("<div class=\"cell_detail_center\">Score</div>");
    items.push("<div class=\"cell_detail_center\">Type</div>");
    items.push("<div class=\"cell_detail_center\">Date</div>");
    items.push("<div class=\"cell_detail_center\">Pop 100Km<br/>or MMI9-7</div>");
    items.push("<div class=\"cell_detail_center\">Pop 20Km<br/>or Max MMI</div>");
    items.push("<div class=\"cell_detail_center\">MaxHeight(m)</div>");
    items.push("</div>");
    items.push("<div class=\"css-table-body\">");

    if (data.length > 0) {
        data.sort((a, b) => (a.impacttype > b.impacttype) ? 1 : ((b.impacttype > a.impacttype) ? -1 : 0))
        $.each(data, function (key, val) {
            items.push("<div class=\"css-table-row\">");
            items.push("<div class=\"cell_detail_left\">" + DecodeImpactType(val["impacttype"]) + "</div>");
            items.push("<div class=\"cell_detail_center\">&nbsp;&nbsp;" + GetIconImage(val["alertlevel"], val["alerttypereference"]) + "&nbsp;&nbsp;</div>");
            items.push("<div class=\"cell_detail_right\">&nbsp;&nbsp;" + parseFloat(val["alertscore"]).toFixed(1) + "&nbsp;&nbsp;</div>");
            items.push("<div>&nbsp;&nbsp;" + val["alerttype"] + "&nbsp;&nbsp;</div>");
            items.push("<div>&nbsp;&nbsp;" + val["alertdate"] + "&nbsp;&nbsp;</div>");
            items.push("<div class=\"cell_detail_right\">&nbsp;&nbsp;" + val.values.find(x => x.key == "eqpop100").value + "&nbsp;&nbsp;</div>");
            items.push("<div class=\"cell_detail_right\">&nbsp;&nbsp;" + val.values.find(x => x.key == "eqpop20").value + "&nbsp;&nbsp;</div>");
            items.push("<div class=\"cell_detail_right\">&nbsp;&nbsp;" + parseFloat(val.values.find(x => x.key == "tsmaxheight").value).toFixed(2) + "&nbsp;&nbsp;</div>");
            items.push("</div>");

        });
    }
    else {
        items.push("<div>");
        items.push("<div colspan=\"5\">No events found</div>");
        items.push("</div>");
    }
    items.push("</div>");

    items.push("</div>");
    return { "key": episodeId, "value": items.join("") };
}
