 let w = window.innerWidth
 let h = window.innerHeight

const canvas = document.querySelector("canvas")
canvas.width = w
canvas.height = h

const ctx = canvas.getContext("2d")

 function clearCanvas() {
     ctx.clearRect(0,0,w,h)
 } 

 function fillBckg() {
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.fillRect(0,0,w,h) 
      
}

  let ponto1 = {
      x:0,
      y:0
  }

  let ponto2 = {
    x:0,
    y:0
}



  let drawLineTo = (start, end, w) => {
      ctx.beginPath()
      ctx.strokeStyle = "yellow"
      ctx.moveTo(start.x,start.y)
      ctx.lineTo(end.x,end.y)
      ctx.lineWidth = w
      ctx.stroke()
  }


  let currentTime = Date.now();
  let lastTime = currentTime;

  function getDeltaTime() {
      currentTime = Date.now();
      let dt = currentTime - lastTime;
      lastTime = currentTime;
      return dt;
  }

  let grau = 0
  let speed = 0.1

function animate() {
    
    
    clearCanvas()
    fillBckg()

    ponto1.x = w / 2
    ponto1.y = h / 2

    ponto2.x = w / 2 + Math.cos((grau * Math.PI) / 180) * 50
    ponto2.y = h / 2 - Math.sin((grau * Math.PI) /180)  * 50

    


    drawLineTo(ponto1,ponto2,4)

    grau = grau + getDeltaTime() * speed


    requestAnimationFrame(animate)
    
}


animate()
