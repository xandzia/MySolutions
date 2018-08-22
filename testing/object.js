       
       //сортировка обьекта по key другого обьекта
       for(let key in res.data) {
          if(res.data[key].length>0) {
            this.errorServer[key] = res.data[key];
          }
        };
        transaction.filter( item => {
          if(this.errorServer.hasOwnProperty(item.docNumber)){
            item.status = "Помилка";
            item.errorMsg = this.errorServer[item.docNumber];
          } else {
            item.status = "Успішно";
          }
        });
        this.transactions = transaction;
        
        //другой вариант
        let err = [];
        Object.keys(res.data).forEach(function(key) {
           if(res.data[key].length>0) {
             err.push(key)
           }
         });
         let exclude = new Set(err);
         this.transactions = transaction.filter( item => {
           if( exclude.has(item.docNumber) ){
             return item.status = "Помилка";
           } else {
             return item.status = "Успішно";
           }
         });
