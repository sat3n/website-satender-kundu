# How to Update Content

This guide explains how to add or edit content on the site. All content lives in `src/data/` as plain Markdown and YAML files. No framework knowledge is needed.

## Quick Reference

| Content type | File(s) | Format |
|---|---|---|
| Thoughts (essays, posts) | `src/data/thoughts/*.md` | One Markdown file per post |
| Books | `src/data/books.yaml` | Append to YAML list |
| Articles & papers | `src/data/articles.yaml` | Append to YAML list |
| Certifications | `src/data/certifications.yaml` | Append to YAML list |
| Community work | `src/data/community.yaml` | Append to YAML list |
| Social links | `src/data/social-links.yaml` | Edit YAML list |

---

## Adding a New Thought (Essay/Post)

Create a new `.md` file in `src/data/thoughts/`. The filename becomes the URL slug.

**Template** — copy this into `src/data/thoughts/your-post-title.md`:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO and the listing page."
pubDate: 2026-03-15
tags: ["topic"]
draft: false
featured: false
---

Write your content here using Markdown.

## Subheadings work

So do **bold**, *italics*, [links](https://example.com), and `code`.
```

**Fields:**
- `title` (required): The post title
- `description` (required): Short summary for listings and SEO
- `pubDate` (required): Publication date in YYYY-MM-DD format
- `tags` (optional): Array of tag strings
- `draft` (optional): Set to `true` to hide from production (visible in dev)
- `featured` (optional): Set to `true` to show on the home page

---

## Adding a Book

Open `src/data/books.yaml` and append:

```yaml
- id: unique-id-no-spaces
  title: "Book Title"
  author: Author Name
  status: read          # read | reading | to-read
  year: 2026            # year you read it (optional)
  rating: 4             # 1-5 stars (optional, for read books)
  category: Technology  # optional
  notes: Brief thoughts about the book.  # optional
```

---

## Adding an Article or Paper

Open `src/data/articles.yaml` and append:

```yaml
- id: unique-id
  title: "Article Title"
  source: Author or Publication
  url: https://example.com/article
  category: AI          # optional
  note: Why this is worth reading.  # optional
```

---

## Adding a Certification

Open `src/data/certifications.yaml` and append:

```yaml
- id: unique-id
  title: "Certification Name"
  issuer: "Issuing Organization"
  date: 2024-01-15
  expiryDate: 2027-01-15       # optional
  credentialUrl: https://...    # optional, link to verify
  category: Cloud               # optional, used for grouping
```

---

## Adding Community/Non-Profit Work

Open `src/data/community.yaml` and append:

```yaml
- id: unique-id
  organization: "Organization Name"
  role: "Your Role"
  description: "Brief description of your involvement."
  startDate: 2023-06-01
  endDate: 2025-12-31           # omit for current/ongoing
  url: https://example.com      # optional
  type: non-profit              # non-profit | open-source | mentoring | volunteering
```

---

## Updating Social Links

Edit `src/data/social-links.yaml`:

```yaml
- platform: GitHub
  url: https://github.com/your-username
  icon: github

- platform: LinkedIn
  url: https://linkedin.com/in/your-profile
  icon: linkedin

- platform: Email
  url: mailto:you@example.com
  icon: email
```

Supported icons: `github`, `linkedin`, `email`.

---

## Editing the Bio

The bio text lives directly in the Astro page templates:
- **Home page bio**: `src/pages/index.astro`
- **About page bio**: `src/pages/about.astro`

Edit the text between the `<p>` tags in these files.

---

## Building & Previewing Locally

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Deploying

Push to `main` — GitHub Actions builds and deploys automatically.
