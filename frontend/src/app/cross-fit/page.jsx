import "bootstrap/dist/css/bootstrap.min.css";
import Aside from "@/components/aside/index";
import "./home.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) 

export default async function  Home() {
    
    await sleep(3500)

    return (
        <>
        
        <main>
        
        </main>
        </>
    )

}