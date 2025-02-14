function buildCondition()
{
    var _condition = '';
    var _eventtype = '';
    var _from = '';
    var _to = '';
    var _level = '';
    var _severity = '';
    var _country = '';

    if ($('#inputChEq').prop('checked'))
        _eventtype = 'EQ';
    if ($('#inputChTs').prop('checked'))
        _eventtype += _eventtype==='' ? 'TS' : ',TS';
    if ($('#inputChTc').prop('checked'))
        _eventtype += _eventtype==='' ? 'TC' : ',TC';
    if ($('#inputChFl').prop('checked'))
        _eventtype += _eventtype === '' ? 'FL' : ',FL';
    if ($('#inputChVo').prop('checked'))
        _eventtype += _eventtype === '' ? 'VO' : ',VO';
    if ($('#inputChDr').prop('checked'))
        _eventtype += _eventtype === '' ? 'DR' : ',DR';
    if ($('#inputChFf').prop('checked'))
        _eventtype += _eventtype === '' ? 'WF' : ',WF';

    _from = $('#inputDateFrom').val();
    _to = $('#inputDateTo').val();
    _level = $('#inputAlert').val();
    _severity = $('#inputSeverity').val();
    _country = $('#inputCountry').val();

    
    //return _condition = 'export.aspx?profile=ARCHIVE&type=geojson&eventtype=' + _eventtype + '&from=' + _from + '&to=' + _to + '&alertlevel=' + _level + '&severity=' + _severity + '&country=' + _country;
    if (_level.toLowerCase() == "orange")
        _level = "orange;red";
    _eventtype = _eventtype.replace(",", ";");
    return _condition = 'api/events/geteventlist/SEARCH?fromDate=' + _from + '&toDate=' + _to + '&alertlevel=' + _level + '&eventlist=' + _eventtype + '&country=' + _country;
    if (_eventtype.indexOf(';') == -1 || _eventtype.indexOf("TS")>=0)
        _condition = _condition& '&severity=' + _severity;
}

function buildUrlSearch() {
    var url = buildCondition();
    url = baseUrl + url;
    layerSearch = url;
 
}
