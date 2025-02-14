function graphicSeaLevelPopup(divreference, paramCaption, paramTitle, paramXcategories, paramSeriesLevel, FromDate, ToDate) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            borderColor: 'black',
            borderWidth: 0.4,
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: paramTitle
        },
        subtitle: {
            text: paramCaption == "" ? 'Sea Level Measures' : paramCaption
        },
        xAxis: [{
            categories: paramXcategories,
            plotBands: [{ // visualize the forecast
                label: {
                    text: 'day',
                    align: 'left'
                },
                //from: FromDate,
                //to: ToDate,
                color: 'rgba(68, 170, 213, .2)'
            }],
            crosshair: true,
            plotLines: [{
                label: {
                    text: (function () {
                        if (FromDate != "")
                            textL = 'Earthquake';
                        else
                            textL = '';

                        return textL;
                    }()),
                    style: {
                        color: 'red'
                    },
                    x: - 10,
                    y: 125,
                    rotation: - 90
                },
                color: (function () {
                    if (FromDate != "")
                        colorL = 'red';
                    else
                        colorL = 'white';

                    return colorL;
                }()),
                dashStyle: 'longdash',
                value: FromDate,
                width: 2,
                zIndex: 5
            }]

        }],
        yAxis: [
            { // Secondary yAxis
                title: {
                    text: '',
                    style: {
                        color: '#009999'
                    }
                },
                labels: {
                    format: '{value} m',
                    style: {
                        color: '#009999'
                    }
                },
                opposite: true
            },
            { // Primary yAxis
                title: {
                    text: 'Sea Level (m)',
                    style: {
                        color: '#7cb5ec'
                    }
                },
                labels: {
                    format: '{value} m',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                visible: true
            }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: (window.innerWidth < 768) ? 185 : 120,
            verticalAlign: 'top',
            y: (window.innerWidth < 768) ? 240 : 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            visible: false
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false/*,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'*/
                }
            },
            spline: {
                lineWidth: 1,
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: true,
                            radius: 5
                        }
                    }
                },
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                }
            },
            line: {
                lineWidth: 1,
                marker: {
                    //enabled: false,
                    states: {
                        hover: {
                            enabled: true,
                            radius: 5
                        }
                    }
                },
                shadow: false,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                }
            }
        },
        series: [{
            name: 'Sea Level Measures',
            type: 'line',
            yAxis: 1,
            data: paramSeriesLevel,
            color: 'black',
            tooltip: {
                valueSuffix: ''
            },
            visible: true
        }]
    });
}

function graphicCovidDiffusion(divreference, paramCaption, paramTitle, paramXcategories, paramSeriesInfected, paramSeriesDead, paramSeriesDeadTOT, paramSeriesInfectedTOT, FromDate, ToDate, eventtype) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            borderColor: 'black',
            borderWidth: 0.4,
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Data related to Covid-19 cases in  ' + paramTitle
        },
        //subtitle: {
        //    text: paramCaption == "" ? 'Impact Virus World' : paramCaption
        //},
        xAxis: [{
            categories: paramXcategories,
            plotBands: [
                { // visualize the weekend
                    label: {
                        text: (function () {
                            if (ToDate != "")
                                text = 'Over <br/> land';
                            else
                                text = '';

                            return text;
                        }()),
                        style: {
                            color: '#0b74ab'
                        },
                        align: 'left',
                        x: 5
                    },
                    from: FromDate,
                    to: ToDate,
                    color: (function () {
                        if (ToDate != "")
                            colorP = 'rgba(68, 170, 213, .2)';
                        else
                            colorP = '';

                        return colorP;
                    }()),
                }],
            crosshair: true,
            plotLines: [{
                label: {
                    text: (function () {
                        if (FromDate != "")
                            if (eventtype == "TC")
                                textL = 'Landfall';
                            else
                                textL = 'Earthquake';
                        else
                            textL = '';

                        return textL;
                    }()),
                    style: {
                        color: 'red'
                    },
                    x: - 10,
                    y: 125,
                    rotation: - 90
                },
                color: (function () {
                    if (FromDate != "")
                        colorL = 'red';
                    else
                        colorL = 'white';

                    return colorL;
                }()),
                dashStyle: 'longdash',
                value: FromDate,
                width: 2,
                zIndex: 5
            }]
        }],
        yAxis: [
            { // Secondary yAxis
                title: {
                    text: 'Cumulative Positives',
                    style: {
                        color: '#7cb5ec'
                    },
                    rotation: - 90
                },
                labels: {
                    format: '{value} ',
                    style: {
                        color: '#7cb5ec'
                    }
                },
                opposite: true
            }, { // Primary yAxis
                labels: {
                    format: '{value} ',
                    style: {
                        color: 'black'
                    }
                },
                title: {
                    text: 'Cumulative Fatalities',
                    style: {
                        color: 'black'
                    }
                }
            }, { // Primary yAxis
                labels: {
                    format: '{value} ',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                title: {
                    text: 'Average Daily Positive',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
            }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: (window.innerWidth < 768) ? 185 : 120,
            verticalAlign: 'top',
            y: (window.innerWidth < 768) ? 240 : 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false/*,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'*/
                }
            }
        },
        series: [{
            name: 'Average Daily Positive',
            type: 'column',
            data: paramSeriesInfected,
            yAxis: 1,
            color: '#7cb5ec',
            tooltip: {
                valuePrefix: ''
            }

        }, {
            name: 'Cumulative Positive',
            type: 'line',
            color: '#7cb5ec',
            data: paramSeriesInfectedTOT,
            tooltip: {
                valuePrefix: ''
            }
        }, {
            name: 'Cumulative Fatalities',
            type: 'line',
            color: 'black',
            data: paramSeriesDeadTOT,
            yAxis: 1,
            tooltip: {
                valuePrefix: ''
            }
        }]
    });
}

function cycloneLineBar(divreference, paramCaption, paramXcategories, paramSeriesPop, paramSeriesWind, forecastFrom, forecastTo) {
    cycloneLineBar(divreference, paramCaption, 'Sustained wind speed and exposed population (Category 1 or higher)', paramXcategories, paramSeriesPop, paramSeriesWind, forecastFrom, forecastTo)
}
function cycloneLineBar(divreference, paramCaption, paramTitle, paramXcategories, paramSeriesPop, paramSeriesWind, forecastFrom, forecastTo) {
    Highcharts.chart(divreference, {
        chart: {
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: paramTitle
        },
        subtitle: {
            text: paramCaption == "" ? 'Bulletin timeline' : paramCaption
        },
        xAxis: [{
            categories: paramXcategories,
            plotBands: [{ // visualize the weekend
                label: {
                    text: 'forecast',
                    align: 'left'
                },
                from: forecastFrom,
                to: forecastTo,
                color: 'rgba(68, 170, 213, .2)'
            }],
            crosshair: true
        }],
        yAxis: [
            { // Secondary yAxis
                title: {
                    text: 'Population',
                    style: {
                        color: '#009999'
                    }
                },
                labels: {
                    format: '{value} M',
                    style: {
                        color: '#009999'
                    }
                },
                opposite: true
            },
            { // Primary yAxis
                labels: {
                    format: '{value} km/h',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                title: {
                    text: 'Windspeed',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
            }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },


        series: [{
            name: 'Windspeed',
            type: 'line',
            yAxis: 1,
            data: paramSeriesWind,
            tooltip: {
                valueSuffix: ' km/h'
            }
        }, {
            name: 'Population',
            type: 'column',
            data: paramSeriesPop,
            color: '#009999',
            tooltip: {
                valueSuffix: ' M'
            }

        }]
    });

}

function cycloneLineBarAllCat(divreference, paramCaption, paramXcategories, paramSeriesCAT1, paramSeriesCAT2, paramSeriesCAT3, paramSeriesCAT4, paramSeriesCAT5, paramSeriesWind, forecastFrom, forecastTo) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Maximum wind speed and exposed population(Category 1 or higher)'
        },
        subtitle: {
            text: paramCaption == "" ? 'Impact timeline' : paramCaption
        },
        xAxis: [{
            categories: paramXcategories,
            plotBands: [{ // visualize the forecast
                label: {
                    text: 'forecast',
                    align: 'left'
                },
                from: forecastFrom,
                to: forecastTo,
                color: 'rgba(68, 170, 213, .2)'
            }],
            crosshair: true

        }],
        yAxis: [
            { // Secondary yAxis
                title: {
                    text: 'Population',
                    style: {
                        color: '#009999'
                    }
                },
                labels: {
                    format: '{value} M',
                    style: {
                        color: '#009999'
                    }
                },
                opposite: true
            },
            { // Primary yAxis
                labels: {
                    format: '{value} km/h',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                title: {
                    text: 'Windspeed',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                }
            }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: (window.innerWidth < 768) ? 185 : 120,
            verticalAlign: 'top',
            y: (window.innerWidth < 768) ? 240 : 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false/*,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'*/
                }
            }
        },
        series: [{
            name: 'Windspeed',
            type: 'line',
            yAxis: 1,
            data: paramSeriesWind,
            tooltip: {
                valueSuffix: ' km/h'
            }
        }, {
            name: 'Pop CAT.1',
            type: 'column',
            data: paramSeriesCAT1,
            color: '#edea53',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop CAT.2',
            type: 'column',
            data: paramSeriesCAT2,
            color: '#faa450',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop CAT.3',
            type: 'column',
            data: paramSeriesCAT3,
            color: '#f57e56',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop CAT.4',
            type: 'column',
            data: paramSeriesCAT4,
            color: '#e03f3f',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop CAT.5',
            type: 'column',
            data: paramSeriesCAT5,
            color: '#990000',
            tooltip: {
                valueSuffix: ' M'
            }

        }]
    });

}

function cycloneLineBarAllRain(divreference, paramCaption, paramXcategories, paramSeries_100, paramSeries_250, paramSeries_500, paramSeries_750, paramSeries_1000, paramSeriesRain, forecastFrom, forecastTo) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Maximum rainfall and exposed population(100mm or higher)'
        },
        subtitle: {
            text: paramCaption == "" ? 'Impact timeline' : paramCaption
        },
        xAxis: [{
            categories: paramXcategories,
            plotBands: [{ // visualize the forecast
                label: {
                    text: 'forecast',
                    align: 'left'
                },
                from: forecastFrom,
                to: forecastTo,
                color: 'rgba(68, 170, 213, .2)'
            }],
            crosshair: true


        }],
        yAxis: [
            { // Secondary yAxis
                title: {
                    text: 'Population',
                    style: {
                        color: '#009999'
                    }
                },
                labels: {
                    format: '{value} M',
                    style: {
                        color: '#009999'
                    }
                },
                opposite: true
            },
            { // Primary yAxis
                labels: {
                    format: '{value} mm',
                    style: {
                        color: '#000000'
                    }
                },
                title: {
                    text: 'Rainfall',
                    style: {
                        color: '#000000'
                    }
                }
            }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: (window.innerWidth < 768) ? 185 : 120,
            verticalAlign: 'top',
            y: (window.innerWidth < 768) ? 240 : 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false/*,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'*/
                }
            }
        },
        series: [{
            name: 'Pop 100-250',
            type: 'column',
            data: paramSeries_100,
            color: 'rgba(127, 186, 235,1 )',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop 250-500',
            type: 'column',
            data: paramSeries_250,
            color: 'rgba(91, 165, 237,1 )',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop 500-750',
            type: 'column',
            data: paramSeries_500,
            color: 'rgba(71, 141, 235,1 )',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop 750-1000',
            type: 'column',
            data: paramSeries_750,
            color: 'rgba(45, 95, 219,1 )',
            tooltip: {
                valueSuffix: ' M'
            }

        }, {
            name: 'Pop >1000',
            type: 'column',
            data: paramSeries_1000,
            color: 'rgba(7, 53, 181,1 )',
            tooltip: {
                valueSuffix: ' M'
            }

        },
        {
            name: 'Rain',
            type: 'line',
            yAxis: 1,
            data: paramSeriesRain,
            color: '#000000',
            tooltip: {
                valueSuffix: ' mm'
            }
        }]
    });

}

