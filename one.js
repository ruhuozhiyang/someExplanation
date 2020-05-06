var number;
var object=null;
var string=NaN;


// sum=function(){
//     var result=0;
//     for(var item in arguments){
//        // console.log(item);
//         result +=arguments[item];
//     }
//     return result ;
// }
// function test(){
//     // return arguments.length;
//     return arguments[0];
// }
// returnnone=function(){
   
// }

// console.log(sum(1,2));
// console.log(typeof sum);
// console.log(typeof number);
// console.log(typeof object);
// console.log(Boolean(string));
// console.log((number));
// console.log(test(2,3,4,3,2));
// console.log(returnnone());

var Book={}
var name='';
Object.defineProperty(Book,'name',{
    set:function(value){
        name=value;
        console.log("你取了个书名叫做："+name);
    },
    get:function(){
        return "《"+name+"》";
    }
})
console.log(Book);
Book.name="查伏安";
console.log(Book.name);
console.log(Book);