describe("sample",()=>{
//     it('login',async() => {

    //    await browser.url("https://demo.actitime.com/login.do")
    //     const title=browser.getTitle();
    //     console.log(title);
    //    await browser.maximizeWindow()
    //    await  $("//input[@name='username']").addValue("admin")
    //    await $("//input[@name='pwd']").addValue("manager")
    //    //await $("//a[@id='loginButton']").click();
    //    await $("#loginButton").click();
    //    await expect(browser).toHaveTitle("actiTIME - Enter Time-Track")
    
    //it('iphone',async() => {
//     await browser.url("https://www.flipkart.com/")
//     await browser.maximizeWindow();
//    // await $("//button[contains(text(),'✕')]").click()
//     await $("//input[@title='Search for products, brands and more']").addValue("IPhone 14")
//     await $("//button[@type='submit']").click();
//     await $("//div[text()='₹67,999']/ancestor::div[@class='col col-5-12 nlI3QM']/preceding-sibling::div[@class='col col-7-12']/descendant::div[text()='APPLE iPhone 14 (Blue, 128 GB)']").click();
//     await browser.switchWindow("APPLE iPhone 14 ( 128 GB Storage ) Online at Best Price On Flipkart.com");
//     const urll=browser.getUrl()
//     console.log(urll);

// it('moveTo',async() => {
//     await browser.url("https://www.myntra.com/")
//     await browser.maximizeWindow();
//     let loc=$("//a[@data-group='men']")
//     await loc.moveTo();
//    let a= await $("//a[text()='Sneakers']")
//    await browser.pause(2000)
//    await a.saveScreenshot("./abc.png")
//    console.log(a);

// await browser.url("file:///C:/Users/KARMA/Desktop/SELENIUM/Disabled.html")
// await browser.maximizeWindow();
// // await document.getElementById("d2")
// await $("#d2").addValue("hiiiiiiiiiiiii")


// it('switch',async() => {
// await browser.url("https://www.indeed.com/employers/login")
// await browser.maximizeWindow();
// await $("//a[text()='Sign in']").click();
// await $("#apple-signin-button").click();
// await $("#login-google-button").click();
// })

// var a=await browser.getWindowHandles();
// console.log(a);
// await browser.pause(2000)
// await browser.switchToWindow(a[0])
// await browser.saveScreenshot("./ss.png")
// const a=browser.getUrl()
// await expect(a).toHaveUrlContaining("Indeed")
// })



//     it('add product',async() => {

//         await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php")
//         await browser.maximizeWindow();
//         await $("//input[@placeholder='Username']").addValue("unguardable") 
//         await $("//input[@placeholder='Password']").addValue("admin")
//         await $("//button[text()='Login']").click()
//         await browser.pause(3000)

//         await browser.acceptAlert()
//         await $("//span[text()='Product']").click()
//         await $("//i[@class='fas fa-fw fa-plus']").click()
//         await browser.pause(1000)

//         await $("//input[@name='prodcode']").addValue("234567")
//         await $("//input[@name='name']").addValue("Lenovo Ideapad 350")
//         await $("//textarea[@name='description']").addValue("Laptop")
//         await $("//input[@name='quantity']").addValue("10")
//         await $("//input[@name='onhand']").addValue("10")
//         $("//input[@name='price']").addValue("39999")

//         let p=await $("//select[@name='category']")
//         p.selectByVisibleText("Others")

//         let q=await $("//select[@name='supplier']")
//         q.selectByVisibleText("Razer Co.")

//         await $("//input[@name='datestock']").addValue("12-12-2022")
//         await browser.pause(3000)





    //it('upload',async()=>{

        // browser.url("https://ps.uci.edu/~franklin/doc/file_upload.html")
        // let fileloc=await $("//input[@name='userfile']")
        // let path="./co.jpg"
        // const abc=await browser.uploadFile(path)
        // fileloc.setValue(abc)

        // await browser.pause(3000)



    // it('scroll',async()=>{

    //     browser.url("https://www.tutorialspoint.com/webdriverio/webdriverio_scrolling_operations.htm")
    //     await browser.maximizeWindow();
    //     const ele=await $("#print-page")
    //    await ele.scrollIntoView();
    //     await browser.pause(4000)
    // })

//     browser.url("https://webdriver.io/docs/api/browser/scroll")
//     await browser.maximizeWindow();
//    await browser.scroll(0,2000)
//     await browser.pause(5000)


// it('double click',async()=>{

//     browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
//     browser.maximizeWindow()
//     const ele=await $("//button[text()='Double-Click Me To See Alert']")
//     await ele.doubleClick()
//     await browser.pause(3000)
//     const value=await browser.isAlertOpen();
    
//    // let text=await ;
//    if(value){
//     console.log(await browser.getAlertText());
//     await browser.acceptAlert();
//    }




// it('drag and drop',async()=>{

//     // await browser.url("https://jqueryui.com/droppable/")
//     // await browser.maximizeWindow()
//     // const ele=await $("#draggable")
//     // const source=await $("//div[@id='droppable']")
//     await browser.url("http://www.dhtmlgoodies.com/submitted-scripts/i-google-like-drag-drop/index.html")
//     await browser.maximizeWindow()
//     const ele=await $("#block-1")
//     const source=await $("#block-4")

//     await ele.dragAndDrop(source)
//     await browser.pause(4000)
//      })


// it('alert',async()=>{

//     await browser.url("https://demo.automationtesting.in/Alerts.html")
//     await browser.maximizeWindow()
//     await $("//a[contains(text(),'Alert with OK & Cancel ')]").click();
//     await $("//button[@class='btn btn-primary']").click()
//     let result=await browser.isAlertOpen();
//     if(result){
//         await browser.acceptAlert()
//         console.log(browser.getAlertText());
//         const message=(await $("//p[text()='You pressed Ok']")).getText()  
//         console.log(message);
//     }
//     else{
//         await browser.dismissAlert()

//         const message=(await $("//p[text()='You Pressed Cancel']")).getText()  
//         console.log(message);
//     }

//     await browser.pause(4000)

// })
    // it('findelements',async()=>{

    //    await browser.url("https://www.amazon.in/");
    //    await browser.maximizeWindow();
    //    await $("//input[@id='twotabsearchtextbox']").addValue("IPhone");
    //    await $("//input[@id='nav-search-submit-button']").click();
    //    const text=await $$("//span[@class='a-size-medium a-color-base a-text-normal']/ancestor::div[@class='sg-col-inner']/descendant::span[@class='a-price-whole']")
    // //    let a= text.forEach((element)=>{
    // //    return element.getText()
    // //    }
    // //    )
    //    const name=$$("//span[@class='a-size-medium a-color-base a-text-normal']")
    // //    let b=name.forEach((element)=>{
    // //     return element.getText();
    // //    })
    // //    console.log(`${b} ${a}`);


    // })


    //  it('isClickable',async()=>{

    //     await browser.url("https://www.facebook.com/")
    //     await browser.maximizeWindow()
    //    const value= await $("//button[text()='Log in']")
    //    console.log(await value.isClickable());



    // await browser.url("file:///C:/Users/KARMA/AppData/Local/Microsoft/Windows/INetCache/IE/LD06SW62/DisabledElements[1].html")
    // await browser.maximizeWindow()
    // const a=await $("//input[@id='d3']")
    // console.log(await a.isClickable());
    //  })


    //it('isDisplayed',async()=>{

        // await browser.url("https://www.facebook.com/")
        //     await browser.maximizeWindow()
        //    const value= await $("//button[text()='Log in']")
        //    console.log(await value.isDisplayed());

        // await browser.url("https://omayo.blogspot.com/")
        // await browser.maximizeWindow()
        // const value=await $("//button[@id='but1']")
        // console.log(await value.isClickable());
    // })

    it('isEnabled',async()=>{
        await browser.url("https://omayo.blogspot.com/")
        await browser.maximizeWindow()
        const value=await $("//button[@id='but2']")
        console.log(await value.isEnabled());
    })

    it('isSelected',async()=>{
        await browser.url("https://omayo.blogspot.com/")
        await browser.maximizeWindow()
        //const value=await $("//input[@id='checkbox2']")
        const value=await $("//input[@id='checkbox1']")
        console.log(await value.isSelected());
    })

    // it('isExisting',async()=>{
    //     await browser.url("https://omayo.blogspot.com/")
    //     await browser.maximizeWindow()
    //     // const value=await $("//input[@id='checkbox1']")
    //     const value=await $("//button[@id='but1']")
    //     console.log(await value.isExisting());
    // })

    // it('isEqual',async()=>{
    //         await browser.url("https://omayo.blogspot.com/")
    //         await browser.maximizeWindow()
    //         const value=await $("//button[@id='but2']")
    //         const value1=await $("#but2")
    //         console.log(await value.isEqual(value1));
    //     })

    // it('waitForClickable',async()=>{

    //     await browser.url("https://omayo.blogspot.com/")
    //     await browser.maximizeWindow()
    //     //await $("//button[text()='Check this']").click()
    //     const value=await $("//button[@id='myBtn']")
    //     await value.waitForClickable({timeout:1000});
    //     if(await value.isClickable()){
    //         console.log("Clickable");
    //     }
        
    // })

    // it('waitForEnabled',async()=>{

    //     await browser.url("https://omayo.blogspot.com/")
    //     await browser.maximizeWindow()
    //     //await $("//button[text()='Check this']").click()
    //     const value=await $("//input[@id='timerButton']")
    //     await value.waitForClickable({timeout:5000});
    //     if(await value.isClickable()){
    //         console.log("Clickable");
    //     }
        
    // })
    
    // it('waitUntill',async()=>{
        
    //     await browser.url("https://omayo.blogspot.com/")
    //     await browser.maximizeWindow();
    //     (await $("//input[@id='timerButton']")).scrollIntoView();
    //     (await $("//button[contains(text(),'Check this')]")).click();

    //      browser.waitUntil(async()=>{

    //         let element=await $("//input[@id='dte']");
    //         let check=await element.isEnabled();
    //         console.log("element enabled====>"+ check);
    //         return check;
    //     },{timeout:11000});
    // });

    // it('keys',async()=>{

    //     await browser.url("https://webdriver.io/docs/api/browser/keys");
    //     await browser.maximizeWindow()
    //     await $("//span[@class='DocSearch-Button-Placeholder']").click();
    //     await $("//input[@class='DocSearch-Input']").addValue("isClickable")
    //     await browser.keys('Enter');
    //     await browser.pause(4000)
    // });

    // it('assertions',async()=>{
    //     await browser.url("https://www.youtube.com/")
    //     await expect(browser).toHaveUrl("https://www.youtube.com/")
    //     await expect(browser).toHaveTitle("YouTube") 
    // })

    // it('assertions',async()=>{
    //     await browser.url("https://omayo.blogspot.com/")
    //    const element=await $("//div[@class='post-body entry-content']")
    //    await expect(element).toHaveText("This is a sample text in the Page One.")

    // })

    // it('toHaveValue',async()=>{
    //     await browser.url("https://webdriver.io/docs/api/expect-webdriverio/")
    //     await browser.maximizeWindow();
    //     // const ele=await $("#default-options");
    //     // //await expect(ele).toHaveValue("Default Options")
    //     // await expect(ele).toBeDisplayedInViewport();

    //     const ele=await $("//h3[text()='toHaveUrlContaining']")
    //     await ele.scrollIntoView();

    //     const element=await $("//h3[text()='toHaveTitle']")
    //     await expect(element).toBeDisplayedInViewport();
    //     await browser.pause(5000)

    // })
});
