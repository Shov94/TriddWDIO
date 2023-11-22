import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', async() => {
    xit('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        
    })

    it("map",async()=>{
        await browser.url("https://omayo.blogspot.com/")
        await browser.maximizeWindow();
        const ele=await $$("//table[@id='table1']/descendant::tr");

        console.log(ele);
        let text= ele.map(async(each)=> {
            return await Promise.all(await each.getText())}
        )


        // for(let j=0;j<ele.length;j++)
        // {
        //     console.log(await ele[j].getText())
        // }
        
    })
})