function landCoverPieCharts(divreference, paramTitleBar, paramcategories, paramSeriesLand) {
    Highcharts.chart(divreference, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits: {
            text: 'CCI Land Cover',
            href: 'http://www.esa-landcover-cci.org/'
        },
        title: {
            text: paramTitleBar
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            formatter: function () {
                var sliceIndex = this.point.index;
                var sliceName = this.series.chart.axes[0].categories[sliceIndex];
                return '<span style="font-size: 10px">Land Cover</span> <br/>' + sliceName +
                    ': <b>' + this.y + '</b>';
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true
                },
                showInLegend: true
            }
        },
        legend: {
            enabled: true,
            labelFormatter: function () {
                var legendIndex = this.index;
                var legendName = this.series.chart.axes[0].categories[legendIndex];

                return legendName;
            }
        },
        xAxis: {
            categories: paramcategories,
        },
        series: [{
            name: 'Land Cover',
            colorByPoint: true,
            data: paramSeriesLand //{y:33.98, color:'red'},{y:64.55, color:'blue', name:'Forest'},{y:0.81, color:'green', name:'Grassland'},{y:0.65, color:'yellow', name:'Other'}
        }]
    });
    //Highcharts.setOptions({
    //    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    //        return {
    //            radialGradient: {
    //                cx: 0.5,
    //                cy: 0.3,
    //                r: 0.7
    //            },
    //            stops: [
    //                [0, color],
    //                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
    //            ]
    //        };
    //    })
    //});
}

function wildfiresPopBar(divreference, paramTitleBar, paramXcategories, paramSeriesPop) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false
        },
        title: {
            text: paramTitleBar
        },

        subtitle: {
            text: "source " + "<a href='https://ghsl.jrc.ec.europa.eu/' target='_blank'>GHSL</a>"
        },

        xAxis: {
            categories: paramXcategories
        },
        yAxis: {
            title: {
                text: 'Population'
            }
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '{point.label}'
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: paramSeriesPop,//[{ y: 7263862, label: '100km, 7.26M' }, { y: 780972, label: '75km, 780K' }, { y: 259789, label: '50km, 260K' }, { y: 74989, label: '20km, 75K' }, { y: 9771, label: '10km, 9.7K' }, { y: 3823, label: '5km, 3.8K' }, { y: 8, label: '2Km, 8' }],
            showInLegend: false
        }]

    });
}

function earthquakePopBar(divreference, paramTitleBar, paramXcategories, paramSeriesPop) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false
        },
        title: {
            text: paramTitleBar
        },

        subtitle: {
            text: 'source JRC'
        },

        xAxis: {
            categories: paramXcategories
        },
        yAxis: {
            title: {
                text: 'Population'
            }
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '{point.label}'
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            data: paramSeriesPop,//[{ y: 7263862, label: '100km, 7.26M' }, { y: 780972, label: '75km, 780K' }, { y: 259789, label: '50km, 260K' }, { y: 74989, label: '20km, 75K' }, { y: 9771, label: '10km, 9.7K' }, { y: 3823, label: '5km, 3.8K' }, { y: 8, label: '2Km, 8' }],
            showInLegend: false
        }]

    });
}

function earthquakeScatter(divreference, paramSeriesScatter) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Foreshocks and aftershocks (days) within 100km 4 days before to 10 days after'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Days'
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: false,
            gridLineWidth: 1,
            max: 10,
            min: -1,
            tickPositions: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            plotLines: [{
                color: '#00FF00',
                width: 2,
                value: 0
            }]
        },
        yAxis: {
            title: {
                text: 'Magnitude'
            }

        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#3cb357'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.label}'
                }
            }
        },
        series: [{
            name: 'Days',
            color: 'rgba(0, 204, 0, .5)',
            data: paramSeriesScatter//[{ x: 10.0579398148148, y: 4.6, label: "4.6M, 10km, delay 241.4" }, { x: 10.0188310185185, y: 5, label: "5M, 10km, delay 240.5" }, { x: 9.57841435185185, y: 4.9, label: "4.9M, 10km, delay 229.9" }, { x: 9.32824074074074, y: 4.5, label: "4.5M, 10km, delay 223.9" }, { x: 9.27876157407407, y: 4.7, label: "4.7M, 10km, delay 222.7" }, { x: 9.07363425925926, y: 4.9, label: "4.9M, 24.25km, delay 217.8" }, { x: 9.0659375, y: 5.1, label: "5.1M, 35.92km, delay 217.6" }, { x: 9.04325231481482, y: 4.9, label: "4.9M, 1.06km, delay 217" }, { x: 9.01033564814815, y: 4.7, label: "4.7M, 10km, delay 216.2" }, { x: 8.99384259259259, y: 4.9, label: "4.9M, 10km, delay 215.9" }, { x: 8.9921875, y: 5, label: "5M, 16.58km, delay 215.8" }, { x: 8.91076388888889, y: 5.2, label: "5.2M, 10km, delay 213.9" }, { x: 8.87979166666667, y: 5.2, label: "5.2M, 10km, delay 213.1" }, { x: 8.8722337962963, y: 5.1, label: "5.1M, 10km, delay 212.9" }, { x: 8.85354166666667, y: 6.7, label: "6.7M, 10km, delay 212.5" }, { x: 8.76209490740741, y: 4.8, label: "4.8M, 10km, delay 210.3" }, { x: 8.68050925925926, y: 4.7, label: "4.7M, 33.11km, delay 208.3" }, { x: 8.4047337962963, y: 5.3, label: "5.3M, 10km, delay 201.7" }, { x: 8.38091435185185, y: 5, label: "5M, 10km, delay 201.1" }, { x: 7.75225694444444, y: 4.7, label: "4.7M, 24.74km, delay 186.1" }, { x: 7.11114583333333, y: 4.9, label: "4.9M, 10km, delay 170.7" }, { x: 7.091875, y: 6, label: "6M, 10km, delay 170.2" }, { x: 6.86760416666667, y: 5.8, label: "5.8M, 6km, delay 164.8" }, { x: 6.78890046296296, y: 5.4, label: "5.4M, 22.58km, delay 162.9" }, { x: 6.75027777777778, y: 5.1, label: "5.1M, 10km, delay 162" }, { x: 6.22013888888889, y: 4.9, label: "4.9M, 10km, delay 149.3" }, { x: 5.9480787037037, y: 4.9, label: "4.9M, 10km, delay 142.8" }, { x: 5.92028935185185, y: 4.7, label: "4.7M, 10km, delay 142.1" }, { x: 5.52954861111111, y: 4.8, label: "4.8M, 10km, delay 132.7" }, { x: 5.2047337962963, y: 4.8, label: "4.8M, 10km, delay 124.9" }, { x: 5.15761574074074, y: 5.1, label: "5.1M, 41.91km, delay 123.8" }, { x: 5.04061342592593, y: 4.5, label: "4.5M, 10km, delay 121" }, { x: 5.02998842592593, y: 4.6, label: "4.6M, 36.85km, delay 120.7" }, { x: 4.79189814814815, y: 4.6, label: "4.6M, 30.14km, delay 115" }, { x: 4.59377314814815, y: 5.1, label: "5.1M, 10km, delay 110.3" }, { x: 4.39626157407407, y: 4.9, label: "4.9M, 10km, delay 105.5" }, { x: 4.38707175925926, y: 5.6, label: "5.6M, 28.69km, delay 105.3" }, { x: 4.30083333333333, y: 5, label: "5M, 10km, delay 103.2" }, { x: 3.60671296296296, y: 4.6, label: "4.6M, 10km, delay 86.6" }, { x: 3.41872685185185, y: 4.5, label: "4.5M, 10km, delay 82" }, { x: 3.2765162037037, y: 4.6, label: "4.6M, 10km, delay 78.6" }, { x: 3.19759259259259, y: 4.5, label: "4.5M, 10km, delay 76.7" }, { x: 3.05298611111111, y: 4.7, label: "4.7M, 21.15km, delay 73.3" }, { x: 2.8759375, y: 4.8, label: "4.8M, 10km, delay 69" }, { x: 2.84509259259259, y: 5, label: "5M, 10km, delay 68.3" }, { x: 2.74393518518519, y: 4.8, label: "4.8M, 10km, delay 65.9" }, { x: 2.48486111111111, y: 5.2, label: "5.2M, 10km, delay 59.6" }, { x: 2.4378587962963, y: 4.8, label: "4.8M, 10km, delay 58.5" }, { x: 2.40737268518519, y: 4.9, label: "4.9M, 10km, delay 57.8" }, { x: 2.37621527777778, y: 6.1, label: "6.1M, 16km, delay 57" }, { x: 2.27420138888889, y: 4.7, label: "4.7M, 10km, delay 54.6" }, { x: 2.26103009259259, y: 4.9, label: "4.9M, 10km, delay 54.3" }, { x: 2.10212962962963, y: 5.2, label: "5.2M, 10km, delay 50.5" }, { x: 2.03256944444444, y: 4.5, label: "4.5M, 10km, delay 48.8" }, { x: 1.94158564814815, y: 5.2, label: "5.2M, 10km, delay 46.6" }, { x: 1.90494212962963, y: 4.5, label: "4.5M, 10km, delay 45.7" }, { x: 1.85229166666667, y: 5, label: "5M, 14.45km, delay 44.5" }, { x: 1.84336805555556, y: 5, label: "5M, 14.7km, delay 44.2" }, { x: 1.8227662037037, y: 4.6, label: "4.6M, 10km, delay 43.7" }, { x: 1.71244212962963, y: 4.9, label: "4.9M, 21.1km, delay 41.1" }, { x: 1.70121527777778, y: 4.9, label: "4.9M, 20.86km, delay 40.8" }, { x: 1.56623842592593, y: 5.2, label: "5.2M, 10km, delay 37.6" }, { x: 1.52444444444444, y: 5.6, label: "5.6M, 10km, delay 36.6" }, { x: 1.50516203703704, y: 4.8, label: "4.8M, 10km, delay 36.1" }, { x: 1.49417824074074, y: 4.9, label: "4.9M, 10km, delay 35.9" }, { x: 1.35494212962963, y: 5.2, label: "5.2M, 10km, delay 32.5" }, { x: 1.29956018518519, y: 5, label: "5M, 10km, delay 31.2" }, { x: 1.26681712962963, y: 5.1, label: "5.1M, 10km, delay 30.4" }, { x: 1.26474537037037, y: 4.5, label: "4.5M, 10km, delay 30.4" }, { x: 1.18953703703704, y: 4.8, label: "4.8M, 10km, delay 28.5" }, { x: 1.17951388888889, y: 4.7, label: "4.7M, 10km, delay 28.3" }, { x: 1.17263888888889, y: 5, label: "5M, 10km, delay 28.1" }, { x: 1.06795138888889, y: 5.1, label: "5.1M, 21.21km, delay 25.6" }, { x: 1.03059027777778, y: 5.4, label: "5.4M, 20km, delay 24.7" }, { x: 1.00978009259259, y: 4.5, label: "4.5M, 19.39km, delay 24.2" }, { x: 0.998090277777778, y: 5.2, label: "5.2M, 10km, delay 24" }, { x: 0.898599537037037, y: 6.2, label: "6.2M, 13.81km, delay 21.6" }, { x: 0.795659722222222, y: 4.8, label: "4.8M, 38.32km, delay 19.1" }, { x: 0.785347222222222, y: 5.2, label: "5.2M, 26.7km, delay 18.8" }, { x: 0.781597222222222, y: 5, label: "5M, 40.01km, delay 18.8" }, { x: 0.758414351851852, y: 5.7, label: "5.7M, 13.33km, delay 18.2" }, { x: 0.722361111111111, y: 4.7, label: "4.7M, 22.31km, delay 17.3" }, { x: 0.719641203703704, y: 4.9, label: "4.9M, 33.05km, delay 17.3" }, { x: 0.691678240740741, y: 4.7, label: "4.7M, 49km, delay 16.6" }, { x: 0.683194444444444, y: 4.8, label: "4.8M, 35.9km, delay 16.4" }, { x: 0.655763888888889, y: 4.9, label: "4.9M, 50.46km, delay 15.7" }, { x: 0.649803240740741, y: 5, label: "5M, 60.3km, delay 15.6" }, { x: 0.61318287037037, y: 6, label: "6M, 23.64km, delay 14.7" }, { x: 0.581296296296296, y: 4.6, label: "4.6M, 35km, delay 14" }, { x: 0.554039351851852, y: 5.1, label: "5.1M, 35km, delay 13.3" }, { x: 0.530439814814815, y: 4.6, label: "4.6M, 32.38km, delay 12.7" }, { x: 0.488900462962963, y: 5, label: "5M, 10.81km, delay 11.7" }, { x: 0.483483796296296, y: 4.8, label: "4.8M, 35km, delay 11.6" }, { x: 0.465277777777778, y: 4.7, label: "4.7M, 35km, delay 11.2" }, { x: 0.453553240740741, y: 4.8, label: "4.8M, 27.32km, delay 10.9" }, { x: 0.395104166666667, y: 5.2, label: "5.2M, 35km, delay 9.5" }, { x: 0.393738425925926, y: 5, label: "5M, 35km, delay 9.4" }, { x: 0.366574074074074, y: 4.8, label: "4.8M, 21.44km, delay 8.8" }, { x: 0.362199074074074, y: 5, label: "5M, 35km, delay 8.7" }, { x: 0.272719907407407, y: 4.6, label: "4.6M, 35km, delay 6.5" }]

        }]
    });
}


