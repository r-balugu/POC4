/**
 * @module File010845b8d97c44a
 *
 * @author prakash gotukula <prakash.gotukula@kony.com>
 */

function kdv_createChartWidget()
{
    var chartObj = kdv_createChartJSObject();
    
    var chartWidget = new kony.ui.Chart2D3D({
		  "id": "chartid",
		  "isVisible": true
		   }, {
		  "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
		  "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
		  "containerWeight": 100
		  },
		  chartObj);
    
  frmReportOverView.flxChart.add(chartWidget);
  frmMSStatus.flxChart.add(chartWidget);
  
  //return chartWidget;
  	
}

//creating chart object with chart properties and chart data...
function kdv_createChartJSObject()
{
    
    var chartInfo = {
        "chartProperties": {
            "chartHeight": 50,
            "layerArea": {
                "background": {
                    "color": ["0xffffffff"]
                }
            },
            "axis": {
                "type": ["xAxis", "yAxis", "secondaryYAxis"],
                "xAxis": {
                    "axisLine": {
                        "crossOtherAxisAt": "value",
                        "value": 0,
                        "line": {
                            "color": ["0xaaaaaaff"]
                        }
                    },
                    "labels": {
                        "markingReference": "atMajor",
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                },
                "yAxis": {
                    "scale": {
                        "offset": {
                            "value": [0, 0],
                            "type": "pixels"
                        }
                    },
                    "labels": {
                        "visible": true
                    },
                    "intervalMarks": {
                        "major": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "minor": {
                            "line": {
                                "color": ["0x00000ff"]
                            }
                        },
                        "placement": "atLabels"
                    }
                }
            },
            "grid": {
                "type": ["xAxisMajorGrid", "yAxisMajorGrid"],
                "xAxisMajorGrid": {
                    "line": {
                        "color": ["0x8b7fc0ff"]
                    }
                },
                "yAxisMajorGrid": {
                    "line": {
                        "color": ["0xbc7b82ff"]
                    }
                }
            },
            "drawEntities": ["axis", "grid", "areaChart"],
            "areaChart": {
                "columnId": [0],
                "lineType": "smooth",
                "area": {
                    "fillType": ["color"],
                    "transparency": [0],
                    "colorAboveXAxis": ["0x5c5ddc32"],
                },
                "line": {
                    "color": ["0x5c5ddc32", "0x6845aeff", "0xc15760b4"],
                    "width": [2],
                    "transparency": [30, 30, 30]
                },
                "plotPoints": {
                    "visible": true,
                    "colorIndicator": "columns",
                    "marker": {
                        "type": ["circle"],
                        "fillType": "color"
                    },
                    "color": ["0x2a99ceff"],
                    "transparency": [0],
                    "size": [12]
                },
                "dataLabels": {
                    "indicators": ["numberValue"],
                    "placement": "left",
                    "font": {
                        "size": [14],
                        "family": ["Verdana"],
                        "style": ["Bold"],
                        "color": ["0x000000FF"],
                    }
                }
            }
        },
        "chartData": {
            "rowNames": {
                "values": ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8"]
            },
            "columnNames": {
                "values": ["Debit"]
            },
            "data": {
                "Debit": [1484, 2750, 250, 200, 600, 1200, 590, 1800]
            }
        }
        
    };
    return chartInfo;
    
}