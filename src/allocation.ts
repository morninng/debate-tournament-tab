const TOURNAMENT_SHEET_URL = "https://docs.google.com/spreadsheets/d/16KRxI0cDLTG9zHmYhq5027pFuDDDOrQ8eKO2jYNl1kA/edit";
const SHEET_NAME_DEBATERS = "debaters";
const SHEET_NAME_JUDGES = "judges";
const SHEET_NAME_TEAMS = "teams";
const SHEET_NAME_ALLOCATION = "allocation";



export class Allocation {
  constructor() {}

  public createMarkDown() {

    const spreadSheet = SpreadsheetApp.openByUrl(TOURNAMENT_SHEET_URL);
    const sheet = spreadSheet.getSheetByName(SHEET_NAME_ALLOCATION);
    const table = sheet.getDataRange().getValues();
    console.log(table);

    const header = table[0];
    console.log("header", header);
    const body = table.slice(1, table.length);
    console.log("body", body);
    let tableString = ""
    const headerString = `|${header[0]}  |${header[1]}   |${header[2]}   |\n`
    const middleString = `|---|---|---|\n`
    tableString = headerString + middleString

    body.forEach((room, index)=>{
      
      let body_each = ``

      if(index % 2 === 0){
        body_each = `|${room[0]}  |${room[1]}   |${room[2]}   |\n`
      }else{
        body_each = `|\`${room[0]}\`  |\`${room[1]}\`   |\`${room[2]}\`   |\n`
      }

      console.log(body_each);
      tableString = tableString + body_each;
    })
    console.log("tableString", tableString);

  }
}





