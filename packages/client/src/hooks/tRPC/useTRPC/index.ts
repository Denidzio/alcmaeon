import { useState } from "react";
import { httpBatchLink } from "@trpc/client";
import { QueryClient } from "@tanstack/react-query";
import { tRPC } from "../../../services";
import { ENV } from "../../../enums";

const useTRPC = () => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    tRPC.createClient({
      links: [
        httpBatchLink({
          url: ENV.API_URL,
        }),
      ],
    })
  );

  return { queryClient, trpcClient };
};

export default useTRPC;