function earthquakeScatterEpisode(divreference, paramSeriesScatter, paramTitle, paramYtitle) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: paramTitle
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Minutes'
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: false,
            gridLineWidth: 1,
            max: 40,
            min: -1,
            tickPositions: [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
            plotLines: [{
                color: '#00FF00',
                width: 2,
                value: 0
            }]
        },
        yAxis: {
            title: {
                text: paramYtitle,
            },
            tickPositions: paramYtitle == 'Magnitude' ? [4, 5, 6, 7, 8, 9, 10] : null

        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#3cb357'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.label}'
                }
            }
        },
        series: paramSeriesScatter//[{ x: 10.0579398148148, y: 4.6, label: "4.6M, 10km, delay 241.4" }, { x: 10.0188310185185, y: 5, label: "5M, 10km, delay 240.5" }, { x: 9.57841435185185, y: 4.9, label: "4.9M, 10km, delay 229.9" }, { x: 9.32824074074074, y: 4.5, label: "4.5M, 10km, delay 223.9" }, { x: 9.27876157407407, y: 4.7, label: "4.7M, 10km, delay 222.7" }, { x: 9.07363425925926, y: 4.9, label: "4.9M, 24.25km, delay 217.8" }, { x: 9.0659375, y: 5.1, label: "5.1M, 35.92km, delay 217.6" }, { x: 9.04325231481482, y: 4.9, label: "4.9M, 1.06km, delay 217" }, { x: 9.01033564814815, y: 4.7, label: "4.7M, 10km, delay 216.2" }, { x: 8.99384259259259, y: 4.9, label: "4.9M, 10km, delay 215.9" }, { x: 8.9921875, y: 5, label: "5M, 16.58km, delay 215.8" }, { x: 8.91076388888889, y: 5.2, label: "5.2M, 10km, delay 213.9" }, { x: 8.87979166666667, y: 5.2, label: "5.2M, 10km, delay 213.1" }, { x: 8.8722337962963, y: 5.1, label: "5.1M, 10km, delay 212.9" }, { x: 8.85354166666667, y: 6.7, label: "6.7M, 10km, delay 212.5" }, { x: 8.76209490740741, y: 4.8, label: "4.8M, 10km, delay 210.3" }, { x: 8.68050925925926, y: 4.7, label: "4.7M, 33.11km, delay 208.3" }, { x: 8.4047337962963, y: 5.3, label: "5.3M, 10km, delay 201.7" }, { x: 8.38091435185185, y: 5, label: "5M, 10km, delay 201.1" }, { x: 7.75225694444444, y: 4.7, label: "4.7M, 24.74km, delay 186.1" }, { x: 7.11114583333333, y: 4.9, label: "4.9M, 10km, delay 170.7" }, { x: 7.091875, y: 6, label: "6M, 10km, delay 170.2" }, { x: 6.86760416666667, y: 5.8, label: "5.8M, 6km, delay 164.8" }, { x: 6.78890046296296, y: 5.4, label: "5.4M, 22.58km, delay 162.9" }, { x: 6.75027777777778, y: 5.1, label: "5.1M, 10km, delay 162" }, { x: 6.22013888888889, y: 4.9, label: "4.9M, 10km, delay 149.3" }, { x: 5.9480787037037, y: 4.9, label: "4.9M, 10km, delay 142.8" }, { x: 5.92028935185185, y: 4.7, label: "4.7M, 10km, delay 142.1" }, { x: 5.52954861111111, y: 4.8, label: "4.8M, 10km, delay 132.7" }, { x: 5.2047337962963, y: 4.8, label: "4.8M, 10km, delay 124.9" }, { x: 5.15761574074074, y: 5.1, label: "5.1M, 41.91km, delay 123.8" }, { x: 5.04061342592593, y: 4.5, label: "4.5M, 10km, delay 121" }, { x: 5.02998842592593, y: 4.6, label: "4.6M, 36.85km, delay 120.7" }, { x: 4.79189814814815, y: 4.6, label: "4.6M, 30.14km, delay 115" }, { x: 4.59377314814815, y: 5.1, label: "5.1M, 10km, delay 110.3" }, { x: 4.39626157407407, y: 4.9, label: "4.9M, 10km, delay 105.5" }, { x: 4.38707175925926, y: 5.6, label: "5.6M, 28.69km, delay 105.3" }, { x: 4.30083333333333, y: 5, label: "5M, 10km, delay 103.2" }, { x: 3.60671296296296, y: 4.6, label: "4.6M, 10km, delay 86.6" }, { x: 3.41872685185185, y: 4.5, label: "4.5M, 10km, delay 82" }, { x: 3.2765162037037, y: 4.6, label: "4.6M, 10km, delay 78.6" }, { x: 3.19759259259259, y: 4.5, label: "4.5M, 10km, delay 76.7" }, { x: 3.05298611111111, y: 4.7, label: "4.7M, 21.15km, delay 73.3" }, { x: 2.8759375, y: 4.8, label: "4.8M, 10km, delay 69" }, { x: 2.84509259259259, y: 5, label: "5M, 10km, delay 68.3" }, { x: 2.74393518518519, y: 4.8, label: "4.8M, 10km, delay 65.9" }, { x: 2.48486111111111, y: 5.2, label: "5.2M, 10km, delay 59.6" }, { x: 2.4378587962963, y: 4.8, label: "4.8M, 10km, delay 58.5" }, { x: 2.40737268518519, y: 4.9, label: "4.9M, 10km, delay 57.8" }, { x: 2.37621527777778, y: 6.1, label: "6.1M, 16km, delay 57" }, { x: 2.27420138888889, y: 4.7, label: "4.7M, 10km, delay 54.6" }, { x: 2.26103009259259, y: 4.9, label: "4.9M, 10km, delay 54.3" }, { x: 2.10212962962963, y: 5.2, label: "5.2M, 10km, delay 50.5" }, { x: 2.03256944444444, y: 4.5, label: "4.5M, 10km, delay 48.8" }, { x: 1.94158564814815, y: 5.2, label: "5.2M, 10km, delay 46.6" }, { x: 1.90494212962963, y: 4.5, label: "4.5M, 10km, delay 45.7" }, { x: 1.85229166666667, y: 5, label: "5M, 14.45km, delay 44.5" }, { x: 1.84336805555556, y: 5, label: "5M, 14.7km, delay 44.2" }, { x: 1.8227662037037, y: 4.6, label: "4.6M, 10km, delay 43.7" }, { x: 1.71244212962963, y: 4.9, label: "4.9M, 21.1km, delay 41.1" }, { x: 1.70121527777778, y: 4.9, label: "4.9M, 20.86km, delay 40.8" }, { x: 1.56623842592593, y: 5.2, label: "5.2M, 10km, delay 37.6" }, { x: 1.52444444444444, y: 5.6, label: "5.6M, 10km, delay 36.6" }, { x: 1.50516203703704, y: 4.8, label: "4.8M, 10km, delay 36.1" }, { x: 1.49417824074074, y: 4.9, label: "4.9M, 10km, delay 35.9" }, { x: 1.35494212962963, y: 5.2, label: "5.2M, 10km, delay 32.5" }, { x: 1.29956018518519, y: 5, label: "5M, 10km, delay 31.2" }, { x: 1.26681712962963, y: 5.1, label: "5.1M, 10km, delay 30.4" }, { x: 1.26474537037037, y: 4.5, label: "4.5M, 10km, delay 30.4" }, { x: 1.18953703703704, y: 4.8, label: "4.8M, 10km, delay 28.5" }, { x: 1.17951388888889, y: 4.7, label: "4.7M, 10km, delay 28.3" }, { x: 1.17263888888889, y: 5, label: "5M, 10km, delay 28.1" }, { x: 1.06795138888889, y: 5.1, label: "5.1M, 21.21km, delay 25.6" }, { x: 1.03059027777778, y: 5.4, label: "5.4M, 20km, delay 24.7" }, { x: 1.00978009259259, y: 4.5, label: "4.5M, 19.39km, delay 24.2" }, { x: 0.998090277777778, y: 5.2, label: "5.2M, 10km, delay 24" }, { x: 0.898599537037037, y: 6.2, label: "6.2M, 13.81km, delay 21.6" }, { x: 0.795659722222222, y: 4.8, label: "4.8M, 38.32km, delay 19.1" }, { x: 0.785347222222222, y: 5.2, label: "5.2M, 26.7km, delay 18.8" }, { x: 0.781597222222222, y: 5, label: "5M, 40.01km, delay 18.8" }, { x: 0.758414351851852, y: 5.7, label: "5.7M, 13.33km, delay 18.2" }, { x: 0.722361111111111, y: 4.7, label: "4.7M, 22.31km, delay 17.3" }, { x: 0.719641203703704, y: 4.9, label: "4.9M, 33.05km, delay 17.3" }, { x: 0.691678240740741, y: 4.7, label: "4.7M, 49km, delay 16.6" }, { x: 0.683194444444444, y: 4.8, label: "4.8M, 35.9km, delay 16.4" }, { x: 0.655763888888889, y: 4.9, label: "4.9M, 50.46km, delay 15.7" }, { x: 0.649803240740741, y: 5, label: "5M, 60.3km, delay 15.6" }, { x: 0.61318287037037, y: 6, label: "6M, 23.64km, delay 14.7" }, { x: 0.581296296296296, y: 4.6, label: "4.6M, 35km, delay 14" }, { x: 0.554039351851852, y: 5.1, label: "5.1M, 35km, delay 13.3" }, { x: 0.530439814814815, y: 4.6, label: "4.6M, 32.38km, delay 12.7" }, { x: 0.488900462962963, y: 5, label: "5M, 10.81km, delay 11.7" }, { x: 0.483483796296296, y: 4.8, label: "4.8M, 35km, delay 11.6" }, { x: 0.465277777777778, y: 4.7, label: "4.7M, 35km, delay 11.2" }, { x: 0.453553240740741, y: 4.8, label: "4.8M, 27.32km, delay 10.9" }, { x: 0.395104166666667, y: 5.2, label: "5.2M, 35km, delay 9.5" }, { x: 0.393738425925926, y: 5, label: "5M, 35km, delay 9.4" }, { x: 0.366574074074074, y: 4.8, label: "4.8M, 21.44km, delay 8.8" }, { x: 0.362199074074074, y: 5, label: "5M, 35km, delay 8.7" }, { x: 0.272719907407407, y: 4.6, label: "4.6M, 35km, delay 6.5" }]


        //        series: [{
        //            name: 'Minutes',
        //            color: 'rgba(0, 204, 0, .5)',
        //            data: paramSeriesScatter//[{ x: 10.0579398148148, y: 4.6, label: "4.6M, 10km, delay 241.4" }, { x: 10.0188310185185, y: 5, label: "5M, 10km, delay 240.5" }, { x: 9.57841435185185, y: 4.9, label: "4.9M, 10km, delay 229.9" }, { x: 9.32824074074074, y: 4.5, label: "4.5M, 10km, delay 223.9" }, { x: 9.27876157407407, y: 4.7, label: "4.7M, 10km, delay 222.7" }, { x: 9.07363425925926, y: 4.9, label: "4.9M, 24.25km, delay 217.8" }, { x: 9.0659375, y: 5.1, label: "5.1M, 35.92km, delay 217.6" }, { x: 9.04325231481482, y: 4.9, label: "4.9M, 1.06km, delay 217" }, { x: 9.01033564814815, y: 4.7, label: "4.7M, 10km, delay 216.2" }, { x: 8.99384259259259, y: 4.9, label: "4.9M, 10km, delay 215.9" }, { x: 8.9921875, y: 5, label: "5M, 16.58km, delay 215.8" }, { x: 8.91076388888889, y: 5.2, label: "5.2M, 10km, delay 213.9" }, { x: 8.87979166666667, y: 5.2, label: "5.2M, 10km, delay 213.1" }, { x: 8.8722337962963, y: 5.1, label: "5.1M, 10km, delay 212.9" }, { x: 8.85354166666667, y: 6.7, label: "6.7M, 10km, delay 212.5" }, { x: 8.76209490740741, y: 4.8, label: "4.8M, 10km, delay 210.3" }, { x: 8.68050925925926, y: 4.7, label: "4.7M, 33.11km, delay 208.3" }, { x: 8.4047337962963, y: 5.3, label: "5.3M, 10km, delay 201.7" }, { x: 8.38091435185185, y: 5, label: "5M, 10km, delay 201.1" }, { x: 7.75225694444444, y: 4.7, label: "4.7M, 24.74km, delay 186.1" }, { x: 7.11114583333333, y: 4.9, label: "4.9M, 10km, delay 170.7" }, { x: 7.091875, y: 6, label: "6M, 10km, delay 170.2" }, { x: 6.86760416666667, y: 5.8, label: "5.8M, 6km, delay 164.8" }, { x: 6.78890046296296, y: 5.4, label: "5.4M, 22.58km, delay 162.9" }, { x: 6.75027777777778, y: 5.1, label: "5.1M, 10km, delay 162" }, { x: 6.22013888888889, y: 4.9, label: "4.9M, 10km, delay 149.3" }, { x: 5.9480787037037, y: 4.9, label: "4.9M, 10km, delay 142.8" }, { x: 5.92028935185185, y: 4.7, label: "4.7M, 10km, delay 142.1" }, { x: 5.52954861111111, y: 4.8, label: "4.8M, 10km, delay 132.7" }, { x: 5.2047337962963, y: 4.8, label: "4.8M, 10km, delay 124.9" }, { x: 5.15761574074074, y: 5.1, label: "5.1M, 41.91km, delay 123.8" }, { x: 5.04061342592593, y: 4.5, label: "4.5M, 10km, delay 121" }, { x: 5.02998842592593, y: 4.6, label: "4.6M, 36.85km, delay 120.7" }, { x: 4.79189814814815, y: 4.6, label: "4.6M, 30.14km, delay 115" }, { x: 4.59377314814815, y: 5.1, label: "5.1M, 10km, delay 110.3" }, { x: 4.39626157407407, y: 4.9, label: "4.9M, 10km, delay 105.5" }, { x: 4.38707175925926, y: 5.6, label: "5.6M, 28.69km, delay 105.3" }, { x: 4.30083333333333, y: 5, label: "5M, 10km, delay 103.2" }, { x: 3.60671296296296, y: 4.6, label: "4.6M, 10km, delay 86.6" }, { x: 3.41872685185185, y: 4.5, label: "4.5M, 10km, delay 82" }, { x: 3.2765162037037, y: 4.6, label: "4.6M, 10km, delay 78.6" }, { x: 3.19759259259259, y: 4.5, label: "4.5M, 10km, delay 76.7" }, { x: 3.05298611111111, y: 4.7, label: "4.7M, 21.15km, delay 73.3" }, { x: 2.8759375, y: 4.8, label: "4.8M, 10km, delay 69" }, { x: 2.84509259259259, y: 5, label: "5M, 10km, delay 68.3" }, { x: 2.74393518518519, y: 4.8, label: "4.8M, 10km, delay 65.9" }, { x: 2.48486111111111, y: 5.2, label: "5.2M, 10km, delay 59.6" }, { x: 2.4378587962963, y: 4.8, label: "4.8M, 10km, delay 58.5" }, { x: 2.40737268518519, y: 4.9, label: "4.9M, 10km, delay 57.8" }, { x: 2.37621527777778, y: 6.1, label: "6.1M, 16km, delay 57" }, { x: 2.27420138888889, y: 4.7, label: "4.7M, 10km, delay 54.6" }, { x: 2.26103009259259, y: 4.9, label: "4.9M, 10km, delay 54.3" }, { x: 2.10212962962963, y: 5.2, label: "5.2M, 10km, delay 50.5" }, { x: 2.03256944444444, y: 4.5, label: "4.5M, 10km, delay 48.8" }, { x: 1.94158564814815, y: 5.2, label: "5.2M, 10km, delay 46.6" }, { x: 1.90494212962963, y: 4.5, label: "4.5M, 10km, delay 45.7" }, { x: 1.85229166666667, y: 5, label: "5M, 14.45km, delay 44.5" }, { x: 1.84336805555556, y: 5, label: "5M, 14.7km, delay 44.2" }, { x: 1.8227662037037, y: 4.6, label: "4.6M, 10km, delay 43.7" }, { x: 1.71244212962963, y: 4.9, label: "4.9M, 21.1km, delay 41.1" }, { x: 1.70121527777778, y: 4.9, label: "4.9M, 20.86km, delay 40.8" }, { x: 1.56623842592593, y: 5.2, label: "5.2M, 10km, delay 37.6" }, { x: 1.52444444444444, y: 5.6, label: "5.6M, 10km, delay 36.6" }, { x: 1.50516203703704, y: 4.8, label: "4.8M, 10km, delay 36.1" }, { x: 1.49417824074074, y: 4.9, label: "4.9M, 10km, delay 35.9" }, { x: 1.35494212962963, y: 5.2, label: "5.2M, 10km, delay 32.5" }, { x: 1.29956018518519, y: 5, label: "5M, 10km, delay 31.2" }, { x: 1.26681712962963, y: 5.1, label: "5.1M, 10km, delay 30.4" }, { x: 1.26474537037037, y: 4.5, label: "4.5M, 10km, delay 30.4" }, { x: 1.18953703703704, y: 4.8, label: "4.8M, 10km, delay 28.5" }, { x: 1.17951388888889, y: 4.7, label: "4.7M, 10km, delay 28.3" }, { x: 1.17263888888889, y: 5, label: "5M, 10km, delay 28.1" }, { x: 1.06795138888889, y: 5.1, label: "5.1M, 21.21km, delay 25.6" }, { x: 1.03059027777778, y: 5.4, label: "5.4M, 20km, delay 24.7" }, { x: 1.00978009259259, y: 4.5, label: "4.5M, 19.39km, delay 24.2" }, { x: 0.998090277777778, y: 5.2, label: "5.2M, 10km, delay 24" }, { x: 0.898599537037037, y: 6.2, label: "6.2M, 13.81km, delay 21.6" }, { x: 0.795659722222222, y: 4.8, label: "4.8M, 38.32km, delay 19.1" }, { x: 0.785347222222222, y: 5.2, label: "5.2M, 26.7km, delay 18.8" }, { x: 0.781597222222222, y: 5, label: "5M, 40.01km, delay 18.8" }, { x: 0.758414351851852, y: 5.7, label: "5.7M, 13.33km, delay 18.2" }, { x: 0.722361111111111, y: 4.7, label: "4.7M, 22.31km, delay 17.3" }, { x: 0.719641203703704, y: 4.9, label: "4.9M, 33.05km, delay 17.3" }, { x: 0.691678240740741, y: 4.7, label: "4.7M, 49km, delay 16.6" }, { x: 0.683194444444444, y: 4.8, label: "4.8M, 35.9km, delay 16.4" }, { x: 0.655763888888889, y: 4.9, label: "4.9M, 50.46km, delay 15.7" }, { x: 0.649803240740741, y: 5, label: "5M, 60.3km, delay 15.6" }, { x: 0.61318287037037, y: 6, label: "6M, 23.64km, delay 14.7" }, { x: 0.581296296296296, y: 4.6, label: "4.6M, 35km, delay 14" }, { x: 0.554039351851852, y: 5.1, label: "5.1M, 35km, delay 13.3" }, { x: 0.530439814814815, y: 4.6, label: "4.6M, 32.38km, delay 12.7" }, { x: 0.488900462962963, y: 5, label: "5M, 10.81km, delay 11.7" }, { x: 0.483483796296296, y: 4.8, label: "4.8M, 35km, delay 11.6" }, { x: 0.465277777777778, y: 4.7, label: "4.7M, 35km, delay 11.2" }, { x: 0.453553240740741, y: 4.8, label: "4.8M, 27.32km, delay 10.9" }, { x: 0.395104166666667, y: 5.2, label: "5.2M, 35km, delay 9.5" }, { x: 0.393738425925926, y: 5, label: "5M, 35km, delay 9.4" }, { x: 0.366574074074074, y: 4.8, label: "4.8M, 21.44km, delay 8.8" }, { x: 0.362199074074074, y: 5, label: "5M, 35km, delay 8.7" }, { x: 0.272719907407407, y: 4.6, label: "4.6M, 35km, delay 6.5" }]

        //        }]
    });
}


