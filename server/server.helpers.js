Crypto_MD5 = function(text) {
	var crypto = Npm.require('crypto');
	var hash = crypto.createHash('md5').update(text).digest('hex');
	return hash;
}

getUserService = function(user) {
	for(var service in user.services) {
		if(service === "facebook") return "facebook";
		if(service === "github") return "github";
		if(service === "twitter") return "twitter";
		if(service === "google") return "google";
	}
}