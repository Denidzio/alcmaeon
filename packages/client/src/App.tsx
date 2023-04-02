import { QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./components";
import { tRPC } from "./services";
import { useTRPC } from "./hooks";

const TRPCProvider = tRPC.Provider;

const App = () => {
  const { trpcClient, queryClient } = useTRPC();

  return (
    <TRPCProvider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </TRPCProvider>
  );
};

export default App;
