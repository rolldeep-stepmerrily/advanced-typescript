const greet = (person:string,date:Date){
  console.log(`Hello ${person}, tody is ${date.toDateString()!}`)
}

/*
  Date()는 string을 반환하기 때문에, new Date()를 사용해야함.
*/ 
greet("rolldeep",  Date())

