document.addEventListener("touchstart", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
    dot.id = touch.identifier;
    document.body.append(dot);
  });
});

document.addEventListener("touchmove", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
  });
});

document.addEventListener("touchend", (e) => {
  [...e.changedTouches].forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove();
  });
});

// document.addEventListener("touchstart", touch_start, false);
// document.addEventListener("touchmove", touch_move, false);
// document.addEventListener("touchend", touch_end, false);

// function start(e) {
//   switch (e.touches.length) {
//     case 1:
//       handle_one_touch(e);
//       break;
//     case 2:
//       handle_two_touches(e);
//       break;
//     case 3:
//       handle_three_touches(e);
//       break;
//     case 4:
//       handle_four_touches(e);
//       break;
//     default:
//       gesture_not_supported;
//       break;
//   }
// }
