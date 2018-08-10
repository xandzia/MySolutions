          const checkObj = this.checked;
          const array = Object.keys(checkObj).filter(function(key) {
            return checkObj[key] === true;
          });
