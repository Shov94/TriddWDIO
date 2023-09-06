class supplierPage{

    get addIcon(){
        return $("//i[@class='fas fa-fw fa-plus']")
    }

    get supplierNameTxt(){
        return $("//div[@id='supplierModal']/descendant::input[@name='companyname']")
    }

    get provinceName(){
        return $("//div[@id='supplierModal']/descendant::select[@name='province']")
    }
    get cityName(){
        return $("//div[@id='supplierModal']/descendant::select[@name='city']")
    }
    get phoneNumber(){
        return $("//div[@id='supplierModal']/descendant::input[@name='phonenumber']")
    }

    get saveBtn(){
        return $("//div[@id='supplierModal']/descendant::button[text()='Save']")
    }

    get resetBtn(){
        return $("//div[@id='supplierModal']/descendant::button[text()='Reset']")
    }
    get cancleBtn(){
        return $("//div[@id='supplierModal']/descendant::button[text()='Cancel']")
    }

    get crossBtn(){
        return $("//div[@id='supplierModal']/descendant::span[text()='×']")
    }


    //Business Libraries

    async clickAddIcon(){       
    await this.addIcon.click();       
    }

    async addSupplier(supplier,province,city,phone){
        await this.supplierNameTxt.addValue(supplier);
        await this.provinceName.selectByVisibleText(province);
        await this.cityName.selectByVisibleText(city);
        await this.phoneNumber.setValue(phone);
    }

    async saveBtnClick(){
        await this.saveBtn.click()
    }
    async cancleBtnClick(){
        await this.cancleBtn.click()
    }
}

export default new supplierPage()