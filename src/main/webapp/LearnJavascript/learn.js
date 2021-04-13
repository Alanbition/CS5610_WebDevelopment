const arr = [1, 6, 9, 10, 100, 25]
//
// const result = arr.filter(function(item){
//     if(item % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// })
//
// const result = arr.filter(item => {
//     if (item % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// })

const result = arr.filter(item => item % 2 === 0)

const apps = [
    {
        name: 'I',
        plat: 'ANDROID'
    },
    {
        name: 'M',
        plat: 'IOS'
    },
    {
        name: 'N',
        plat: 'ANDROID'},
    {
        name: 'W',
        plat: 'WINDOWS'
    },
];



const platforms = [
    {
        name: 'IOS',
        features: [
            'APP_MANAGEMENT',
            'FIREWALL'
        ],
    },
    {
        name: 'ANDROID',
        features: [
            'FIREWALL',
            'KIOSK_MODE',
        ],
    },
    {
        name: 'WINDOWS',
        features: [
            'KIOSK_MODE',
            'REMOTE_ACCESS',
        ],
    },
];

let checkAppName = (feature) => {
    console.log("Search Feature: " + feature);
    let platArr = [];
    for(let i = 0; i < platforms.length; i++){
        if (platforms[i].features.indexOf(feature) > -1){
            platArr.push(platforms[i].name)
        }
    }
    console.log(platArr)
    let nameArr = [];
    for (let i=0; i < apps.length; i++){
        if (platArr.indexOf(apps[i].plat) > -1){
            nameArr.push(apps[i].name)
        }
    }
    console.log(nameArr)
    return nameArr;
}
let feature = 'KIOSK_MODE'
let resultNew = checkAppName(feature);

console.log("Search result: "+ resultNew)