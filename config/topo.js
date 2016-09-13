var varConfig = {
    "version": 3,
    "datetime": "2016-09-13 19:56:13",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "192.168.1.10",
            "type": "Port-Test",
            "x": 886.6813449934125,
            "y": 105.51992395706475,
            "rel": []
        }, {
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 848.3849317580462,
            "y": 327.63956002891064,
            "rel": []
        }, {
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 624.6725058406591,
            "y": 230.79514468833804,
            "rel": ["192.168.1.10", "192.168.1.10_PGSQL"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 334.0320113450289,
            "y": 230.3639087639749,
            "rel": ["192.168.1.10_Tomcat-server"]
        }]
    }, {
        "name": "My App2",
        "resourceid": "10000093",
        "details": [{
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 760.8690728917718,
            "y": 229.21362147852778,
            "rel": []
        }, {
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 436.9052644148469,
            "y": 227.73231475427747,
            "rel": ["192.168.1.10_PGSQL"]
        }]
    }]
};