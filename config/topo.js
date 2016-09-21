var varConfig = {
    "version": 7,
    "datetime": "2016-09-21 20:12:36",
    "monitorgroups": [{
        "name": "My group",
        "resourceid": "10000095",
        "details": [{
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 284.8616104146215,
            "y": 439.7966754890194,
            "rel": []
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 651.4654035654058,
            "y": 237.13065344694303,
            "rel": ["192.168.1.10_PGSQL"]
        }]
    }, {
        "name": "My App2",
        "resourceid": "10000093",
        "details": [{
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 484.3739694802238,
            "y": 83.85268370713801,
            "rel": ["192.168.1.10_Tomcat-server"]
        }, {
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 309.3716049189908,
            "y": 448.81822868450297,
            "rel": []
        }]
    }, {
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "192.168.1.10",
            "type": "Port-Test",
            "x": 446.2675553903627,
            "y": 77.62922107854084,
            "rel": ["192.168.1.10_PGSQL", "192.168.1.10_Tomcat-server"]
        }, {
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 167.28660143554342,
            "y": 2.638496316207495,
            "rel": []
        }, {
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 153.20335435149534,
            "y": 249.54770518870032,
            "rel": []
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 686.2760888224622,
            "y": 103.4274094502341,
            "rel": ["192.168.1.10"]
        }]
    }]
};