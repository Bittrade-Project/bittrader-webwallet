let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://www.bittraderwallet.com/api/',
	mainnetExplorerUrl: "https://explorer.bittrader.io",
	mainnetExplorerUrlHash: "https://trdchain.net/tx/{ID}",
	mainnetExplorerUrlBlock: "https://trdchain.net/block/{ID}",
	testnetExplorerUrl: "http://testnet.trdchain.net/",
	testnetExplorerUrlHash: "http://testnet.trdchain.net/tx/{ID}",
	testnetExplorerUrlBlock: "http://testnet.trdchain.net/block/{ID}",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 38,
	integratedAddressPrefix: 39,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 74,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 12, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'TRD',
	openAliasPrefix: "trd",
	coinName: 'Bittrader',
	coinUriPrefix: 'bittrader:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
};
