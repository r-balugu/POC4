//**********************************Start DDL Commands************************
konysyncSQLLiteDDLCommands = ["create table \"konysyncBLOBSTOREMANAGER\" (\"id\" integer not null,\"localPath\" text,\"tableName\" text,\"columnName\" text,\"type\" text,\"state\" integer,\"status\" integer,\"size\" integer,\"retry\" integer,\"lastUpdatedTimeStamp\" TIMESTAMP default CURRENT_TIMESTAMP,primary key (\"id\"))", "create table \"konysyncCHUNKDATA\" (\"chunkid\" int not null,\"payloadid\" nvarchar(50) not null,\"scopename\" nvarchar(100) not null,\"chunkdata\" text,\"timestamp\" nvarchar(50),primary key (\"chunkid\", \"payloadid\", \"scopename\"))", "create table \"konysyncCHUNKMETAINFO\" (\"payloadid\" nvarchar(50) not null,\"scopename\" nvarchar(100) not null,\"chunkacknowledged\" int,\"chunksize\" int,\"chunkcount\" int,\"chunkhashsum\" nvarchar(35),\"chunkdiscarded\" int,primary key (\"payloadid\", \"scopename\"))", "create table \"konysyncDIAGNOSTICS\" (\"id\" bigint not null,\"action\" nvarchar(100),\"details\" nvarchar(2000),\"timestamp\" timestamp,primary key (\"id\"))", "create table \"konysyncMETAINFO\" (\"id\" bigint not null,\"versionnumber\" int,\"lastserversynccontext\" nvarchar(1000),\"lastserveruploadsynccontext\" nvarchar(1000),\"lastschemaupgradesynccontext\" nvarchar(1000),\"filtervalue\" nvarchar(1000),\"replaysequencenumber\" integer,\"lastgeneratedid\" integer,\"scopename\" nvarchar(100),primary key (\"id\"))", "create table \"konysyncPENDINGUPLOADREQUESTINFO\" (\"scopename\" nvarchar(100) not null,\"uploadrequest\" text,\"objectlevelinfo\" text,\"insertcount\" int,\"updatecount\" int,\"deletecount\" int,\"batchinsertcount\" int,\"batchupdatecount\" int,\"batchdeletecount\" int,\"uploadlimit\" int,primary key (\"scopename\"))", "create table \"symptom_HISTORY\" (\"idsymptom\" integer not null,\"symptomtypeid\" integer,\"botherness\" nvarchar(255),\"impact\" nvarchar(255),\"date\" date,\"notes\" nvarchar(255),\"userid\" integer,\"konysyncversionnumber\" integer,\"konysyncchangetype\" integer,\"konysyncreplaysequence\" integer,\"konysyncchangetime\" timestamp,\"konysynchashsum\" nvarchar(4000))", "create table \"symptom_ORIGINAL\" (\"idsymptom\" integer not null,\"symptomtypeid\" integer,\"botherness\" nvarchar(255),\"impact\" nvarchar(255),\"date\" date,\"notes\" nvarchar(255),\"userid\" integer,\"konysyncoriginalchangetype\" integer,\"konysyncoriginalversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"idsymptom\"))", "create table \"symptom\" (\"idsymptom\" integer not null,\"symptomtypeid\" integer,\"botherness\" nvarchar(255),\"impact\" nvarchar(255),\"date\" date,\"notes\" nvarchar(255),\"userid\" integer,\"konysyncchangetype\" integer,\"konysyncversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"idsymptom\"))", "create table \"symptomtype_HISTORY\" (\"idsymptomtype\" integer not null,\"symtomttypedesc\" nvarchar(45),\"konysyncversionnumber\" integer,\"konysyncchangetype\" integer,\"konysyncreplaysequence\" integer,\"konysyncchangetime\" timestamp,\"konysynchashsum\" nvarchar(4000))", "create table \"symptomtype_ORIGINAL\" (\"idsymptomtype\" integer not null,\"symtomttypedesc\" nvarchar(45),\"konysyncoriginalchangetype\" integer,\"konysyncoriginalversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"idsymptomtype\"))", "create table \"symptomtype\" (\"idsymptomtype\" integer not null,\"symtomttypedesc\" nvarchar(45),\"konysyncchangetype\" integer,\"konysyncversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"idsymptomtype\"))", "create table \"users_HISTORY\" (\"id\" integer not null,\"username\" nvarchar(100),\"pin\" integer,\"firstName\" nvarchar(45),\"lastName\" nvarchar(45),\"gender\" nvarchar(45),\"dob\" date,\"homePhone\" nvarchar(45),\"mobile\" nvarchar(45),\"email\" nvarchar(45),\"targetweight\" integer,\"actualweight\" integer,\"konysyncversionnumber\" integer,\"konysyncchangetype\" integer,\"konysyncreplaysequence\" integer,\"konysyncchangetime\" timestamp,\"konysynchashsum\" nvarchar(4000))", "create table \"users_ORIGINAL\" (\"id\" integer not null,\"username\" nvarchar(100),\"pin\" integer,\"firstName\" nvarchar(45),\"lastName\" nvarchar(45),\"gender\" nvarchar(45),\"dob\" date,\"homePhone\" nvarchar(45),\"mobile\" nvarchar(45),\"email\" nvarchar(45),\"targetweight\" integer,\"actualweight\" integer,\"konysyncoriginalchangetype\" integer,\"konysyncoriginalversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"id\"))", "create table \"users\" (\"id\" integer not null,\"username\" nvarchar(100),\"pin\" integer,\"firstName\" nvarchar(45),\"lastName\" nvarchar(45),\"gender\" nvarchar(45),\"dob\" date,\"homePhone\" nvarchar(45),\"mobile\" nvarchar(45),\"email\" nvarchar(45),\"targetweight\" integer,\"actualweight\" integer,\"konysyncchangetype\" integer,\"konysyncversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"id\"))"]
    //**********************************End DDL Commands************************