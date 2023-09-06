class inventoryPage{

get searchTextBox(){
    return $("//input[@type='search']")
}

get nextBtn(){
    return $("//a[contains(text(),'Next')]")
}


//Business Libraries

async searchProduct(){
    await this.searchTextBox.setValue(productname)
}
}
export default new inventoryPage()