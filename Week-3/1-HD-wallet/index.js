import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

//* Example Code for Deriving Paths and Generating Keys:

const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);
console.log("\n");
const seed = mnemonicToSeedSync(mnemonic);
console.log("seed: ", seed.toString("hex"));
console.log("\n");

for (let i = 0; i < 5; i++) {
  const path = `m/44'/501'/${i}'/0'`; // Derivation path for Solana
  console.log("path", path);
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  console.log("derived seed: ", derivedSeed);
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log("secret: ", secret);

  console.log(
    `Key pair ${i}: `,
    Keypair.fromSecretKey(secret).publicKey.toBase58(),);
  console.log("\n");
}
