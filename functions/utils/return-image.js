//easily returns an image
module.exports = function returnImage (image) {
  return {
    body: image.toString('base64'),
    statusCode: 200,
    isBase64Encoded: true,
    headers: {
      'Content-Type': 'image/png',
    }
  }
}
