var startDate = new Date(Date.parse(reportFromDate));
var endDate = new Date(Date.parse(reportToDate));
var stepDate = new Date(endDate);
/**
* Variable to set the mask url for the historical static images
*/
var maskModisUrl = reportModisTemplate;
var maskCloudUrl = reportCloudTemplate;
var maskRainUrl = reportRainTemplate;
var maskGfdsUrl = reportGFDSTemplate;
var maskFloodsUrl = reportFloodsTemplate;
var maskGFMUrl = (reportGFMTemplate == undefined) ? "" : reportGFMTemplate;
var wmsCLOUD = reportWMSCloud;
var wmsRAIN = reportWMSRain;
var wmsPOPDENSITY = reportWMSPopDensity;
var wmsRDRI = reportWMSRDRI;
var gfmFLOODS = reportJsonLayerGFM_Observed;

var showGFDS = reportShowGFDS;
var showRain = reportShowRain;
var showCloud = reportShowCloud;
var showPopdensity = reportShowPopDensity;
var eventType = reportEventtype;
var hasMaps = reportHasMaps;

var jsonLayer = reportJsonLayer;
var jsonNppLayer = reportJsonNppLayer;
//var jsonContent = reportJsonContent;
var kmlShake = reportShakeLayer;
var jsonLayerPopulation = reportJsonLayerPopulation;
var centerLon = reportLon;
var centerLat = reportLat;
var layerToShow = reportLayerToShow;
var zoomLevel = reportZoomLevel;
var timeline_Buffer;
var jsonLayerOverAll = (reportJsonLayerOverAll == undefined) ? "" : reportJsonLayerOverAll;
var bLayerComposite = false;
var layerOverallGFMUrl = reportOverallGFM;


