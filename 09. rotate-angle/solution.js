function rotateAngleByDegrees(initialAngle, rotation) {
  let newAngle = initialAngle + (rotation % 360);

  if (newAngle === 360) {
    return 0;
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
