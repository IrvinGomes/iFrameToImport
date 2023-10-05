import { useState } from "react"

export function Storefronts(){
    const [url, setUrl] =  useState('')


    const handleSubmit = (e:any)=>{
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        setUrl(formJson.url.toString());
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="url"/> <button>Load</button>
            </form>
            <br /><br />
            <iframe src={url} frameBorder="0" id="storefrontIframe" className="storefrontIframe"></iframe>
        </div>
    )
}

export default Storefronts;