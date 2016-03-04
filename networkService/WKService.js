const API_PATH = 'http://42.96.171.42:9001/api';


export default class WikitecService {
	apiPath() {
		return API_PATH;
	}

	logsPath() {
		let url = `${API_PATH}/logs/`;
		return url;
	}

	fetchPromise(url) {
		// return fetch(url, {
		// 	//这里可以设置请求头，可以添加Token
		// 	//headers: this.tokenHeader(),
		// });

		return fetch(url);
	}
}

const SingleWKService = new WikitecService();

module.exports = SingleWKService;