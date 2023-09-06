class customerpage{
   
    get addIcon(){
        return $("//i[@class='fas fa-fw fa-plus']")
    }
    get firstName(){
        return $("//div[@id='customerModal']/descendant::input[@name='firstname']")
    }

    get lastName(){
        return $("//div[@id='customerModal']/descendant::input[@name='lastname']")
    }
    get phoneNumber(){
        return $("//div[@id='customerModal']/descendant::input[@name='phonenumber']")
    }

    get saveBtn(){
        return $("//div[@id='customerModal']/descendant::button[text()='Save']")
    }

    get resetBtn(){
        return $("//div[@id='customerModal']/descendant::button[text()='Reset']")
    }
    get cancleBtn(){
        return $("//div[@id='customerModal']/descendant::button[text()='Cancel']")
    }

    get crossBtn(){
        return $("//div[@id='customerModal']/descendant::span[text()='×']")
    }

    async clickAdd(){
        await this.addIcon.click();
    }
    async enterCustomerDeatils(firstname,lastname,phonenumber){
        await this.firstName.setValue(firstname)
        await this.lastName.setValue(lastname)
        await this.phoneNumber.setValue(phonenumber)
    }
    async clickSave(){
        await this.saveBtn.click()
    }
    async clickCross(){
        await this.crossBtn.click()
    }
    
}
export default new customerpage()