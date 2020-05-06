var name='陈如阳'
var age=20
var home='泗阳'
console.log('我叫'+name+'今年'+age+'家住在'+home )
console.log(`我叫${name}今年${age}家住在${home}`)

function add(a,b=1){
    console.log(a+b)
}
add(2)  //3
add(2+3)//6
add(2,3)//5

var people=name=> 'hello'+name