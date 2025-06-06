import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import { codeInput } from '@sanity/code-input'


export default defineConfig({
  name: 'default',
  title: 'my-porfolio-v2-cms',

  projectId: 'ncci26jq',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
    documentInternationalization({
      supportedLanguages: [
        {id:'en-US', title: 'English'},
        {id: 'ar-IQ', title: 'Arabic'},
      ],
      schemaTypes: ['experience', 'project', 'blog', 'category'],
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
