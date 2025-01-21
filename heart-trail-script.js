const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.clientX; 
    const yPos = event.clientY; 

    const sampEl = document.createElement("samp");
    sampEl.style.left = xPos + "px";
    sampEl.style.top = yPos + "px";

    const size = Math.random() * 150 + 50; 
    sampEl.style.width = size + "px";
    sampEl.style.height = size + "px";

    bodyEl.appendChild(sampEl);

    setTimeout(() => {
        sampEl.remove();
    }, 3000);
});
