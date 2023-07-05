import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import ErrorBoundry from "./modules/errorBoundry";
import { RouteList } from "./pages/routeList";
import { Spinner } from "./components/index";

const queryClient = new QueryClient();

const PageLoader = (
    <div className='flex h-screen w-screen items-center justify-center bg-stone-400'>
        <Spinner />
        Loading...
    </div>
);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundry>
                <BrowserRouter>
                    <Suspense fallback={PageLoader}>
                        <RouteList />
                    </Suspense>
                </BrowserRouter>
                {import.meta.env.VITE_ENV === "development" && <ReactQueryDevtools initialIsOpen={false} />}
            </ErrorBoundry>
        </QueryClientProvider>
    );
}

export default App;
