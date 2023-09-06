class productPage{

    get addIcon(){
        return $("//i[@class='fas fa-fw fa-plus']")
    }

    get productCode(){
        return $("//div[@id='aModal']/descendant::input[@name='prodcode']")
    }
    get productName(){
        return $("//div[@id='aModal']/descendant::input[@name='name']")
    }
    get descriptionBox(){
        return $("//textarea[@name='description']")
    }
    get quantityStock(){
        return $("//div[@id='aModal']/descendant::input[@name='quantity']")
    }
    get onHandQuantity(){
        return $("//div[@id='aModal']/descendant::input[@name='onhand']")
    }
    get proCatagory(){
        return $("//div[@id='aModal']/descendant::select[@name='category']")
    }
    get supplierDrop(){
        return $("//div[@id='aModal']/descendant::select[@name='supplier']")
    }
    get dateStock(){
        return $("//input[@name='datestock']")
    }
    get priceAdd(){
        return $("//div[@id='aModal']/descendant::input[@name='price']")
    }
    get saveBtn(){
        return $("//div[@id='aModal']/descendant::button[text()='Save']")
    }

    get resetBtn(){
        return $("//div[@id='aModal']/descendant::button[text()='Reset']")
    }
    get cancleBtn(){
        return $("//div[@id='aModal']/descendant::button[text()='Cancel']")
    }

    get crossBtn(){
        return $("//div[@id='aModal']/descendant::span[text()='×']")
    }



    //Business Libraries

    async addIconClick(){
        await this.addIcon.click();
    }
    async addProduct(productcode,productname,description,quantity,onhand,price,category,supplier,date){
        
        await this.productCode.setValue(productcode)
        await this.productName.setValue(productname)
        await this.descriptionBox.setValue(description)
        await this.quantityStock.setValue(quantity)
        await this.onHandQuantity.setValue(onhand)
        await this.priceAdd.setValue(price)
        await this.proCatagory.selectByVisibleText(category)
        await this.supplierDrop.selectByVisibleText(supplier) 
        await this.dateStock.setValue(date);
        
        
    }
    async saveBtnClick(){
        await this.saveBtn.click()
    }
    async cancleBtnClick(){
        await this.cancleBtn.click()
    }

}
export default new productPage()