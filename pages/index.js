// require('dotenv').config();
import { ConnectWallet, useContract, useNFT, ThirdwebNftMedia, useNFTs} from "@thirdweb-dev/react";
import { useMintNFT } from "@thirdweb-dev/react";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import { ThirdwebSDK, TransactionResult } from "@thirdweb-dev/sdk";


import styles from "../styles/Home.module.css";

export default function Home() {
  const { contract } = useContract("0x7FA0d528CDF36b5cfE753Fae7788d8C2c4EC830a");
  const { data: nft, isLoadingNFT } = useNFT(contract, 0);
  const { mutate: mintNft, isLoadingMint, error } = useMintNFT(contract);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const privateKey = "c5a40461227ed79b0658bc3cc6e4a66fb8cc6fb28ad00cda69ad72e2160aae84";
  const sdk = new ThirdwebSDK(
      new ethers.Wallet(   
      privateKey,
      ethers.getDefaultProvider("http://0.0.0.0:3000/")
      )
  );

let collectionAddress;
let mintTxnHash;
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      <div className={styles.connect}>
          <ConnectWallet />
      </div>

      <div>
        {!isLoadingNFT && nft !== undefined ? (
          <div> 
            {console.log(nft)}
              <div key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia metadata={nft.metadata} />
                <h3>{nft.metadata.name}</h3>
              </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div>
        {
        address ? (
          <button
            onClick={() =>
              mintNft({
                metadata: {
                  name: "My awesome NFT",
                },
                to: address,
              })
            }
          >
            Mint!
          </button>
        ) : (
          <button onClick={() => connectWithMetamask()}>Connect Wallet</button>
        )}
      </div>

      </main>
    </div>
  );
}

async function createCollection() {

  collectionAddress = await sdk.deployer.deployNFTCollection({
      name: "Fruit Basket",
      symbol: "FRUIT",
      primary_sale_recipient: "0x2ED0fE9a8FbB3b7f0ffC45a18eff8f0c3A0ABE2C",
      image: "https://bafkreie4zdcentifeqoukitd32lvd3k3kr3y5va7kqfdewd7budjkoanui.ipfs.nftstorage.link/",
      description: "A fruit basket that lives on the Rinkeby blockchain! 🍎🧺",
      /* Optional fields below */
      //platform_fee_recipient: "0x00000",
      //platform_fee_basis_points: "5",
      //fee_recipient: "0x00000",
      //seller_fee_basis_points: "10",
      //external_link: "YOUR_HTTP_URL",
      //Descriptions for the fields above can be found here: https://portal.thirdweb.com/typescript/sdk.nftcontractdeploymetadata
  })
  console.log("NFT Collection Address: ", collectionAddress)
}

async function mint() {
  const nftCollection = sdk.getNFTCollection(collectionAddress)
  mintTxnHash = await nftCollection.mintToSelf?.(
  {
      name: "Orange",
      description: "An orange living on the Rinkeby blockchain",
      image: "https://bafkreidxzweunukaruhyfvepkjrep76vi75y6yl5fq3pqedallz6nwoori.ipfs.nftstorage.link/", 
      properties: {
          "Orange Type": "Navel", // Optional field to set attributes
      }
  })
  console.log("Minted NFT Transaction Hash: ", mintTxnHash.receipt.transactionHash)
}

async function main() {
  createCollection().then(
  () => mint())
}

main()