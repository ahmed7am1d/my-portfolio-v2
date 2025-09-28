# The CMS (Content Management System) 📑 of my portfolio using Sanity

## 1. 📁 Project Architecture 
```
📦schemaTypes
 ┣ 📜blog.ts
 ┣ 📜category.ts
 ┣ 📜experience.ts
 ┣ 📜index.ts
 ┗ 📜project.ts
 📜.gitignore
 📜eslint.config.mjs
 📜package.json
 📜README.md
 📜sanity-typegen.json
 📜sanity.cli.ts
 📜sanity.config.ts
 📜schema.json
 📜tsconfig.json
 📜yarn.lock
```

🔍**Most important files/folders:**

**1. 📁 `schemaTypes/`**: Core of the app where content types are defined
   - `blog.ts` - Blog post schema with rich content, SEO fields, and categories
   - `category.ts` - Category classification for blog posts
   - `experience.ts` - Work experience/job history schema
   - `project.ts` - Portfolio project schema with images and links
   - `index.ts` - Exports all schema types

**2. 📜 `sanity-typegen.json`**: TypeScript generation config that outputs types to the frontend at `../frontend/libs/App/types/sanity.types.ts`

**3. 📜 `sanity.cli.ts`**: CLI configuration with project ID (`ncci26jq`), dataset (`production`), and studio host (`myportfolio-v2`)

**4. 📜 `sanity.config.ts`**: Main CMS configuration including:
   - Internationalization support (English & Arabic)
   - Code input plugin for syntax highlighting
   - Vision tool for GROQ queries
   - Structure tool for content management

**5. 📜 `schema.json`**: Generated schema definitions used by the frontend for type validation

**6. 📜 `tsconfig.json`**: TypeScript compiler configuration for the CMS project

## 2. ⚙️ Common Development Commands 

### 2.1 Run the project locally
```bash
yarn dev
# or
npm run dev
```
Starts the Sanity Studio development server at `http://localhost:3333`

### 2.2 Deploy changes to Sanity Studio
```bash
yarn deploy
# or
npm run deploy
```
Deploys schema changes and studio updates to `https://myportfolio-v2.sanity.studio`

### 2.3 Extract schema to JSON
```bash
yarn scheme-extract
# or 
npm run scheme-extract
```
Extracts the current schema definitions from 📁 `schemaTypes/`** and generates `schema.json` file used by the frontend for validation and type checking

### 2.4 Generate TypeScript types for frontend
```bash
yarn typegen
# or 
npm run typegen
```
Generates TypeScript definitions from schemas (specifically from the  📜```schema.json``` file ) and saves them to `../frontend/libs/App/types/sanity.types.ts`

### 2.5 Build for production
```bash
yarn build
# or
npm run build
```
Creates an optimized build of the Sanity Studio

## 3. 🌐 Content Types & Features

### Supported Content Types:
- **Blog Posts**: Rich text content with SEO metadata, categories, and featured images
- **Projects**: Portfolio projects with descriptions, images, and external links
- **Experience**: Work history with company details, dates, and descriptions
- **Categories**: Organizational tags for blog posts

### Key Features:
- **Internationalization**: Content available in English and Arabic
- **Code Highlighting**: Syntax highlighting for code blocks in blog posts
- **Image Management**: Automatic image optimization and metadata extraction
- **SEO Support**: Meta titles, descriptions, and social sharing images

## 4. 🔗 Integration

The CMS automatically generates TypeScript types that are consumed by the Nuxt.js frontend, ensuring type safety across the entire application. Content is delivered via Sanity's CDN for optimal performance.