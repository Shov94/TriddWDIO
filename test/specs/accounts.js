import loginPage from "../pageobjects/login.page.js";
import homepage from "../pageobjects/homepage.js";
import productpage from "../pageobjects/productpage.js";
import accountspage from "../pageobjects/accountspage.js";
import {expect,assert} from "chai"

describe('Accounts module',()=>{

    it('AddUserAccountPopup',async()=>{

        await loginPage.openUrl();
        await loginPage.adminLogin('unguardable','admin')
        await homepage.clickAccounts()
        await accountspage.clickAddIcon();

        const text=await $("//h5[contains(text(),'Add User Account')]")
        const value=await text.getText();
        console.log(value);
        await browser.pause(3000)
    })
})