// const TOURNAMENT_SHEET_URL = "https://docs.google.com/spreadsheets/d/16KRxI0cDLTG9zHmYhq5027pFuDDDOrQ8eKO2jYNl1kA/edit";
const TOURNAMENT_SHEET_URL = "https://docs.google.com/spreadsheets/d/1-rYY_mo-z9-epWULz3y3X7y1MZaVTIwwXWohpV7Bjmo/edit#gid=820070216";
// const SHEET_NAME_DEBATERS = "debaters";
// const SHEET_NAME_JUDGES = "judges";
// const SHEET_NAME_TEAMS = "teams";
// const SHEET_NAME_ALLOCATION = "allocation";
const SHEET_NAME_EACH_DEBATERS_ROOM = "each team debaters and judges"

export class EachDebatersAndJudgeRoom {
  constructor() {}

  public createMarkDown() {
    const spreadSheet = SpreadsheetApp.openByUrl(TOURNAMENT_SHEET_URL);
    const sheet = spreadSheet.getSheetByName(SHEET_NAME_EACH_DEBATERS_ROOM);
    const table = sheet.getDataRange().getValues();
    console.log(table);

    const header = table[0];
    console.log("header", header);
    const body = table.slice(1, table.length);
    console.log("body", body);
    let tableString = ""
    const headerString = `|${header[0]} &emsp; |${header[1]}   |${header[2]}  |${header[3]}  |${header[4]}   |${header[5]}   |${header[6]} &emsp;  |${header[7]}    |\n`
    const middleString = `|---|---|---|---|---|---|---|---|\n`
    tableString = headerString + middleString

    body.forEach((room, index)=>{
      
      let body_each = ``

      if(index % 2 === 0){
        body_each = `|${room[0]} &emsp; |${room[1]} &emsp;  |${room[2]} &emsp;  |${room[3]}  &emsp;  |${room[4]}  &emsp; |${room[5]}  &emsp; |${room[6]} &emsp;  |${room[7]}  &emsp; |${room[8]}  |\n`
      }else{
        body_each = `|\`${room[0]}\` &emsp;  |\`${room[1]}\` &emsp;   |\`${room[2]}\`  &emsp;  |\`${room[3]}\` &emsp;   |\`${room[4]}\` &emsp;   |\`${room[5]}\`  &emsp;  |\`${room[6]}\` &emsp;   |\`${room[7]}\` &emsp;   |\`${room[8]}\`   |\n`
      }

      console.log(body_each);
      tableString = tableString + body_each;
    })
    console.log("tableString", tableString);

  }
}

