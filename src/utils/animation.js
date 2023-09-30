export const containerVariants=(delay=0)=>({
    // delay is acting like prop with default value 0 
  "offscreen":{
    opacity:0,
    y:30
    // it should have 30px dist from y axis
  },
  "onscreen":{
    opacity:1,
    y:0,
    // y 0 means ele should be on its original place
    transition:{
        type:"spring",
        duration:2,
        delay
    }
  }
});

export const tagVariants=(delay=0.1)=>({
  // delay is acting like prop with default value 0 
"offscreen":{
  opacity:0,
  y:10
  // it should have 30px dist from y axis
},
"onscreen":{
  opacity:1,
  y:0,
  // y 0 means ele should be on its original place
  transition:{
      type:"spring",
      duration:2,
  }
}
});

export const titleVariants=(delay=0)=>({
  // delay is acting like prop with default value 0 
"offscreen":{
  opacity:0,
  y:30
  // it should have 30px dist from y axis
},
"onscreen":{
  opacity:1,
  y:0,
  // y 0 means ele should be on its original place
  transition:{
      type:"spring",
      duration:2.2,
  }
}
});
export const desVariants=(delay=0)=>({
  // delay is acting like prop with default value 0 
"offscreen":{
  opacity:0,
  y:20
  // it should have 20px dist from y axis
},
"onscreen":{
  opacity:1,
  y:0,
  // y 0 means elem should be on its original place
  transition:{
      type:"spring",
      duration:2.6,
      delay:0.2
  }
}
});