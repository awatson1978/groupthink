Crypto_MD5 = function(text) {
	var crypto = Npm.require('crypto');
	var hash = crypto.createHash('md5').update(text).digest('hex');
	return hash;
}