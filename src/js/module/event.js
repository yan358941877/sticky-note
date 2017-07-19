var EventCenter = (function(){
  var events = {}

  function on(type, handler){
    events[type] = events[type] || []
    events[type].push(handler);
  }

  function fire(type, args){
    if (!events[type]){
      return 
    }
    events[type].forEach((handler)=>{
      handler(args)
    })
  }

  return {
    on,
    fire
  }
})()

module.exports = EventCenter