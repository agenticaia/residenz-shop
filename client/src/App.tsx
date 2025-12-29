import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/Home";
import About from "@/pages/About";
import Plans from "@/pages/Plans";
import Contact from "@/pages/Contact";
import ServiceDetail from "@/pages/ServiceDetail";
import ServiceDetailImproved from "@/pages/ServiceDetailImproved";
import Checkout from "@/pages/Checkout";
import ServicesPage from "@/pages/Services";
import CategoryPage from "@/pages/Category";
import MyHome from "@/pages/MyHome";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/categoria" component={CategoryPage} />
      <Route path="/about" component={About} />
      <Route path="/plans" component={Plans} />
      <Route path="/contact" component={Contact} />
      <Route path="/service-detail" component={ServiceDetail} />
      <Route path="/detalle-servicio" component={ServiceDetailImproved} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/mi-casa" component={MyHome} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
