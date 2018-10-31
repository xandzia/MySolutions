
          if(this.errors.has('дата')){
            let arr = this.errors.items;
            let obj = arr.find(i=> i.field === 'дата');
            arr.splice(arr.indexOf(obj), 1);
          }
