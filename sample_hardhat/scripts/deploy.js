async function main() {
  // deploy the contract
  const Voting = await ethers.getContractFactory("Voting");

  // start deployment, returning a promise that resolves to a contract object
  const voting = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 900);
  console.log("Contract address: " + voting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
