describe("Example",()=>{
    beforeEach(async() => {
        await browser.url("https://webdriver.io/")
    });

    it('trying', async() => {
        await expect(browser).toHaveUrlContaining("io")
    });

    it("wait until",async()=>{

        const ele=await $("//a[text()='Get Started']");
        const text=ele.getText();
        await ele.waitUntil(async()=>{
            return await text==="Get Started"
        },{timeout:5000})
        console.log(await ele.getText());
    })

    it("waitforclick",async()=>{
        const button=await $("//a[text()='Why WebdriverIO?']")
        await button.waitForClickable({timeout:5000})
    })

    it('windowhandles', async() => {
        const size=await browser.getWindowSize();
        console.log(size);

        const buttonn=await $("//a[text()='Get Started']");
        
        await browser.newWindow("https://webdriver.io/docs/gettingstarted")
        await browser.switchWindow("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO")

        const differentWindow=await browser.getWindowHandles();
        await browser.switchToWindow(differentWindow[0])
        console.log(await browser.getWindowPosition());
    });

    // it("dropdown", async()=>{

       

    // })

})