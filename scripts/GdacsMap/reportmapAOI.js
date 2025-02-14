/**
* Variable to set the mask url for the historical static images
*/
var jsonLayer = arraydataMap;
var centerLon = reportLon;
var centerLat = reportLat;
var zoomLevel = reportZoomLevel;
var wmsPOPDENSITY = reportWMSPopDensity;
var cycloneJsonLayer = reportJsonLayer;




//Color for Style
var polygonColor = {
    'Poly_BOX_0': [255, 255, 255, 0],
    'Poly_COMBWR_5': [166, 42, 160, 0.3],
    'Poly_COMBWR_4': [238, 0, 0, 0.3],
    'Poly_COMBWR_3': [245, 127, 61, 0.3],
    'Poly_COMBWR_2': [248, 214,70, 0.3],
    'Poly_COMBWR_1': [78, 214, 41, 0.3],
    'Poly_COMBALL_5': [166, 42, 160, 0.3],
    'Poly_COMBALL_4': [238, 0, 0, 0.3],
    'Poly_COMBALL_3': [245, 127, 61, 0.3],
    'Poly_COMBALL_2': [248, 214, 70, 0.3],
    'Poly_COMBALL_1': [78, 214, 41, 0.3],
    'Poly_MAXALL_5': [166, 42, 160, 0.3],
    'Poly_MAXALL_4': [238, 0, 0, 0.3],
    'Poly_MAXALL_3': [245, 127, 61, 0.3],
    'Poly_MAXALL_2': [248, 214, 70, 0.3],
    'Poly_MAXALL_1': [78, 214, 41, 0.3],
    'Poly_INT_10': [156, 8, 28, 0.3],
    'Poly_INT_9': [244, 68, 64, 0.3],
    'Poly_INT_8': [244, 124, 84, 0.3],
    'Poly_INT_7': [252, 164, 84, 0.3],
    'Poly_INT_6': [236, 236, 84, 0.3],
    'Poly_INT_5': [196, 252, 124, 0.3],
    'Poly_CAT_5': [153, 0, 0, 0.3],
    'Poly_CAT_4': [162, 0, 0, 0.3],
    'Poly_CAT_3': [255, 0, 0, 0.3],
    'Poly_CAT_2': [251, 177, 67, 0.3],
    'Poly_CAT_1': [0, 176, 80, 0.3],
    'Poly_RAIN_5': [85, 37, 121, 0.3],
    'Poly_RAIN_4': [212, 90, 125, 0.3],
    'Poly_RAIN_3': [231, 81, 35, 0.3],
    'Poly_RAIN_2': [255, 202, 33, 0.3],
    'Poly_RAIN_1': [0, 176, 240, 0.3],
    'Poly_SURGE_5': [112, 48, 160, 0.3],
    'Poly_SURGE_4': [238, 0, 0, 0.3],
    'Poly_SURGE_3': [245, 127, 61, 0.3],
    'Poly_SURGE_2': [251, 177, 67, 0.3],
    'Poly_SURGE_1': [166, 208, 140, 0.3],
    'Poly_Red': [255, 0, 0, 0.3],
    'Poly_Orange': [255, 162, 0, 0.3],
    'Poly_Green': [68, 255, 0, 0.3], 
    'Poly_White': [68, 255, 0, 0.2],
    'Poly_Affected': [47, 183, 234, 0.5],
    'Poly_area': [191, 121, 52, 0.5],
    'Poly_Cones': [253, 253, 253, 0.1],
    'Poly_Epi_100': [158, 250, 253, 0.1],
    'Poly_Epi_150': [103, 182, 210, 0.1],
    'Poly_Epi_200': [51, 103, 181, 0.1],
    'Poly_Sum_100': [239, 217, 106, 0.1],
    'Poly_Sum_200': [239, 177, 106, 0.1],
    'Poly_Sum_300': [239, 111, 106, 0.1],
    'Poly_Sum_400': [239, 106, 186, 0.1],
    'Poly_Sum_500': [190, 106, 239, 0.1],
    'Line_BOX_0': [0, 0, 0, 1],
    'Line_COMBWR_5': [166, 42, 160, 0.8],
    'Line_COMBWR_4': [238, 0, 0, 0.8],
    'Line_COMBWR_3': [245, 127, 61, 0.8],
    'Line_COMBWR_2': [248, 214, 70, 0.8],
    'Line_COMBWR_1': [78, 214, 41, 0.8],
    'Line_COMBALL_5': [166, 42, 160, 0.8],
    'Line_COMBALL_4': [238, 0, 0, 0.8],
    'Line_COMBALL_3': [245, 127, 61, 0.8],
    'Line_COMBALL_2': [248, 214, 70, 0.8],
    'Line_COMBALL_1': [78, 214, 41, 0.8],
    'Line_MAXALL_5': [166, 42, 160, 0.8],
    'Line_MAXALL_4': [238, 0, 0, 0.8],
    'Line_MAXALL_3': [245, 127, 61, 0.8],
    'Line_MAXALL_2': [248, 214, 70, 0.8],
    'Line_MAXALL_1': [78, 214, 41, 0.8],
    'Line_INT_10': [156, 8, 28, 0.8],
    'Line_INT_9': [244, 68, 64, 0.8],
    'Line_INT_8': [244, 124, 84, 0.8],
    'Line_INT_7': [252, 164, 84, 0.8],
    'Line_INT_6': [236, 236, 84, 0.8],
    'Line_INT_5': [196, 252, 124, 0.8],
    'Line_CAT_5': [153, 0, 0, 0.8],
    'Line_CAT_4': [162, 0, 0, 0.8],
    'Line_CAT_3': [255, 0, 0, 0.8],
    'Line_CAT_2': [251, 177, 67, 0.8],
    'Line_CAT_1': [0, 176, 80, 0.8],
    'Line_RAIN_5': [85, 37, 121, 0.8],
    'Line_RAIN_4': [212, 90, 125, 0.8],
    'Line_RAIN_3': [231, 81, 35, 0.8],
    'Line_RAIN_2': [255, 202,33, 0.8],
    'Line_RAIN_1': [0, 176, 240, 0.8],
    'Line_SURGE_5': [112, 48, 160, 0.8],
    'Line_SURGE_4': [238, 0, 0, 0.8],
    'Line_SURGE_3': [245, 127, 61, 0.8],
    'Line_SURGE_2': [251, 177, 67, 0.8],
    'Line_SURGE_1': [166, 208, 140, 0.8],
    'Line_Red': [209, 0, 0, 0.5],
    'Line_Orange': [209, 132, 0, 0.5],
    'Line_Green': [57, 213, 0, 0.5],
    'Line_White': [57, 213, 0, 0.5],
    'Line_Cones': [253, 253, 253, 0.3],
    'Line_Affected': [47, 183, 234, 1],
    'Line_Track': [221, 245, 12, 1],
    'Point_Past': [155, 104, 1, 0.5],
    'Point_For': [199, 176, 27, 0.5],
    'Text_Fill': [255, 255, 255, 1],
    'Text_Out': [118, 118, 118, 1]
};
var styleCache = {};
var layerList = [];

