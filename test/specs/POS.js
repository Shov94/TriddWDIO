// import loginPage from "../pageobjects/login.page.js";
// import homepage from "../pageobjects/homepage.js";
// import productpage from "../pageobjects/productpage.js";
// import productcategorypage from "../pageobjects/productcategorypage.js";
// import {expect,assert} from "chai"

// describe('POS Module',()=>{
//     it('AddProduct',async()=>{

//         const proname="Fantech EG1"
//         const quantity=10
//         // await loginPage.openUrl();
//         await loginPage.userLogin("test","test");
//         await productcategorypage.headsetClick();
//         await productcategorypage.addQuantity(proname,quantity)
//         await browser.pause(2000)
//        // await productcategorypage.deleteBtnClick();
//         //await browser.pause(2000)

//         const expproname=await $("//tbody/tr/td[1]").getText()
//         const expquant=await $("//tbody/tr/td[2]").getText()

//         console.log(expproname+"========"+expquant);

//         assert.equal(quantity,expquant,"Same quantity")
//         expect(proname).to.equal(expproname);

//     })
// })