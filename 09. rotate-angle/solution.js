function rotateAngleByDegrees(initialAngle, rotation) {
  // Calculate the new angle
  let newAngle = initialAngle + (rotation % 360);
  // let newAngle = initialAngle + rotation;
  if (newAngle === 360) {
    return 0;
  }
  else if(newAngle === 0) {
    return initialAngle;
  }
  else if (newAngle > 360) {
    return newAngle - 360;
  }
  else if (newAngle < 0) {
  return newAngle + 360;
  }
  else {
  return newAngle}
}

console.log(rotateAngleByDegrees(359,1));


module.exports = { rotateAngleByDegrees };
