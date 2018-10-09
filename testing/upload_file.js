import axios from 'axios'
export default {
    upload (url, fileName){
        console.log('export default', url)
        axios({
            url: `${url}`,
            method: 'GET',
            responseType: 'blob', // important
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                if(fileName){link.setAttribute('download', `${fileName}.csv`)} else {link.setAttribute('download', 'file.csv')};
                document.body.appendChild(link);
                link.click();
            });
    }
}
