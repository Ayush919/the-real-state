

const UPLOADCARE_PUBLIC_KEY = "24643205984eeba646af";

export const uploadImageToUploadcare = async (file) => {
    const formData = new FormData();
    formData.append("UPLOADCARE_STORE", "1");
    formData.append("UPLOADCARE_PUB_KEY", UPLOADCARE_PUBLIC_KEY);
    formData.append("file", file);

    const res = await fetch("https://upload.uploadcare.com/base/", {
        method: "POST",
        body: formData,
    });

    const data = await res.json();
    if (data && data.file) {
        return `https://ucarecdn.com/${data.file}/`; // Public image URL
    }

    throw new Error("Uploadcare upload failed");
};

