var varConfig = {
    "version": 5,
    "datetime": "2016-06-27 22:48:31",
    "monitorgroups": [
        {
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
        }, {
            "name": "bd_Windows 8", "type": "Windows 10", "x": 811.9793719028637, "y": 354.6681057604246, "rel": []}
        ]
    }]
};