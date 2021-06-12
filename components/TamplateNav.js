import Navigation from "./Navigation";
import Head from 'next/head';
import "bootswatch/dist/cyborg/bootstrap.min.css"

const TemplateNav = (props)=> {

    return (
        <div>
            <Head>
                <title> Next js </title>
            </Head>
            <Navigation/>
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    )


}

export default TemplateNav;