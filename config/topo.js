var varConfig = {
    "version": 9,
    "datetime": "2016-09-28 22:37:21",
    "monitorgroups": [{
        "name": "Customer Portal",
        "resourceid": "10001434",
        "details": [{
            "name": "Apache",
            "type": "Apache-server",
            "x": 291.836472786963,
            "y": 229.98212822712958,
            "rel": ["Ceph"]
        }, {
            "name": "ApacheServer",
            "type": "Docker Container",
            "x": 10.75570397078991,
            "y": 289.5789232570678,
            "rel": ["ServiceBus"]
        }, {
            "name": "Ceph",
            "type": "Ceph Storage",
            "x": 517.291297018528,
            "y": 268.19218285381794,
            "rel": ["hadoop"]
        }, {
            "name": "Hbase",
            "type": "HBase",
            "x": 119.92542091757059,
            "y": 517.3391369171441,
            "rel": ["Novell"]
        }, {
            "name": "Novell",
            "type": "Novell",
            "x": 15.333646722137928,
            "y": 470.7258384898305,
            "rel": ["ApacheServer"]
        }, {
            "name": "ServiceBus",
            "type": "AzureServiceBus",
            "x": 84.05177146196365,
            "y": 233.29054741188884,
            "rel": []
        }, {
            "name": "Solr",
            "type": "ApacheSolr",
            "x": 207.08067771047354,
            "y": 104.53632669523358,
            "rel": ["Apache"]
        }, {
            "name": "Webserver",
            "type": "Apache-server",
            "x": 276.25886611640453,
            "y": 118.4300989843905,
            "rel": []
        }, {
            "name": "apm-u12-lap1",
            "type": "Node",
            "x": 576.0322934016585,
            "y": 135.92350487597287,
            "rel": []
        }, {
            "name": "cassandra",
            "type": "Cassandra",
            "x": 455.7983301579952,
            "y": 205.37963169626892,
            "rel": []
        }, {
            "name": "hadoop",
            "type": "Hadoop",
            "x": 446.4940935373306,
            "y": 441.4592379704118,
            "rel": ["Hbase"]
        }, {"name": "informic", "type": "Informix", "x": 776.2806097045541, "y": 226.18261598981917, "rel": []}]
    }, {"name": "vcenter", "resourceid": "10001068", "details": []}, {
        "name": "Applications Manager",
        "resourceid": "10000011",
        "details": [{
            "name": "172.21.199.125",
            "type": "Port-Test",
            "x": 6.537545308470726,
            "y": 439.7547829654068,
            "rel": []
        }, {
            "name": "172.21.199.125_Tomcat-server",
            "type": "Tomcat-server",
            "x": 307.5045894831419,
            "y": 223.42766798101366,
            "rel": ["AppManager Home Page"]
        }, {
            "name": "AppManager Home Page",
            "type": "UrlMonitor",
            "x": 28.646713495254517,
            "y": 314.70993468537927,
            "rel": ["172.21.199.125"]
        }, {
            "name": "CouchBase",
            "type": "Couchbase",
            "x": 676.8687823787332,
            "y": 29.7247517388314,
            "rel": ["172.21.199.125_Tomcat-server"]
        }]
    }, {
        "name": "b5a30645-e91c-1eb3-fe7b-8effafc8dd0b",
        "resourceid": "10000687",
        "details": [{
            "name": "172.21.10.45",
            "type": "XenServerHost",
            "x": 207.36811980605125,
            "y": 245.13962622731924,
            "rel": []
        }]
    }, {
        "name": "MyApplication",
        "resourceid": "10001433",
        "details": [{
            "name": "EBS_11",
            "type": "OracleEBS",
            "x": 241.0636192187667,
            "y": 496.44430805929005,
            "rel": []
        }, {
            "name": "Kafka_testSetup",
            "type": "Kafka",
            "x": 776.8578287214041,
            "y": 364.6519258618355,
            "rel": ["tuxedo"]
        }, {
            "name": "ListMonitorsXML",
            "type": "RESTAPIMonitor",
            "x": 688.7953659519553,
            "y": 516.4472373202443,
            "rel": ["Kafka_testSetup"]
        }, {
            "name": "Nosql",
            "type": "OracleNoSQL",
            "x": 202.75745876133442,
            "y": 382.7420592773706,
            "rel": []
        }, {
            "name": "Solr",
            "type": "ApacheSolr",
            "x": 234.17748492211103,
            "y": 435.0572428666055,
            "rel": []
        }, {
            "name": "postgres",
            "type": "PostgreSQL",
            "x": 253.92473509907722,
            "y": 196.3177395053208,
            "rel": ["Nosql"]
        }, {
            "name": "tuxedo",
            "type": "Oracle Tuxedo",
            "x": 318.92213243991137,
            "y": 461.8583818897605,
            "rel": ["postgres", "Solr", "EBS_11"]
        }]
    }, {"name": "xxx", "resourceid": "10001439", "details": []}]
};