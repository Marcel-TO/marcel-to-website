# Marcel's Portfolio & Knowledge Hub

A content‑driven personal portfolio showcasing software projects, deep–dive blog series, multi-part project documentation, and tagged knowledge collections. Built with Astro MDX content collections, a typed content pipeline, and ergonomic utilities for navigation, taxonomy, and reading experience.

---

## Core Features

- Unified listing & RSS of both blog posts and long‑form projects ([`GET`](src/pages/rss.xml.ts))
- Multi-part (parent / subpost) support for blog series & project chapters via hierarchical `id` (e.g. `road-to-save-editing/data-structure`)
- Automatic previous / next / parent navigation (see [`getAdjacentPosts`](src/lib/data-utils.ts) & [`getAdjacentProjects`](src/lib/data-utils.ts))
- TOC generation for standalone MDX and nested sections ([`getTOCSections`](src/lib/data-utils.ts), [`getTOCSectionsProjects`](src/lib/data-utils.ts))
- Author & tag taxonomy pages ([`[...id].astro` authors](src/pages/authors/%5B...id%5D.astro), [`[...id].astro` tags](src/pages/tags/%5B...id%5D.astro))
- Year grouping for archive views ([`groupPostsByYear`](src/lib/data-utils.ts), [`groupProjectsByYear`](src/lib/data-utils.ts))
- Reading time + combined reading duration for series ([`getPostReadingTime`](src/lib/data-utils.ts), [`getCombinedReadingTime`](src/lib/data-utils.ts))

---

## Content Model (MDX Frontmatter Conventions)

Blog (`src/content/blog/...`):

- `title`, `description`, `date`, `tags[]`, `authors[]`, `draft?`, `image?`

Projects (`src/content/projects/...`):

- `title`, `description`, `startDate`, `endDate?`, `contributors[]`, `tags[]`, `link?`, `image?`, `order?` (for ordered subprojects / chapters)

Hierarchical entries use slash‑separated IDs:

- Parent: `dl2-save-editor`
- Child: `dl2-save-editor/getting-started`
  Detection utilities: [`isSubpost`](src/lib/data-utils.ts), [`isSubProject`](src/lib/data-utils.ts), [`getParentId`](src/lib/data-utils.ts)

---

## Navigation & Structure

| View                       | Source                                                               |
| -------------------------- | -------------------------------------------------------------------- |
| Blog index (paginated)     | [`blog/[...page].astro`](src/pages/blog/%5B...page%5D.astro)         |
| Projects index (paginated) | [`projects/[...page].astro`](src/pages/projects/%5B...page%5D.astro) |
| Project / chapter detail   | [`projects/[...id].astro`](src/pages/projects/%5B...id%5D.astro)     |
| Tag landing                | [`tags/[...id].astro`](src/pages/tags/%5B...id%5D.astro)             |
| Author profile             | [`authors/[...id].astro`](src/pages/authors/%5B...id%5D.astro)       |
| About                      | [`about.astro`](src/pages/about.astro)                               |
| RSS                        | [`rss.xml.ts`](src/pages/rss.xml.ts)                                 |

---

## 🔧 Data Utilities (Selected)

From [`src/lib/data-utils.ts`](src/lib/data-utils.ts):

| Purpose                  | Symbol                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Fetch published posts    | [`getAllPosts`](src/lib/data-utils.ts)                                                                     |
| Fetch published projects | [`getAllProjects`](src/lib/data-utils.ts)                                                                  |
| Include sub-items        | [`getAllPostsAndSubposts`](src/lib/data-utils.ts), [`getAllProjectsAndSubProjects`](src/lib/data-utils.ts) |
| Taxonomy counts          | [`getAllTags`](src/lib/data-utils.ts), [`getSortedTags`](src/lib/data-utils.ts)                            |
| Series navigation        | [`getAdjacentPosts`](src/lib/data-utils.ts), [`getAdjacentProjects`](src/lib/data-utils.ts)                |
| Subcontent helpers       | [`getSubpostsForParent`](src/lib/data-utils.ts), [`getSubProjectsForParent`](src/lib/data-utils.ts)        |
| TOC extraction           | [`render`](src/lib/data-utils.ts) + [`getTOCSections`](src/lib/data-utils.ts)                              |
| Reading time             | [`readingTime`](src/lib/utils.ts) & wrappers in data utils                                                 |

---

## 🗂 License

See [LICENSE](LICENSE).

---

## 🙌 Credits

The foundation is built on top of [astro-erudite](https://github.com/jktrn/astro-erudite). The structure, sub-posts and Callouts are aweseome and inspired me to build this portfolio.