function tsunamiScatter(divreference, paramSeriesRealtime, paramSeriesNP, paramSeriesCustom, paramYDefinition) {
    Highcharts.chart(divreference, {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Timeline tsunami calculations triggered for the event'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Minutes (min)'
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: false,
            gridLineWidth: 1/*,
            max: 300,
            min: 0,
            tickPositions: [-30, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300]*/
        },
        yAxis: {
            title: {
                text: 'Max Height (m)'
            },
            min: 0,
            tickPositions: paramYDefinition
        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#3cb357'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.label}'
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: (window.innerWidth < 768) ? 185 : 120,
            verticalAlign: 'top',
            y: (window.innerWidth < 768) ? 240 : 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Realtime',
            color: 'rgba(0, 41, 205, 0.7)',
            data: paramSeriesRealtime

        }, {
            name: 'Custom',
            color: 'rgba(177, 205, 0, 0.7)',
            data: paramSeriesCustom

        }, {
            name: 'NP',
            color: 'rgba(130, 0, 205, 0.7)',
            data: paramSeriesNP

        }]
    });
}


function tsunamiScatterMontecarlo(divreference, paramSeriesRealtime, paramSeriesNP, paramSeriesCustom, paramYDefinition, paramSeriesMontecarlo) {
    Highcharts.seriesType('lowhigh', 'boxplot', {
        keys: ['low', 'high']
    }, {
        // Change point shape to a line with three crossing lines for low/median/high
        // Stroke width is hardcoded to 1 for simplicity
        drawPoints: function () {
            var series = this;
            Highcharts.each(this.points, function (point) {
                var graphic = point.graphic,
                    verb = graphic ? 'animate' : 'attr',
                    shapeArgs = point.shapeArgs,
                    width = 10,//shapeArgs.width/10,
                    left = Math.floor(shapeArgs.x) + 0.5,
                    right = left + width,
                    crispX = left + Math.round(width / 2) + 0.5,
                    highPlot = Math.floor(point.highPlot) + 0.5,
                    lowPlot = Math.floor(point.lowPlot) + 0.5 - (point.low === 0 ? 1 : 0); // Sneakily draw low marker even if 0

                if (point.isNull) {
                    return;
                }

                if (!graphic) {
                    point.graphic = graphic = series.chart.renderer.path('point').add(series.group);
                }

                graphic.attr({
                    stroke: point.color || series.color,
                    "stroke-width": 1
                });

                graphic[verb]({
                    d: [
                        'M', left, highPlot,
                        'H', right,
                        'M', left, highPlot,
                        'H', right,
                        'M', left, lowPlot,
                        'H', right,
                        'M', crispX, highPlot,
                        'V', lowPlot
                    ]
                });
            });
        }
    });




    var chart = Highcharts.chart(divreference, {
        chart: {
            type: 'lowhigh',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Timeline tsunami calculations triggered for the event'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Minutes (min)'
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: false,
            gridLineWidth: 1/*,
            max: 300,
            min: 0,
            tickPositions: [-30, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300]*/
        },
        yAxis: {
            title: {
                text: 'Max Height (m)'
            },
            min: 0,

            tickPositions: paramYDefinition
        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#3cb357'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.label}'
                }
            },
            lowhigh: {
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name} after {point.x} min:<br/>MinHeight: <b>{point.low}</b><br/>MaxHeight: <b>{point.high}</b><br/>'
                }
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: (window.innerWidth < 768) ? 185 : 120,
            verticalAlign: 'top',
            y: (window.innerWidth < 768) ? 240 : 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Realtime',
            color: 'rgba(0, 41, 205, 0.7)',
            type: 'scatter',
            data: paramSeriesRealtime

        }, {
            name: 'Custom',
            color: 'rgba(177, 205, 0, 0.7)',
            type: 'scatter',
            data: paramSeriesCustom

        }, {
            name: 'NP',
            color: 'rgba(130, 0, 205, 0.7)',
            type: 'scatter',
            data: paramSeriesNP

        }, {
            name: 'Montecarlo',
            color: 'rgba(231, 0, 18, 0.7)',
            data: paramSeriesMontecarlo
        }]
    });
}

