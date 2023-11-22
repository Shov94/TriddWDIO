describe('promise', function() {
    it('one', function() {
        async function a(){
            console.log("Start");
            const pro= new Promise((resolve,reject)=>{       
                    resolve("Pass");
                    reject("Fail");  
            })
            await pro.then(success=>console.log(success)).catch(failure=>console.log(failure))
            await pro.finally(c)
            console.log("Finish");
        }
        function c(){
            console.log("Finally");
        }
        a()
    });
    it('two', () => {
        async function a(value){
            console.log("Start");
            var p=new Promise(function(resolve, reject){  
                // var x= 2+3;  
                if(value==5)  
                    resolve(" executed and resolved successfully");  
                else  
                    reject("rejected");  
                });  
                 await p.then(success=>console.log(success)).catch(failure=>console.log(failure))  
                 ; 
                 console.log("End"); 
            }
             a(6);
    });
    it('three', () => {
        function fun(){
            console.log("Start");
            return new Promise(function(resolve,reject){
            console.log("Midway");
            setTimeout(() => {
            let value=true
            if(value){
                resolve("Resolved successfully")
            }
            else{
                reject("Failed")
            }  
            }, 1000);
            })}
            let a= (msg)=>{
                console.log(msg);
                console.log("End");
            }
            let b=(msg)=>{
                console.log(msg)
                console.log("End");}
            fun().then(a).catch(b);
    });

    it('four', () => {
        function a(){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                console.log("a"); 
                resolve();
             }, 3000);
            })   
        }
        function b(){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                resolve();
                console.log("b")
                
             }, 2000);
            })
        }
        function c(){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                console.log("c") 
                resolve("Resolved");
                reject("Rejected")
             }, 1000);
            })
        }
        async function fun(){
            await a();
            //console.log(await a());
            await b();
            await c();
        }
        console.log(a());
        fun();
    });
    it.only('five', () => {
        function pro(b,c){
            return new Promise((resolve,reject)=>{
        
                if(b+c>10){
                    resolve("Passed");
                }
                else{
                    reject("Failed")
                }
            })
        }
        pro(5,5).then(msg=>console.log(msg)).catch(msg=>console.log(msg));
    });
   
});