import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Storefronts(){
    const [url, setUrl] =  useState('')

    useEffect(()=>{
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'resize') {
              const newHeight = event.data.payload.size;
              // Set the iframe's height to the received height
              const iframe = document.getElementById('myiframe');
              if (iframe) {
                if(newHeight !== iframe.style.height){
                    iframe.style.height = 'none';
                    iframe.style.height = newHeight + 'px';
                }
              }
            }
          });
    })


    const handleSubmit = (e:any)=>{
        document.getElementById('myiframe')!.style.minHeight = '300px'
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
        <div className="toStorefrontWrapper">
            <form onSubmit={handleSubmit} className="form">
                <TextField fullWidth label="Sandbox + MV Url" id="Sandbox + MV Url" name='url' style={{background:'white', borderRadius: '5px'}}/>
                <Button variant="contained" style={{marginLeft: '5px'}}>Load</Button>
            </form>
            <br /><br />
            <iframe src={url} frameBorder="0" id="myiframe" className="storefrontIframe"></iframe>
        </div>
    )
}

export default Storefronts;