function reportAlertScoreBar(divreference, paramScore) {
    $(divreference).highcharts({
        chart: {
            inverted: true,
            type: 'scatter'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        yAxis: {
            min: 0,
            max: 3,
            opposite: false,
            title: {
                text: null
            },
            plotBands: [{
                from: 0,
                to: 1,
                color: 'rgb(110, 188, 92)' // green
            }, {
                from: 1,
                to: 2,
                color: 'rgb(238, 160, 67)' // yellow
            }, {
                from: 2,
                to: 3,
                color: 'rgb(229, 52, 53)' // red
            }],
            tickInterval: 1
        },
        xAxis: {
            labels: {
                enabled: false
            },
            tickLength: 0,
            min: 0,
            max: 1
        },
        series: [{
            name: 'Gdacs score',
            data: [paramScore],
            animation: true,
            showInLegend: false,
            color: '#000000',
            dataLabels: {
                enabled: true,
                style: {
                    color: 'black',
                    fontSize: '18px'
                }
            }
        }],
        tooltip: {
            pointFormat: '{point.y}'
        }
    });

}

function reportAlertScoreBar(divreference, paramScoreMax, paramScoreCurr) {

    $(function () {

        /**
         * Highcharts Linear-Gauge series plugin
         */
        (function (H) {
            var defaultPlotOptions = H.getOptions().plotOptions,
                columnType = H.seriesTypes.column,
                wrap = H.wrap,
                each = H.each;

            defaultPlotOptions.lineargauge = H.merge(defaultPlotOptions.column, {});
            H.seriesTypes.lineargauge = H.extendClass(columnType, {
                type: 'lineargauge',
                //inverted: true,
                setVisible: function () {
                    columnType.prototype.setVisible.apply(this, arguments);
                    if (this.markLine) {
                        this.markLine[this.visible ? 'show' : 'hide']();
                    }
                },
                drawPoints: function () {
                    // Draw the Column like always
                    columnType.prototype.drawPoints.apply(this, arguments);

                    // Add a Marker
                    var series = this,
                        chart = this.chart,
                        inverted = chart.inverted,
                        xAxis = this.xAxis,
                        yAxis = this.yAxis,
                        point = this.points[0], // we know there is only 1 point
                        markLine = this.markLine,
                        ani = markLine ? 'animate' : 'attr';

                    // Hide column
                    if (point != null) {
                        point.graphic.hide();

                        if (!markLine) {
                            var path = inverted ? ['M', 0, 0, 'L', -5, -5, 'L', 5, -5, 'L', 0, 0, 'L', 0, 0 + xAxis.len] : ['M', 0, 0, 'L', -5, -5, 'L', -5, 5, 'L', 0, 0, 'L', xAxis.len, 0];
                            markLine = this.markLine = chart.renderer.path(path)
                                .attr({
                                    fill: this.color,
                                    stroke: this.color,
                                    'stroke-width': 5
                                }).add();
                        }
                        markLine[ani]({
                            translateX: inverted ? xAxis.left + yAxis.translate(point.y) : xAxis.left,
                            translateY: inverted ? xAxis.top : yAxis.top + yAxis.len - yAxis.translate(point.y)
                        });
                    }

                }
            });
        })(Highcharts);

        $(divreference).highcharts({
            chart: {
                type: 'lineargauge',
                inverted: true
            },
            xAxis: {
                lineColor: '#C0C0C0',
                labels: {
                    enabled: false
                },
                tickLength: 0,

            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            yAxis: {
                min: 0,
                max: 3,
                tickPositions: [0, 1, 2, 3],
                tickLength: 1,
                tickWidth: 1,
                tickColor: '#C0C0C0',
                gridLineColor: '#C0C0C0',
                gridLineWidth: 1,
                minorTickInterval: 5,
                minorTickWidth: 1,
                minorTickLength: 5,
                minorGridLineWidth: 0,
                startOnTick: true,
                endOnTick: true,

                title: null,
                labels: {
                    format: '{value}'
                },
                plotBands: [{
                    from: 0,
                    to: 1,
                    color: 'rgb(110, 188, 92)' // green
                }, {
                    from: 1,
                    to: 2,
                    color: 'rgb(238, 160, 67)' // yellow
                }, {
                    from: 2,
                    to: 3,
                    color: 'rgb(229, 52, 53)' // red
                }]
            },
            legend: {
                enabled: false
            },

            series: [{
                id: 'EventScore',
                name: 'Overall',
                animation: true,
                data: [paramScoreMax],
                color: 'grey',
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    format: '{point.y}',
                    color: 'black',
                    y: 10,
                    style: {
                        fontSize: '18px'
                    }
                }
            }, {
                id: 'EpisodeScore',
                name: 'Current',
                data: [paramScoreCurr],
                animation: true,
                color: '#000000',
                dataLabels: {
                    enabled: true,
                    align: 'center',
                    format: '{point.y}',
                    color: 'black',
                    y: 1,
                    style: {
                        fontSize: '18px'
                    }


                }
            }],
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(255, 255, 255, .85)',
                borderWidth: 0,
                shadow: true,
                style: { fontSize: '10px', padding: 2 },
                formatter: function () {
                    return this.series.name + ": <strong>" + Highcharts.numberFormat(this.y, 2) + "</strong>";
                }
            },
        });
    });

}

//tsunamiMontecarlo("graphMontecarlo", graphXLocations, graphYHeight, graphYRangeHeight,graphYEffectiveHeight);
function tsunamiMontecarlo(divreference, paramXLocations, paramYHeight, paramYRangeHeight, paramYEffectiveHeight, paramYTitle) {

    Highcharts.chart(divreference, {
        chart: {
            type: 'columnrange',
            inverted: true,
            height: paramXLocations.length < 15 ? 310 : paramXLocations.length * 15

        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Montecarlo simulation for event'
        },
        xAxis: {
            categories: paramXLocations
        },
        yAxis: [{//Primary
            title: {
                text: paramYTitle
            },
            opposite: true,
            tickPositions: paramYHeight,
            gridLineColor: '#AAAAAA',
            plotBands: [{ // Green Banner
                from: 0,
                to: 1,
                color: 'rgba(110, 188, 92, .2)'
            },
            { // Orange Banner
                from: 1,
                to: 3,
                color: 'rgba(238, 150, 67, .2)'
            },
            { // Red banner
                //label: {
                //    text: 'R',
                //    align: 'left'
                //},
                from: 3,
                to: paramYHeight[paramYHeight.length - 1],
                color: 'rgba(255, 38, 0, .2)'
            }],

        },
        {//Secondary
            title: {
                text: paramYTitle
            },
            labels: {
                format: '{y}'
            },
            tickPositions: paramYHeight,
            gridLineWidth: 1,
            gridLineColor: '#AAAAAA',
            gridLineDashStyle: 'Solid'
        }],

        tooltip: {
            pointFormat: 'min: {point.low}   max: {point.high}',
            valueSuffix: 'm'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: false,
                    format: '{y}m'
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Height',
            yAxis: 1,
            data: paramYRangeHeight
        },
        {
            name: 'Height',
            type: 'scatter',
            data: paramYEffectiveHeight,
            tooltip: {
                pointFormat: 'realtime result: {point.y}',
                valueSuffix: 'm'
            }
        }]

    });
}


function twitterScatter(divreference, paramSeriesScatterList, paramXLabel, paramTickPosition) {
    var options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Tweets mentioning keywords over time'
        },
        xAxis: {
            title: {
                enabled: true,
                text: paramXLabel
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: false,
            gridLineWidth: 1,
            max: paramTickPosition[paramTickPosition.length - 1],
            min: paramTickPosition[0],
            tickPositions: paramTickPosition,
            plotLines: [{
                color: '#00FF00',
                width: 2,
                value: 0
            }]
        },
        yAxis: {
            title: {
                text: 'Tweets per minutes'
            }

        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#ecb357'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.label}'
                }
            }
        },
        series: []
    };
    try {

        $.each(JSON.parse(paramSeriesScatterList), function (i, item) {
            options.series.push({
                name: item.name,
                data: item.data,
                color: item.color
            });
        });
        Highcharts.chart(divreference, options);
    }
    catch {
        $("#" + divreference).html('Problem to load graph');
    }


}