/**
* Elements that make up the popup.
*/
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

/**
* Create an overlay to anchor the popup to the map.
*/
var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
})
);

            

/**
* Variable to set animation MODIS
*/
var animationId = null;			
var frameRate = 0.5; // frames per second

/**
* Add a click handler to hide the popup.
* @return {boolean} Don't follow the href.
*/
closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

var defaultStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: [250, 250, 250, 0.5]
    }),
    stroke: new ol.style.Stroke({
        color: [220, 220, 220, 1],
        width: 1
    })
});

/**
* Function to create a text file on a polygon 
*/	
var createTextStyle = function (feature) {
    var objectType = feature.get('Class');
    var textValue = '';
    var offsetXValue, offsetYValue;
    offsetXValue = offsetYValue = 10;

    if (feature.get('polygonlabel') == 'Centroid' &&
    (feature.get('eventtype') == 'TC' || feature.get('eventtype') == 'VO')) {
        textValue = feature.get('eventname');
        offsetXValue = offsetYValue = 10;

    }
    else if (feature.startsWith('Poly_Polygon')) {
        textValue = feature.get('polygonlabel');
        if (textValue.startsWith('previous')) {
            textValue = '';
        }
        if (zoomLevel < 6)
            textValue = '';

    }
        /*
    else if (objectType.startsWith('Poly_Cones')) {
        textValue = feature.get('eventname');
        if (zoomLevel < 4)
            textValue = '';

        offsetXValue = offsetYValue = 40;
    }*/

    return new ol.style.Text({
        textAlign: 'Center',
        textBaseline: 'Middle',
        font: 'Bold 12px Verdana',
        text: textValue,
        scale: 1,
        fill: new ol.style.Fill({ color: polygonColor['Text_Fill'] }),
        stroke: new ol.style.Stroke({ color: polygonColor['Text_Out'], width: 2 }),
        offsetX: offsetXValue,
        offsetY: offsetYValue
    });
};

