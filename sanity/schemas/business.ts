import { defineField } from "sanity";

const business = {
  name: "business",
  title: "Business",
  type: "document",
  fields: [
    defineField({
      name: "businessTicker",
      type: "string",
      title: "Business ticker",
      description: "Enter the stock ticker of the company"
    }),
    defineField({
      name: "businessName",
      type: "string",
      title: "Business name",
      description: "Enter the name of the company"
    }),
    defineField({
      name: "businessText",
      type: "string",
      title: "Business text",
      description: "Your text about the company"
    }),
    defineField({
      name: "businessLogo",
      type: "image",
      title: "Company logo",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'businessName',
        slugify: (input) => input.replace(/\s+/g, '+').toLowerCase(),
      }
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: "block" }]
    }),
    defineField({
      name: 'diUrl',
      title: 'DI URL',
      type: 'url',
    })
  ],
};

export default business;