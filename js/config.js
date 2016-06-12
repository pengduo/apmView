var varConfig = {
    "version": 5,
    "datetime": "2016-06-12 20:9:28",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "169.254.165.8",
            "type": "Port-Test",
            "x": 160.8729446618769,
            "y": 296.71927126390733,
            "rel": []
        }, {
            "name": "169.254.165.8_PGSQL",
            "type": "PostgreSQL",
            "x": 469.0058771359437,
            "y": 514.4326412849514,
            "rel": ["bd_Windows 8"]
        }, {
            "name": "169.254.165.8_Tomcat-server",
            "type": "Tomcat-server",
            "x": 467.36770581609596,
            "y": 297.16753193951587,
            "rel": ["169.254.165.8_PGSQL", "169.254.165.8", "bd_Windows 8"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 467.4509287572482,
            "y": 46.473130993234264,
            "rel": ["169.254.165.8_Tomcat-server"]
        }, {"name": "bd_Windows 8", "type": "Windows 10", "x": 741.2479218783312, "y": 297.7199049302402, "rel": []}]
    }]
};