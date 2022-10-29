import { ConnectWallet } from "@thirdweb-dev/react";
import { useContract, useNFT, ThirdwebNftMedia } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { contract } = useContract("0x6C13d42a2AEa14B86F5Ffc15FD398Ddfe362150C");
  const { data: nft, isLoading } = useNFT(contract, 0);
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div>
          {!isLoading && nft ? (
            <ThirdwebNftMedia metadata={nft.metadata} />
          ) : (
            <p>Loading...</p>
          )}
        </div>

      </main>
    </div>
  );
}
