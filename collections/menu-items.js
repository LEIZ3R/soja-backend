const Menu = {
    slug: "menu-items",
    auth: false,
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "category",
            type: "text",
            required: true,
        },
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "price",
            type: "number",
            required: true,
        },
    ],
};

export default Menu;
