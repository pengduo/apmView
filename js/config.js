var varConfig = {
    "version": 5,
    "datetime": "2016-06-13 13:44:12",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "192.168.0.105",
            "type": "Port-Test",
            "x": 243.9775641533388,
            "y": 236.66006785059477,
            "rel": []
        }, {
            "name": "192.168.0.105_PGSQL",
            "type": "PostgreSQL",
            "x": 528.6006886876721,
            "y": 466.7646215772113,
            "rel": []
        }, {
            "name": "192.168.0.105_Tomcat-server",
            "type": "Tomcat-server",
            "x": 529.433945814676,
            "y": 237.82895075189697,
            "rel": ["192.168.0.105_PGSQL", "192.168.0.105"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 530.0235194010063,
            "y": 40.94103027493128,
            "rel": ["192.168.0.105_Tomcat-server"]
        }, {"name": "pt_Windows 7", "type": "Windows 7", "x": 761.0880640130178, "y": 466.1594800639999, "rel": []}]
    }]
};
