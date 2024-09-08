let lastCircle = null;
let box = null;
function createCircle(event) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.left = `${event.clientX - 25}px`;
  circle.style.top = `${event.clientY - 25}px`;
  document.body.appendChild(circle);
  lastCircle = circle;
}
function moveCircle(event) {
  if (!lastCircle) return;
  const circleRadius = 25;
  const x = event.clientX - circleRadius;
  const y = event.clientY - circleRadius;
  // Get the bounding rectangles
  const boxRect = box.getBoundingClientRect();
  const circleRect = lastCircle.getBoundingClientRect();
  // Check if the circle is already inside the box
  const alreadyInsideX =
    circleRect.left >= boxRect.left && circleRect.right <= boxRect.right;
  const alreadyInsideY =
    circleRect.top >= boxRect.top && circleRect.bottom <= boxRect.bottom;
  if (alreadyInsideX && alreadyInsideY) {
    // Prevent the circle from moving out of the box
    lastCircle.style.left = `${Math.min(
      Math.max(x, boxRect.left),
      boxRect.right - 2 * circleRadius
    )}px`;
    lastCircle.style.top = `${Math.min(
      Math.max(y, boxRect.top),
      boxRect.bottom - 2 * circleRadius
    )}px`;
    lastCircle.style.background = "var(--purple)";
  } else {
    // Allow free movement if the circle is outside the box
    lastCircle.style.left = `${x}px`;
    lastCircle.style.top = `${y}px`;
    lastCircle.style.background = "white";
  }
}
function setBox() {
  if (!box) {
    box = document.createElement("div");
    box.className = "box";
    const boxSize = 200;
    const left = (window.innerWidth - boxSize) / 2;
    const top = (window.innerHeight - boxSize) / 2;
    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    document.body.appendChild(box);
  }
}
// Attach event listeners
document.addEventListener("click", createCircle);
document.addEventListener("mousemove", moveCircle);
// Call setBox to create the box on the page
setBox();
export { createCircle, moveCircle, setBox };