应用性能透视返回情况：
http://demo.appmanager.com/AppManager/json/GetMonitorData?apikey=fc165782b17a13c188e077866a03538e&resourceid=10001145
{
    "response": {
        "result": [
            {
                "DetailsPageURL": "/showresource.do?resourceid=10001145&method=showResourceForResourceID&PRINTER_FRIENDLY=true",
                "TODAYUNAVAILPERCENT": "0",
                "Attribute": [
                    {
                        "DISPLAYNAME": "Avg. Resp. Time",
                        "Value": "73.1",
                        "Units": " ms"
                    },
                    {
                        "DISPLAYNAME": "Throughput",
                        "Value": "16.7",
                        "Units": " rpm"
                    },
                    {
                        "DISPLAYNAME": "Req. Count",
                        "Value": "3006",
                        "Units": " "
                    },
                    {
                        "DISPLAYNAME": "Apdex Score",
                        "Value": "0.993",
                        "Units": " "
                    },
                    {
                        "DISPLAYNAME": "Frustrated User",
                        "Value": "0.1",
                        "Units": "  %"
                    },
                    {
                        "DISPLAYNAME": "Satisfied User",
                        "Value": "98.7",
                        "Units": "  %"
                    },
                    {
                        "DISPLAYNAME": "Tolerating User",
                        "Value": "1.3",
                        "Units": "  %"
                    }
                ],
                "HEALTHATTRIBUTEID": "20006",
                "TARGETADDRESS": "",
                "RESOURCENAME": "appmanager:8080",
                "TODAYAVAILPERCENT": "100",
                "TARGETNAME": "",
                "TODAYSCHEDDOWNPERCENT": "0.0",
                "AVAILABILITYATTRIBUTEID": "20005",
                "HEALTHSEVERITY": "5",
                "DISKUTIL": "-1",
                "MANAGED": "true",
                "PHYMEMUTIL": "-1",
                "AVAILABILITYMESSAGE": "Resource up. <br>The resource appmanager:8080 is available.",
                "AVAILABILITYSEVERITY": "5",
                "TYPESHORTNAME": "APM Insight",
                "TYPE": "APM-Insight-Instance",
                "DESCRIPTION": "",
                "LASTPOLLEDTIME": "Jun 10, 2016 11:26 PM",
                "RESOURCEID": "10001145",
                "TODAYUNMANGDPERCENT": "0.0",
                "HEALTHMESSAGE": "Health of appmanager:8080 is clear. <br>Root Cause : <br>1. appmanager:8080 is up<br>2. Response Time  51 <= 1500 ms (threshold).<br>",
                "CPUUTIL": "-1",
                "DISPLAYNAME": "appmanager:8080",
                "HEALTHSTATUS": "clear",
                "RCAPageURL": "/jsp/RCA.jsp?resourceid=10001145&attributeid=20006",
                "IMAGEPATH": "/apminsight/images/apminsight-icon.gif",
                "AVAILABILITYSTATUS": "up"
            }
        ],
        "uri": "/AppManager/json/GetMonitorData"
    },
    "response-code": "4000"
}

