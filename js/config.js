var varConfig = {
    "version": 5,
    "datetime": "2016-06-20 17:29:23",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "192.168.0.105",
            "type": "Port-Test",
            "x": 753.1295220140064,
            "y": 437.37489562537945,
            "rel": []
        }, {
            "name": "192.168.0.105_PGSQL",
            "type": "PostgreSQL",
            "x": 578.4190304666614,
            "y": 340.0288934307075,
            "rel": ["pt_Windows 7", "192.168.0.105"]
        }, {
            "name": "192.168.0.105_Tomcat-server",
            "type": "Tomcat-server",
            "x": 378.42801078385446,
            "y": 341.92416286566674,
            "rel": ["192.168.0.105_PGSQL"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 178.4409993258962,
            "y": 339.64485417343746,
            "rel": ["192.168.0.105_Tomcat-server"]
        },
            {"name": "pt_Windows 7", "type": "Windows 7", "x": 744.5933532759286, "y": 228.7360615012367, "rel": []}]
    }]
};
