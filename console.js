keysPressed = (e) => {
  keys[e.keyCode] = true;
  if (keys[67]) {
    console.log('this works')
  }
}