//Color for Style
//Color for Style
var polygonColor = {
    'Poly_Red': [255, 0, 0, 0.3],
    'Poly_Orange': [255, 162, 0, 0.3],
    'Poly_Green': [68, 255, 0, 0.3],
    'Poly_White': [68, 255, 0, 0.2],
    'Poly_SMPInt_0': [102, 255, 102, 0.3],
    'Poly_SMPInt_1': [132, 255, 255, 0.3],
    'Poly_SMPInt_2': [162, 255, 255, 0.3],
    'Poly_SMPInt_3': [204, 255, 255, 0.3],
    'Poly_SMPInt_3.5': [204, 255, 255, 0.3],
    'Poly_SMPInt_4': [153, 255, 204, 0.3],
    'Poly_SMPInt_4.5': [153, 255, 204, 0.3],
    'Poly_SMPInt_5': [204, 255, 102, 0.3],
    'Poly_SMPInt_5.5': [204, 255, 102, 0.3],
    'Poly_SMPInt_6': [255, 214, 102, 0.3],
    'Poly_SMPInt_6.5': [255, 214, 102, 0.3],
    'Poly_SMPInt_7': [255, 133, 51, 0.3],
    'Poly_SMPInt_7.5': [255, 133, 51, 0.3],
    'Poly_SMPInt_8': [255, 0, 0, 0.3],
    'Poly_SMPInt_8.5': [255, 0, 0, 0.3],
    'Poly_SMPInt_9': [102, 0, 0, 0.3],
    'Poly_SMPInt_9.5': [102, 0, 0, 0.3],
    'Poly_SMPInt_10': [91, 0, 0, 0.3],
    'Poly_SMPInt_10.5': [85, 0, 0, 0.3],
    'Poly_Circle': [253, 253, 253, 0.1],
    'Poly_Intensity': [253, 253, 253, 0.1],
    'Poly_Affected': [47, 183, 234, 0.5],
    'Poly_Global': [47, 183, 234, 0.5],
    'Poly_area': [191, 121, 52, 0.5],
    'Poly_area_overall': [191, 121, 52, 0],
    'Poly_area_composite': [191, 121, 52, 0.1],
    'Poly_Observed': [255, 0, 0, 1],
    'Poly_Npp': [64, 64, 64, 0.3],
    'Poly_Cones': [253, 253, 253, 0.1],
    'Poly_Cones_0': [78, 107, 124, 0.5],
    'Poly_Cones_6': [115, 157, 181, 0.4],
    'Poly_Cones_12': [141, 200, 233, 0.3],
    'Poly_Cones_18': [179, 226, 153, 0.2],
    'Poly_Epi_100': [158, 250, 253, 0.1],
    'Poly_Epi_150': [103, 182, 210, 0.1],
    'Poly_Epi_200': [51, 103, 181, 0.1],
    'Poly_Sum_100': [239, 217, 106, 0.1],
    'Poly_Sum_200': [239, 177, 106, 0.1],
    'Poly_Sum_300': [239, 111, 106, 0.1],
    'Poly_Sum_400': [239, 106, 186, 0.1],
    'Poly_Sum_500': [190, 106, 239, 0.1],
    'Line_SMPInt_0': [102, 255, 102, 0.8],
    'Line_SMPInt_1': [132, 255, 255, 0.8],
    'Line_SMPInt_2': [162, 255, 255, 0.8],
    'Line_SMPInt_3': [204, 255, 255, 0.8],
    'Line_SMPInt_3.5': [204, 255, 255, 0.8],
    'Line_SMPInt_4': [153, 255, 204, 0.8],
    'Line_SMPInt_4.5': [153, 255, 204, 0.8],
    'Line_SMPInt_5': [204, 255, 102, 0.8],
    'Line_SMPInt_5.5': [204, 255, 102, 0.8],
    'Line_SMPInt_6': [255, 214, 102, 0.8],
    'Line_SMPInt_6.5': [255, 214, 102, 0.8],
    'Line_SMPInt_7': [255, 133, 51, 0.8],
    'Line_SMPInt_7.5': [255, 133, 51, 0.8],
    'Line_SMPInt_8': [255, 0, 0, 0.8],
    'Line_SMPInt_8.5': [255, 0, 0, 0.8],
    'Line_SMPInt_9': [153, 0, 0, 0.8],
    'Line_SMPInt_9.5': [153, 0, 0, 0.8],
    'Line_SMPInt_10': [91, 0, 0, 0.8],
    'Line_SMPInt_10.5': [91, 0, 0, 0.8],
    'Line_Red': [209, 0, 0, 0.5],
    'Line_Orange': [209, 132, 0, 0.5],
    'Line_Green': [57, 213, 0, 0.5],
    'Line_White': [57, 213, 0, 0.5],
    'Line_Cones': [253, 253, 253, 0.3],
    'Line_Cones_0': [78, 107, 124, 0.8],
    'Line_Cones_6': [115, 157, 181, 0.8],
    'Line_Cones_12': [141, 200, 233, 0.8],
    'Line_Cones_18': [179, 226, 153, 0.8],
    'Line_Observed': [255, 0, 0, 0.001],
    'Line_Npp': [64, 64, 64, 0.8],
    'Line_Affected': [47, 183, 234, 1],
    'Line_Global': [47, 183, 234, 1],
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
    var offsetXValue;
    var offsetYValue;


    if (feature.get('polygonlabel') == 'Centroid' &&
        (feature.get('eventtype') == 'TC' || feature.get('eventtype') == 'VO')) {
        textValue = feature.get('eventname');
        offsetXValue = offsetYValue = 10;

    }
    else if (objectType.startsWith('Point_Polygon_Point')) {
        textValue = feature.get('polygonlabel');
        offsetXValue = offsetYValue = 10;
        if (textValue.startsWith('previous')) {
            textValue = '';
        }
        if (zoomLevel < 6)
            textValue = '';
    }
    else if (objectType.startsWith('Point_Label_Point')) {
        textValue = feature.get('polygonlabel');
        offsetXValue = 15;
        offsetYValue = -5;

    }

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


    var alertLevel = (feature.get('alertlevel') !== undefined) ? feature.get('alertlevel') : '';
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
    if (classProperty == 'Poly_Red' || classProperty == 'Poly_Orange' || classProperty == 'Poly_Green' || classProperty == 'Poly_White' || classProperty == 'Poly_Affected' || classProperty == 'Poly_Observed' ||
        classProperty == 'Poly_Global' || classProperty == 'Poly_area' || classProperty == 'Poly_area_overall' || classProperty == 'Poly_Circle' || classProperty.startsWith('Poly_SMP') || classProperty == 'Poly_Intensity' ) {
        keyStyle = classProperty;
        if (alertLevel != undefined) {
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
    }
    else if (classProperty == 'Poly_Npp') {
        keyStyle = classProperty;
		if (!styleCache[keyStyle]) {
			styleCache[keyStyle] = new ol.style.Style({
				image: new ol.style.Icon({
					anchorXUnits: 'fraction',
					anchorYUnits: 'pixels',
					src: iconLink
				}),
//				fill: new ol.style.Fill({
//					color: polygonColor[classProperty]
//				}),
				stroke: new ol.style.Stroke({
					color: polygonColor[classProperty.replace('Poly_', 'Line_')],
					lineDash: [4],
					width: 1
				})
			});
		}
    }
    else if (classProperty == 'Icon_Npp') {
        keyStyle = classProperty;
		if (!styleCache[keyStyle]) {
			styleCache[keyStyle] = new ol.style.Style({
				image: new ol.style.Icon({
					anchor: [0.5, 90],
					anchorXUnits: 'fraction',
					anchorYUnits: 'pixels',
					src: iconLink,
					scale: 0.02,
					color: '#E5E518'
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
		console.log('in');
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
    else if (classProperty.startsWith('Point_Polygon_Point')) {
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
    else if (classProperty.startsWith('Point_Label_Point')) {
        keyStyle = classProperty;
        styleCache[keyStyle] = new ol.style.Style({
            fill: new ol.style.Fill({
                color: polygonColor[keyStyle]
            }),
            text: createTextStyle(feature)
        });

    }
    else if (classProperty.startsWith('Poly_Cones')) {
        styleCache[keyStyle] = new ol.style.Style({
            fill: new ol.style.Fill({
                color: polygonColor[classProperty]
            }),
            stroke: new ol.style.Stroke({
                color: polygonColor[classProperty.replace('Poly_', 'Line_')],
                width: 3
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
                    width: 2
                })
            });
        }

    }
    else if (classProperty == 'Point_Centroid' || classProperty.startsWith('Point_POINT_')) {
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
var clouds_WMS = new ol.layer.Tile({
    title: 'Clouds',		
    type: 'WMS',
    visible: showCloud,
    source: new ol.source.TileArcGISRest({
        url: wmsCLOUD
    })
});
var rain_WMS = new ol.layer.Tile({
    title: 'Rain',
    type: 'WMS',
    visible: showRain,
    source: new ol.source.TileArcGISRest({
        url: wmsRAIN
    })
});

var rdri_WMS = new ol.layer.Tile({
    title: 'RDRI',
    type: 'WMS',
    visible: true,
    source: new ol.source.TileWMS({
        url: wmsRDRI,
        projection: "EPSG:4326"
    })
});


var wms_Landslide = new ol.layer.Tile({
    title: 'Landslide (by GEOFDRR)',
    type: 'WMS',
    visible: false,
    source: new ol.source.TileWMS({
        url: 'https://www.geonode-gfdrrlab.org/geoserver/wms?layers=hazard:ls_nasa_rc&version=1.3.0&format=image/png&transparent=true',
        projection: "EPSG:4326"
    })
});


var floods_GFM = new ol.layer.Tile({
    id: 'floods',
    title: 'Satellite-based Flood extent (GLOFAS)',
    type: 'WMS',
    visible: true,
    source: new ol.source.TileWMS({
        url: gfmFLOODS,
        projection: "EPSG:4326"
    })
});

var populationDensity = new ol.layer.Tile({
    title: 'Pop Density',
    type: 'WMS',
    visible: showPopdensity,
    source: new ol.source.TileArcGISRest({
        url: wmsPOPDENSITY

    })
});
			
var clouds_Image = new ol.layer.Image({
    title: 'Clouds',
    opacity: 0.5,
    type: 'IMAGE',
    visible: showCloud,
    source: new ol.source.ImageStatic({
        url: maskCloudUrl,
        //crossOrigin: ''
        //,
        projection: 'EPSG:4326',
        imageExtent: [-180, -90, 180, 90]
    })
});


var rain_Image = new ol.layer.Image({
    title: 'Rain',
    opacity: 0.5,
    type: 'IMAGE',
    visible: showRain,
    source: new ol.source.ImageStatic({
        url: maskRainUrl,
        //crossOrigin: ''
        //,
        projection: 'EPSG:4326',
        imageExtent: [-180, -90, 180, 90]
    })
});

var gfds_Image = new ol.layer.Image({
    title: 'GFDS',
    opacity: 0.5,
    visible: showGFDS,
    source: new ol.source.ImageStatic({
        url: maskGfdsUrl,
        //crossOrigin: ''
        //,
        projection: 'EPSG:4326',
        imageExtent: [-180, -90, 180, 90]
    })
                                    
});



var eq_Buffer =  new ol.layer.Vector({
    title: 'Earthquakes',
    source: new ol.source.Vector({
        url: jsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});
var eq_Shake_Buffer =  new ol.layer.Vector({
    title: 'Shakemap',
    source: new ol.source.Vector({
        url: kmlShake,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});
var tc_Buffer =  new ol.layer.Vector({
    title: 'Tropical Cyclones',
    source: new ol.source.Vector({
        url: jsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});


var fl_Buffer = new ol.layer.Vector({
    title: 'Admin affected by Floods',
    source: new ol.source.Vector({
        url: jsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});

var vo_Population = new ol.layer.Vector({
    title: 'Pop Distance',
    source: new ol.source.Vector({
        url: jsonLayerPopulation,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});

var vo_Buffer = new ol.layer.Vector({
    title: 'Volcanoes',
    source: new ol.source.Vector({
        url: jsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});


var cr_Buffer = new ol.layer.Vector({
    title: 'Costal Risk',
    source: new ol.source.Vector({
        url: jsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});

var dr_Buffer = new ol.layer.Vector({
    title: 'Droughts',
    source: new ol.source.Vector({
        url: jsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});



var wf_Buffer = new ol.layer.Vector({
    id: 'WF',
    title: 'Wild Fire',
    source: new ol.source.Vector({
        url: jsonLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});

var wf_Buffer_Overall = new ol.layer.Vector({
    id: 'WF_Overall',
    title: 'Overall',
    source: new ol.source.Vector({
        url: jsonLayerOverAll,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});

var wf_Buffer_Composite = new ol.layer.Vector({
    id: 'WF_Composite',
    title: 'Composite',
    source: new ol.source.Vector({
        url: jsonLayerOverAll,
        format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: polygonColor['Poly_area_composite'],
        }),
        stroke: new ol.style.Stroke({
            color: polygonColor[255, 255, 255, 1],
            width: 1
        })
    }),
    visible: false
});

var npp_Layer = new ol.layer.Vector({
    title: 'Nuclear Power Plant',
    source: new ol.source.Vector({
        url: jsonNppLayer,
        format: new ol.format.GeoJSON()
    }),
    style: styleFunction
});


function setVisibleWFComposite(visible) {
    bLayerComposite = visible;
    var lyrs = map.getLayers().getArray().slice().reverse();
    for (var i = 0, l; i < lyrs.length; i++) {
        if (lyrs[i].get('type') != 'base') {
            var _lyrs = lyrs[i].getLayers().getArray().slice().reverse();
            for (var i = 0, l; i < _lyrs.length; i++) {
                l = _lyrs[i];
                    var visible1 = (!visible);
                    if (l.get('id') == 'WF_Composite') {
                        l.setVisible(visible);
                    }
                    if (l.get('id') == 'WF' || l.get('id') == 'WF_Overall') {
                        l.setVisible(visible1);
                    }
            }
        }
    }
    map.updateSize();
    map.render();
}

    

//var gfm_OverAllJson = new ol.layer.Vector({
//    id: 'GFMOverall',
//    title: 'GFM Overall Observed',
//    source: new ol.source.Vector({
//        url: layerOverallGFMUrl
//    }),
//    style: styleFunction
//});

var gfm_Overall_WMS = new ol.layer.Tile({
	id: 'GFMOverall',
	title: 'GFM Overall Observed',
	type: 'WMS',
	visible: true,
    source: new ol.source.TileArcGISRest({
        url: layerOverallGFMUrl
    })
});


function setVisibleGFM(visible) {
    var lyrs = map.getLayers().getArray().slice().reverse();
    for (var i = 0, l; i < lyrs.length; i++) {
        if (lyrs[i].get('type') != 'base') {
            var _lyrs = lyrs[i].getLayers().getArray().slice().reverse();
            for (var i = 0, l; i < _lyrs.length; i++) {
                l = _lyrs[i];
                if (l.get('id') == 'GFMOverall') {
                    l.setVisible(visible);
                }
            }
        }
    }
    map.updateSize();
    map.render();
}

function setSourceGFMWms() {
    var finalUrl = maskGFMUrl;
    while (finalUrl.indexOf("[yyyy]") >= 0 || finalUrl.indexOf("[mm]") >= 0 || finalUrl.indexOf("[dd]") >= 0) {
        finalUrl = finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2));
    }
    return new ol.source.TileArcGISRest({
        url: finalUrl,
    })
	
//    return new ol.source.Vector({
//        url: finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
//            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
//            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2)),
//        format: new ol.format.GeoJSON()
//    });
}


//function setSourceGFMJson() {
//    var finalUrl = maskGFMUrl;
//    while (finalUrl.indexOf("[yyyy]") >= 0 || finalUrl.indexOf("[mm]") >= 0 || finalUrl.indexOf("[dd]") >= 0) {
//        finalUrl = finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
//            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
//            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2));
//    }
	
//    return new ol.source.Vector({
//        url: finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
//            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
//            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2)),
//        format: new ol.format.GeoJSON()
//    });
//}


function setSourceWF(id) {
    var finalUrl = jsonLayer;
    var pos = finalUrl.lastIndexOf("=");
    finalUrl = finalUrl.substring(0, pos + 1) + id;

    wf_Buffer.getSource().clear();

    var source = new ol.source.Vector({
        url: finalUrl,
        format: new ol.format.GeoJSON()
    });

    wf_Buffer.setSource(source);
}

function setSourceWF_OverAll(id) {
    var finalUrl = jsonLayer;
    var pos = finalUrl.lastIndexOf("=");
    finalUrl = finalUrl.substring(0, pos + 1) + id + "&source=OverAll";

    wf_Buffer_Overall.getSource().clear();

    var source = new ol.source.Vector({
        url: finalUrl,
        format: new ol.format.GeoJSON()
    });

    wf_Buffer_Overall.setSource(source);
}

function setSourceWF_Composite(id) {
    var finalUrl = jsonLayer;
    var pos = finalUrl.lastIndexOf("=");
    finalUrl = finalUrl.substring(0, pos + 1) + id + "&source=OverAll";

    wf_Buffer_Composite.getSource().clear();

    var source = new ol.source.Vector({
        url: finalUrl,
        format: new ol.format.GeoJSON()
    });

    wf_Buffer_Composite.setSource(source);
}


function setSourceModis() {
    var finalUrl = maskModisUrl;
    while (finalUrl.indexOf("[yyyy]") >= 0 || finalUrl.indexOf("[mm]") >= 0 || finalUrl.indexOf("[dd]") >= 0) {
        finalUrl = finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2));
    }
    return new ol.source.Vector({
        url: finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2)),
        format: new ol.format.KML()
    });
}

function setSourceClouds() {
    var finalUrl = maskCloudUrl;
    while (finalUrl.indexOf("[yyyy]") >= 0 || finalUrl.indexOf("[mm]") >= 0 || finalUrl.indexOf("[dd]") >= 0) {
        finalUrl = finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2));
    }
    return new ol.source.ImageStatic({
        url: finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2)),
        projection: 'EPSG:4326',
        imageExtent: [-180, -90, 180, 90]
    })
}

function setSourceRain() {
    var finalUrl = maskRainUrl;
    while (finalUrl.indexOf("[yyyy]") >= 0 || finalUrl.indexOf("[mm]") >= 0 || finalUrl.indexOf("[dd]") >= 0) {
        finalUrl = finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2));
    }
    return new ol.source.ImageStatic({
        url: finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2)),
        projection: 'EPSG:4326',
        imageExtent: [-180, -90, 180, 90]
    })
}

function setSourceGFM_Floods() {
    var finalUrl = maskFloodsUrl;
    while (finalUrl.indexOf("[yyyy]") >= 0 || finalUrl.indexOf("[mm]") >= 0 || finalUrl.indexOf("[dd]") >= 0) {
        finalUrl = finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2));
    }
    return new ol.source.TileWMS({
        url: finalUrl,
        projection: "EPSG:4326"
    })
}

function setSourceGfds() {
    var finalUrl = maskGfdsUrl;
    while (finalUrl.indexOf("[yyyy]") >= 0 || finalUrl.indexOf("[mm]") >= 0 || finalUrl.indexOf("[dd]") >= 0) {
        finalUrl = finalUrl.replace("[yyyy]", stepDate.getFullYear().toString()).
            replace("[mm]", (stepDate.getMonth() + 101).toString().substr(1, 2)).
            replace("[dd]", (stepDate.getDate() + 100).toString().substr(1, 2));
    }
    return new ol.source.ImageStatic({
        url: finalUrl,
        projection: 'EPSG:4326',
        imageExtent: [-180, -90, 180, 90]
    })
}

function getSourceWF_Composite(value) {
    bLayerComposite = value;
    map.removeControl(layerSwitcher);
    var l = new ol.control.LayerSwitcher({
        tipLabel: 'Layers' // Optional label for button
    });
    map.addControl(l);
    buildMap();
}


function getVectorModis() {
    return new ol.layer.Vector({
        id: 'Modis',
        title: 'Optical flood detection (NASA/MODIS)',
        source: setSourceModis()
    });
}

function getVectorGFMWms() {
    return new ol.layer.Tile({
        id: 'GFM',
        title: 'GFM Observed Flood',
        source: setSourceGFMWms(),
    });
}
//function getVectorGFMJson() {
//    return new ol.layer.Vector({
//        id: 'GFM',
//        title: 'GFM Observed Flood',
//        source: setSourceGFM(),
//        style: styleFunction
//    });
//}

function getRainImage() {
    return new ol.layer.Image({
        id: 'Rain',
        title: 'Rain (24h, NASA/GPM)',
        opacity: 0.5,
        type: 'IMAGE',
        visible: showRain,
        source: setSourceRain()
    });
}
function getGfdsImage() {
    return new ol.layer.Image({
        id: 'Gfds',
        title: 'Microwave flood detection (JRC/GFDS)',
        opacity: 0.5,
        type: 'IMAGE',
        visible: showGFDS,
        source: setSourceGfds()
    });
}
function getCloudsImage() {
    return new ol.layer.Image({
        id: 'Clouds',
        title: 'Clouds',
        opacity: 0.5,
        type: 'IMAGE',
        visible: showCloud,
        source: setSourceClouds()
    });
}
			
								
function chooseLayer() {
    layerList = [];

    if (eventType=='EQ'){        
		layerList.push(wms_Landslide);
	}
    if (populationDensity != '')
        layerList.push(populationDensity);
    if (layerToShow == 'WMS') {
        layerList.push(clouds_WMS);
        layerList.push(rain_WMS);
    }
    else {

        if (maskCloudUrl != '' && showCloud)
            layerList.push(getCloudsImage());
        if (maskRainUrl != '' && showRain)
            layerList.push(getRainImage());
    }
    if (wmsRDRI != '')
        layerList.push(rdri_WMS);

    if (gfmFLOODS != '') 
        layerList.push(floods_GFM);

	if (npp_Layer!=''){
        layerList.push(npp_Layer);	
	}
    if (eventType=='EQ' && kmlShake!='')
        layerList.push(eq_Shake_Buffer);
    if (maskModisUrl!='')
        layerList.push(getVectorModis());
    if (maskGfdsUrl!='' && showGFDS)
        layerList.push(getGfdsImage());
    if (eventType=='EQ'){        
		layerList.push(eq_Buffer);
	}
    if (eventType=='TC')
        layerList.push(tc_Buffer);
    if (eventType == 'VO' && jsonLayerPopulation != '')
        layerList.push(vo_Population);
    if (eventType == 'VO')
        layerList.push(vo_Buffer);
    if (eventType == 'FL') {
        layerList.push(fl_Buffer);
        if(layerOverallGFMUrl != '')
			layerList.push(gfm_Overall_WMS);
        if (maskGFMUrl != '')
            layerList.push(getVectorGFMWms());
    }


    if (eventType == 'CR')
        layerList.push(cr_Buffer);
    if (eventType == 'DR')
        layerList.push(dr_Buffer);
    if (eventType == 'WF' && jsonLayerOverAll != "")
        layerList.push(wf_Buffer_Overall);
    if (eventType == 'WF' )
        layerList.push(wf_Buffer);
    if (eventType == 'WF' && jsonLayerOverAll != "")
        layerList.push(wf_Buffer_Composite);


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
                            visible: zoomLevel > 10 ? true : false,
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
                            visible: zoomLevel < 10 ? true : false,
                            source: new ol.source.XYZ({

                                //url: "https://europa.eu/webtools/maps/tiles/hypso/{z}/{x}/{y}",
                                projection: 'EPSG:3857',
                                url: "https://gisco-services.ec.europa.eu/maps/tiles/Hypsometric/EPSG3857/{z}/{x}/{y}.png",
                                maxZoom: 6
                            })
                        }),
                        new ol.layer.Tile({
                            title: 'JRC - Natural',
                            id: 'naturalec',
                            type: 'base',
                            last: false,
                            visible: false,
                            source: new ol.source.XYZ({

                                //url: "https://europa.eu/webtools/maps/tiles/natural/{z}/{x}/{y}",
                                projection: 'EPSG:3857',
                                url: "https://gisco-services.ec.europa.eu/maps/tiles/NaturalEarth/EPSG3857/{z}/{x}/{y}.png",
                                maxZoom: 6
                            })
                        }),
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
                    layers: chooseLayer(),
                    visible: true
                })
        ],
        view: new ol.View({
            center: [centerLon, centerLat],
            zoom: zoomLevel,
            projection: 'EPSG:4326',
            minZoom: 2,
            maxZoom: 11
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
        if (!layer) {
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
        var reportLink = feature.get('link');
        if (reportLink == null){
			reportLink = feature.get('url');
			if (reportLink = feature.get('url'))
				reportLink = feature.get('url').report;
		}

        if (reportLink != null && reportLink != '') {
            //content.innerHTML = '<code class="map_item_popup"><div class="map_item_popup_content">' + feature.get('htmldescription') + '<br/>see full report <a href="' + feature.get('link') + '" target="_blank">here</a></div></code>';
            content.innerHTML = '<div>' +
                '<p class="p_map_baloon_text_bold">' + feature.get('alertlevel') + ' ' + feature.get('description') + ' </p>' +
                '<p class="p_map_baloon_text">' + feature.get('todate') + '</p>' +
                '<p class="p_map_baloon_text">Full report <a href="' + reportLink + '">here</a></p>' +
                '</div>';
        }
        else {
            if (feature.get('type') == "npp") {
                var _description = '<div><p class="p_map_baloon_text_bold">' + feature.get('sitename') + ' </p>';
                _description += '<p class="p_map_baloon_text">';
                for (var s in feature.getProperties().infrastructures) {
                    _description += feature.getProperties().infrastructures[s].type + ': ' + feature.getProperties().infrastructures[s].count + '</br>';
                }
                _description += '</p>';
                _description += '</div>';
                content.innerHTML = _description;
            }
            else {
                content.innerHTML = '<div>' +
                    '<p class="p_map_baloon_text_bold">' + feature.get('alertlevel') + ' ' + feature.get('description') + ' </p>' +
                    '<p class="p_map_baloon_text">' + feature.get('todate') + '</p>' +
                    '</div>';

            }
        }
        overlay.setPosition(coordinate);
    });
}



function buildLayerSwitcher() {
    return new ol.control.LayerSwitcher({
        tipLabel: 'Layers' // Optional label for button
    });
}

function buildLayerLegend() {
    if (eventType == "VO" && jsonLayerPopulation == "") {
        return new ol.control.LayerLegend({
            tipLabel: 'Legend' // Optional label for button
        }, 'https://www.gdacs.org//images/volcanic_legend.png');
    }
    if (eventType == "VO" && jsonLayerPopulation != "") {
        return new ol.control.LayerLegend({
            tipLabel: 'Legend' // Optional label for button
        }, 'https://www.gdacs.org//images/population_density.png');
    }
    if (eventType == "TC") {
        return new ol.control.LayerLegend({
            tipLabel: 'Legend' // Optional label for button
        }, 'https://www.gdacs.org/images/rainfall_legend.png');
    }
}


var layerSwitcher = buildLayerSwitcher()
var layerLegend = buildLayerLegend()

var map = buildMap();

function addMapController() {
    map.addControl(layerSwitcher);
    if (layerLegend != null) {
        if (maskRainUrl != '' && showRain)
            map.addControl(layerLegend);
        if (eventType == 'VO' && jsonLayerPopulation == "")
            map.addControl(layerLegend);
        if (eventType == 'VO' && jsonLayerPopulation != "")
            map.addControl(layerLegend);
    }
    map.on('singleclick', onSingleClick);
    map.on('moveend', onMoveEnd);
    return true;
}

addMapController();

map.on('layerLegend', function (eventLayer) {
    if (eventLayer.name === 'District Population') {
        //map.addControl(popuLegend);
    }
});

function setTime() {
    //stepDate.setDate(stepDate.getDate() + 1);
    if (stepDate > endDate)
        stepDate = new Date(startDate);

    //map = buildMap();
    //addMapController();

    var all_layer_groups = map.getLayers();
    var layer_group;
    var layer_item;
    var all_layer_gdacs;
    for (i = 0, n = all_layer_groups.getLength(); i < n; i++) {
        layer_group = all_layer_groups.item(i);
        if (layer_group.get('id') == 'Layers') {
            all_layer_gdacs = layer_group.getLayers();
            for (j = 0, k = all_layer_gdacs.getLength(); j < k; j++) {
                layer_item = all_layer_gdacs.item(j);
                if (layer_item.get('id') == 'Modis') {
                    layer_item.setSource(setSourceModis());
                }
                else if (layer_item.get('id') == 'Clouds') {
                    layer_item.setSource(setSourceClouds());
                }//if
                else if (layer_item.get('id') == 'Rain') {
                    layer_item.setSource(setSourceRain());

                }//if
                else if (layer_item.get('id') == 'Gfds') {
                    layer_item.setSource(setSourceGfds());
                }//if
                else if (layer_item.get('id') == 'floods') {
                    layer_item.setSource(setSourceGFM_Floods());
                }
                else if (layer_item.get('id') == 'GFM') {
                    layer_item.setSource(setSourceGFMWms());
                }
            }
        }//if
    }//for
    map.updateSize();
    map.render();
    //updateInfo();
};

ol.control.LayerLegend.prototype.onSingleClick = function () {
    if (this.element.className != this.shownClassName) {
        this.element.className = this.shownClassName;
        this.renderPanel();
    }
};

var changeOpacity = function (newValue) {
    var all_layer_groups = map.getLayers();
    var layer_group;
    var layer_item;
    var all_layer_gdacs;
    for (i = 0, n = all_layer_groups.getLength(); i < n; i++) {
        layer_group = all_layer_groups.item(i);
        if (layer_group.get('id') == 'Layers') {
            all_layer_gdacs = layer_group.getLayers();
            for (j = 0, k = all_layer_gdacs.getLength(); j < k; j++) {
                layer_item = all_layer_gdacs.item(j);
                if (layer_item.get('id') == 'Clouds' || layer_item.get('id') == 'Rain' || layer_item.get('id') == 'Gfds') {
                    layer_item.setOpacity(newValue);
                }//if
            }
        }//if
    }//for
    map.updateSize();
    map.render();
    //updateInfo();
};


var play = function () {
    stop();
    animationId = window.setInterval(setTime, 1000 / frameRate);
};

var stop = function () {
    if (animationId !== null) {
        window.clearInterval(animationId);
        animationId = null;
    }
};

