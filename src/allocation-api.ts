


export class AllocationApi {
  constructor() {}

  getAllocation(){

    const ALLOCATION_URL = "https://docs.google.com/spreadsheets/d/11sbAbMt4mIbRNVn8xZkElXhQ_GTH21S1VwEU5_12fXU/edit#gid=677531650";
    const SHEET_NAME_ALLOCATION = "19th_allocation";

    console.log("AllocationApi getAllocation");
    console.log('ALLOCATION_URL', ALLOCATION_URL);
    const spreadSheet = SpreadsheetApp.openByUrl(ALLOCATION_URL);
    // console.log('spreadSheet', spreadSheet);
    const sheet = spreadSheet.getSheetByName(SHEET_NAME_ALLOCATION);
    const table = sheet.getRange(2,1,96, 6).getValues();
    console.log(table);
    return table;


  }

}
