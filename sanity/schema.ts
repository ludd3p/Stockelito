import { type SchemaTypeDefinition } from 'sanity'
import business from './schemas/business'
import news from './schemas/news'
import horoscope from './schemas/horoscope'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [business, news, horoscope],
}
