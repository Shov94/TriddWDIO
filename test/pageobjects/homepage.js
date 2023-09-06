class homepage{

    get customerLink(){
        return $("//span[contains(text(),'Customer')]")
    }
    get productLink(){
        return $("//span[contains(text(),'Product')]")
    }
    get employeeLink(){
        return $("//span[contains(text(),'Employee')]")
    }
    get inventoryLink(){
        return $("//span[contains(text(),'Inventory')]")
    }
    get supplierLink(){
        return $("//span[contains(text(),'Supplier')]")
    }
    get accountsLink(){
        return $("//span[contains(text(),'Accounts')]")
    }
    get profileBtn(){
        return $("//img[@class='img-profile rounded-circle']")
    }
    get logoutBtn(){
        return $("//a[@data-target='#logoutModal']")
    }
    get logoutAlert(){
        return $("//div[@aria-modal='true']/descendant::a")
    }
    get posBtn(){
        return $("//span[contains(text(),'POS')]")
    }


    //Business Libraries

    async clickCustomer(){
        await this.customerLink.click();
    }
    async clickEmployee(){
        await this.employeeLink.click();
    }
    async clickProduct(){
        await this.productLink.click();
    }
    async clickInventory(){
        await this.inventoryLink.click();
    }
    async clickSupplier(){
        await this.supplierLink.click();
    }
    async clickAccounts(){
        await this.accountsLink.click();
    }

    async logout(){
        await this.profileBtn.click();
        await this.logoutBtn.click();
        await this.logoutAlert.click();
    }

}
export default new homepage()