"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagminaProvider } from "wagmina";
import { AccountProvider } from "./account";
import { VaultProvider } from "./vault";

import { wagminaAdapter } from "@lib/config";
import { ClientProvider } from "./client";
import { PriceProvider } from "./price";
import { TransactionStatusProvider } from "./transaction-status";
import { VaultManagerProvider } from "./vault-manager";

interface ProviderProps {
  children: React.ReactNode;
  initialState?: any;
}

const queryClient = new QueryClient();

export function Providers({ children, initialState }: ProviderProps) {
  return (
    <WagminaProvider config={wagminaAdapter.wagminaConfig}>
      <QueryClientProvider client={queryClient}>
        <ClientProvider>
          <AccountProvider>
            <TransactionStatusProvider>
              <PriceProvider>
                <VaultManagerProvider>
                  <VaultProvider>{children}</VaultProvider>
                </VaultManagerProvider>
              </PriceProvider>
            </TransactionStatusProvider>
          </AccountProvider>
        </ClientProvider>
      </QueryClientProvider>
    </WagminaProvider>
  );
}
