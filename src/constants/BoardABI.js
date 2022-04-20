export const abi = [
  {
    inputs: [
      { internalType: "address", name: "owner0", type: "address" },
      { internalType: "address", name: "owner1", type: "address" },
      { internalType: "address", name: "owner2", type: "address" },
      { internalType: "address", name: "owner3", type: "address" },
      { internalType: "address", name: "owner4", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "_balances",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "_owners",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_voteIndex", type: "uint256" },
      { internalType: "uint256", name: "_vote", type: "uint256" },
      { internalType: "uint256", name: "_voterID", type: "uint256" },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_voteIndex", type: "uint256" }],
    name: "countVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositAVAX",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonEmpty",
    outputs: [{ internalType: "uint256", name: "nonEmpty_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThreshold",
    outputs: [{ internalType: "uint256", name: "threshold_", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lastWithdrawal",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum OptimalAutonomousOrganization.ACTION",
        name: "_action",
        type: "uint8",
      },
      { internalType: "uint256", name: "_ID", type: "uint256" },
      { internalType: "address", name: "_owner", type: "address" },
    ],
    name: "openVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newOwner", type: "address" },
      { internalType: "uint256", name: "ID", type: "uint256" },
    ],
    name: "transferSeat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "votes",
    outputs: [
      {
        internalType: "enum OptimalAutonomousOrganization.ACTION",
        name: "action",
        type: "uint8",
      },
      { internalType: "uint256", name: "ID", type: "uint256" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bool", name: "open", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "withdrawAVAX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
