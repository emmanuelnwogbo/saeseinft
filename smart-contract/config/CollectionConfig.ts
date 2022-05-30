import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'DegenSamurai',
  tokenName: 'DegenSamurai NFT',
  tokenSymbol: 'DegenSamurai',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 3000,
  whitelistSale: {
    price: 0.0,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.002,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x175DE18B85444EdF4e4b46fB0A1D7774d6Ba9fAf',
  marketplaceIdentifier: 'DegenSamuraiNFT',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
