import RevenueBarGradientChart from "./footerchart";

export default function Bottom(){
    return(
        <>
        <div className=" flex flex-col mt-4 gap-4 w-100">
            <RevenueBarGradientChart/>
            <RevenueBarGradientChart/>
        
        </div>
        
        </>

    )
}