function disasterWatch(divreference, paramArrayData) {
    var options = {
        chart: {
            type: 'bar',
            animation: false
        },
        title: {
            text: 'Disaster watch monitor'
        },
        subtitle: {
            text: '(...beta version)'
        },
        xAxis: {
            categories: [],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total tweet',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' tweets'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        /*legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },*/
        credits: {
            enabled: false
        },
        series: []
    };
    try {
        var dataSeries = [];

        $.each(paramArrayData, function (i, item) {
            options.xAxis.categories.push(item.category);
            dataSeries.push(item.data.length);
        });
        options.series.push({
            name: 'Total twitter',

            data: dataSeries
        });
        options.plotOptions.series = {
            cursor: 'pointer',
            events: {
                click: function (e) {
                    BuildTableDetail(e.point.category);

                }
            }
        };

        Highcharts.chart(divreference, options);
    }
    catch {
        $("#" + divreference).html('Problem to load graph');
    }


}


function vaaGraphLineBar(divreference, paramCaption, paramSeries, paramYTitle, paramSeriesName, paramColor) {
    var xSeries = [];
    var ySeries = [];
    var yCategory = null;
    if (divreference == "graphVei")
        yCategory = [0, 1, 2, 3, 4, 5];
    var j = JSON.parse(paramSeries);
    for (var i = 0; i < j.length; i++) {
        var c = j[i];
        xSeries.push(c.xAxis);
        ySeries.push(c.yAxis);
    }

    Highcharts.chart(divreference, {
        chart: {
            type: 'spline'
        },
        title: {
            text: paramCaption
        },
        xAxis: {
            categories: xSeries
        },
        yAxis: {
            categories: yCategory,
            title: {
                text: paramYTitle
            },
            labels: {
                format: '{value}'
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 2,
                    lineColor: paramColor,
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: paramSeriesName,
            data: ySeries,
            color: paramColor
        }]
    });

}
function volcanoesScatterEpisode(divreference, paramSeriesScatter, paramTitle, paramYtitle) {

    var Series = [];
    var Categories;
    var TickPosition;
    var TicKArray = [];
    if (paramSeriesScatter) {
        Series = JSON.parse(paramSeriesScatter).Series;
        Categories = JSON.parse(paramSeriesScatter).DateCategories;
        TickPosition = JSON.parse(paramSeriesScatter).Categories;
        var j = JSON.parse(paramSeriesScatter).Categories;
        var tickstep = JSON.parse(paramSeriesScatter).Categories.length;
        switch (true) {
            case (tickstep >= 20 && tickstep < 40):
                tickstep = 2
                break;
            case (tickstep >= 40 && tickstep < 60):
                tickstep = 3
                break;
            case (tickstep >= 60):
                tickstep = 5
                break;
            default:
                tickstep = 1
        }
        for (var i = 0; i < JSON.parse(paramSeriesScatter).Categories.length; i += tickstep) {
            var c = JSON.parse(paramSeriesScatter).Categories[i];
            var d = JSON.parse(paramSeriesScatter).DateCategories[i];
            var element = [];
            var tt = { "value": c, "label": d };
            element.push(tt);
            TicKArray.push(element);
        }
    }
    var titleText = 'Seismic activities in the period ' + Categories[0] + ' ' + Categories[Categories.length - 1] + ' (<a href="https://emsc-csem.org/" target="_blank">EMSC</a>)';

    Highcharts.chart(divreference, {
        //chart: {
        //    type: 'scatter',
        //    zoomType: 'xy'
        //},
        //title: {
        //    text: 'Seismic activities in the period ' + Categories[0] + ' ' + Categories[Categories.length - 1]
        //},
        //xAxis: {
        //    type: 'datetime',
        //    dateFormat: 'dd/MM/YY',

        //    title: {
        //        enabled: true,
        //        text: 'Date'
        //    },
        //    tickPositions: [Date('2023-12-14T00:00:00'), Date('2023-12-15T00:00:00'), Date('2023-12-16T00:00:00'), Date('2023-12-17T00:00:00'), Date('2023-12-18T00:00:00'),
        //        Date('2023-12-19T00:00:00'), Date('2023-12-20T00:00:00'), Date('2023-12-21T00:00:00'), Date('2023-12-22T00:00:00'), Date('2023-12-23T00:00:00'),
        //        Date('2023-12-24T00:00:00'), Date('2023-12-25T00:00:00'), Date('2023-12-26T00:00:00'), Date('2023-12-27T00:00:00'), Date('2023-12-28T00:00:00'),
        //        Date('2023-12-29T00:00:00'), Date('2023-12-30T00:00:00'), Date('2023-12-31T00:00:00'), Date('2024-01-01T00:00:00'), Date('2024-01-02T00:00:00'),
        //        Date('2024-01-03T00:00:00'), Date('2024-01-04T00:00:00'), Date('2024-01-05T00:00:00'), Date('2024-01-06T00:00:00'), Date('2024-01-07T00:00:00'),
        //        Date('2024-01-08T00:00:00'), Date('2024-01-09T00:00:00'), Date('2024-01-10T00:00:00'), Date('2024-01-11T00:00:00'), Date('2024-01-12T00:00:00'),
        //        Date('2024-01-13T00:00:00'), Date('2024-01-14T00:00:00'), Date('2024-01-15T00:00:00'), Date('2024-01-16T00:00:00'), Date('2024-01-17T00:00:00'),
        //        Date('2024-01-18T00:00:00'), Date('2024-01-19T00:00:00') ],
        //    categories: [Date('2023-12-14T00:00:00'), Date('2023-12-15T00:00:00'), Date('2023-12-16T00:00:00'), Date('2023-12-17T00:00:00'), Date('2023-12-18T00:00:00'),
        //    Date('2023-12-19T00:00:00'), Date('2023-12-20T00:00:00'), Date('2023-12-21T00:00:00'), Date('2023-12-22T00:00:00'), Date('2023-12-23T00:00:00'),
        //    Date('2023-12-24T00:00:00'), Date('2023-12-25T00:00:00'), Date('2023-12-26T00:00:00'), Date('2023-12-27T00:00:00'), Date('2023-12-28T00:00:00'),
        //    Date('2023-12-29T00:00:00'), Date('2023-12-30T00:00:00'), Date('2023-12-31T00:00:00'), Date('2024-01-01T00:00:00'), Date('2024-01-02T00:00:00'),
        //    Date('2024-01-03T00:00:00'), Date('2024-01-04T00:00:00'), Date('2024-01-05T00:00:00'), Date('2024-01-06T00:00:00'), Date('2024-01-07T00:00:00'),
        //    Date('2024-01-08T00:00:00'), Date('2024-01-09T00:00:00'), Date('2024-01-10T00:00:00'), Date('2024-01-11T00:00:00'), Date('2024-01-12T00:00:00'),
        //    Date('2024-01-13T00:00:00'), Date('2024-01-14T00:00:00'), Date('2024-01-15T00:00:00'), Date('2024-01-16T00:00:00'), Date('2024-01-17T00:00:00'),
        //    Date('2024-01-18T00:00:00'), Date('2024-01-19T00:00:00')],
        //    startOnTick: false,
        //    endOnTick: false,
        //    showLastLabel: false,
        //    labels: {
        //        formatter: function () {
        //            return Highcharts.dateFormat('%e. %m.', this.value) +
        //                ' - ' + Highcharts.dateFormat('%l. %M.', this.value);
        //        }
        //    }
        //},
        //yAxis: {
        //    title: {
        //        text: 'Magnitude'
        //    },
        //    tickPositions: [0, 1, 2, 3, 4, 5, 6]
        //},
        //legend: {
        //    layout: 'vertical',
        //    align: 'left',
        //    verticalAlign: 'top',
        //    x: 100,
        //    y: 70,
        //    floating: true,
        //    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        //    borderWidth: 1
        //},
        //plotOptions: {
        //    scatter: {
        //        marker: {
        //            radius: 5,
        //            states: {
        //                hover: {
        //                    enabled: true,
        //                    lineColor: 'rgb(100,100,100)'
        //                }
        //            }
        //        },
        //        states: {
        //            hover: {
        //                marker: {
        //                    enabled: false
        //                }
        //            }
        //        },

        //    }
        //},

        //series: [{
        //    name: 'Magnitue',
        //    color: 'rgba(0, 204, 0, .5)',
        //    data: [
        //        {
        //            Series: Series.map(function (point) {
        //                return [
        //                    new Date(point[0]).getTime(),
        //                    point[1]
        //                ];
        //            })
        //        }
        //    ]

        //}]



        chart: {
            type: 'bubble',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: titleText
        },
        xAxis: {
            type: 'datetime',
            title: {
                enabled: true,
                text: 'Days'
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: true,
            gridLineWidth: 1,
            tickPositions: TicKArray.map(function (point) {
                return point[0].value;
            }),
            categories: Categories,
            plotLines: [{
                color: '#00FF00',
                width: 2,
                value: 0
            }],
            labels: {
                formatter: function () {
                    //console.log(Categories[TickPosition.indexOf(this.value)]);
                    return Categories[TickPosition.indexOf(this.value)];
                }
            }
        },
        yAxis: {
            title: {
                text: 'depth'
            },
            min: 0,
            reversed: true
            //tickPositions:  [0,1,2,3,4, 5, 6] 
        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#3cb357'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.label}</h3></th></tr>' +
                '<tr><th>Depth:</th><td>{point.y}Km</td></tr>' +
                '<tr><th>Magnitude:</th><td>{point.z}M</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        series: [{
            //name: 'Depth',
            showInLegend: false,
            color: 'rgba(0, 204, 0, .5)',
            data: Series//[{ x: 10.0579398148148, y: 4.6, label: "4.6M, 10km, delay 241.4" }, { x: 10.0188310185185, y: 5, label: "5M, 10km, delay 240.5" }, { x: 9.57841435185185, y: 4.9, label: "4.9M, 10km, delay 229.9" }, { x: 9.32824074074074, y: 4.5, label: "4.5M, 10km, delay 223.9" }, { x: 9.27876157407407, y: 4.7, label: "4.7M, 10km, delay 222.7" }, { x: 9.07363425925926, y: 4.9, label: "4.9M, 24.25km, delay 217.8" }, { x: 9.0659375, y: 5.1, label: "5.1M, 35.92km, delay 217.6" }, { x: 9.04325231481482, y: 4.9, label: "4.9M, 1.06km, delay 217" }, { x: 9.01033564814815, y: 4.7, label: "4.7M, 10km, delay 216.2" }, { x: 8.99384259259259, y: 4.9, label: "4.9M, 10km, delay 215.9" }, { x: 8.9921875, y: 5, label: "5M, 16.58km, delay 215.8" }, { x: 8.91076388888889, y: 5.2, label: "5.2M, 10km, delay 213.9" }, { x: 8.87979166666667, y: 5.2, label: "5.2M, 10km, delay 213.1" }, { x: 8.8722337962963, y: 5.1, label: "5.1M, 10km, delay 212.9" }, { x: 8.85354166666667, y: 6.7, label: "6.7M, 10km, delay 212.5" }, { x: 8.76209490740741, y: 4.8, label: "4.8M, 10km, delay 210.3" }, { x: 8.68050925925926, y: 4.7, label: "4.7M, 33.11km, delay 208.3" }, { x: 8.4047337962963, y: 5.3, label: "5.3M, 10km, delay 201.7" }, { x: 8.38091435185185, y: 5, label: "5M, 10km, delay 201.1" }, { x: 7.75225694444444, y: 4.7, label: "4.7M, 24.74km, delay 186.1" }, { x: 7.11114583333333, y: 4.9, label: "4.9M, 10km, delay 170.7" }, { x: 7.091875, y: 6, label: "6M, 10km, delay 170.2" }, { x: 6.86760416666667, y: 5.8, label: "5.8M, 6km, delay 164.8" }, { x: 6.78890046296296, y: 5.4, label: "5.4M, 22.58km, delay 162.9" }, { x: 6.75027777777778, y: 5.1, label: "5.1M, 10km, delay 162" }, { x: 6.22013888888889, y: 4.9, label: "4.9M, 10km, delay 149.3" }, { x: 5.9480787037037, y: 4.9, label: "4.9M, 10km, delay 142.8" }, { x: 5.92028935185185, y: 4.7, label: "4.7M, 10km, delay 142.1" }, { x: 5.52954861111111, y: 4.8, label: "4.8M, 10km, delay 132.7" }, { x: 5.2047337962963, y: 4.8, label: "4.8M, 10km, delay 124.9" }, { x: 5.15761574074074, y: 5.1, label: "5.1M, 41.91km, delay 123.8" }, { x: 5.04061342592593, y: 4.5, label: "4.5M, 10km, delay 121" }, { x: 5.02998842592593, y: 4.6, label: "4.6M, 36.85km, delay 120.7" }, { x: 4.79189814814815, y: 4.6, label: "4.6M, 30.14km, delay 115" }, { x: 4.59377314814815, y: 5.1, label: "5.1M, 10km, delay 110.3" }, { x: 4.39626157407407, y: 4.9, label: "4.9M, 10km, delay 105.5" }, { x: 4.38707175925926, y: 5.6, label: "5.6M, 28.69km, delay 105.3" }, { x: 4.30083333333333, y: 5, label: "5M, 10km, delay 103.2" }, { x: 3.60671296296296, y: 4.6, label: "4.6M, 10km, delay 86.6" }, { x: 3.41872685185185, y: 4.5, label: "4.5M, 10km, delay 82" }, { x: 3.2765162037037, y: 4.6, label: "4.6M, 10km, delay 78.6" }, { x: 3.19759259259259, y: 4.5, label: "4.5M, 10km, delay 76.7" }, { x: 3.05298611111111, y: 4.7, label: "4.7M, 21.15km, delay 73.3" }, { x: 2.8759375, y: 4.8, label: "4.8M, 10km, delay 69" }, { x: 2.84509259259259, y: 5, label: "5M, 10km, delay 68.3" }, { x: 2.74393518518519, y: 4.8, label: "4.8M, 10km, delay 65.9" }, { x: 2.48486111111111, y: 5.2, label: "5.2M, 10km, delay 59.6" }, { x: 2.4378587962963, y: 4.8, label: "4.8M, 10km, delay 58.5" }, { x: 2.40737268518519, y: 4.9, label: "4.9M, 10km, delay 57.8" }, { x: 2.37621527777778, y: 6.1, label: "6.1M, 16km, delay 57" }, { x: 2.27420138888889, y: 4.7, label: "4.7M, 10km, delay 54.6" }, { x: 2.26103009259259, y: 4.9, label: "4.9M, 10km, delay 54.3" }, { x: 2.10212962962963, y: 5.2, label: "5.2M, 10km, delay 50.5" }, { x: 2.03256944444444, y: 4.5, label: "4.5M, 10km, delay 48.8" }, { x: 1.94158564814815, y: 5.2, label: "5.2M, 10km, delay 46.6" }, { x: 1.90494212962963, y: 4.5, label: "4.5M, 10km, delay 45.7" }, { x: 1.85229166666667, y: 5, label: "5M, 14.45km, delay 44.5" }, { x: 1.84336805555556, y: 5, label: "5M, 14.7km, delay 44.2" }, { x: 1.8227662037037, y: 4.6, label: "4.6M, 10km, delay 43.7" }, { x: 1.71244212962963, y: 4.9, label: "4.9M, 21.1km, delay 41.1" }, { x: 1.70121527777778, y: 4.9, label: "4.9M, 20.86km, delay 40.8" }, { x: 1.56623842592593, y: 5.2, label: "5.2M, 10km, delay 37.6" }, { x: 1.52444444444444, y: 5.6, label: "5.6M, 10km, delay 36.6" }, { x: 1.50516203703704, y: 4.8, label: "4.8M, 10km, delay 36.1" }, { x: 1.49417824074074, y: 4.9, label: "4.9M, 10km, delay 35.9" }, { x: 1.35494212962963, y: 5.2, label: "5.2M, 10km, delay 32.5" }, { x: 1.29956018518519, y: 5, label: "5M, 10km, delay 31.2" }, { x: 1.26681712962963, y: 5.1, label: "5.1M, 10km, delay 30.4" }, { x: 1.26474537037037, y: 4.5, label: "4.5M, 10km, delay 30.4" }, { x: 1.18953703703704, y: 4.8, label: "4.8M, 10km, delay 28.5" }, { x: 1.17951388888889, y: 4.7, label: "4.7M, 10km, delay 28.3" }, { x: 1.17263888888889, y: 5, label: "5M, 10km, delay 28.1" }, { x: 1.06795138888889, y: 5.1, label: "5.1M, 21.21km, delay 25.6" }, { x: 1.03059027777778, y: 5.4, label: "5.4M, 20km, delay 24.7" }, { x: 1.00978009259259, y: 4.5, label: "4.5M, 19.39km, delay 24.2" }, { x: 0.998090277777778, y: 5.2, label: "5.2M, 10km, delay 24" }, { x: 0.898599537037037, y: 6.2, label: "6.2M, 13.81km, delay 21.6" }, { x: 0.795659722222222, y: 4.8, label: "4.8M, 38.32km, delay 19.1" }, { x: 0.785347222222222, y: 5.2, label: "5.2M, 26.7km, delay 18.8" }, { x: 0.781597222222222, y: 5, label: "5M, 40.01km, delay 18.8" }, { x: 0.758414351851852, y: 5.7, label: "5.7M, 13.33km, delay 18.2" }, { x: 0.722361111111111, y: 4.7, label: "4.7M, 22.31km, delay 17.3" }, { x: 0.719641203703704, y: 4.9, label: "4.9M, 33.05km, delay 17.3" }, { x: 0.691678240740741, y: 4.7, label: "4.7M, 49km, delay 16.6" }, { x: 0.683194444444444, y: 4.8, label: "4.8M, 35.9km, delay 16.4" }, { x: 0.655763888888889, y: 4.9, label: "4.9M, 50.46km, delay 15.7" }, { x: 0.649803240740741, y: 5, label: "5M, 60.3km, delay 15.6" }, { x: 0.61318287037037, y: 6, label: "6M, 23.64km, delay 14.7" }, { x: 0.581296296296296, y: 4.6, label: "4.6M, 35km, delay 14" }, { x: 0.554039351851852, y: 5.1, label: "5.1M, 35km, delay 13.3" }, { x: 0.530439814814815, y: 4.6, label: "4.6M, 32.38km, delay 12.7" }, { x: 0.488900462962963, y: 5, label: "5M, 10.81km, delay 11.7" }, { x: 0.483483796296296, y: 4.8, label: "4.8M, 35km, delay 11.6" }, { x: 0.465277777777778, y: 4.7, label: "4.7M, 35km, delay 11.2" }, { x: 0.453553240740741, y: 4.8, label: "4.8M, 27.32km, delay 10.9" }, { x: 0.395104166666667, y: 5.2, label: "5.2M, 35km, delay 9.5" }, { x: 0.393738425925926, y: 5, label: "5M, 35km, delay 9.4" }, { x: 0.366574074074074, y: 4.8, label: "4.8M, 21.44km, delay 8.8" }, { x: 0.362199074074074, y: 5, label: "5M, 35km, delay 8.7" }, { x: 0.272719907407407, y: 4.6, label: "4.6M, 35km, delay 6.5" }]

        }]

    });
}
function reportHistoricalPie(divreference, paramSeries, paramTitle) {
    Highcharts.chart(divreference, {
        /*        chart: {
                    type: 'pie'
                },
                title: {
                    text: paramTitle,
                    align: 'left'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                series: paramSeries
        */
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: paramTitle,
            align: 'left'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<span style="font-size: 1.2em"><b>{point.color}</b></span><br>' +
                        '<span style="opacity: 0.6">{point.percentage:.1f} %</span>',
                    connectorColor: 'rgba(128,128,128,0.5)'
                }
            }
        },
        series: [{
            name: 'Alert level',
            data: paramSeries
        }]
    });


}


