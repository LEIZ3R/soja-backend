const Promotions = {
    slug: "promotions",
    auth: false,
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "text",
            required: true,
        },
        {
            name: "price",
            type: "number",
            required: true,
        },
        {
            name: "image",
            type: "upload",
            relationTo:'media',
            required: true,
        },
    ],
};

export default Promotions;