/**
* Function to create a Style at the polygon
*/
function styleFunction(feature, resolution) {
    // get the incomeLevel from the feature properties
    var classProperty = feature.get('Class');
    var alertLevel = feature.get('alertlevel');
    var eventtype = feature.get('eventtype');
    var label = feature.get('polygonlabel');
    var iconLink = feature.get('iconeventlink');
    if (iconLink == null || iconLink == '')
        iconLink = feature.get('icon');
    var keyStyle = '';

    // if there is no level or its one we don't recognize,
    // return the default style (in an array!)
    if (!classProperty) {
        return [defaultStyle];
    }
    if (classProperty == 'Poly_Red' || classProperty == 'Poly_Orange' || classProperty == 'Poly_Green' || classProperty == 'Poly_White' || classProperty == 'Poly_Affected' ||
        classProperty == 'Poly_area' || classProperty.startsWith('Poly_CAT_') || classProperty.startsWith('Poly_RAIN') || classProperty.startsWith('Poly_SURGE_') ||
        classProperty.startsWith('Poly_COMBALL_') || classProperty.startsWith('Poly_COMBWR_') || classProperty.startsWith('Poly_BOX_') || classProperty.startsWith('Poly_MAXALL_') || classProperty.startsWith('Poly_INT_')) {
        keyStyle = classProperty;
        if (!styleCache[keyStyle]) {
            styleCache[keyStyle] = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: polygonColor[classProperty]
                }),
                stroke: new ol.style.Stroke({
                    color: polygonColor[classProperty.replace('Poly_', 'Line_')],
                    width: 1
                })
            });
        }
    }
    else if (classProperty == 'Point_Point') {
        keyStyle = classProperty;
        if (!styleCache[keyStyle]) {
            styleCache[keyStyle] = new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0, 0],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: "https://www.gdacs.org/img/dot.png"
                })
            });
        }
    }
    else if (classProperty.startsWith('Poly_Epi') || classProperty.startsWith('Poly_Sum')) {
        keyStyle = classProperty;
        if (!styleCache[keyStyle]) {
            styleCache[keyStyle] = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: polygonColor[classProperty]
                })
            });
        }
    }
    else if (classProperty == 'Poly_Intensity') {
        keyStyle = classProperty + '_' + alertLevel;
        if (!styleCache[keyStyle]) {
            styleCache[keyStyle] = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: polygonColor['Poly_' + alertLevel]
                }),
                stroke: new ol.style.Stroke({
                    color: polygonColor['Line_' + alertLevel],
                    width: 1
                })
            });
        }
    }
    else if (classProperty == 'Poly_Circle') {
        keyStyle = classProperty + '_' + alertLevel;
        if (!styleCache[keyStyle]) {
            styleCache[keyStyle] = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: polygonColor['Line_' + alertLevel],
                    width: 1
                })
            });
        }
    }
    else if (classProperty.startsWith('Poly_Polygon')) {
        if (label.startsWith('previous')) {
            keyStyle = 'Point_Past';
        }
        else {
            keyStyle = 'Point_For';
        }
        //if (!styleCache[keyStyle]) {
        styleCache[keyStyle] = new ol.style.Style({
            fill: new ol.style.Fill({
                color: polygonColor[keyStyle]
            }),
            text: createTextStyle(feature)
        });
        //}	

    }
    else if (classProperty.startsWith('Poly_Cones')) {
        styleCache[keyStyle] = new ol.style.Style({
            fill: new ol.style.Fill({
                color: polygonColor[classProperty]
            }),
            stroke: new ol.style.Stroke({
                color: polygonColor[classProperty.replace('Poly_', 'Line_')]
            }),
            text: createTextStyle(feature)
        });

    }
    else if (classProperty.startsWith('Line')) {
        keyStyle = 'Line';
        if (!styleCache[keyStyle]) {
            styleCache[keyStyle] = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: polygonColor['Line_Track'],
                    width: 1
                })
            });
        }

    }
    else if ((eventtype == "EQ") && (classProperty == 'Point_Centroid'  || classProperty.startsWith('Point_POINT_'))) {
        keyStyle = 'Point_Centroid_' + alertLevel + '_' + eventtype;
        if (!styleCache[keyStyle]) {
            styleCache[keyStyle] = new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    src: iconLink
                }),
                text: createTextStyle(feature)
            });
        }

    }
    else
        return [defaultStyle];

    return [styleCache[keyStyle]];
}

