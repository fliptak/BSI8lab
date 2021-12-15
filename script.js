/* Filip Tamkun s18428 Krzysztof Wachowiak s21474
AES, RC4, 3DES https://www.npmjs.com/package/crypto-js
RSA https://nodejs.org/api/crypto.html */
import { AES as _AES, RC4 as _RC4, TripleDES as _TripleDES, enc as _enc } from "crypto-js";
import { generateKeyPairSync, publicEncrypt, constants, privateDecrypt } from "crypto";
const crypto = require('crypto');
const CryptoJS = require('crypto-js')
const readline = require("readline");
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Message : ", function(message) {
rl.question("Encryption [AES , 3DES , RSA] : ", function(enc) {
    

if(enc == "AES"){
	var encrypted = _AES.encrypt(message, "Secret Passphrase");

	var decrypted = _AES.decrypt(encrypted, "Secret Passphrase");
}

if(enc == "3DES"){
	var encrypted = _TripleDES.encrypt(message, "Secret Passphrase");

	var decrypted = _TripleDES.decrypt(encrypted, "Secret Passphrase");
}

if(enc == "RC4"){
	var encrypted = _RC4.encrypt(message, "Secret Passphrase");

	var decrypted = _RC4.decrypt(encrypted, "Secret Passphrase");
}

if(enc == "RSA"){

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
	// RSA standard at 2048
	modulusLength: 2048,
})

var encrypted = publicEncrypt(
	{
		key: publicKey,
		padding: constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	},
	//string to buffer
	Buffer.from(message)
)

var decrypted = privateDecrypt(
	{
		key: privateKey,
		padding: constants.RSA_PKCS1_OAEP_PADDING,
        // Have to use the same hashing fucntion used to encrypt.
		oaepHash: "sha256",
	},
	encrypted
)

}

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
	// RSA standard at 2048 bits
	modulusLength: 2048,
})


console.log("")

console.log("Message :")
console.log(oryginal_msg)

console.log("Encryption :")
console.log(enc)
console.log("")

console.log("Encrypted :")
console.log(encrypted.toString())
console.log("")

console.log("Decrypted :")
console.log(decrypted.toString())
console.log("")

if(enc != "RSA"){
console.log("Actual Message :")
console.log(decrypted.toString(_enc.Utf8)) 
console.log("")
}


});  
});

rl.on("close", function() {
    console.log("\n adios !!!");
    process.exit(0);
});
