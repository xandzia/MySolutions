//const solution = (arr) => {
//    let promise = arr.reduce((acc, val) => {
//        return acc.then(() => {
//            return new Promise((resolve, rej) => {
//                setTimeout(() => {
//                    console.log(val);
//                    resolve();
//                }, val)
//            })
//        })
//    }, Promise.resolve());
//    promise.then(() => console.log("Complete!"))
//}
//
//solution([200, 3000, 100])
//
//
//async function test(){ 
//        var promise = new Promise(function (resolve, reject) {
//            for (let i = 0; i < 20; i++) {
//                setTimeout(() => {
//                    console.log(i)
//                }, 1000)
//            }
//            resolve();
//        });
//        promise.then(() => {
//            console.log("Complete!")
//        });
//    }
//
//test();
//
//async function loop() {
//    let delay = () => {
//    return new Promise((resolve) => {
//            setTimeout(resolve, 1000)
//        })}
//    for (let i = 0; i < 10; i++) {
//        await delay();
//        console.log(i);
//    }
//};
//
//loop();
//
//
//(async function a(items) {
//    function get(item) {
//        setTimeout(() => {
//            console.log(item)
//        }, 1000)
//    }
//    for (let i = 0; i < 10; i++) {
//        await get(i);
//    }
//    console.log("Done!")
//}())

(async function a(items) {
    function get(item) {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(item)
                resolve()
            }, 1000)
        })
    }
    for (let i = 0; i < 10; i++) {
        await get(i);
    }
    console.log("Done!")
}())
