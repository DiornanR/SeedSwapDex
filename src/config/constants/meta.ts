import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SeedSwap DEX',
  description:
    'The most popular AMM on BSC by user count! Earn Seed through yield farming or win it in the Lottery, then stake it in Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by SeedSwap DEX), NFTs, and more, on a platform you can trust.',
  image: '#',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SeedSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SeedSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SeedSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SeedSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SeedSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SeedSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SeedSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SeedSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SeedSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SeedSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SeedSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SeedSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SeedSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SeedSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SeedSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SeedSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SeedSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SeedSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SeedSwap Info & Analytics')}`,
        description: 'View statistics for SeedSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SeedSwap Info & Analytics')}`,
        description: 'View statistics for SeedSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SeedSwap Info & Analytics')}`,
        description: 'View statistics for SeedSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SeedSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SeedSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('SeedSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('SeedSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SeedSwap')}`,
      }
    default:
      return null
  }
}
