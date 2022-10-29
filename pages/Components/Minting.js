import {
    useClaimedNFTSupply,
    useContractMetadata,
    useUnclaimedNFTSupply,
    useActiveClaimCondition,
    useContract,
    useAddress
  } from "@thirdweb-dev/react";
  import { parseUnits } from "ethers/lib/utils";
  import { useState } from "react";
  import styles from "../../styles/Home.module.css";
  import MintButton from "./MintButton";
  
  const contractAddress = "0x7FA0d528CDF36b5cfE753Fae7788d8C2c4EC830a";
  
function Minting({ Component, pageProps, hasImpactMarket }) {
    const address = useAddress();
    const { contract: contract } = useContract(contractAddress);
    
    // The amount the user claims
    const [quantity, setQuantity] = useState(1); // default to 1
  
    // Load contract metadata
    const { data: contractMetadata } = useContractMetadata(contract);
  
    // Load claimed supply and unclaimed supply
    const { data: unclaimedSupply } = useUnclaimedNFTSupply(contract);
    const { data: claimedSupply } = useClaimedNFTSupply(contract);
  
    // Load the active claim condition
    const { data: activeClaimCondition } = useActiveClaimCondition(contract);
  
    // Check if there's NFTs left on the active claim phase
    const isNotReady =
      activeClaimCondition &&
      parseInt(activeClaimCondition?.availableSupply) === 0;
  
    // RACHEL ADD STATUS CHECK HERE
    const isChecked = hasImpactMarket;
  
    // Check price
    const price = parseUnits(
      activeClaimCondition?.currencyMetadata.displayValue || "0",
      activeClaimCondition?.currencyMetadata.decimals
    );
  
    // Multiply depending on quantity
    const priceToMint = price.mul(quantity);
  
    // Loading state while we fetch the metadata
    if (!contract || !contractMetadata) {
      return <div className={styles.container}>Loading...</div>;
    }

    return (
      <div className={styles.container}>
          <div className={styles.mintInfoContainer}>
          <div className={styles.imageSide}>
            {/* Show claim button or connect wallet button */}
            {
              isChecked ? (
                <div>
                    <img
                    className={styles.image}
                    src={contractMetadata?.image}
                    alt={`${contractMetadata?.name} preview image`}
                    />
                    <MintButton contractAddress={contractAddress} quantity={quantity} />
                </div>
              ) : isNotReady ? (
                <div>
                  <h2>Not ready to be minted yet</h2>
                </div>
              ) : (
                <></>
              )
            }
          </div>
        </div>
      </div>
    );
  }
  

export default Minting
