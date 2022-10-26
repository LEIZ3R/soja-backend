const Media = {
    slug: "media",
    auth: false,
    access: {
        read: () => true,
    },
    upload: {
        staticURL: "/media",
        staticDir: "media",
        imageSizes: [
            {
                name: "promo",
                width: 250,
                height: 250,
                position: "centre",
            },           
        ],
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"],
    },
};

export default Media;
