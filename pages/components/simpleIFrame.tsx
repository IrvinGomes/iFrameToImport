import { useEffect } from "react";

export function SimpleIFrame(){
	
    useEffect(()=>{
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'resize') {
              const newHeight = event.data.payload.size;
              // Set the iframe's height to the received height
              const iframe = document.getElementById('myiframe');
              if (iframe) {
                iframe.style.height = newHeight + 'px';
              }
            }
            console.log(event.data.payload)
          });
    })

	return (
		<iframe src="https://iframetobeimported.netlify.app/iframe" id="myiframe" name="myiframe" className="myiframe" title="Embedded Page" frameBorder="0"></iframe>
	)
}

export default SimpleIFrame;
