const Storage = {

  save(key,value){
    //localStorage[key] = JSON.stringify(value);
    localStorage.setItem(key,JSON.stringify(value))
  },

  get(key){
    let jsonStr = localStorage.getItem(key)
    if(jsonStr != null){
      return JSON.parse(jsonStr)
    }
  },
  clear(){
    localStorage.clear();
  }
}

export default Storage;
