const object  = {
  name:"Ali Abdullah",
  second:function(){
    return console.log(this.name)
  },
  third:()=>{
   return console.log(this.name)
  },
  fourth:[
    "Ali","second","umar"
  ]
}


object.second();
object.third();
console.log(object.fourth)