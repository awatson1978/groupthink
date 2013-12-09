Crypto_MD5 = function(text) {
	return crypto.createHash('md5').update(text).digest('hex');
}

getUserService = function(user) {
	for(var service in user.services) {
		if(service === "facebook") return "facebook";
		if(service === "github") return "github";
		if(service === "twitter") return "twitter";
		if(service === "google") return "google";
	}
}