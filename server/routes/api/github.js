const request = require('superagent');
module.exports = (app) => {
	app.get('/user/signin/callback', (req, res, next) => {
		const { query } = req;
		const { code } = query;
		if (!code){
			return res.send({
				success: false,
				message: "Error: no code"
			});
		}
		request
			.post('https://github.com/login/oauth/access_token')
			.send({
				client_id: '629e93dcd67398b8f56a',
				client_secret: '3b6462dee0975c67d4cc8aa31bcc75fb1278cbc1',
				code: code
			})
			.set('Accept', 'application/json')
			.then(function(result){
				const data = result.body;
				res.send(data);
			})
	});
	app.get('/user/', (req, res, next) => {
		const accessToken = '3bd184ca3e658f33156a99bd15c256d4d377c902';

		request
			.get('https://api.github.com/user')
			.set('Authorization', 'token ' + accessToken)
			.then(function(result){
				res.send(result.body);
			})
	} );
};