/**
* Layer to add at hte map dinamically based on layerToShow variable
*/

var populationDensity = new ol.layer.Tile({
    title: 'Pop Density GHSL',
    type: 'WMS',
    visible: false,
    source: new ol.source.TileArcGISRest({
        url: wmsPOPDENSITY
    })
});

var eq_Shake_Buffer =  new ol.layer.Vector({
    id: 'Shakemap',
    title: 'Shakemap',
    source: new ol.source.Vector({
        url: reportShakeLayer,
        format: new ol.format.KML()
    }),
    style: styleFunction
});


var tc_Category = new ol.layer.Vector({
    id: 'Cyclone',
    title: 'Cyclone',
    source: new ol.source.Vector({
        url: cycloneJsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});



style_selection = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'blue',
        width: 3
    })
});

style_urban = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'green',
        width: 1
    })
});

function setSelectionSource(paramSource) {
    if (paramSource != "") {
        return new ol.source.Vector({
            features: new ol.format.GeoJSON().readFeatures(paramSource),
            format: new ol.format.GeoJSON()
        })

    }
    else
        return null;
}

selection_Buffer = new ol.layer.Vector({
    id: 'selection',
    title: 'AOI',
    datakey: 'data',
    source: setSelectionSource(jsonLayer),
    style: style_selection
});

selection_Contour = new ol.layer.Vector({
    id: 'urbanareas',
    title: 'Urban Areas',
    datakey: 'data',
    source: setSelectionSource(arrayUrbanLayer),
    style: style_urban
});

geometry_Buffer = new ol.layer.Vector({
    id: 'geometrybuffer',
    title: 'Polygons',
    datakey: 'polygons',
    source: setSelectionSource(arrayGeometry),
    style: styleFunction
});


								
function chooseLayer() {
    if (populationDensity != '')
        layerList.push(populationDensity);
    if (reportShakeLayer != '') {
        layerList.push(eq_Shake_Buffer);
    }
    if (cycloneJsonLayer  != '') {
        layerList.push(tc_Category);
    }

    if (arrayUrbanLayer != '')
        layerList.push(selection_Contour);
    if (arrayGeometry != '') {
        layerList.push(geometry_Buffer);
    }

    layerList.push(selection_Buffer);

    return layerList;
}


            


