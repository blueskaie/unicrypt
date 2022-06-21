import {store} from '@/store/index';

// Presale Helper -> 0x6219ba54Eb5f60A21A5dD2dE5aAEb01874e95B34
// Presale Helper -> 0x6219ba54Eb5f60A21A5dD2dE5aAEb01874e95B34
// Presale Lock forwarded xDai -> 0x8a5e208C1cA217Db8Ee64e8d390CF1f25De35A4e

const presale_factory_address = {
  'Mainnet': {
    'Uniswap V2': '0xCbA369bc33bBB486033b858cAf422C184c7B483c',
    'Sushiswap V1': '0xcEE32dA23A4Ea61F6217B19d84fe63E077AF5990',
  },
  'Kovan': {
    'Uniswap V2 - Kovan': '0x8a5e208C1cA217Db8Ee64e8d390CF1f25De35A4e',
  },
  'Ganache': {
    'Uniswap V2': '0xF7237475185053eFE89A12E5dEeA6c00ABE2857e',
  },
  'BSC_MAINNET': {
    'Pancakeswap V1': '0xCE67415e41817a3E9461E2A20281bB80c1820038',
    'Pancakeswap V2': '0x206EC1d1C0147f5B2b8D302901Bfb6b7CBFAcb09',
    'Julswap V1': '0x593848cFADB16Fe8b13A0A913520b701ed0c8Eec',
  },
  'xDai': {
    'Honeyswap V1': '0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49',
  },
  'Matic': {
    'Quickswap V1': '0x816C82409eC8E0C008fC79e902a8e790bb70840C',
  }
}

const presale_generator01_address = {
  'Mainnet': {
    // 'Uniswap V2': '0x499df38a3Be830A4C21611a7D3FCf78c189db36D', OLD ONE, DELETE ONCE APP RELEASED
    'Uniswap V2': '0x05e5A82AD97cAF832cA3e53b154F84A8b69DC1eB',
    'Sushiswap V1': '0xa1dE0bCaFc6c723FefB4A84A1d0eFEa067Dd99f6',
  },
  'Kovan': {
    // 'Uniswap V2 - Kovan': '0x388f7E6d45e058AA703227B44e216e3bE3C6A6E7', OLD ONE, DELETE ONCE APP RELEASED
    'Uniswap V2 - Kovan': '0xA13e75f5ddba36b6B1ce0179C293C371FE4Cb254',
  },
  'Ganache': {
    'Uniswap V2': '0xf29d8C1f645cA6504394a83428b6e5013866ae6b',
  },
  'BSC_MAINNET': {
    'Pancakeswap V1': '0xC2C54785d1bfdc0d38743ffE15E9709Ec1a794b5',
    // 'Pancakeswap V2': '0x42C8Da3539dE51b74941A2530E9a82F8B08253B6', OLD ONE, DELETE ONCE APP RELEASED
    'Pancakeswap V2': '0x38644Df306aa0480b52953cE5550F2901066a7D7',
    'Julswap V1': '0x197D2286f299C323272C08D768D7fD987e1350F2',
  },
  'xDai': {
    'Honeyswap V1': '0x1C38A5a54CDf667dd43AeF4f19480202F4a71881',
  },
  'Matic': {
    'Quickswap V1': '0x284609AE8899c38248CAA019F83297AF82FbBaF1',
  }
}

const presale_settings_address = {
  'Mainnet': {
    'Uniswap V2': '0x2A8977E2A829BE0dD8c94fC7886b15937a376C41',
    'Sushiswap V1': '0x2A8977E2A829BE0dD8c94fC7886b15937a376C41',
  },
  'Kovan': {
    'Uniswap V2 - Kovan': '0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49',
  },
  'Ganache': {
    'Uniswap V2': '0x21876F9B3e7aA5F3604784de2724F55B92ceFA9d',
  },
  'BSC_MAINNET': {
    'Pancakeswap V1': '0x8a5e208C1cA217Db8Ee64e8d390CF1f25De35A4e',
    'Pancakeswap V2': '0x8a5e208C1cA217Db8Ee64e8d390CF1f25De35A4e',
    'Julswap V1': '0x8a5e208C1cA217Db8Ee64e8d390CF1f25De35A4e',
  },
  'xDai': {
    'Honeyswap V1': '0x687F8AE35581D5729253542524be3eD9445ee607',
  },
  'Matic': {
    'Quickswap V1': '0xc8B839b9226965caf1d9fC1551588AaF553a7BE6',
  }
}

