// ==========================================================
// ELEMENTS
// ==========================================================

const glass = document.querySelector(".glass");

const intro = document.querySelector(".intro");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

// ==========================================================
// PARALLAX
// ==========================================================

window.addEventListener("mousemove", (e)=>{

    mouseX = (e.clientX / window.innerWidth - .5) * 18;

    mouseY = (e.clientY / window.innerHeight - .5) * 18;

});

// ==========================================================
// ANIMATION LOOP
// ==========================================================

function animate(){

    currentX += (mouseX - currentX) * .08;

    currentY += (mouseY - currentY) * .08;

    glass.style.transform = `

        perspective(1400px)

        rotateY(${currentX}deg)

        rotateX(${-currentY}deg)

        translateY(-8px)

    `;

    requestAnimationFrame(animate);

}

animate();

// ==========================================================
// CLICK TRANSITION
// ==========================================================

document.body.addEventListener("click",()=>{

    document.body.classList.add("exit");

    setTimeout(()=>{

        document.getElementById("intro").remove();

    },1200);

});