 function showBox(id){
      document.getElementById("menu").style.display="none";
      document.querySelectorAll(".box").forEach(b=>b.style.display="none");
      document.getElementById(id).style.display="block";
    }
    function goBack(){
      document.getElementById("menu").style.display="block";
      document.querySelectorAll(".box").forEach (b=>b.style.display="none");
    }

    // Run Functions with explanation
    function runLetConst(){
      let name="Hooria"; const pi=3.14;
      document.getElementById("out-letconst").innerText=
        `Output: name=${name}, pi=${pi}\n\nExplanation:\n- let block-scoped hota hai.\n- const ko reassign nahi kar sakte (error throw karega).`;
    }
    function runArrow(){
      const add=(a,b)=>a+b;
      document.getElementById("out-arrow").innerText=
        `Output: add(2,3) = ${add(2,3)}\n\nExplanation:\n- Arrow functions short syntax dete hain.\n- 'this' ka behaviour bhi lexical hota hai (normal functions se farq).`;
    }
    function runTemplate(){
      let name="Hooria";
      document.getElementById("out-template").innerText=
        `Output: Hello, ${name}! Welcome to ES6.\n\nExplanation:\n- Backticks (\`) me \\\${} syntax se variables embed karte hain.\n- Example: \`Hello, \${name}!\` will show the name value.`;
    }
    function runDefault(){
      function greet(name="Guest"){ return `Hello ${name}`; }
      document.getElementById("out-default").innerText=
        `Output: ${greet()}\n\nExplanation:\n- Agar koi value pass na karein to default parameter use hota hai.`;
    }
    function runDestruct(){
      let [a,b]=[10,20];
      let {city,age}={city:"Karachi", age:21};
      document.getElementById("out-destruct").innerText=
        `Output: a=${a}, b=${b}, city=${city}, age=${age}\n\nExplanation:\n- Destructuring se arrays/objects se values easily nikal sakte hain.`;
    }
    function runSpread(){
      let arr1=[1,2,3]; let arr2=[...arr1,4,5];
      function sum(...nums){ return nums.reduce((a,b)=>a+b); }
      document.getElementById("out-spread").innerText=
        `Output: arr2=[${arr2}], sum=${sum(1,2,3,4)}\n\nExplanation:\n- Spread (...) se array/values expand karte hain.\n- Rest (...) function me extra arguments collect karta hai.`;
    }
    function runClass(){
      class Person{ constructor(name,age){this.name=name;this.age=age;} greet(){return `Hi, I am ${this.name}`;} }
      let user=new Person("Hooria",21);
      document.getElementById("out-class").innerText=
        `Output: ${user.greet()}\n\nExplanation:\n- Classes se object templates bante hain; constructor me initial values set hoti hain.`;
    }