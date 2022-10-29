import styles from "../../styles/Home.module.css";
import {
    Web3Button
  } from "@thirdweb-dev/react";

function MintButton({ Component, pageProps, contractAddress, quantity }) {
    return(
        <div className={styles.mintContainer}>
                    <Web3Button
                      contractAddress={contractAddress}
                      action={async (contract) =>
                        await contract.erc721.claim(quantity)
                      }
                      // If the function is successful, we can do something here.
                      onSuccess={(result) =>
                        alert(
                          `Successfully minted!`
                        )
                      }
                      // If the function fails, we can do something here.
                      onError={(error) => alert(error?.message)}
                      accentColor="#f213a4"
                      colorMode="dark"
                    >
                      {`Mint`}
                    </Web3Button>
                  </div>
 )
}

export default MintButton
