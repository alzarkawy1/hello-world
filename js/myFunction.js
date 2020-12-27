 let myFunction = function loggingFunction(message, firstName) {
      console.log(message);
      console.log(firstName);
   
   myFunction('Hello');
   function getSecretCode(value){
      let code = value * 42;
      return code;}
   
   let secretCode = getSecretCode(2);
   showMessage( secretCode);
   let person = {
    name:'HAi',
    age: 18,
    partTime: false,
    showInfo: function(realAge) {
       showMessage(this.name + ' is ' + realAge);  
    }
       
}; 
person.showInfo(19);