var scaleLineControl = new ol.control.ScaleLine();
scaleLineControl.setUnits('metric');
function buildMap() {
    return new ol.Map({
        controls: ol.control.defaults().extend([
                  scaleLineControl
        ]),
        target: 'map',
        overlays: [overlay],
        layers: [
                new ol.layer.Group({
                    id: 'Base',
                    title: 'Base maps',
                    layers: [
                        new ol.layer.Tile({
                            title: 'JRC - OSM',
                            id: 'osmec',
                            last: false,
                            type: 'base',
                            visible: false,
                            source: new ol.source.XYZ({
                                projection: 'EPSG:3857',
                                //projection: 'EPSG:900913',
                                //url: "https://europa.eu/webtools/maps/tiles/osm-ec/{z}/{x}/{y}.png",
                                url: "https://gisco-services.ec.europa.eu/maps/tiles/OSMCartoComposite/EPSG3857/{z}/{x}/{y}.png",
                                attributions: [new ol.Attribution({ html: "<a href='http://openstreetmap.org/'>OpenStreetMap</a><br/>The boundaries and the names shown on this map do not imply official endorsement or acceptance by the European Union." })],
                                maxZoom: 18,
                            })
                        }),
                        new ol.layer.Tile({
                            title: 'JRC - Hypso',
                            id: 'hypsoec',
                            type: 'base',
                            last: false,
                            visible: true,
                            source: new ol.source.XYZ({

                                //url: "https://europa.eu/webtools/maps/tiles/hypso/{z}/{x}/{y}",
                                projection: 'EPSG:3857',
                                url: "https://gisco-services.ec.europa.eu/maps/tiles/Hypsometric/EPSG3857/{z}/{x}/{y}.png",
                                maxZoom: 6
                            })
                        }),
                        //new ol.layer.Tile({
                        //    title: 'JRC - Natural',
                        //    id: 'naturalec',
                        //    type: 'base',
                        //    last: false,
                        //    visible: false,
                        //    source: new ol.source.XYZ({

                        //        //url: "https://europa.eu/webtools/maps/tiles/natural/{z}/{x}/{y}",
                        //        projection: 'EPSG:3857',
                        //        url: "https://gisco-services.ec.europa.eu/maps/tiles/NaturalEarth/EPSG3857/{z}/{x}/{y}.png",
                        //        maxZoom: 6
                        //    })
                        //}),
                        new ol.layer.Tile({
                            title: 'JRC - Bmarble',
                            id: 'bmarbleec',
                            type: 'base',
                            last: false,
                            visible: false,
                            source: new ol.source.XYZ({

                                //url: "https://europa.eu/webtools/maps/tiles/bmarble/{z}/{x}/{y}",
                                projection: 'EPSG:3857',
                                url: "https://gisco-services.ec.europa.eu/maps/tiles/BlueMarble/EPSG3857/{z}/{x}/{y}.png",
                                maxZoom: 9
                            })
                        })
                    ]
                }),
                new ol.layer.Group({
                    id: 'Layers',
                    title: 'Layers',
                    layers: chooseLayer()
                })
        ],
        view: new ol.View({
            center: [centerLon, centerLat],
            zoom: zoomLevel,
            projection: 'EPSG:4326',
            minZoom: 2,
            maxZoom: 21
        })
    });
}

function onMoveEnd(evt) {
    var map = evt.map;
    zoomLevel = map.getView().getZoom();
}
function onSingleClick(evt) {
    var coordinate = evt.coordinate;
    var pixel = evt.pixel;
    evt.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
        // check the layer property, if it is not set then it means we
        // are over an OverlayFeature and we can ignore this feature
        if (!layer ) {
            return;
        }
        // test the feature's geometry type and compute a reasonable point
        // at which to display the text.
        var geometry = feature.getGeometry();
        var point;
        switch (geometry.getType()) {
            case 'MultiPolygon':
                var poly = geometry.getPolygons().reduce(function (left, right) {
                    return left.getArea() > right.getArea() ? left : right;
                });
                point = poly.getInteriorPoint().getCoordinates();
                break;
            case 'Polygon':
                point = geometry.getInteriorPoint().getCoordinates();
                break;
            default:
                point = geometry.getClosestPoint(coordinate);
        }
        // create a new feature to display the text
        /*textFeature = new ol.Feature({
        geometry: new ol.geom.Point(point),
        text: feature.get('name'),
        isoCode: feature.get('iso_a2').toLowerCase()
        });*/
        // and add it to the featureOverlay.  Also add the feature itself
        // so the country gets outlined
        if (feature.get('link') != '') {
            //content.innerHTML = '<code class="map_item_popup"><div class="map_item_popup_content">' + feature.get('htmldescription') + '<br/>see full report <a href="' + feature.get('link') + '" target="_blank">here</a></div></code>';
            content.innerHTML = '<div>' +
                        '<p class="p_map_baloon_text_bold">' + feature.get('alertlevel') + ' ' + feature.get('description') + ' </p>' +
                        '<p class="p_map_baloon_text">' + feature.get('todate') + '</p>' +
                        '<p class="p_map_baloon_text">Full report <a href="' + feature.get('link') + '">here</a></p>' +
                        '</div>';
        }
        else {
            content.innerHTML = '<div>' +
                        '<p class="p_map_baloon_text_bold">' + feature.get('alertlevel') + ' ' + feature.get('description') + ' </p>' +
                        '<p class="p_map_baloon_text">' + feature.get('todate') + '</p>' +
                        '</div>';
        }
        overlay.setPosition(coordinate);
    });
}

