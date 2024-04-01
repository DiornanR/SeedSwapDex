import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
     // href: 'https://docs.seedswap.finance/contact-us',
        href: '#',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
     // href: 'https://docs.seedswap.finance/brand',
        href: '#',
      },
      {
        label: t('Blog'),
     // href: 'https://medium.com/seedswap',
        href: '#',
      },
      {
        label: t('Community'),
     // href: 'https://docs.seedswap.finance/contact-us/telegram',
        href: '#',
      },
      {
        label: t('Seed token'),
     // href: 'https://docs.seedswap.finance/tokenomics/seed',
        href: '#',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
     // href: 'https://seedswap.creator-spring.com/',
        href: '#',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
     // href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
        href: '#',
      },
      {
        label: t('Troubleshooting'),
     // href: 'https://docs.pancakeswap.finance/help/troubleshooting',
        href: '#',
      },
      {
        label: t('Guides'),
     // href: 'https://docs.pancakeswap.finance/get-started',
        href: '#',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
     // href: 'https://docs.pancakeswap.finance',
        href: '#',
      },
      {
        label: t('Bug Bounty'),
     // href: 'https://docs.pancakeswap.finance/code/bug-bounty',
        href: '#',
      },
      {
        label: t('Audits'),
     // href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
        href: '#',
      },
      {
        label: t('Careers'),
     // href: 'https://docs.pancakeswap.finance/hiring/become-a-chef',
        href: '#',
      },
    ],
  },
]
