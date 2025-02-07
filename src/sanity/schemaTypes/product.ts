import { defineType } from "sanity"

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        }, 
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options : {
                source : 'name',
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping
            },
        },
        {
            name: "category",
            title: "Category",
            type: 'string',
            options: {
                list: [
                    { title: 'T-Shirt', value: 'tshirt' },
                    { title: 'Short', value: 'short' },
                    { title: 'Jeans', value: 'jeans' },
                    { title: 'Hoodie', value: 'hoodie' },
                    { title: 'Shirt', value: 'shirt' },
                ],
            },
        },
        {
            name: "discountPercent",
            title: "Discount Percent",
            type: 'number',
        },
        {
            name: "isNew",
            type: 'boolean',
            title: "Is New",
        },
        {
            name: "colors",
            title: "Colors",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            name: "sizes",
            title: "Sizes",
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            name: "rating",
            title: "Rating",
            type: 'number',
            validation: Rule => Rule.min(1).max(5).error('Rating must be between 1 and 5')
        }
    ],
})
