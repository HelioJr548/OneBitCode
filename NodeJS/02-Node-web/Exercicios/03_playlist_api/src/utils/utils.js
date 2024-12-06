function generateRandomID() {
	return Math.floor(Math.random() * 999999999);
}

function findIndex(dbName, id) {
	return dbName.findIndex((item) => item.id === +id);
}

module.exports = { generateRandomID, findIndex };
