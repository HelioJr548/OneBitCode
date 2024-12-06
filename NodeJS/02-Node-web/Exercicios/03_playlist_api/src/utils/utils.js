function generateRandomID() {
	return Math.floor(Math.random() * 999999999);
}

function findIndex(dbName, id) {
	return dbName.findIndex((item) => item.id === +id);
}

const handleResponse = (
	res,
	result,
	successStatusCode = 200,
	errorStatusCode = 400
) => {
	const { success, message, data } = result;
	return success
		? res.status(successStatusCode).json(data || message)
		: res.status(errorStatusCode).json({ message });
};

module.exports = { generateRandomID, findIndex, handleResponse };
