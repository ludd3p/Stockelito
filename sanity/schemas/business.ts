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
      name: "twitterTimelineUrl",
      type: "string",
      title: "Twitter URL",
      description: "Enter URL to grab news from twitter"
    }),
    defineField({
      name: "twitterIds",
      type: "array",
      of: [
        {
          type: 'string',
          title: 'Twitter ID',
        },],
      title: "Twitter IDs for specific posts",
      description: "Enter a couple of tweet IDs to show specific tweets"
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
    }),
    defineField({
      name: 'tradingViewSymbol',
      title: 'TradingView Symbol',
      type: 'string',
      description: "Enter the symbol of the company, can be found at https://www.tradingview.com/widget-docs/widgets/charts/symbol-overview/"
    })
  ],
};

export default business;