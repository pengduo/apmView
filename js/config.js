var varConfig = {
    "version": 5,
    "datetime": "2016-06-09 12:14:44",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "169.254.165.8",
            "type": "Port-Test",
            "x": 446.722393635045,
            "y": 123.64184211661058,
            "rel": []
        }, {
            "name": "169.254.165.8_PGSQL",
            "type": "PostgreSQL",
            "x": 746.8645380260683,
            "y": 326.64038749604003,
            "rel": ["bd_Windows 8"]
        }, {
            "name": "169.254.165.8_Tomcat-server",
            "type": "Tomcat-server",
            "x": 445.7980925187602,
            "y": 326.14128811061653,
            "rel": ["169.254.165.8", "169.254.165.8_PGSQL", "bd_Windows 8"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 127.87228213222312,
            "y": 322.6696367627944,
            "rel": ["169.254.165.8_Tomcat-server"]
        }, {"name": "bd_Windows 8", "type": "Windows 10", "x": 627.327732592946, "y": 526.1465117520852, "rel": []}]
    }]
};