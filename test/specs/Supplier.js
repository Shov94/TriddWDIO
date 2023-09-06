// import loginPage from "../pageobjects/login.page.js";
// import homepage from "../pageobjects/homepage.js";
// import productpage from "../pageobjects/productpage.js";
// import supplierpage from "../pageobjects/supplierpage.js";
// import {assert} from "chai"
// import testdata from "../utility/testdata.js";


// describe("Supplier Module",()=>{
//     // it("To view supplier list",async()=>{

//     //     await loginPage.openUrl();
//     //     await loginPage.adminLogin("unguardable","admin")
//     //     await homepage.clickSupplier();   
//     //     const text=await $("//h4[text()='Supplier ']")
//     //     const value=await text.getText();
//     //     assert.equal(value,"Supplier1 ") 
//     //     await browser.pause(3000)

//     // })

//     it('Add Supplier',async()=>{

//         await loginPage.openUrl();
//         await loginPage.adminLogin("unguardable","admin")

//         await homepage.clickSupplier();
//         const supplier=testdata.realExcelFile('Supplier',1,2)
//         const province=testdata.realExcelFile('Supplier',2,2)
//         const city=testdata.realExcelFile('Supplier',3,2)
//         const phoneNo=testdata.realExcelFile('Supplier',4,2)
//         await supplierpage.clickAddIcon();
//         await supplierpage.addSupplier(supplier,province,city,phoneNo);
//         await supplierpage.saveBtnClick();
//     })
// })