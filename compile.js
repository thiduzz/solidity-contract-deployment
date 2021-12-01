const path = require('path')
const fs = require('fs')
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const src = fs.readFileSync(inboxPath, 'utf-8')

// The last line of codes need to be changed like below.
const input = {
    language: "Solidity",
    sources: {
        "Inbox.sol": {
            content: src,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};
const output = JSON.parse(solc.compile(JSON.stringify(input)));

module.exports = output.contracts["Inbox.sol"].Inbox;