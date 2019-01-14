var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({},object,{[key]:value})
}

function destuctivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]
  return object
}