//******************VOLCANOES SECTION************************
var volcanoGraphHeight = 260;
var syncing = false;

var zoomTarget = [];

function volcanoGraphHisto(divreference, paramCaption, paramSeries, paramYTitle, paramSeriesName, paramColor, paramPlotBand) {
    var xSeries = [];
    var ySeries = [];
    var yCategory = null;
    var xCategory = [];
    var TicKArray = [];
    var PlotBandsY = [];

    if (paramPlotBand)
        PlotBandsY = paramPlotBand;
    //if (divreference == "graphVei")
    //    yCategory = [0, 1, 2, 3, 4, 5];
    var j = JSON.parse(paramSeries);

    for (var i = 0; i < j.length; i++) {
        var c = j[i];
        xSeries.push(c.xAxis);
        ySeries.push(c.yAxis);
        xCategory.push(c.xCategory);

        var element = [];
        var tt = { "value": c.xAxis, "label": c.xCategory };
        element.push(tt);
        TicKArray.push(element);
    }


    if (divreference == "seismicGraphHistoDay")
        zoomTarget.push({ "chart": "#seismicGraphHistoDay", "chartLenght": j.length, "categories": xCategory });
    if (divreference == "so2Graph")
        zoomTarget.push({ "chart": "#so2Graph", "chartLenght": j.length, "categories": xCategory });
    if (divreference == "deformationGraph")
        zoomTarget.push({ "chart": "#deformationGraph", "chartLenght": j.length, "categories": xCategory });
    if (divreference == "thermalGraph")
        zoomTarget.push({ "chart": "#thermalGraph", "chartLenght": j.length, "categories": xCategory });
    if (divreference == "vaaPlumHisto")
        zoomTarget.push({ "chart": "#vaaPlumHisto", "chartLenght": j.length, "categories": xCategory });

    var tickstep = j.length;
    if (tickstep > 20)
        tickstep = Math.floor(tickstep / 10);
    else
        tickstep = 1;

    Highcharts.chart(divreference, {
        chart: {
            type: 'column',
            zoomType: 'x',
            height: volcanoGraphHeight,
            marginLeft: 80
        },
        title: {
            text: paramCaption,
            useHTML: true
        },
        xAxis: {
            alignTicks: true,
            type: 'datetime',
            tickInterval: tickstep,
            tickPositioner: function (min, max) {
                var diff = max - min;

                if (diff > 150)
                    tickstep = 18;
                else if (diff > 100)
                    tickstep = 8;
                else if (diff > 50)
                    tickstep = 6;
                else if (diff > 20)
                    tickstep = 4;
                else
                    tickstep = 1;


                var ticks = this.getLinearTickPositions(tickstep, min, max),
                    tLen = ticks.length;

                ticks.info = {
                    unitName: "day",
                    higherRanks: {},
                    totalRange: ticks[tLen - 1] - ticks[0]
                };
                return ticks;
            },
            categories: xCategory,
            //categories: xCategory.map(date => {
            //    return Highcharts.dateFormat('%d %b %Y', new Date(date).getTime());
            //}),
            events: {
                setExtremes: function (event) {
                    if (!syncing) syncZoom(zoomTarget, event, j.length, divreference);

                }
            }
        },
        yAxis: {
            categories: yCategory,
            title: {
                text: paramYTitle,
                useHTML: true
            },
            min: 0,
            labels: {
                format: '{value}'
            },
            plotBands: PlotBandsY
        },
        //tooltip: {
        //    useHTML: true,
        //    headerFormat: '<table>',
        //    pointFormat: '<tr><th colspan="2"><h3>{point.category}</h3></th></tr>' +
        //                 '<tr><th>Km:</th><td>{point.y}</td></tr>',
        //    footerFormat: '</table>',
        //    xDateFormat: '%Y-%m-%d %H:%M:%S',
        //    followPointer: true

        //},
        plotOptions: {
            spline: {
                marker: {
                    radius: 2,
                    lineColor: paramColor,
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: paramSeriesName,
            data: ySeries,
            color: paramColor,
            showInLegend: true
        }]
    });

}

function volcanoGraphBubble(divreference, paramSeriesScatter, paramTitle, paramYtitle) {

    var Series = [];
    var Categories;
    var TickPosition;
    var TicKArray = [];
    var initialPositioner = [];

    if (paramSeriesScatter) {
        Series = JSON.parse(paramSeriesScatter).series;
        Categories = JSON.parse(paramSeriesScatter).dateCategories;
        TickPosition = JSON.parse(paramSeriesScatter).categories;
        var j = JSON.parse(paramSeriesScatter).categories;

        if (divreference == "seismicGraphBubble")
            zoomTarget.push({ "chart": "#seismicGraphBubble", "chartLenght": j.length, "categories": Categories });

        var tickstep = JSON.parse(paramSeriesScatter).categories.length;
        if (tickstep > 20)
            tickstep = Math.floor(tickstep / 10);
        else
            tickstep = 1;

        var min = Categories[0];
        var max = Categories[j.length - 1];
        //switch (true) {
        //    case (tickstep >= 20 && tickstep < 40):
        //        tickstep = 2
        //        break;
        //    case (tickstep >= 40 && tickstep < 60):
        //        tickstep = 3
        //        break;
        //    case (tickstep >= 60):
        //        tickstep = 8
        //        break;
        //    case (tickstep >= 100):
        //        tickstep = 10
        //        break;
        //    case (tickstep >= 0):
        //        tickstep = 10
        //        break;
        //    default:
        //        tickstep = 1
        //}
        for (var i = 0; i < JSON.parse(paramSeriesScatter).categories.length; i += tickstep) {
            var c = JSON.parse(paramSeriesScatter).categories[i];
            var d = JSON.parse(paramSeriesScatter).dateCategories[i];
            var element = [];
            var tt = { "value": c, "label": d };
            element.push(tt);
            TicKArray.push(element);
            initialPositioner.push(c);
        }
    }
    var titleText = 'Seismic activities in the period ' + Categories[0] + ' ' + Categories[Categories.length - 1] + ' (<a href="https://emsc-csem.org/" target="_blank">EMSC</a>)';

    Highcharts.chart(divreference, {
        chart: {
            type: 'bubble',
            zoomType: 'xy',
            height: volcanoGraphHeight,
            marginLeft: 80
        },
        credits: {
            enabled: false
        },
        title: {
            text: titleText,
            useHTML: true
        },
        xAxis: {
            /*            axisLayoutRuns: 8,*/
            alignTicks: true,
            type: 'datetime',
            title: {
                enabled: true,
                text: 'Days'
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: true,
            gridLineWidth: 1,
            tickInterval: tickstep,
            //tickPositions: TicKArray.map(function (point) {
            //    return point[0].value;
            //}),
            tickPositioner: function (min, max) {
                var ticks;
                var tLen;

                var diff = max - min;

                if (diff > 150)
                    tickstep = 18;
                else if (diff > 100)
                    tickstep = 8;
                else if (diff > 50)
                    tickstep = 6;
                else if (diff > 20)
                    tickstep = 4;
                else
                    tickstep = 1;

                if (max == -1 || max > 0) {
                    this.tickInterval = 18;
                    ticks = initialPositioner;
                }
                else {
                    this.tickInterval = tickstep;

                    ticks = this.getLinearTickPositions(tickstep, min, max),
                        tLen = ticks.length;
                }               

                ticks.info = {
                    unitName: "day",
                    higherRanks: {},
                    totalRange: ticks[tLen] - ticks[0]
                };

                return ticks;
            },
            categories: Categories,
            plotLines: [{
                color: '#00FF00',
                width: 2,
                value: 0
            }],
            labels: {
                formatter: function () {
                    //console.log(Categories[TickPosition.indexOf(this.value)]);
                    return Categories[TickPosition.indexOf(this.value)];
                }
            },
            events: {
                setExtremes: function (event) {
                    if (!syncing) syncZoom(zoomTarget, event, j.length, divreference);
                },
            }
        },
        yAxis: {
            title: {
                text: 'depth'
            },
            min: 0,
            reversed: true
            //tickPositions:  [0,1,2,3,4, 5, 6] 
        },

        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#3cb357'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.label}</h3></th></tr>' +
                '<tr><th>Depth:</th><td>{point.y}Km</td></tr>' +
                '<tr><th>Magnitude:</th><td>{point.z}M</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        series: [{
            //name: 'Depth',
            showInLegend: false,
            color: 'rgba(255, 0, 0, .5)',
            data: Series//[{ x: 10.0579398148148, y: 4.6, label: "4.6M, 10km, delay 241.4" }, { x: 10.0188310185185, y: 5, label: "5M, 10km, delay 240.5" }, { x: 9.57841435185185, y: 4.9, label: "4.9M, 10km, delay 229.9" }, { x: 9.32824074074074, y: 4.5, label: "4.5M, 10km, delay 223.9" }, { x: 9.27876157407407, y: 4.7, label: "4.7M, 10km, delay 222.7" }, { x: 9.07363425925926, y: 4.9, label: "4.9M, 24.25km, delay 217.8" }, { x: 9.0659375, y: 5.1, label: "5.1M, 35.92km, delay 217.6" }, { x: 9.04325231481482, y: 4.9, label: "4.9M, 1.06km, delay 217" }, { x: 9.01033564814815, y: 4.7, label: "4.7M, 10km, delay 216.2" }, { x: 8.99384259259259, y: 4.9, label: "4.9M, 10km, delay 215.9" }, { x: 8.9921875, y: 5, label: "5M, 16.58km, delay 215.8" }, { x: 8.91076388888889, y: 5.2, label: "5.2M, 10km, delay 213.9" }, { x: 8.87979166666667, y: 5.2, label: "5.2M, 10km, delay 213.1" }, { x: 8.8722337962963, y: 5.1, label: "5.1M, 10km, delay 212.9" }, { x: 8.85354166666667, y: 6.7, label: "6.7M, 10km, delay 212.5" }, { x: 8.76209490740741, y: 4.8, label: "4.8M, 10km, delay 210.3" }, { x: 8.68050925925926, y: 4.7, label: "4.7M, 33.11km, delay 208.3" }, { x: 8.4047337962963, y: 5.3, label: "5.3M, 10km, delay 201.7" }, { x: 8.38091435185185, y: 5, label: "5M, 10km, delay 201.1" }, { x: 7.75225694444444, y: 4.7, label: "4.7M, 24.74km, delay 186.1" }, { x: 7.11114583333333, y: 4.9, label: "4.9M, 10km, delay 170.7" }, { x: 7.091875, y: 6, label: "6M, 10km, delay 170.2" }, { x: 6.86760416666667, y: 5.8, label: "5.8M, 6km, delay 164.8" }, { x: 6.78890046296296, y: 5.4, label: "5.4M, 22.58km, delay 162.9" }, { x: 6.75027777777778, y: 5.1, label: "5.1M, 10km, delay 162" }, { x: 6.22013888888889, y: 4.9, label: "4.9M, 10km, delay 149.3" }, { x: 5.9480787037037, y: 4.9, label: "4.9M, 10km, delay 142.8" }, { x: 5.92028935185185, y: 4.7, label: "4.7M, 10km, delay 142.1" }, { x: 5.52954861111111, y: 4.8, label: "4.8M, 10km, delay 132.7" }, { x: 5.2047337962963, y: 4.8, label: "4.8M, 10km, delay 124.9" }, { x: 5.15761574074074, y: 5.1, label: "5.1M, 41.91km, delay 123.8" }, { x: 5.04061342592593, y: 4.5, label: "4.5M, 10km, delay 121" }, { x: 5.02998842592593, y: 4.6, label: "4.6M, 36.85km, delay 120.7" }, { x: 4.79189814814815, y: 4.6, label: "4.6M, 30.14km, delay 115" }, { x: 4.59377314814815, y: 5.1, label: "5.1M, 10km, delay 110.3" }, { x: 4.39626157407407, y: 4.9, label: "4.9M, 10km, delay 105.5" }, { x: 4.38707175925926, y: 5.6, label: "5.6M, 28.69km, delay 105.3" }, { x: 4.30083333333333, y: 5, label: "5M, 10km, delay 103.2" }, { x: 3.60671296296296, y: 4.6, label: "4.6M, 10km, delay 86.6" }, { x: 3.41872685185185, y: 4.5, label: "4.5M, 10km, delay 82" }, { x: 3.2765162037037, y: 4.6, label: "4.6M, 10km, delay 78.6" }, { x: 3.19759259259259, y: 4.5, label: "4.5M, 10km, delay 76.7" }, { x: 3.05298611111111, y: 4.7, label: "4.7M, 21.15km, delay 73.3" }, { x: 2.8759375, y: 4.8, label: "4.8M, 10km, delay 69" }, { x: 2.84509259259259, y: 5, label: "5M, 10km, delay 68.3" }, { x: 2.74393518518519, y: 4.8, label: "4.8M, 10km, delay 65.9" }, { x: 2.48486111111111, y: 5.2, label: "5.2M, 10km, delay 59.6" }, { x: 2.4378587962963, y: 4.8, label: "4.8M, 10km, delay 58.5" }, { x: 2.40737268518519, y: 4.9, label: "4.9M, 10km, delay 57.8" }, { x: 2.37621527777778, y: 6.1, label: "6.1M, 16km, delay 57" }, { x: 2.27420138888889, y: 4.7, label: "4.7M, 10km, delay 54.6" }, { x: 2.26103009259259, y: 4.9, label: "4.9M, 10km, delay 54.3" }, { x: 2.10212962962963, y: 5.2, label: "5.2M, 10km, delay 50.5" }, { x: 2.03256944444444, y: 4.5, label: "4.5M, 10km, delay 48.8" }, { x: 1.94158564814815, y: 5.2, label: "5.2M, 10km, delay 46.6" }, { x: 1.90494212962963, y: 4.5, label: "4.5M, 10km, delay 45.7" }, { x: 1.85229166666667, y: 5, label: "5M, 14.45km, delay 44.5" }, { x: 1.84336805555556, y: 5, label: "5M, 14.7km, delay 44.2" }, { x: 1.8227662037037, y: 4.6, label: "4.6M, 10km, delay 43.7" }, { x: 1.71244212962963, y: 4.9, label: "4.9M, 21.1km, delay 41.1" }, { x: 1.70121527777778, y: 4.9, label: "4.9M, 20.86km, delay 40.8" }, { x: 1.56623842592593, y: 5.2, label: "5.2M, 10km, delay 37.6" }, { x: 1.52444444444444, y: 5.6, label: "5.6M, 10km, delay 36.6" }, { x: 1.50516203703704, y: 4.8, label: "4.8M, 10km, delay 36.1" }, { x: 1.49417824074074, y: 4.9, label: "4.9M, 10km, delay 35.9" }, { x: 1.35494212962963, y: 5.2, label: "5.2M, 10km, delay 32.5" }, { x: 1.29956018518519, y: 5, label: "5M, 10km, delay 31.2" }, { x: 1.26681712962963, y: 5.1, label: "5.1M, 10km, delay 30.4" }, { x: 1.26474537037037, y: 4.5, label: "4.5M, 10km, delay 30.4" }, { x: 1.18953703703704, y: 4.8, label: "4.8M, 10km, delay 28.5" }, { x: 1.17951388888889, y: 4.7, label: "4.7M, 10km, delay 28.3" }, { x: 1.17263888888889, y: 5, label: "5M, 10km, delay 28.1" }, { x: 1.06795138888889, y: 5.1, label: "5.1M, 21.21km, delay 25.6" }, { x: 1.03059027777778, y: 5.4, label: "5.4M, 20km, delay 24.7" }, { x: 1.00978009259259, y: 4.5, label: "4.5M, 19.39km, delay 24.2" }, { x: 0.998090277777778, y: 5.2, label: "5.2M, 10km, delay 24" }, { x: 0.898599537037037, y: 6.2, label: "6.2M, 13.81km, delay 21.6" }, { x: 0.795659722222222, y: 4.8, label: "4.8M, 38.32km, delay 19.1" }, { x: 0.785347222222222, y: 5.2, label: "5.2M, 26.7km, delay 18.8" }, { x: 0.781597222222222, y: 5, label: "5M, 40.01km, delay 18.8" }, { x: 0.758414351851852, y: 5.7, label: "5.7M, 13.33km, delay 18.2" }, { x: 0.722361111111111, y: 4.7, label: "4.7M, 22.31km, delay 17.3" }, { x: 0.719641203703704, y: 4.9, label: "4.9M, 33.05km, delay 17.3" }, { x: 0.691678240740741, y: 4.7, label: "4.7M, 49km, delay 16.6" }, { x: 0.683194444444444, y: 4.8, label: "4.8M, 35.9km, delay 16.4" }, { x: 0.655763888888889, y: 4.9, label: "4.9M, 50.46km, delay 15.7" }, { x: 0.649803240740741, y: 5, label: "5M, 60.3km, delay 15.6" }, { x: 0.61318287037037, y: 6, label: "6M, 23.64km, delay 14.7" }, { x: 0.581296296296296, y: 4.6, label: "4.6M, 35km, delay 14" }, { x: 0.554039351851852, y: 5.1, label: "5.1M, 35km, delay 13.3" }, { x: 0.530439814814815, y: 4.6, label: "4.6M, 32.38km, delay 12.7" }, { x: 0.488900462962963, y: 5, label: "5M, 10.81km, delay 11.7" }, { x: 0.483483796296296, y: 4.8, label: "4.8M, 35km, delay 11.6" }, { x: 0.465277777777778, y: 4.7, label: "4.7M, 35km, delay 11.2" }, { x: 0.453553240740741, y: 4.8, label: "4.8M, 27.32km, delay 10.9" }, { x: 0.395104166666667, y: 5.2, label: "5.2M, 35km, delay 9.5" }, { x: 0.393738425925926, y: 5, label: "5M, 35km, delay 9.4" }, { x: 0.366574074074074, y: 4.8, label: "4.8M, 21.44km, delay 8.8" }, { x: 0.362199074074074, y: 5, label: "5M, 35km, delay 8.7" }, { x: 0.272719907407407, y: 4.6, label: "4.6M, 35km, delay 6.5" }]

        }]

    });
}

