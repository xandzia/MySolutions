            isSubDocPage(){
                const routerNames = ['addendumid', 'actid', 'penaltyid', 'reportid'];
                const keys = Object.keys(this.routParams);
                return keys.some(r => routerNames.includes(r));
                // old version
                // return this.$route.params.hasOwnProperty('actid') ||
                //     this.$route.params.hasOwnProperty('addendumid') ||
                //     this.$route.params.hasOwnProperty('penaltyid') ||
                //     this.$route.params.hasOwnProperty('reportid')
            },
            если массив имеет элемент другого массива
