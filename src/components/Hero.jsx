import OrderStatusCards from "./orderstatuscards";
import TotalSaleGraph from "./TotalSaleGraph";

export default function Hero() {
    return(
        <>
            <div className="bg-[#F5F7FA] pt-10 px-5 lg:ml-60 max-sm:w-100" >
                <div className="text p-4"> 
                    <h1 className="text-lg font-bold">Ecomerce Dashboard</h1>
                    <p className="text-md w-80">Here what going on at your business right now</p>
                </div>
                <OrderStatusCards />
                <TotalSaleGraph/>
              
            </div>
        </>
    )
}