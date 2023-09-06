class accountPage{

    get addIcon(){
        return $("//i[@class='fas fa-fw fa-plus']")
    }

    //Business Libraries

    async clickAddIcon(){
        await this.addIcon.click();
    }
}
export default new accountPage()