import excel from 'exceljs'

describe('Excel',()=>{

    // it('Read File',async()=>{
    //    const book=new excel.Workbook();
    //    await book.xlsx.readFile("./Testdata.xlsx")        
    //    const sheet=book.getWorksheet("Sheet1");
    //   const last=sheet.rowCount;
    //    for(let i=1;i<=last;i++){
    //    let data=sheet.getRow(i).getCell(1).toString()
    //    console.log(data);
    //    }
    // })

    // it('Write file',async()=>{
        
    //     const book=new excel.Workbook();
    //     await book.xlsx.readFile("./Testdata.xlsx")
    //     const sheet=book.getWorksheet("Sheet1");
    //     sheet.addRow(2).getCell(1).value='SHOBHAN'
    //     await book.xlsx.writeFile("./Testdata.xlsx")

    // })

    // it('Generic',async()=>{

    //     const book=new excel.Workbook();
    //     const sheet=book.addWorksheet("Name")
    //     sheet.addRow(1).getCell(1).value='Shobhan'
    //     await book.xlsx.writeFile("./Test.xlsx")
    // })

    it('random',async()=>{
        const book=new excel.Workbook();
        await book.xlsx.readFile("./Test.xlsx")
        const sheet=book.addWorksheet("Name1");
        for(let a=1;a<=10;a++){
            let num=Math.floor((Math.random() * 1000) + 1);
            sheet.addRow(a).getCell(2).value='Shobhan'+num
        }
        await book.xlsx.writeFile("./Test.xlsx")

    })

    //   it('Read File and Append',async()=>{
    //    const book=new excel.Workbook();
    //    await book.xlsx.readFile("./Testdata.xlsx")        
    //    const sheet=book.getWorksheet("Sheet1");
    //   const last=sheet.rowCount;
    //    for(let i=1;i<=last;i++){
    //    let num=Math.floor((Math.random() * 1000) + 1);
    //    let data=sheet.getRow(i).getCell(1).toString()
    //    console.log(data+num);
    //    }
    // })
})