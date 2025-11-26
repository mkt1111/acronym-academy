import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DRY from "./pages/lessons/DRY";
import SOLID from "./pages/lessons/SOLID";
import KISS from "./pages/lessons/KISS";
import YAGNI from "./pages/lessons/YAGNI";
import CRUD from "./pages/lessons/CRUD";
import REST from "./pages/lessons/REST";
import API from "./pages/lessons/API";
import MVC from "./pages/lessons/MVC";
import TDD from "./pages/lessons/TDD";
import CICD from "./pages/lessons/CICD";
import Quiz from "./pages/Quiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lesson/dry" element={<DRY />} />
          <Route path="/lesson/solid" element={<SOLID />} />
          <Route path="/lesson/kiss" element={<KISS />} />
          <Route path="/lesson/yagni" element={<YAGNI />} />
          <Route path="/lesson/crud" element={<CRUD />} />
          <Route path="/lesson/rest" element={<REST />} />
          <Route path="/lesson/api" element={<API />} />
          <Route path="/lesson/mvc" element={<MVC />} />
          <Route path="/lesson/tdd" element={<TDD />} />
          <Route path="/lesson/cicd" element={<CICD />} />
          <Route path="/quiz" element={<Quiz />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
