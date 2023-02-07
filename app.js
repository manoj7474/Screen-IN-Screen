const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
          videoElement.play();
        };
        
    } catch (error) {
        console.log("something is wrong here",error);
    }

    button.addEventListener('click', async () =>{
        // disable button
        button.disabled = true;
        // start picture in picture
        await videoElement.requestPictureInPicture();
        // reset buttn
        button.disabled = false;


    })

}

selectMediaStream();