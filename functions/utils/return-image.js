//easily returns an image
module.exports = function returnImage (image) {
  return {
    body: image,
    headers: {
      'Content-Type': 'image/png',
    }
  }
}
