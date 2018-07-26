      deleteObjByValue(item){
        if(this.errors.has(item)){
          let arr = this.errors.items; // arrey with objects
          let obj = arr.find(i=> i.field === item); // item = value
          arr.splice(arr.indexOf(obj), 1);
        }
      }

const filterValue = (obj, key, value)=> obj.filter(v => v[key] === value);

//sort array using another array
        let options = rUtils.reportTypeService.typesByPeriod(this.report.periodId);
        let exclude = new Set([4,5,8,9,10,11,12,13,19,21,24,28,29,32,33,34,35,36,37,39,41,42]);

        const arr = options.filter( item => {
          if( exclude.has(item.id) ){ return item };
        });

        enabledForAutoSum: function() {
          let arr = this.report_type.table;
          let exclude = new Set([1,4,22,41]);

          if (exclude.has(this.report_type.id)) {
            return false;
          }

          for(const item of arr) {
            if(item.style != null && item.style.includes("sum")) {
              return true;
            }
          }
        }
