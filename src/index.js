import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LobbyDraft from "./LobbyDraft";

const queryClient = new QueryClient();

createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <LobbyDraft />
    </QueryClientProvider>
  </BrowserRouter>,
);
