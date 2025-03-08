require('colors');
const figlet = require('figlet');
const fs = require('fs');
const readlineSync = require('readline-sync');

function loadNetworkConfig(networkType) {
  const filePath = `./chains/${networkType}.json`;
  try {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error loading network configuration: ${error.message}`.red);
    process.exit(1);
  }
}

function getUserInput() {
  const name = readlineSync.question('Enter token name: '.cyan);
  const symbol = readlineSync.question('Enter token symbol: '.cyan);
  const supply = readlineSync.question('Enter token supply: '.cyan);
  return { name, symbol, supply };
}

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('================================================================================'.rainbow);
  console.log('=                      🚀🎮 EVM Auto Deploy 🎮🚀                                ='.cyan.bold);
  console.log('=                        Created by GIBAH AIRDROP                              ='.magenta);
  console.log('=                       https://t.me/+_gmZecae2tAyMzN1                         ='.blue);
  console.log('================================================================================'.rainbow);
  console.log();
  console.log('        ____ ___ ____    _    _   _      _    ___ ____  ____  ____   ___  ____        ');
  console.log('       / ___|_ _| __ )  / \  | | | |    / \  |_ _|  _ \|  _ \|  _ \ / _ \|  _ \       ');
  console.log('      | |  _ | ||  _ \ / _ \ | |_| |   / _ \  | || |_) | | | | |_) | | | | |_) |      ');
  console.log('      | |_| || || |_) / ___ \|  _  |  / ___ \ | ||  _ <| |_| |  _ <| |_| |  __/       ');
  console.log('       \____|___|____/_/   \_\_| |_| /_/   \_\___|_| \_\____/|_| \_\\___/|_|         ');
  console.log('                                                                                     ');
  console.log('================================================================================'.rainbow);
  console.log();
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = { loadNetworkConfig, getUserInput, displayHeader, delay };
