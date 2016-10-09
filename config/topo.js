var varConfig = {
    "version": 9,
    "datetime": "2016-10-09 12:24:17",
    "monitorgroups": [{
        "name": "My group",
        "resourceid": "10000095",
        "details": [{
            "name": "g111",
            "type": "Sub Group",
            "x": 657.9605536907911,
            "y": 335.31386935710907,
            "rel": []
        }, {"name": "g2222", "type": "Sub Group", "x": 213.00083845853806, "y": 452.1577763836831, "rel": ["g111"]}]
    }, {
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "192.168.1.10",
            "type": "Port-Test",
            "x": 180.4008113220334,
            "y": 522.6477222517133,
            "rel": ["192.168.1.10_Tomcat-server"]
        }, {
            "name": "192.168.1.10_PGSQL",
            "type": "PostgreSQL",
            "x": 486.7811529189348,
            "y": 287.7303645014763,
            "rel": ["AppManager Home Page"]
        }, {
            "name": "192.168.1.10_Tomcat-server",
            "type": "Tomcat-server",
            "x": 189.23477437347174,
            "y": 587.791352905333,
            "rel": ["192.168.1.10_PGSQL"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 49.294455371797085,
            "y": 376.9734313711524,
            "rel": []
        }]
    }, {
        "name": "业务组名havesubgroup",
        "resourceid": "10000100",
        "details": [{
            "name": "子组名1",
            "type": "Sub Group",
            "x": 733.2311848178506,
            "y": 173.10317535884678,
            "rel": []
        }, {
            "name": "子组名2",
            "type": "Sub Group",
            "x": 695.7892276346684,
            "y": 248.6127574928105,
            "rel": []
        }, {
            "name": "子组名3",
            "type": "Sub Group",
            "x": 305.69211829453707,
            "y": 387.2858986649662,
            "rel": ["子组名4"]
        }, {
            "name": "子组名4",
            "type": "Sub Group",
            "x": 532.9841168597341,
            "y": 206.73528397455812,
            "rel": ["子组名1", "子组名2"]
        }]
    }]
};