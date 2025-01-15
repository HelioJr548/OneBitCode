module.exports = {
	welcome: (req, res) => {
		const displayName = req.authenticatedUser?.name ?? 'visitante';
		res.json({ message: `Seja bem-vindo(a), ${displayName}` });
	},
};
