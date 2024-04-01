import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
// import { nftsBaseUrl } from 'views/Nft/market/constants'
// import { perpLangMap } from 'utils/getPerpetualLanguageCode'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Swap'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      {
        label: t('Limit'),
     // href: '/limit-orders',
        href: '#',
        initialOpenState: true,
        status: {
          text: 'Soon',
          color: 'success',
        },
      },
      {
        label: t('Perpetual'),
     // href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT`,
     // type: DropdownMenuItemType.EXTERNAL_LINK,
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win'),
 // href: '/prediction',
    href: '#',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [
      {
        label: t('Trading Competition'),
     // href: '/competition',
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
      {
        label: t('Prediction (BETA)'),
     // href: '/prediction',
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
      {
        label: t('Lottery'),
     // href: '/lottery',
        href: '#',
        initialOpenState: true,
        status: {
          text: 'Soon',
          color: 'success',
        },
      },
    ],
  },
  {
    label: t('NFT'),
 // href: `${nftsBaseUrl}`,
    href: '#',
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('Overview'),
     // href: `${nftsBaseUrl}`,
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
      {
        label: t('Collections'),
     // href: `${nftsBaseUrl}/collections`,
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
      {
        label: t('Activity'),
     // href: `${nftsBaseUrl}/activity`,
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
    ],
  },
  {
    label: 'Info',
 // href: '/info',
    href: '#',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
     // href: '/info',
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
      {
        label: t('IFO'),
     // href: '/ifo',
        href: '#',
          initialOpenState: true,
          status: {
            text: 'Soon',
            color: 'success',
          },
      },
      /*
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      */
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/seedswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.seedswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  {
    label: 'Partner',
    href: '#',
 // icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('MAHO Carbon Credits'),
        href: '#',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Crypto Gado (CG)'),
        href: 'https://cryptogado.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
