// Code your solution in this file!

//HQ on 42nd

function distanceFromHqInBlocks(destination) {
    let hq = 42;
    return Math.abs(destination - hq)
}


function distanceFromHqInFeet(destination) {
  return (distanceFromHqInBlocks(destination)* 264)
}