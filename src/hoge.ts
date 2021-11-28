export class Hoge {
  constructor() {}

  public message(value: string) {
    console.log(`hogehoge:${value}`);
  }
  public readSheet() {
    // (1)Spreadsheetファイルを開く
    const SHEET_URL =
      "https://docs.google.com/spreadsheets/d/1HWl79dxPnP60FRcWJvAWPo4GdRxiixNbmuunREWgSVc/edit";
    const SHEET_NAME = "シート1";
    var spreadSheet = SpreadsheetApp.openByUrl(SHEET_URL);
    // (2)Sheetを開く
    var sheet = spreadSheet.getSheetByName(SHEET_NAME);
    // (3)セルの範囲を指定・(4)値の取得
    var table = sheet.getDataRange().getValues();
    // 結果を表示
    Logger.log(table);
  }

  public createForm() {
    FormApp.create("もくもく会");
  }
}