URL序列
http://demo.appmanager.com/AppManager/json/GetMonitorData?apikey=fc165782b17a13c188e077866a03538e&resourceid=10000787
{
    "response": {
        "result": [
            {
                "DetailsPageURL": "/showresource.do?resourceid=10000787&method=showResourceForResourceID&PRINTER_FRIENDLY=true",
                "TODAYUNAVAILPERCENT": "100.0",
                "Attribute": [
                    {
                        "DISPLAYNAME": "Connection Time",
                        "Value": "0",
                        "Units": " ms",
                        "AttributeID": "53010"
                    },
                    {
                        "DISPLAYNAME": "DNS Time",
                        "Value": "0",
                        "Units": " ms",
                        "AttributeID": "53009"
                    },
                    {
                        "DISPLAYNAME": "First Byte Time",
                        "Value": "1460",
                        "Units": " ms",
                        "AttributeID": "53011"
                    },
                    {
                        "DISPLAYNAME": "Last Byte Time",
                        "Value": "6060",
                        "Units": " ms",
                        "AttributeID": "53012"
                    },
                    {
                        "DISPLAYNAME": "DNS Time",
                        "Value": "0",
                        "Units": " ms",
                        "AttributeID": "53001"
                    },
                    {
                        "DISPLAYNAME": "Connection Time",
                        "Value": "0",
                        "Units": " ms",
                        "AttributeID": "53002"
                    },
                    {
                        "DISPLAYNAME": "First Byte Time",
                        "Value": "1460",
                        "Units": " ms",
                        "AttributeID": "53003"
                    },
                    {
                        "DISPLAYNAME": "Last Byte Time",
                        "Value": "6060",
                        "Units": " ms",
                        "AttributeID": "53004"
                    },
                    {
                        "DISPLAYNAME": "Page Size",
                        "Value": "0",
                        "Units": " Bytes",
                        "AttributeID": "414"
                    },
                    {
                        "DISPLAYNAME": "RESPONSE TIME",
                        "Value": "7148",
                        "Units": " ms",
                        "AttributeID": "417"
                    },
                    {
                        "DISPLAYNAME": "Responsetime",
                        "Value": "7148",
                        "Units": " ms",
                        "AttributeID": "410"
                    }
                ],
                "HEALTHATTRIBUTEID": "405",
                "TARGETADDRESS": "",
                "RESOURCENAME": "sequence_manageengine.com",
                "TODAYAVAILPERCENT": "0.0",
                "TARGETNAME": "",
                "TODAYSCHEDDOWNPERCENT": "0.0",
                "AVAILABILITYATTRIBUTEID": "404",
                "HEALTHSEVERITY": "1",
                "DISKUTIL": "-1",
                "MANAGED": "true",
                "PHYMEMUTIL": "-1",
                "AVAILABILITYMESSAGE": "Resource sequence_manageengine.com is down. <br>Root Cause : <br>1. https://tools.manageengine.com/images/feed/yjRH?format=sigpro is down<br>",
                "AVAILABILITYSEVERITY": "1",
                "TYPESHORTNAME": "Url Sequence",
                "TYPE": "UrlSeq",
                "DESCRIPTION": "Monitors set of URLs",
                "LASTPOLLEDTIME": "Jun 10, 2016 7:26 PM",
                "RESOURCEID": "10000787",
                "TODAYUNMANGDPERCENT": "0.0",
                "HEALTHMESSAGE": "Resource sequence_manageengine.com is down. <br>Health is critical as the resource is not available",
                "CPUUTIL": "-1",
                "CHILDMONITORS": [
                    {
                        "AVAILABILITYID": "408",
                        "DISPLAYNAME": "UrlEle",
                        "CHILDMONITORINFO": [
                            {
                                "DISPLAYNAME": "http://manageengine.com/",
                                "RESOURCEID": "10000788",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "154",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "552",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "26511",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "26511",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "552",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            },
                            {
                                "DISPLAYNAME": "https://iplocation.zoho.com/",
                                "RESOURCEID": "10000789",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "274",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "1117",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "45",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "45",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "1117",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            },
                            {
                                "DISPLAYNAME": "https://tools.manageengine.com/images/feed/yjRH?format=sigpro",
                                "RESOURCEID": "10000790",
                                "AVAILABILITYSEVERITY": "1",
                                "HEALTHSEVERITY": "1"
                            },
                            {
                                "DISPLAYNAME": "https://accounts.zoho.com/u/info",
                                "RESOURCEID": "10000791",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "278",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "1119",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "18",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "18",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "1119",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            },
                            {
                                "DISPLAYNAME": "https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3fY6323mHUZFJMgTvxaG2iE.eot",
                                "RESOURCEID": "10000792",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "61",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "415",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "17189",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "17189",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "415",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            },
                            {
                                "DISPLAYNAME": "https://127-gri-621.mktoresp.com/webevents/clickLink?_mchNc=1464266615326&_mchHr=https://www.manageengine.com/products/applications_manager/&_mchId=127-GRI-621&_mchTk=_mch-manageengine.com-14592385...",
                                "RESOURCEID": "10000793",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "307",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "1544",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "43",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "43",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "1544",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            },
                            {
                                "DISPLAYNAME": "https://www.manageengine.com/products/applications_manager/",
                                "RESOURCEID": "10000794",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "61",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "270",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "38047",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "38047",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "270",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            },
                            {
                                "DISPLAYNAME": "https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3fY6323mHUZFJMgTvxaG2iE.eot",
                                "RESOURCEID": "10000795",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "62",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "249",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "17189",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "17189",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "250",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            },
                            {
                                "DISPLAYNAME": "https://accounts.zoho.com/u/info",
                                "RESOURCEID": "10000796",
                                "CHILDATTRIBUTES": [
                                    {
                                        "DISPLAYNAME": "Connection Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53002"
                                    },
                                    {
                                        "DISPLAYNAME": "DNS Time",
                                        "Value": "0",
                                        "Units": " ms",
                                        "AttributeID": "53001"
                                    },
                                    {
                                        "DISPLAYNAME": "First Byte Time",
                                        "Value": "263",
                                        "Units": " ms",
                                        "AttributeID": "53003"
                                    },
                                    {
                                        "DISPLAYNAME": "Last Byte Time",
                                        "Value": "794",
                                        "Units": " ms",
                                        "AttributeID": "53004"
                                    },
                                    {
                                        "DISPLAYNAME": "HTTP Response Code",
                                        "Value": "200",
                                        "Units": " ",
                                        "AttributeID": "411"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size",
                                        "Value": "18",
                                        "Units": " Bytes",
                                        "AttributeID": "414"
                                    },
                                    {
                                        "DISPLAYNAME": "Page Size Change",
                                        "Value": "18",
                                        "Units": " %",
                                        "AttributeID": "415"
                                    },
                                    {
                                        "DISPLAYNAME": "Responsetime",
                                        "Value": "794",
                                        "Units": " ms",
                                        "AttributeID": "410"
                                    }
                                ],
                                "AVAILABILITYSEVERITY": "5",
                                "HEALTHSEVERITY": "5"
                            }
                        ],
                        "HEALTHID": "409"
                    }
                ],
                "DISPLAYNAME": "sequence_manageengine.com",
                "HEALTHSTATUS": "critical",
                "RCAPageURL": "/jsp/RCA.jsp?resourceid=10000787&attributeid=405",
                "IMAGEPATH": "/images/icon_monitors_urlmonitor.gif",
                "AVAILABILITYSTATUS": "down"
            }
        ],
        "uri": "/AppManager/json/GetMonitorData"
    },
    "response-code": "4000"
}
