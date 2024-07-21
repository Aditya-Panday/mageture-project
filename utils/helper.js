// imageHandler.js

export const uploadImageToCloudinary = (imageFile) => {
  console.log("Uploading image", imageFile);
  const cloudName = "adityapanday";
  const uploadPreset = "chat-app";

  if (
    imageFile.type === "image/jpeg" ||
    imageFile.type === "image/png" ||
    imageFile.type === "image/jpg"
  ) {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);

    return fetch("https://api.cloudinary.com/v1_1/adityapanday/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        return data.url.toString(); // Return the URL of the uploaded image
      })
      .catch((error) => {
        console.error("Error uploading image to Cloudinary:", error);
        throw error; // Propagate the error for handling in the component
      });
  } else {
    throw new Error("Invalid file type. Only JPEG, PNG, and JPG are allowed.");
  }
};

// cors.js
export default function setCorsHeaders(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return true;
  }

  return false;
}
