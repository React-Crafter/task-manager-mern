import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Outlet} from 'react-router'
import Navbar from './components/Navbar';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Navbar/>
                <Outlet></Outlet>
            </div>
        </QueryClientProvider>
    )
}

export default App