if (typeof(com) === "undefined") {
    com = {};
}
if (typeof(com.kony) === "undefined") {
    com.kony = {};
}
if (typeof(com.kony.syncScopeSymTrac) === "undefined") {
    com.kony.syncScopeSymTrac = {};
}
//API call will trigger syncScopeSymTrac reset
com.kony.syncScopeSymTrac.reset = function(successcallback, errorcallback) {
        if (!kony.sync.isSyncInitialized(errorcallback)) {
            return;
        }
        kony.sync.scopeReset("syncScopeSymTrac", successcallback, errorcallback);
    }
    // **********************************Start Scope definition************************
konysyncClientSyncConfig = {
        "AppID": "1000115095d7ee788",
        "Version": "d05daeca403de6f558ad15c1bb90970d3001a05ecbe11fa78cb87293b237bf81",
        "ArrayOfSyncScope": [{
            "ScopeName": "syncScopeSymTrac",
            "ScopeTables": [{
                "Relationships": {},
                "Pk_Columns": ["idsymptom"],
                "Columns": [{
                    "Length": 10,
                    "IsNullable": false,
                    "Autogenerated": "true",
                    "type": "integer",
                    "Name": "idsymptom",
                    "IsPrimaryKey": true
                }, {
                    "Length": 10,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "integer",
                    "Name": "symptomtypeid"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "botherness"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "impact"
                }, {
                    "Length": 10,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "date",
                    "Name": "date"
                }, {
                    "Length": 250,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "notes"
                }, {
                    "Length": 10,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "integer",
                    "Name": "userid"
                }],
                "Name": "symptom"
            }, {
                "Relationships": {},
                "Pk_Columns": ["id"],
                "Columns": [{
                    "Length": 10,
                    "IsNullable": false,
                    "Autogenerated": "true",
                    "type": "integer",
                    "Name": "id",
                    "IsPrimaryKey": true
                }, {
                    "Length": 100,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "username"
                }, {
                    "Length": 10,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "integer",
                    "Name": "pin"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "firstName"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "lastName"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "gender"
                }, {
                    "Length": 10,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "date",
                    "Name": "dob"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "homePhone"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "mobile"
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "email"
                }, {
                    "Length": 10,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "integer",
                    "Name": "targetweight"
                }, {
                    "Length": 10,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "integer",
                    "Name": "actualweight"
                }],
                "Name": "users"
            }, {
                "Relationships": {},
                "Pk_Columns": ["idsymptomtype"],
                "Columns": [{
                    "Length": 10,
                    "IsNullable": false,
                    "Autogenerated": "false",
                    "type": "integer",
                    "Name": "idsymptomtype",
                    "IsPrimaryKey": true
                }, {
                    "Length": 45,
                    "IsNullable": true,
                    "Autogenerated": "false",
                    "type": "string",
                    "Name": "symtomttypedesc"
                }],
                "Name": "symptomtype"
            }],
            "Strategy": "OTA_SYNC",
            "ScopeDatabaseName": "1000115095d7ee788",
            "DataSource": "219653"
        }],
        "ArrayOfDataSource": [{
            "Database": {
                "Type": "MYSQL",
                "Name": "219653"
            },
            "ID": "219653",
            "type": "DATABASE"
        }]
    }
    //**********************************End Scope definition************************