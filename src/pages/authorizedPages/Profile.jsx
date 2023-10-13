import React from "react";
import s from "../../styles/authorizedStyles/Profile.module.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

// 1. Get projectId
const projectId = "57bbcf734283acb2f444bf3f60ebe24f";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

const Profile = () => {
  return (
    <div className={s.profile}>
      <WagmiConfig config={wagmiConfig}>
        <w3m-button />
      </WagmiConfig>
    </div>
  );
};

export default Profile;