const Self = {
  presale_factory_address: () => {
    return presale_factory_address[store.state.requiredNetwork][store.state.exchange]
  },
  presale_generator01_address: () => {
    return presale_generator01_address[store.state.requiredNetwork][store.state.exchange]
  },
  presale_settings_address: () => {
    return presale_settings_address[store.state.requiredNetwork][store.state.exchange]
  },
  // gets CONTRACT VERSION and nothing else
  contract_version_abi: [{"inputs":[],"name":"CONTRACT_VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
  presale01_abi: [{"inputs":[{"internalType":"address","name":"_presaleGenerator","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"BUYERS","outputs":[{"internalType":"uint256","name":"baseDeposited","type":"uint256"},{"internalType":"uint256","name":"tokensOwed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONTRACT_VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_FEE_INFO","outputs":[{"internalType":"uint256","name":"UNICRYPT_BASE_FEE","type":"uint256"},{"internalType":"uint256","name":"UNICRYPT_TOKEN_FEE","type":"uint256"},{"internalType":"uint256","name":"REFERRAL_FEE","type":"uint256"},{"internalType":"addresspayable","name":"BASE_FEE_ADDRESS","type":"address"},{"internalType":"addresspayable","name":"TOKEN_FEE_ADDRESS","type":"address"},{"internalType":"addresspayable","name":"REFERRAL_FEE_ADDRESS","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_GENERATOR","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_INFO","outputs":[{"internalType":"addresspayable","name":"PRESALE_OWNER","type":"address"},{"internalType":"contractIERC20","name":"S_TOKEN","type":"address"},{"internalType":"contractIERC20","name":"B_TOKEN","type":"address"},{"internalType":"uint256","name":"TOKEN_PRICE","type":"uint256"},{"internalType":"uint256","name":"MAX_SPEND_PER_BUYER","type":"uint256"},{"internalType":"uint256","name":"AMOUNT","type":"uint256"},{"internalType":"uint256","name":"HARDCAP","type":"uint256"},{"internalType":"uint256","name":"SOFTCAP","type":"uint256"},{"internalType":"uint256","name":"LIQUIDITY_PERCENT","type":"uint256"},{"internalType":"uint256","name":"LISTING_RATE","type":"uint256"},{"internalType":"uint256","name":"START_BLOCK","type":"uint256"},{"internalType":"uint256","name":"END_BLOCK","type":"uint256"},{"internalType":"uint256","name":"LOCK_PERIOD","type":"uint256"},{"internalType":"bool","name":"PRESALE_IN_ETH","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_LOCK_FORWARDER","outputs":[{"internalType":"contractIPresaleLockForwarder","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_SETTINGS","outputs":[{"internalType":"contractIPresaleSettings","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STATUS","outputs":[{"internalType":"bool","name":"WHITELIST_ONLY","type":"bool"},{"internalType":"bool","name":"LP_GENERATION_COMPLETE","type":"bool"},{"internalType":"bool","name":"FORCE_FAILED","type":"bool"},{"internalType":"uint256","name":"TOTAL_BASE_COLLECTED","type":"uint256"},{"internalType":"uint256","name":"TOTAL_TOKENS_SOLD","type":"uint256"},{"internalType":"uint256","name":"TOTAL_TOKENS_WITHDRAWN","type":"uint256"},{"internalType":"uint256","name":"TOTAL_BASE_WITHDRAWN","type":"uint256"},{"internalType":"uint256","name":"ROUND1_LENGTH","type":"uint256"},{"internalType":"uint256","name":"NUM_BUYERS","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNI_FACTORY","outputs":[{"internalType":"contractIUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"contractIWETH","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"},{"internalType":"bool","name":"_add","type":"bool"}],"name":"editWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"forceFailByUnicrypt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"forceFailIfPairExists","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserWhitelistStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getWhitelistedUserAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistedUsersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"addresspayable","name":"_presaleOwner","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"uint256","name":"_maxEthPerBuyer","type":"uint256"},{"internalType":"uint256","name":"_hardcap","type":"uint256"},{"internalType":"uint256","name":"_softcap","type":"uint256"},{"internalType":"uint256","name":"_liquidityPercent","type":"uint256"},{"internalType":"uint256","name":"_listingRate","type":"uint256"},{"internalType":"uint256","name":"_startblock","type":"uint256"},{"internalType":"uint256","name":"_endblock","type":"uint256"},{"internalType":"uint256","name":"_lockPeriod","type":"uint256"}],"name":"init1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contractIERC20","name":"_baseToken","type":"address"},{"internalType":"contractIERC20","name":"_presaleToken","type":"address"},{"internalType":"uint256","name":"_unicryptBaseFee","type":"uint256"},{"internalType":"uint256","name":"_unicryptTokenFee","type":"uint256"},{"internalType":"uint256","name":"_referralFee","type":"uint256"},{"internalType":"addresspayable","name":"_baseFeeAddress","type":"address"},{"internalType":"addresspayable","name":"_tokenFeeAddress","type":"address"},{"internalType":"addresspayable","name":"_referralAddress","type":"address"}],"name":"init2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ownerWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"presaleStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_flag","type":"bool"}],"name":"setWhitelistFlag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"updateBlocks","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSpend","type":"uint256"}],"name":"updateMaxSpendLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"userDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"userWithdrawBaseTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"userWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}],
  presale_factory_abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"presaleContract","type":"address"}],"name":"presaleRegistered","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_allow","type":"bool"}],"name":"adminAllowPresaleGenerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"presaleAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"presaleGeneratorAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleGeneratorsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_presaleAddress","type":"address"}],"name":"presaleIsRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presalesLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_presaleAddress","type":"address"}],"name":"registerPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
  presale_generator01_abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"PRESALE_FACTORY","outputs":[{"internalType":"contractIPresaleFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_SETTINGS","outputs":[{"internalType":"contractIPresaleSettings","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"addresspayable","name":"_presaleOwner","type":"address"},{"internalType":"contractIERC20","name":"_presaleToken","type":"address"},{"internalType":"contractIERC20","name":"_baseToken","type":"address"},{"internalType":"addresspayable","name":"_referralAddress","type":"address"},{"internalType":"uint256[10]","name":"uint_params","type":"uint256[10]"}],"name":"createPresale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],
  presale_settings_abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"EARLY_ACCESS_MAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SETTINGS","outputs":[{"internalType":"uint256","name":"BASE_FEE","type":"uint256"},{"internalType":"uint256","name":"TOKEN_FEE","type":"uint256"},{"internalType":"uint256","name":"REFERRAL_FEE","type":"uint256"},{"internalType":"addresspayable","name":"ETH_FEE_ADDRESS","type":"address"},{"internalType":"addresspayable","name":"TOKEN_FEE_ADDRESS","type":"address"},{"internalType":"uint256","name":"ETH_CREATION_FEE","type":"uint256"},{"internalType":"uint256","name":"ROUND1_LENGTH","type":"uint256"},{"internalType":"uint256","name":"MAX_PRESALE_LENGTH","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allowedReferrersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlyAccessTokensLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"addresspayable","name":"_referrer","type":"address"},{"internalType":"bool","name":"_allow","type":"bool"}],"name":"editAllowedReferrers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_holdAmount","type":"uint256"},{"internalType":"bool","name":"_allow","type":"bool"}],"name":"editEarlyAccessTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBaseFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getEarlyAccessTokenAtIndex","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthAddress","outputs":[{"internalType":"addresspayable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthCreationFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxPresaleLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReferralFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getReferrerAtIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRound1Length","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenAddress","outputs":[{"internalType":"addresspayable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"}],"name":"referrerIsValid","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"addresspayable","name":"_ethAddress","type":"address"},{"internalType":"addresspayable","name":"_tokenFeeAddress","type":"address"}],"name":"setFeeAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseFee","type":"uint256"},{"internalType":"uint256","name":"_tokenFee","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxLength","type":"uint256"}],"name":"setMaxPresaleLength","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_round1Length","type":"uint256"}],"name":"setRound1Length","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userHoldsSufficientRound1Token","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
}

export default Self