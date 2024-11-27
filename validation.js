db.createCollection("posts", {
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["title", "text", "creator", "comments"],
			properties: {
				title: {
					bsonType: "string",
					minLength: 1,
					description: "must be a string and required",
				},
				creator: {
					bsonType: "objectId",
					description: "must be a string and required",
				},
				comments: {
					bsonType: "array",
					description: "must be an array and required",
					items: {
						bsonType: "object",
						required: ["text", "author"],
						properties: {
							text: {
								bsonType: "string",
								description: "must be a string and required",
							},
							author: {
								bsonType: "objectId",
								description: "must be a string and required",
							},
						},
					},
				},
			},
			additionalProperties: false,
		},
	},
});

/* update validation method as admin */

db.runCommand({
	collMod: "posts",
	validator: {
		$jsonSchema: {
			bsonType: "object",
			required: ["title", "text", "creator", "comments"],
			properties: {
				title: {
					bsonType: "string",
					minLength: 1,
					description: "must be a string and required",
				},
				creator: {
					bsonType: "objectId",
					description: "must be a string and required",
				},
				comments: {
					bsonType: "array",
					description: "must be an array and required",
					items: {
						bsonType: "object",
						required: ["text", "author"],
						properties: {
							text: {
								bsonType: "string",
								description: "must be a string and required",
							},
							author: {
								bsonType: "objectId",
								description: "must be a string and required",
							},
						},
					},
				},
			},
			additionalProperties: false,
		},
	},
	validationAction: "warn",
});
