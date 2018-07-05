      deleteObjByValue(item){
        if(this.errors.has(item)){
          let arr = this.errors.items; // arrey with objects
          let obj = arr.find(i=> i.field === item); // item = value
          arr.splice(arr.indexOf(obj), 1);
        }
      }

const filterValue = (obj, key, value)=> obj.filter(v => v[key] === value);

