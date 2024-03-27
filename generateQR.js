const QRCode = require('qrcode');
const fs = require('fs');

const websiteURL = 'https://erwanallot.com';
const outputFilePath = 'qrcode.png';

QRCode.toFile(outputFilePath, websiteURL, (err) => {
  if (err) throw err;
  console.log('QR code généré avec succès !');
});
