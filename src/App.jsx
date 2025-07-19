import React from 'react';
import Nav from './components/nav';
import Hero from './components/Hero';
import Reviews from './components/reviews';
import RevenueTable from './components/Revenew';
import Footer from './components/footerchart';
import Sidebar from './components/Sidebar';
import Bottom from './components/footerbottom';

function App() {
  return (
    <>
       <Nav />
       <Sidebar />
     <Hero/>
     <Reviews />
     <RevenueTable />
    </>
  );
}

//  {/* Top Navbar */}
//      

//       {/* Page Layout: Sidebar + Main */}
//       <div className="flex min-h-screen bg-gray-50">
//         {/* Sidebar: visible on sm and up */}
//         <div className="hidden sm:block w-60">
//          
//         </div>

//         {/* Main Content Area */}
//         <main className="flex-1 max-sm:w-56 md:pl-62 space-y-6">
//           <Hero />
//           <Reviews />
//           <RevenueTable />
        
//         </main>
//       </div>

export default App;
