<template>
  <div id="audio-visualizer">
    <svg preserveAspectRatio="none" id="visualizer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>

            <mask id="mask">
                <g id="maskGroup">
                </g>
            </mask>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#ff0a0a;stop-opacity:1" />
                <stop offset="20%" style="stop-color:#f1ff0a;stop-opacity:1" />
                <stop offset="90%" style="stop-color:#d923b9;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#050d61;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" mask="url(#mask)"></rect>
    </svg>

   <!-- <img src="static/images/audio vis manual.svg"> -->

    <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="visualizercircle2" version="1.1" viewBox="0 0 25 25"
        height="25" width="25">
        <g transform="" id="layer1">
            <path id="circle" d="M 12.5,12.5 v 0" style="fill:none;stroke:#000000;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        </g>
    </svg>

    <h1>In <a href="https://codepen.io/zapplebee/full/gbNbZE/">Full Page view</a>, please allow the use of your microphone</h1>
  </div>
</template>

<script>
export default {
  name: 'ParticlesJS',

  mounted () {
    window.onload = function () {
      var visualizer = document.getElementById('visualizer')
      var visualizer2 = document.getElementById('visualizercircle2')
      // var low = visualizer2.getElementById('low')
      var circle = visualizer2.getElementById('circle')
      // var high = visualizer2.getElementById('high')
      var h = document.getElementsByTagName('h1')[0]

      var soundAllowed = function (stream) {
        // Audio stops listening in FF without // window.persistAudioStream = stream;
        // https://bugzilla.mozilla.org/show_bug.cgi?id=965483
        // https://support.mozilla.org/en-US/questions/984179
        window.persistAudioStream = stream
        h.innerHTML = 'Thanks'
        h.setAttribute('style', 'opacity: 0;')
        var audioContent = new AudioContext()
        var audioStream = audioContent.createMediaStreamSource(stream)
        var analyser = audioContent.createAnalyser()
        audioStream.connect(analyser)
        analyser.fftSize = 1024

        var frequencyArray = new Uint8Array(analyser.frequencyBinCount)
        visualizer.setAttribute('viewBox', '0 0 255 255')

        // set stroke color
        // low.style.stroke = window.location.hash || '#000'
        circle.style.stroke = window.location.hash || '#000'
        // high.style.stroke = window.location.hash || '#000'

        // Through the frequencyArray has a length longer than 255, there seems to be no
        // significant data after this point. Not worth visualizing.
        var doDraw = function () {
          requestAnimationFrame(doDraw)
          analyser.getByteFrequencyData(frequencyArray)

          var chunks = chunkify(frequencyArray.slice(0, 255), 1, true)
          var averages = chunks.map(function (v, i) {
            return v.reduce((a, b) => a + b, 0) / v.length
          })

          // var lowLength = scale(averages[0], 255, 20)
          // var lowV = lowLength
          // var lowY = 10 - (lowLength / 2) + 2.5
          // low.setAttribute('d', 'M 2.5,' + lowY + ' v ' + lowV)
          // low.style.strokeWidth = 5 - scale(lowLength, 20, 2)

          var midLength = scale(averages[0], 255, 20)
          // circle.setAttribute('d', 'M 12.5,' + midY + ' v ' + midV)
          circle.style.strokeWidth = 5 + scale(midLength, 20, 10)

          // var highLength = scale(averages[2], 255, 20)
          // var highV = highLength
          // var highY = 10 - (highLength / 2) + 2.5
          // high.setAttribute('d', 'M 22.5,' + highY + ' v ' + highV)
          // high.style.strokeWidth = 5 - scale(highLength, 20, 2)
        }

        doDraw()
      }

      var soundNotAllowed = function (error) {
        h.innerHTML = 'You must allow your microphone.'
        console.log(error)
      }

      var scale = function (source, sourceMax, targetMax) {
        var sourcePercent = source / sourceMax

        return targetMax * sourcePercent
      }

      // see https://stackoverflow.com/a/8189268/3402854
      function chunkify (a, n, balanced) {
        if (n < 2) {
          return [a]
        }

        var len = a.length
        var out = []
        var i = 0
        var size

        if (len % n === 0) {
          size = Math.floor(len / n)
          while (i < len) {
            out.push(a.slice(i, i += size))
          }
        } else if (balanced) {
          while (i < len) {
            size = Math.ceil((len - i) / n--)
            out.push(a.slice(i, i += size))
          }
        } else {
          n--
          size = Math.floor(len / n)
          if (len % size === 0) {
            size--
          }
          while (i < size * n) {
            out.push(a.slice(i, i += size))
          }
          out.push(a.slice(size * n))
        }

        return out
      }

      /* window.navigator = window.navigator || {};
      /* navigator.getUserMedia =  navigator.getUserMedia       ||
                                  navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia    ||
                                  null; */
      navigator.getUserMedia({ audio: true }, soundAllowed, soundNotAllowed)
    }
  },

  methods: {
  }
}
</script>

<style lang="scss">
  html,
  body {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      background-color: #222;
      font-size: 0;
  }

  svg {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      position: absolute;

  }

  h1 {
      width: 100%;
      font-family: sans-serif;
      position: absolute;
      text-align: center;
      color: white;
      font-size: 18px;
      top: 40%;
      opacity: 1;
      transition: opacity 1s ease-in-out;
      -moz-transition: opacity 1s ease-in-out;
      -webkit-transition: opacity 1s ease-in-out;
  }

  h1 a {
      color: #48b1f4;
      text-decoration: none;
  }

  path {
      stroke-linecap: square;
      stroke: white;
      stroke-width: 0.5px;
  }
</style>
