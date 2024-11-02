import { defineField } from "sanity";

const news = {
  name: "news",
  title: "Wisdoms",
  type: "document",
  fields: [
    defineField({
      name: "newsTitle",
      type: "string",
      title: "Wisdom title",
      description: "Title for your wisdom post"
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
      title: "Wisdom text",
      description: "Content of wisdom card"
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
      name: 'upVotes',
      title: 'Positive voters',
      type: 'number',
    }),
    defineField({
      name: 'downVotes',
      title: 'Negative voters',
      type: 'number',
    }),
  ],
};

export default news;