const Bosque =  document.getElementById("Bosque")
const Bosque2A = document.getElementById("Bosque2A")
const Bosque2B = document.getElementById("Bosque2B")
const Bosque3A = document.getElementById("Bosque3A")
const Bosque3AB = document.getElementById("Bosque3AB")
const Bosque3B = document.getElementById("Bosque3B")
const bosqueArr = [Bosque, Bosque2A, Bosque2B, Bosque3A, Bosque3AB, Bosque3B]

const BosqueShadow = document.getElementById("BosqueShadow")
const BosqueShadow2A = document.getElementById("BosqueShadow2A")
const BosqueShadow2B = document.getElementById("BosqueShadow2B")
const BosqueShadow3A = document.getElementById("BosqueShadow3A")
const BosqueShadow3AB = document.getElementById("BosqueShadow3AB")
const BosqueShadow3B = document.getElementById("BosqueShadow3B")
const bosqueShadowArr = [BosqueShadow, BosqueShadow2A, BosqueShadow2B, BosqueShadow3A, BosqueShadow3AB, BosqueShadow3B]

const primer = document.getElementById("primer")

// const leidoBosqueShadowArr= [BosqueShadow, BosqueShadow2B, BosqueShadow3B]
const leidoBosqueArr = [ ]

    for (let i = 0; i < bosqueArr.length; i++) {

        if(leidoBosqueArr.includes(bosqueArr[i])){

            bosqueArr[i].style.color = "blue";
            bosqueArr[i].style.filter = "blur(0px)";
            bosqueShadowArr[i].style.filter = "drop-shadow(-0.8vw 0.4vw 0.3vw rgba(50, 50, 0, 0.815))";  


            
        }
    }


    function zIndex(){
        primer.classList.toggle ("zIndex")
    }
    primer.addEventListener("mouseout", zIndex);


    function shineBosque() {
        for (let i = 0; i < bosqueShadowArr.length; i++) {
            bosqueShadowArr[i].classList.add("shadow")
        }

        for (let i = 0; i < bosqueArr.length; i++) {
            bosqueArr[i].classList.add("scale")
        }   
    }

    for (let i = 0; i < bosqueArr.length; i++) {
        bosqueArr[i].addEventListener("mouseover", shineBosque);
    }
    Bosque.addEventListener("mouseover", shineBosque);

    function darkBosque(){
        for (let i = 0; i < bosqueShadowArr.length; i++) {
            bosqueShadowArr[i].classList.remove("shadow")
        }

        for (let i = 0; i < bosqueArr.length; i++) {
            bosqueArr[i].classList.remove("scale")
        }
    }

    for (let i = 0; i < bosqueArr.length; i++) {
        bosqueArr[i].addEventListener("mouseout", darkBosque);
    }
    Bosque.addEventListener("mouseout", darkBosque);


   let angle = 0;
    setInterval(function(){
        angle += .1;
        document.getElementById("mainGrid").style.transform = "rotate("+angle+"deg)";
    }, 100);

     let angle2 = 0;
    setInterval(function(){
        angle2 += -.1;
        document.getElementById("primer").style.transform = "rotate("+angle2+"deg)";
    }, 100);