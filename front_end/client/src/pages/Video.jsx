import React from 'react'
import Nav from '../components/Nav'

function Video() {
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
      <div className='video-body'>
        <Nav title={"Video Chat"}  />
    <div className="videos">
      <span>
        <h3>Local Stream</h3>
        <video id="webcamVideo"  autoPlay playsInline></video>
      </span>
      <span>
        <h3>Remote Stream</h3>
        <video id="remoteVideo" autoPlay playsInline></video>
      </span>


    </div>

    <button id="webcamButton" className='r-btn v-btn1' onClick={()=>startWebcam()}>Start webcam</button>
    <button id="callButton" className='r-btn v-btn2' disabled>Create Call (offer)</button>

    
    <input id="callInput" placeholder='Chat Key Generator...'/>
    <button id="answerButton" className='r-btn v-btn1' disabled>Answer</button>


    <button id="hangupButton" className='r-btn v-btn2' disabled>Hangup</button>
    </div>
  )
}

export default Video