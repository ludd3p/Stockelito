import { defineField } from "sanity";

const news = {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({
      name: "newsTitle",
      type: "string",
      title: "News title",
      description: "Title for your news post"
    }),
    defineField({
      title: 'Is this a rumor?',
      name: 'isRumor',
      type: 'boolean'
    }),
    defineField({
      title: 'Did this wisdom come true?',
      name: 'isFulfilled',
      type: 'boolean'
    }),
    defineField({
      name: "newsText",
      type: "string",
      title: "News text",
      description: "Content of news article"
    }),
    defineField({
      name: "newsImage",
      type: "image",
      title: "News image",
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'newsTitle' }
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: "block" }]
    }),
    defineField({
      name: 'business',
      type: 'reference',
      title: 'Business',
      to: [{ type: 'business' }]
    })
  ],
};

export default news;