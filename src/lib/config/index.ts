import type { AppKitNetwork } from "@reown/appkit/networks";
import { WagminaAdapter } from "@wagmina/appkit";
import { minaDevnet } from "@wagmina/appkit/networks";
import { http } from "vimina";

// Get projectId from https://cloud.reown.com
if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error("NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is not defined");
}

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const metadata = {
  name: "Fizk - zkUSD Protocol",
  description: "Stablecoin on Mina",
  url: "https://fizk.xyz/",
  icons: [],
};

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [minaDevnet] as [AppKitNetwork, ...AppKitNetwork[]];

//Set up the Wagmina Adapter (Config)
export const wagminaAdapter = new WagminaAdapter({
  projectId,
  networks,
  connectors: [],
  storage: null,
  pollingInterval: 10_000,
  transports: {
    [minaDevnet.id]: http(),
  },
});

export const config = wagminaAdapter.wagminaConfig;
