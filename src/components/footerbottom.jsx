import RevenueBarGradientChart from "./footerchart";

export default function Bottom(){
    return(
        <>
        <div className=" flex gap-2  w-full lg:pl-60 lg:pt-16">
            <RevenueBarGradientChart/>
            <RevenueBarGradientChart/>
        
        </div>
        
        </>

    )
}