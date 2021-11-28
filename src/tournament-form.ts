const TOURNAMENT_SHEET_URL = "https://docs.google.com/spreadsheets/d/16KRxI0cDLTG9zHmYhq5027pFuDDDOrQ8eKO2jYNl1kA/edit";
const SHEET_NAME_DEBATERS = "debaters";
const SHEET_NAME_JUDGES = "judges";
const SHEET_NAME_TEAMS = "teams";

export class TournamentForm {
  constructor() {}

  public createForm() {

    const judges = getJudges();
    console.log(judges);


  }
}


function getJudges(): string[][] {
  const spreadSheet = SpreadsheetApp.openByUrl(TOURNAMENT_SHEET_URL);
  const sheet = spreadSheet.getSheetByName(SHEET_NAME_JUDGES);
  const table = sheet.getDataRange().getValues();

  return table;
}

function getTeams(): string[] {
  return [];
}

function getDebaters(): string[] {
  return [];
}
