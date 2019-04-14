// const Web3 = require('web3');

// var url = 'https://mainnet.infura.io/v3/09217fb1e92e430187d1c3ed6dd50de5';

// var web3 = new Web3(url);

// // console.log(web3);

// var address = '0xab7c74abC0C4d48d1bdad5DCB26153FC8780f83E';

// // console.log(web3.eth.getBalance(address));

// // var x;
// // console.log(web3.eth.getBalance(address, (err, bal) => {x = bal}));

// class Wallet{
    

//     constructor(address){
//         this.address = address;
//     }

//     getBal(){
//         // console.log(typeof(web3.eth.getBalance(address)));
//         // web3.eth.getBalance(address, (err, bal) => {balance = bal});
//         // web3.eth.getBalance(this.address).resolve(result);
//         // web3.eth.getBalance(this.address).then( result =>
//         //     console.log(result));

//         // var x = (bal) => {return bal};
//         // var y = (err) => {};
        
//         console.log(web3.eth.getBalance(this.address));

//         //var x = web3.eth.getBalance(this.address);


//         var x;
//         web3.eth.getBalance(this.address).then(function (result){x=result}, function(){console.log("error")});


//         // oncomplete{

//         // }
//         // onerror{

//         // }
//         // x.then(function(result){
//         //     console.log(result);
//         //     return result;
//         // });
    
//     }
// }

// var x = new Wallet(address);
// var y = x.getBal();
// console.log(y + ' hey');
