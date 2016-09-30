var varConfig = {
    "version": 30,
    "datetime": "2016-09-30 9:31:58",
    "monitorgroups": [{
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "172.21.199.125",
            "type": "Port-Test",
            "x": 187.03271597623825,
            "y": 93.52386351674795,
            "rel": ["172.21.199.125_Tomcat-server"]
        }, {
            "name": "172.21.199.125_Tomcat-server",
            "type": "Tomcat-server",
            "x": 299.1350354626775,
            "y": 455.7921084109694,
            "rel": ["CouchBase"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 380.9271313250065,
            "y": 121.640908671543,
            "rel": ["172.21.199.125"]
        }, {"name": "CouchBase", "type": "Couchbase", "x": 257.3898494243622, "y": 526.5655388813466, "rel": []}]
    }, {
        "name": "Customer Portal",
        "resourceid": "10001434",
        "details": [{
            "name": "Apache",
            "type": "Apache-server",
            "x": 96.46700657904148,
            "y": 124.41251431591809,
            "rel": []
        }, {
            "name": "ApacheServer",
            "type": "Docker Container",
            "x": 467.2455722466111,
            "y": 237.47789952903986,
            "rel": []
        }, {
            "name": "Ceph",
            "type": "Ceph Storage",
            "x": 94.90614365786314,
            "y": 516.2488531786948,
            "rel": ["ServiceBus"]
        }, {
            "name": "Hbase",
            "type": "HBase",
            "x": 217.418653331697,
            "y": 31.247458700090647,
            "rel": []
        }, {
            "name": "Novell",
            "type": "Novell",
            "x": 36.45944073796272,
            "y": 306.37030242942274,
            "rel": ["Ceph"]
        }, {
            "name": "ServiceBus",
            "type": "AzureServiceBus",
            "x": 174.50823038816452,
            "y": 553.9393586106598,
            "rel": ["hadoop", "Apache"]
        }, {
            "name": "Solr",
            "type": "ApacheSolr",
            "x": 541.1742422729731,
            "y": 417.01376074925065,
            "rel": ["ServiceBus"]
        }, {
            "name": "Webserver",
            "type": "Apache-server",
            "x": 354.61859088391066,
            "y": 186.0326096881181,
            "rel": []
        }, {
            "name": "apm-u12-lap1",
            "type": "Node",
            "x": 162.62428853660822,
            "y": 108.12652562744915,
            "rel": []
        }, {
            "name": "cassandra",
            "type": "Cassandra",
            "x": 140.4026748612523,
            "y": 94.98943900689483,
            "rel": []
        }, {
            "name": "hadoop",
            "type": "Hadoop",
            "x": 301.15902218967676,
            "y": 92.67399902455509,
            "rel": []
        }, {"name": "informic", "type": "Informix", "x": 661.9129244238138, "y": 393.3343686629087, "rel": ["Solr"]}]
    }, {
        "name": "MyApplication",
        "resourceid": "10001433",
        "details": [{
            "name": "EBS_11",
            "type": "OracleEBS",
            "x": 607.8357705846429,
            "y": 17.809902923181653,
            "rel": ["Nosql"]
        }, {
            "name": "Kafka_testSetup",
            "type": "Kafka",
            "x": 247.6796070113778,
            "y": 501.61650334484875,
            "rel": []
        }, {
            "name": "ListMonitorsXML",
            "type": "RESTAPIMonitor",
            "x": 331.09199590981007,
            "y": 120.21829769946635,
            "rel": []
        }, {
            "name": "Nosql",
            "type": "OracleNoSQL",
            "x": 529.2978750541806,
            "y": 50.06734631024301,
            "rel": ["tuxedo"]
        }, {
            "name": "Solr",
            "type": "ApacheSolr",
            "x": 412.9088142886758,
            "y": 492.32170111499727,
            "rel": ["ListMonitorsXML"]
        }, {
            "name": "postgres",
            "type": "PostgreSQL",
            "x": 182.39092640578747,
            "y": 440.0439966470003,
            "rel": []
        }, {
            "name": "tuxedo",
            "type": "Oracle Tuxedo",
            "x": 190.23768159002066,
            "y": 29.698182502761483,
            "rel": ["ListMonitorsXML"]
        }]
    }, {
        "name": "b5a30645-e91c-1eb3-fe7b-8effafc8dd0b",
        "resourceid": "10000687",
        "details": [{
            "name": "172.21.10.45",
            "type": "XenServerHost",
            "x": 212.9290882498026,
            "y": 516.8558409903198,
            "rel": []
        }]
    }, {"name": "db", "resourceid": "10001441", "details": []}]
};