function onClick(evt) {
    if (interactionType == '' || interactionType == 'none') {
        var coordinate = evt.coordinate;
        var pixel = evt.pixel;
        evt.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            // check the layer property, if it is not set then it means we
            // are over an OverlayFeature and we can ignore this feature
            if (!layer || layer.get('datakey') != 'data' ) {
                return;
            }
            // test the feature's geometry type and compute a reasonable point
            // at which to display the text.
            var geometry = feature.getGeometry();
            var point;
            switch (geometry.getType()) {
                case 'MultiPolygon':
                    var poly = geometry.getPolygons().reduce(function (left, right) {
                        return left.getArea() > right.getArea() ? left : right;
                    });
                    point = poly.getInteriorPoint().getCoordinates();
                    break;
                case 'Polygon':
                    point = geometry.getInteriorPoint().getCoordinates();
                    break;
                default:
                    point = geometry.getClosestPoint(coordinate);
            }
            var textMessage = "Do you want remove the area " + feature.get('name') + " (id: " + feature.get('id') + ")";
            if (confirm(textMessage)) {
                exportData();
                $("#cb_" + feature.get('id')).prop("checked", false);
                changeVisibility(feature.get('key'));
                closer.click();
            }
        });
    }
}

function onMouse(evt) {
    var coordinate = evt.coordinate;
    var pixel = evt.pixel;
    closer.click();
    evt.map.forEachFeatureAtPixel(pixel, function (feature, layer) {
        if (!layer || layer.get('datakey') != 'data') {
            return;
        }
        content.innerHTML = '<div>' +
            '<p class="p_map_baloon_text_bold">' + feature.get('name') + ' ' + feature.get('population') +' Pop estimated (intensity: ' + feature.get('intensity') + ') </p>' +
                    '</div>';
        overlay.setPosition(coordinate);
    });
}


function buildLayerSwitcher() {
    return new ol.control.LayerSwitcher({
        tipLabel: 'Layers' // Optional label for button
    });
}		
			
var layerSwitcher = buildLayerSwitcher()

var map = buildMap();

//Add OpenStreetmap base layer only for admin or Internal IPS
if (showOSM) {
    var layer;
    map.getLayers().forEach(function (lyr) {
        if (lyr.get('id') == "Base") {
            lyr.getLayers().push(new ol.layer.Tile({
                title: 'JRC - OSM',
                id: 'osmec',
                type: 'base',
                visible: false,
                source: new ol.source.XYZ({
                    projection: 'EPSG:900913',
                    url: "//europa.eu/webtools/maps/tiles/osm-ec/{z}/{x}/{y}.png",
                    attributions: [new ol.Attribution({ html: "<a href='http://openstreetmap.org/'>OpenStreetMap</a><br/>The boundaries and the names shown on this map do not imply official endorsement or acceptance by the European Union." })],
                    maxZoom: 21,
                })
            }));
        }
    });
}


function addMapController() {
    map.addControl(layerSwitcher);
    //map.on('singleclick', onSingleClick);
    map.on('pointermove', onMouse);
    map.on('click', onClick);
    map.on('moveend', onMoveEnd);
    
    return true;
}
			
