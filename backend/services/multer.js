const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v4: uuidv4 } = require("uuid");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "rumbbble_uploads",
    public_id: (request, file) => uuidv4(),
  },
});

const fileFilter = (request, file, callback) => {
  const acceptedFileTypes = ["image/jpeg", "image/png"];
  return acceptedFileTypes.includes(file.mimetype)
    ? callback(null, true)
    : callback(null, false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1000 * 1000 * 10 }, // 10 MB
});

module.exports = upload;
