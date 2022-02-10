import React, {useRef} from 'react'

function Video() {
    const webcamVid = useRef()
    const remoteVid = useRef()
    const servers = {
        iceServers:[
        {
          "urls": ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
        },
      ],
      iceCandidatePoolSize: 10,
      }
      
      
      
      let pc = new RTCPeerConnection(servers)
      let localStream = null
      let remoteStream = null
    const startWebcam = async() =>{
        localStream = await navigator.mediaDevices.getUserMedia({video: true, audio:true})
        remoteStream = new MediaStream()

        localStream.getTracks().forEach((track) => {
            pc.addTrack(track, localStream)
        })

        pc.ontrack = event =>{
            event.streams[0].getTracks().forEach(track =>{
                remoteStream.addTrack(track)
            })
        }


    }

  return (
    <div>
         <h2>1. Start your Webcam</h2>
    <div className="videos">
      <span>
        <h3>Local Stream</h3>
        <video id="webcamVideo" ref={webcamVid}  autoPlay playsInline></video>
      </span>
      <span>
        <h3>Remote Stream</h3>
        <video id="remoteVideo" ref={remoteVid} autoPlay playsInline></video>
      </span>


    </div>

    <button id="webcamButton" onClick={()=>startWebcam()}>Start webcam</button>
    <h2>2. Create a new Call</h2>
    <button id="callButton" disabled>Create Call (offer)</button>

    <h2>3. Join a Call</h2>
    <p>Answer the call from a different browser window or device</p>
    
    <input id="callInput" />
    <button id="answerButton" disabled>Answer</button>

    <h2>4. Hangup</h2>

    <button id="hangupButton" disabled>Hangup</button>
    </div>
  )
}

export default Video