function volcanoGraphScore(divreference, paramCaption, paramSeries, paramYTitle, paramSeriesName, paramColor) {
    var ySeries = [];
    var xCategory = [];
    var TicKArray = [];
    //if (divreference == "graphVei")
    //    yCategory = [0, 1, 2, 3, 4, 5];
    var j = JSON.parse(paramSeries);



    for (var i = 0; i < j.length; i++) {
        var c = j[i];
        ySeries.push(c.yAxis);
        xCategory.push(c.xCategory);

        var element = [];
        var tt = { "value": c.xAxis, "label": c.xCategory };
        element.push(tt);
        TicKArray.push(element);
    }

    if (divreference == "graphScore")
        zoomTarget.push({ "chart": "#graphScore", "chartLenght": j.length, "categories": xCategory });

    var tickstep = j.length;
    if (tickstep > 20)
        tickstep = Math.floor(tickstep / 10);
    else
        tickstep = 1;

    Highcharts.chart(divreference, {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            height: volcanoGraphHeight,
            marginLeft: 80,
        },
        title: {
            text: paramCaption,
            useHTML: true
        },
        xAxis: {
            alignTicks: true,
            type: 'datetime',
            tickInterval: tickstep,
            tickPositioner: function (min, max) {
                var diff = max - min;

                if (diff > 150)
                    tickstep = 18;
                else if (diff > 100)
                    tickstep = 8;
                else if (diff > 50)
                    tickstep = 6;
                else if (diff > 20)
                    tickstep = 4;
                else
                    tickstep = 1;
                

                var ticks = this.getLinearTickPositions(tickstep, min, max),
                    tLen = ticks.length;

                ticks.info = {
                    unitName: "day",
                    higherRanks: {},
                    totalRange: ticks[tLen - 1] - ticks[0]
                };
                return ticks;
            },
            categories: xCategory,
            //categories: xCategory.map(date => {
            //    return Highcharts.dateFormat('%d %b %Y', new Date(date));
            //}),
            events: {
                setExtremes: function (event) {
                    if (!syncing) syncZoom(zoomTarget, event, j.length, divreference);
                }
            }
        },
        yAxis: {
            //categories: yCategory,
            title: {
                text: paramYTitle,
                useHTML: true
            },
            min: 0,
            max: 4,
            labels: {
                format: '{value}'
            },
            plotBands: [{ // Green
                from: 0,
                to: 1,
                color: 'rgba(68, 255, 0, 0.2)'
            }, { // Orange
                from: 1,
                to: 2,
                color: 'rgba(255, 162, 0, 0.2)'
            }, { // Red
                from: 2,
                to: 4,
                color: 'rgba(255, 0, 0, 0.2)'
            }
            ]
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.category}</h3></th></tr>' +
                '<tr><th>Score:</th><td>{point.y}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 2,
                    lineColor: paramColor,
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: paramSeriesName,
            data: ySeries,
            color: paramColor,
            showInLegend: false
        }]
    });

}

function syncZoom(target, e, dimGraph, graphRef) {
    syncing = true;

    var minPos;
    var maxPos;
    var newMin;
    var newMax;

    if (graphRef == "seismicGraphBubble") {
        minPos = dimGraph - Math.abs(Math.floor(e.min)) - 5;
        maxPos = dimGraph - Math.abs(Math.floor(e.max)) - 5;
    }
    else {
        minPos = Math.floor(e.min);
        maxPos = Math.floor(e.max);
    }

    var minCat = e.target.categories[minPos];
    var maxCat = e.target.categories[maxPos + 1];




    for (i = 0; i < target.length; i++) {

        var chart = $(target[i].chart).highcharts(),
            min, max;

        if (e.min == null && e.max == null) {
            min = e.min === null ? e.dataMin : e.min;
            max = e.min === null ? e.dataMax : e.max;
            reset = true;
        }
        else {
            for (j = 0; j < target[i].categories.length; j++) {
                if (target[i].chart == "#seismicGraphBubble") {
                    if (target[i].categories[j] == minCat)
                        newMin = target[i].chartLenght - j;
                    if (target[i].categories[j] == maxCat)
                        newMax = target[i].chartLenght - j;
                }
                else {
                    if (target[i].categories[j] == minCat)
                        newMin = j;
                    if (target[i].categories[j] == maxCat)
                        newMax = j;
                }
            }
            reset = false;
        }

        if (!isObject(chart.resetZoomButton)) {
            chart.showResetZoom();
        }

        if (e.min == null && e.max == null) {
            chart.xAxis[0].setExtremes(min, max);
        }
        else {
            if (target[i].chart == "#seismicGraphBubble") {
                chart.xAxis[0].setExtremes(-newMin + 5, -newMax + 5);
            }
            else {
                chart.xAxis[0].setExtremes(newMin, newMax);
            }
        }
    }

    syncing = false;
}

function isObject(obj) {
    return obj && typeof obj === 'object';
}


(function (H) {
    H.wrap(H.Chart.prototype, 'zoom', function (proceed) {
        // Run original proceed method
        proceed.apply(this, [].slice.call(arguments, 1));

        if (!isObject(this.resetZoomButton)) {
            H.each(H.charts, function (chart) {
                if (chart !== undefined) {
                    if (isObject(chart.resetZoomButton)) {
                        chart.resetZoomButton.destroy();
                        chart.resetZoomButton = undefined;

                    }
                }
            });
            /*            H.charts = [];*/
        }
    });
}(Highcharts));
