import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.seedswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://seedswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.seedswap.finance/contact-us/telegram",
      },
      {
        label: "SEED",
        href: "https://docs.seedswap.finance/tokenomics/seed",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://seedswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.seedswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.seedswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.seedswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/seedswap",
      },
      {
        label: "Documentation",
        href: "https://docs.seedswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@seedswap-1/s/seedswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.seedswap.finance/help/faq#is-seedswap-safe-has-seedswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.seedswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/seedswap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/seedswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/seedswap_ind",
      },
      {
        label: "中文",
        href: "https://t.me/seedswap_cn",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/seedswap_vn",
      },
      {
        label: "Italiano",
        href: "https://t.me/seedswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/seedswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/seedswap_tr",
      },
      {
        label: "Português",
        href: "https://t.me/seedswap_pt",
      },
      {
        label: "Español",
        href: "https://t.me/seedswap_es",
      },
      {
        label: "日本語",
        href: "https://t.me/seedswap_jp",
      },
      {
        label: "Français",
        href: "https://t.me/seedswap_fr",
      },
      {
        label: "Datch",
        href: "https://t.me/seedswap_de",
      },
      {
        label: "Filipino",
        href: "https://t.me/seedswap_ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/seedswap_ge",
      },
      {
        label: "Announcements",
        href: "https://t.me/seedswap_ann",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/seedswap",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/seedswap_official",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/seedswap/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/seedswap",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://seedswap.medium.com/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
