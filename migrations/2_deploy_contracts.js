const colors = require('colors');

const ETH = 1000000000000000000;
const ABL = artifacts.require('ABL');
const ABLG = artifacts.require('ABLG');


const PresaleFirst = artifacts.require('PresaleFirst');

const { duration } = require('../test/helpers/increaseTime');

function printToken() {
    console.log(colors.green("========================================================================"));
    console.log(colors.green("                              ┌┬┐┌─┐┬┌─┌─┐┌┐┌                           "));
    console.log(colors.green("                               │ │ │├┴┐├┤ │││                           "));
    console.log(colors.green("                               ┴ └─┘┴ ┴└─┘┘└┘                           "));
    console.log(colors.green("========================================================================"));
}

function printCrowdsale() {
    console.log(colors.green("========================================================================"));
    console.log(colors.green("                      ┌─┐┬─┐┌─┐┬ ┬┌┬┐┌─┐┌─┐┬  ┌─┐                       "));
    console.log(colors.green("                      │  ├┬┘│ ││││ ││└─┐├─┤│  ├┤                        "));
    console.log(colors.green("                      └─┘┴└─└─┘└┴┘─┴┘└─┘┴ ┴┴─┘└─┘                       "));
    console.log(colors.green("========================================================================"));
}

function printBorder() {
    console.log(colors.grey("////////////////////////////////////////////////////////////////////////"));
    console.log(colors.grey("////////////////////////////////////////////////////////////////////////"));
}

module.exports = async (deployer, network, accounts) => {
    const owner = accounts[0];

    if(network == "ropsten" || network == "rinkeby") {
        const startNumber = 3079575;
        const endNumber = startNumber + 1000;

        printToken();

        // deploy ABL token
        await deployer.deploy(ABL,
            '0x032d08350f4f44ec654a1cd857bcbd359daf1fa9', // Distribute
            '0xdcfabaf14442ee98c9cca6f5e40bb97e05e77319', // Developer
        )

        printBorder();

        printCrowdsale();

        await deployer.deploy(PresaleFirst,
            startTime,
            endTime, // Time limit
            owner, // Fund wallet
            ABL.address, // Token address
        )

        console.log(colors.red("============================ !!Check List!! ============================"));
        console.log(colors.yellow("=> Contract owner           ") + ": " + colors.cyan(owner.toString()));
        console.log(colors.yellow("=> Address of ABL           ") + ": " + colors.cyan(ABL.address.toString()));
        console.log(colors.yellow("=> Address of PresaleFirst  ") + ": " + colors.cyan(PresaleFirst.address.toString()));
        console.log(colors.red("========================================================================"));

        printBorder();
    }
}
