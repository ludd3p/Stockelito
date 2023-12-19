import { type SchemaTypeDefinition } from 'sanity'
import business from './schemas/business'
import news from './schemas/news'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [business, news],
}
