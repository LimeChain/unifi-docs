/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  docSidebar: [
    "intro",
    "move-funds",
    "bridge-ui",
    "tee-multi-prover",
  ],
  developersSidebar: [
    {
      type: "doc",
      label: "Getting started",
      id: "developers/getting-started/index",
    },
    {
      type: "category",
      label: "Deploy a Smart Contract",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "doc", 
          label: "Using Foundry",
          id: "developers/rollup/smart-contracts/deploy-foundry",
        },
        {
          type: "doc", 
          label: "Using Hardhat",
          id: "developers/rollup/smart-contracts/deploy-hardhat",
        }
      ]
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "doc",
          label: "Network & RPC Endpoints",
          id: "developers/reference/rpc-endpoints",
        },
        {
          type: "doc",
          label: "Smart Contract Addresses",
          id: "developers/reference/contract-addresses",
        },
        {
          type: "doc",
          label: "Opcodes",
          id: "developers/reference/opcodes",
        },
      ]
    }
  ]
};

module.exports = sidebars;
