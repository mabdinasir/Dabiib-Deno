Object.defineProperty(exports, "__esModule", { value: true });

const {
	PrismaClientKnownRequestError,
	PrismaClientUnknownRequestError,
	PrismaClientRustPanicError,
	PrismaClientInitializationError,
	PrismaClientValidationError,
	NotFoundError,
	getPrismaClient,
	sqltag,
	empty,
	join,
	raw,
	Decimal,
	Debug,
	objectEnumValues,
	makeStrictEnum,
	Extensions,
	warnOnce,
	defineDmmfProperty,
	Public,
} = require("./runtime/library");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
	client: "5.3.1",
	engine: "61e140623197a131c2a6189271ffee05a7aa9a59",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
	DbNull: objectEnumValues.classes.DbNull,
	JsonNull: objectEnumValues.classes.JsonNull,
	AnyNull: objectEnumValues.classes.AnyNull,
};

const path = require("path");

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
	ReadUncommitted: "ReadUncommitted",
	ReadCommitted: "ReadCommitted",
	RepeatableRead: "RepeatableRead",
	Serializable: "Serializable",
});

exports.Prisma.HospitalScalarFieldEnum = {
	id: "id",
	name: "name",
};

exports.Prisma.DoctorScalarFieldEnum = {
	id: "id",
	name: "name",
};

exports.Prisma.ScheduleScalarFieldEnum = {
	id: "id",
	startTime: "startTime",
	endTime: "endTime",
	doctorId: "doctorId",
	hospitalId: "hospitalId",
};

exports.Prisma.SortOrder = {
	asc: "asc",
	desc: "desc",
};

exports.Prisma.QueryMode = {
	default: "default",
	insensitive: "insensitive",
};

exports.Prisma.ModelName = {
	Hospital: "Hospital",
	Doctor: "Doctor",
	Schedule: "Schedule",
};
/**
 * Create the Client
 */
const config = {
	"generator": {
		"name": "client",
		"provider": {
			"fromEnvVar": null,
			"value": "prisma-client-js",
		},
		"output": {
			"value": "/Users/mohamedabdinasir/Downloads/Dabiib/generated/client",
			"fromEnvVar": null,
		},
		"config": {
			"engineType": "library",
		},
		"binaryTargets": [
			{
				"fromEnvVar": null,
				"value": "darwin-arm64",
				"native": true,
			},
		],
		"previewFeatures": [
			"deno",
		],
		"isCustomOutput": true,
	},
	"relativeEnvPaths": {
		"rootEnvPath": "../../.env",
		"schemaEnvPath": "../../.env",
	},
	"relativePath": "../../prisma",
	"clientVersion": "5.3.1",
	"engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
	"datasourceNames": [
		"db",
	],
	"activeProvider": "postgresql",
	"postinstall": false,
	"inlineDatasources": {
		"db": {
			"url": {
				"fromEnvVar": "DATABASE_URL",
				"value": null,
			},
		},
	},
	"inlineSchema":
		"Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCAgICAgICAgICA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpnZW5lcmF0b3IgZXJkIHsKICBwcm92aWRlciA9ICJwcmlzbWEtZXJkLWdlbmVyYXRvciIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgSG9zcGl0YWwgewogIGlkICAgICAgICAgICAgU3RyaW5nICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgICAgICAgU3RyaW5nCiAgZG9jdG9ycyAgICBEb2N0b3JbXQogIHNjaGVkdWxlcyAgU2NoZWR1bGVbXQp9Cgptb2RlbCBEb2N0b3IgewogIGlkICAgICAgICAgU3RyaW5nICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgICAgICAgU3RyaW5nCiAgaG9zcGl0YWxzICBIb3NwaXRhbFtdCiAgc2NoZWR1bGVzICBTY2hlZHVsZVtdCn0KCm1vZGVsIFNjaGVkdWxlIHsKICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBzdGFydFRpbWUgIERhdGVUaW1lCiAgZW5kVGltZSAgICBEYXRlVGltZQogIGRvY3RvciAgICAgRG9jdG9yICAgIEByZWxhdGlvbihmaWVsZHM6IFtkb2N0b3JJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZG9jdG9ySWQgICBTdHJpbmcKICBob3NwaXRhbCAgIEhvc3BpdGFsICBAcmVsYXRpb24oZmllbGRzOiBbaG9zcGl0YWxJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgaG9zcGl0YWxJZCBTdHJpbmcKfQo=",
	"inlineSchemaHash":
		"21bb4ee9bc32fc03c53aab188103cc26a9d67bc4692bb69c3a278847cb73c218",
	"noEngine": false,
};

const fs = require("fs");

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
	const alternativePaths = [
		"generated/client",
		"client",
	];

	const alternativePath = alternativePaths.find((altPath) => {
		return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
	}) ?? alternativePaths[0];

	config.dirname = path.join(process.cwd(), alternativePath);
	config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
	'{"models":{"Hospital":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"doctors","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Doctor","relationName":"DoctorToHospital","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"schedules","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Schedule","relationName":"HospitalToSchedule","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Doctor":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hospitals","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Hospital","relationName":"DoctorToHospital","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"schedules","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Schedule","relationName":"DoctorToSchedule","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Schedule":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"startTime","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"endTime","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"doctor","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Doctor","relationName":"DoctorToSchedule","relationFromFields":["doctorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"doctorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hospital","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Hospital","relationName":"HospitalToSchedule","relationFromFields":["hospitalId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"hospitalId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);

const { warnEnvConflicts } = require("./runtime/library");

warnEnvConflicts({
	rootEnvPath: config.relativeEnvPaths.rootEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
	schemaEnvPath: config.relativeEnvPaths.schemaEnvPath &&
		path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(
	process.cwd(),
	"generated/client/libquery_engine-darwin-arm64.dylib.node",
);
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma");
