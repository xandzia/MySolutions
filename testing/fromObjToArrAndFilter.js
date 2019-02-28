      statArray(){
        return Object.keys(this.statInfo).map( key => {
          return {[key]: this.statInfo[key]}
        })
      },
      cntSignDocs(){
        return this.statArray.filter(item => {
          return Object.keys(item)[0].includes('Sign')
        })
      },
      cntDocs(){
        return this.statArray.filter(item => {
          return !Object.keys(item)[0].includes('Sign')
        })
      },
