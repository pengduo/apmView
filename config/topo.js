var varConfig = { "version": 31, "datetime": "2016-07-07 23:11:8", "monitorgroups": [ { "name": "Applications Manager", "resourceid": "10000012", "details": [ { "name": "169.254.165.8", "type": "Port-Test", "x": 1096.1104940346825, "y": 114.90113708222344, "rel": [] }, { "name": "169.254.165.8_PGSQL", "type": "PostgreSQL", "x": 597.2686817465234, "y": 263.8514410064133, "rel": [ "169.254.165.8", "bd_Windows 8" ] }, { "name": "169.254.165.8_Tomcat-server", "type": "Tomcat-server", "x": 442.06911329894035, "y": 261.57097481364224, "rel": [ "169.254.165.8_PGSQL" ] }, { "name": "AppManager Home Page", "type": "UrlMonitor", "x": 182.07956218382913, "y": 258.4851894198464, "rel": [ "169.254.165.8_Tomcat-server" ] }, { "name": "bd_Windows 8", "type": "Windows 10", "x": 1138.9793719028637, "y": 420.6681057604246, "rel": [] } ] }, { "name": "My App2", "resourceid": "10000115", "details": [ { "name": "169.254.165.8_Tomcat-server", "type": "Tomcat-server", "x": 1387.3994569622087, "y": 396.2726171153381, "rel": [ "AppManager Home Page" ] }, { "name": "AppManager Home Page", "type": "UrlMonitor", "x": 486.5542767282799, "y": 268.8615313638074, "rel": [ "bd_Windows 8" ] }, { "name": "bd_Windows 8", "type": "Windows 10", "x": 1410.1571043626207, "y": 146.09478146316133, "rel": [] } ] }, { "name": "My App3", "resourceid": "10000121", "details": [ { "name": "169.254.165.8", "type": "Port-Test", "x": 385.7768254487598, "y": 339.10510552982873, "rel": [] }, { "name": "169.254.165.8_PGSQL", "type": "PostgreSQL", "x": 497.1648439486953, "y": 144.23564379714355, "rel": [ "169.254.165.8_Tomcat-server" ] }, { "name": "169.254.165.8_Tomcat-server", "type": "Tomcat-server", "x": 1555.016350747455, "y": 348.2440089477611, "rel": [ "169.254.165.8" ] } ] }, { "name": "My App4", "resourceid": "10000122", "details": [ { "name": "AppManager Home Page", "type": "UrlMonitor", "x": 445.2649387552433, "y": 278.92476599864494, "rel": [ "bd_Windows 8" ] }, { "name": "bd_Windows 8", "type": "Windows 10", "x": 1408.7259331660703, "y": 272.29666448620947, "rel": [] } ] } ] };