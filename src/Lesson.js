import React from 'react';

class Lesson extends React.Component{

render(){
    return (
<div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <h1>Real-time e-Learning Platform - Admin</h1>
          <button class="btn btn-success" autocomplete="off" id="start">Start Streaming</button>
        </div>
        <div class="container" id="room">
          <h3>Preview</h3>
          <div class="row">
            <div class="panel-content">
              <div class="panel-body col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6" id="screencapture">
                <div class="player" id="screenvideoplayer">
                  <video class="rounded centered" id="screenvideo" width="100%" height="100%" autoplay="" playsinline="" muted="muted"></video>
                </div>
              </div>
              <div class="panel-body col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6" id="cameracapture">
                <div class="player" id="cameravideoplayer">
                  <video class="rounded centered" id="cameravideo" width="100%" height="100%" autoplay="" playsinline="" muted="muted"></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    )

}
}

export default Lesson;