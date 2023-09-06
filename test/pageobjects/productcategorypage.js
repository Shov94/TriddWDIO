class POSPage{

    get keyboardLink(){
        return $("//a[contains(text(),'Keyboard')]")
    }
    get mouseLink(){
        return $("//a[contains(text(),'Mouse')]")
    }
    get headsetLink(){
        return $("//a[contains(text(),'Headset')]")
    }
    get cpuLink(){
        return $("//a[contains(text(),'CPU')]")
    }
    get monitorLink(){
        return $("//a[contains(text(),'Monitor')]")
    }
    get motherboardLink(){
        return $("//a[contains(text(),'Motherboard')]")
    }
    get processorLink(){
        return $("//a[contains(text(),'Processor')]")
    }
    get powersupplyLink(){
        return $("//a[contains(text(),'Power Supply')]")
    }
    get othersLink(){
        return $("//a[contains(text(),'Others')]")
    }
    get submitBtn(){
        return $("//button[text()='SUBMIT']")
    }
    get deleteBtn(){
        return $("//div[@class='btn bg-gradient-danger btn-danger']")
    }
    get addCustomerBtn(){
        return $("//i[@class='fas fa-fw fa-plus']")
    }
    get customerDropBtn(){
        return $("//select[@name='customer']")
    }
    get firstName(){
        return $("//div[@id='customerModal']/descendant::input[@name='firstname']")
    }

    get lastName(){
        return $("//div[@id='poscustomerModal']/descendant::input[@name='lastname']")
    }
    get phoneNumber(){
        return $("//div[@id='poscustomerModal']/descendant::input[@name='phonenumber']")
    }

    get saveBtn(){
        return $("//div[@id='poscustomerModal']/descendant::button[text()='Save']")
    }

    get resetBtn(){
        return $("//div[@id='poscustomerModal']/descendant::button[text()='Reset']")
    }
    get cancleBtn(){
        return $("//div[@id='poscustomerModal']/descendant::button[text()='Cancel']")
    }

    get crossBtn(){
        return $("//div[@id='poscustomerModal']/descendant::span[text()='×']")
    }

    //Business Libraries

    async keyboardClick(){
        await this.keyboardLink.click();
    }
    async cpuClick(){
        await this.cpuLink.click();
    }
    async processorClick(){
        await this.processorLink.click();
    }
    async othersClick(){
        await this.othersLink.click();
    }
    async mouseClick(){
        await this.mouseLink.click();
    }
    async headsetClick(){
        await this.headsetLink.click();
    }
    async monitorClick(){
        await this.monitorLink.click();
    }
    async powersupplyClick(){
        await this.powersupplyLink.click();
    }
    async motherboardClick(){
        await this.motherboardLink.click();
    }
    async addCustomer(){
        await this.addCustomerBtn.click();
    }

    async addQuantity(productname,quantity){
        await $("//h6[text()='"+productname+"']/ancestor::div[@class='products']/descendant::input[@name='quantity']").setValue(quantity);
        await $("//h6[text()='"+productname+"']/following-sibling::input[@class='btn btn-info']").click();
    }

    async addCustomerPos(firstname,lastname,phonenumber){
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.phoneNumber.setValue(phonenumber);
    }
    async saveBtnClick(){
        await this.saveBtn.click();
    }
    async deleteBtnClick(){
        await this.deleteBtn.click();
    }
}
export default new POSPage();