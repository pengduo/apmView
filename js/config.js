var varConfig = {
    "version": 18,
    "datetime": "2016-07-06 13:58:4",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000012",
        "details": [{
            "name": "169.254.165.8",
            "type": "Port-Test",
            "x": 802.1104940346825,
            "y": 163.90113708222344,
            "rel": []
        }, {
            "name": "169.254.165.8_PGSQL",
            "type": "PostgreSQL",
            "x": 597.2686817465234,
            "y": 263.8514410064133,
            "rel": ["169.254.165.8", "bd_Windows 8"]
        }, {
            "name": "169.254.165.8_Tomcat-server",
            "type": "Tomcat-server",
            "x": 351.06911329894035,
            "y": 264.57097481364224,
            "rel": ["169.254.165.8_PGSQL"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 106.07956218382913,
            "y": 264.4851894198464,
            "rel": ["169.254.165.8_Tomcat-server"]
        }, {"name": "bd_Windows 8", "type": "Windows 10", "x": 811.9793719028637, "y": 354.6681057604246, "rel": []}]
    }, {
        "name": "My App2",
        "resourceid": "10000115",
        "details": [{
            "name": "169.254.165.8_Tomcat-server",
            "type": "Tomcat-server",
            "x": 630.3994569622087,
            "y": 229.2726171153381,
            "rel": ["AppManager Home Page"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 368.5542767282799,
            "y": 132.8615313638074,
            "rel": ["bd_Windows 8"]
        }, {"name": "bd_Windows 8", "type": "Windows 10", "x": 320.1571043626206, "y": 345.0947814631613, "rel": []}]
    }, {
        "name": "My App3",
        "resourceid": "10000121",
        "details": [{
            "name": "169.254.165.8",
            "type": "Port-Test",
            "x": 385.7768254487598,
            "y": 339.10510552982873,
            "rel": []
        }, {
            "name": "169.254.165.8_PGSQL",
            "type": "PostgreSQL",
            "x": 499.1648439486953,
            "y": 82.23564379714357,
            "rel": ["169.254.165.8_Tomcat-server"]
        }, {
            "name": "169.254.165.8_Tomcat-server",
            "type": "Tomcat-server",
            "x": 781.0163507474549,
            "y": 275.2440089477611,
            "rel": ["169.254.165.8"]
        }]
    }, {
        "name": "My App4",
        "resourceid": "10000122",
        "details": [{
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 220.2649387552433,
            "y": 266.92476599864494,
            "rel": ["bd_Windows 8"]
        }, {"name": "bd_Windows 8", "type": "Windows 10", "x": 678.7259331660701, "y": 270.29666448620947, "rel": []}]
    }]
};