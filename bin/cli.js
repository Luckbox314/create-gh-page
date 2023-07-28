#!/usr/bin/env/ node

const {execSync} = require('child_process');

const runCommand = command => {
    try {
        execSync(command, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to run command: ${command}`, e);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const githubCheckoutCommand = `git clone --depth 1 https://github.com/Luckbox314/create-gh-page ${repoName}`;
const installCommand = `cd ${repoName} && npm install`;

console.log(`Clonning repository ${repoName}...`);
const checkedOut = runCommand(githubCheckoutCommand);
if (!checkedOut) process.exit(-1);


console.log(`Installing dependencies...`);
const installed = runCommand(installCommand);
if (!installed) process.exit(-1);

console.log(`Done!`);

