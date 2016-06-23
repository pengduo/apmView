var varConfig = {
    "version": 5,
    "datetime": "2016-06-23 13:28:21",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "192.168.0.105",
            "type": "Port-Test",
            "x": 397.54105931988977,
            "y": 117.63667824706226,
            "rel": []
        }, {
            "name": "192.168.0.105_PGSQL",
            "type": "PostgreSQL",
            "x": 759.1517069360444,
            "y": 346.58791049295496,
            "rel": ["pt_Windows 7"]
        }, {
            "name": "192.168.0.105_Tomcat-server",
            "type": "Tomcat-server",
            "x": 396.8048842179153,
            "y": 342.5801060014366,
            "rel": ["192.168.0.105", "192.168.0.105_PGSQL", "pt_Windows 7"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 110.82604992585549,
            "y": 340.4356353593341,
            "rel": ["192.168.0.105_Tomcat-server"]
        }, {"name": "pt_Windows 7", "type": "Windows 7", "x": 543.3912412919523, "y": 563.0212239460242, "rel": []}]
    }, {
        "name": "ddd",
        "resourceid": "10000127",
        "details": [{
            "name": "192.168.0.105_PGSQL",
            "type": "PostgreSQL",
            "x": 367.8682870099136,
            "y": 240.7787121544746,
            "rel": ["pt_Windows 7"]
        }, {"name": "pt_Windows 7", "type": "Windows 7", "x": 567.8679504163013, "y": 240.92529218730434, "rel": []}]
    }]
};