 //import excel from 'exceljs'
class testdata{

    async realExcelFile(){

        const book=new excel.Workbook(sheetname,rowNo,cellNo);
        await book.xlsx.readFile("./Testdata.xlsx")        
        const sheet=book.getWorksheet(sheetname);
        let data=sheet.getRow(rowNo).getCell(cellNo).toString()
        return data;
    }
}

export default new testdata()