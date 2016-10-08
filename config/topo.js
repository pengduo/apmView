var varConfig = {
    "version": 5,
    "datetime": "2016-10-08 21:52:11",
    "monitorgroups": [{
        "name": "业务组名havesubgroup",
        "resourceid": "10000100",
        "details": [{
            "name": "子组名1",
            "type": "Sub Group",
            "x": 596.5783642604947,
            "y": 149.56861822865903,
            "rel": ["子组名2"]
        }, {
            "name": "子组名2",
            "type": "Sub Group",
            "x": 399.6768295764923,
            "y": 384.27167907357216,
            "rel": ["子组名3", "子组名4"]
        }, {
            "name": "子组名3",
            "type": "Sub Group",
            "x": 243.83947271853685,
            "y": 370.58325936086476,
            "rel": []
        }, {"name": "子组名4", "type": "Sub Group", "x": 762.2761033475399, "y": 471.8738197814673, "rel": []}]
    }, {
        "name": "My App2",
        "resourceid": "10000093",
        "details": [{
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 11.348244734108448,
            "y": 479.46844222024083,
            "rel": ["192.168.1.10_Tomcat-server"]
        }, {
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 661.6688327863812,
            "y": 198.35002315230668,
            "rel": []
        }]
    }, {
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "192.168.1.10",
            "type": "Port-Test",
            "x": 491.979331150651,
            "y": 488.7872581835836,
            "rel": []
        }, {
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 48.33866264671087,
            "y": 244.9435567483306,
            "rel": []
        }, {
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 375.35916939377785,
            "y": 391.9087754096836,
            "rel": ["192.168.1.10_PGSQL", "192.168.1.10"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 594.521052390337,
            "y": 91.57137293368578,
            "rel": ["192.168.1.10_Tomcat-server"]
        }]
    }, {
        "name": "My App6",
        "resourceid": "10000098",
        "details": [{
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 731.4893160015345,
            "y": 489.6390904672444,
            "rel": ["192.168.1.10_PGSQL"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 582.849327288568,
            "y": 111.94908474572003,
            "rel": ["192.168.1.10_Tomcat-server"]
        }, {
            "name": "192.168.1.10",
            "type": "Port-Test",
            "x": 34.70288272947073,
            "y": 558.5492171812803,
            "rel": []
        }, {
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 229.46697659790516,
            "y": 366.5591633878648,
            "rel": ["AppManager Home Page", "192.168.1.10"]
        }]
    }]
};