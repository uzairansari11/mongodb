/* Role base access */

const ROLES = {
	admin: [
		"view:comments",
		"create:comments",
		"delete:comments",
		"update:comments",
	],
	moderator: ["view:comments", "create:comments", "delete:comments"],
	user: ["view:comments", "create:comments"],
};

function hasPermission(user, permission) {
	return ROLES[user.role].includes(permission);
}
