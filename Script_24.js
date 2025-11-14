//+++++++++++++++++++++++++  IIFE (Immediately Invoked Function Expression) +++++++++++++++++++++++

(function HelloWorld(){
    console.log ("Hello Coders ")
}) () ; // Semicolon required because IIFE do not know where to stop the context 

( () => {
    console.log ("Price of the Bike is 12,00,000")
}) ()
