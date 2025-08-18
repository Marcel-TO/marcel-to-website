import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Marcel-TO',
  description: 'A developer’s journey: learning, debugging, and creating.',
  href: 'https://marcel-to.vercel.app',
  author: 'Marcel-TO',
  locale: 'de-DE',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Marcel-TO',
    label: 'GitHub',
  },
  {
    href: 'https://github.com/Marcel-TO/marcel-to-website',
    label: 'Repo',
  },
  {
    href: 'https://github.com/sponsors/Marcel-TO',
    label: 'Sponsor',
  },
  {
    href: 'https://discord.com/users/765623015219134524',
    label: 'Discord',
  },
]

export const ICON_MAP: IconMap = {
    GitHub: 'lucide:github',
    Repo: 'lucide:code',
    Sponsor: 'lucide:heart',
    Discord: 'discord',
    Website: 'lucide:globe',
}
