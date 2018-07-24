//find word in string
 viewVersion() {
        let str = this.$route.path;
        return ( str.indexOf("version") === -1 ) ? false : true;
 }