addMapController();


const RADIUS_EARTH = 6340;
const DEG_TO_RAD = 0.017453292519943295;
const RAD_TO_DEG = 57.295779513082323;

var koeff_deg_to_km = Math.PI / 180 * RADIUS_EARTH;
var koeff_km_to_deg = 1 / (Math.PI / 180 * RADIUS_EARTH);

function calculateBoundibox(scale, longitude, latitude)
{
    var result = [];
    var _alphaLon = 0;
    var _alphaLat = 0;


    var _landscapeWidth = 0; 
    var _landscapeHeight = 0; 
    var _portraitWidth = 0; 
    var _portraitHeight = 0;

    _landscapeWidth = (210 * 4 * 0.81 / 1000000) * scale;
    _landscapeHeight = (297 * 2 * 0.94 / 1000000) * scale;

    var _index = 1;
    var _x1 = 0; 
    var  _x2 = 0; 
    var  _y1 = 0; 
    var  _y2 = 0;
    while (Math.abs(_index - 1) < 0.001)
    {
        var _dxDeg = _landscapeWidth * koeff_km_to_deg / _index;
        var _dyDeg = _landscapeHeight * koeff_km_to_deg / _index;
        var _degLength = 0;
        _x1 = longitude - _dxDeg / 2;
        _x2 = longitude + _dxDeg / 2;
        _y1 = latitude - _dyDeg / 2;
        _y2 = latitude + _dyDeg / 2;

        _degLength = calculateDegLength(_x1, _y1, _x2, _y2);
        _index = Math.round((_degLength / _landscapeWidth), 3);
    }
    var _result = [];
    _result.push([_x1, _y1]);
    _result.push([_x1, _y2]);
    _result.push([_x2, _y2]);
    _result.push([_x2, _y1]);
    _result.push([_x1, _y1]);
    result.push(_result);

    /*
    result.push(ol.proj.transform([_x1, _y1], 'EPSG:4326', 'EPSG:4326'));
    result.push(ol.proj.transform([_x1, _y2], 'EPSG:4326', 'EPSG:4326'));
    result.push(ol.proj.transform([_x2, _y2], 'EPSG:4326', 'EPSG:4326'));
    result.push(ol.proj.transform([_x2, _y1], 'EPSG:4326', 'EPSG:4326'));
    result.push(ol.proj.transform([_x1, _y1], 'EPSG:4326', 'EPSG:4326'));
    
    */

    _landscapeWidth = 67.0 * scale / 100000;
    _landscapeHeight = 55.0 * scale / 100000;
    return result;
}

function calculateDegLength(x1, y1, x2, y2)
{
    var result = 0;
    var deglen = 111.12 * DEG_TO_RAD;
    var p1lat = y1 * DEG_TO_RAD;
    var p1lng = x1 * DEG_TO_RAD;
    var p2lat = y2 * DEG_TO_RAD;
    var p2lng = x2 * DEG_TO_RAD;

    result = deglen * Math.acos(Math.sin(p1lat) * Math.sin(p2lat) + Math.cos(p1lat) * Math.cos(p2lat) * Math.cos(p2lng - p1lng));
    return result;

}

function getCircle(longitude, latitude, radius){
    var lon0, lat0, xlon, xlat;
    var result = [];
    lon0 = longitude + (radius / 111) * (Math.cos((0 * Math.PI) / 180)) / Math.cos((latitude * Math.PI) / 180);
    lat0 = latitude + (radius / 111) * (Math.sin((0 * Math.PI) / 180));
    result.push([lon0, lat0 ]);
    for (i = 2; i < 360; i += 2)
    {
        xlon = longitude + (radius / 111) * (Math.cos((i * Math.PI) / 180)) / Math.cos((latitude * Math.PI) / 180);
        xlat = latitude + (radius / 111) * (Math.sin((i * Math.PI) / 180));
        result.push([xlon, xlat]);
    }
    result.push([lon0, lat0]);

    return  result;
    
}


