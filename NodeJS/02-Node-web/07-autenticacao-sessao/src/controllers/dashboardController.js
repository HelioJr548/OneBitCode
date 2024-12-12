module.exports = {
	dashboard: (req, res) => {
		res.render('dashboard', { user: { username: 'TESTE ' } });
	},
};
