const TOURNAMENT_SHEET_URL = "https://docs.google.com/spreadsheets/d/16KRxI0cDLTG9zHmYhq5027pFuDDDOrQ8eKO2jYNl1kA/edit";
const SHEET_NAME_DEBATERS = "debaters";
const SHEET_NAME_JUDGES = "judges";
const SHEET_NAME_TEAMS = "teams";

const ROOM_OPTIONS = ['101', '102', '103', '104', '105', '106', '107', '108', '109', '111', '112', '113', '114', '115', '116'];
const ROLES = ['PM', 'LO', 'MG', 'MO', 'LOR', 'PMR'];
const SCORES = ['65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85'];



export class TournamentForm {
  constructor() {}

  public createForm() {

    const judges: string[] = getSheetColumnValues(SHEET_NAME_JUDGES, 0);
    console.log("judges", judges);
    const debaters: string[] = getSheetColumnValues(SHEET_NAME_DEBATERS, 3);
    console.log("debaters", debaters);
    const teams: string[] = getSheetColumnValues(SHEET_NAME_TEAMS, 0);
    console.log("teams", teams);

    createForm(debaters, teams, judges)
  }
}



function getSheetColumnValues(sheetName: string, columnNum: number){
  console.log('sheetName', sheetName)
  const spreadSheet = SpreadsheetApp.openByUrl(TOURNAMENT_SHEET_URL);
  const sheet = spreadSheet.getSheetByName(sheetName);
  const table = sheet.getDataRange().getValues();
  
  if(Array.isArray(table)){
    const array = table.map((data)=>{
      if(Array.isArray(data)){
        return data[columnNum];
      }else{
        return data;
      }
    })
    return array;
  }
  return [];

}




function createForm( debaters: string[], teams: string[] ,judges: string[]) {
  const form = FormApp.create("HPDU West 2021 Dec ジャッジシート");
  form.setDescription('ジャッジが、試合結果を記載するためのシート');



  form.addListItem()
  .setTitle('部屋番号')
  .setChoiceValues(ROOM_OPTIONS)
  .setRequired(true);

  if(judges && judges.length > 0){
    form.addListItem()
    .setTitle('あなた（ジャッジ）の名前を記載ください。')
    .setChoiceValues(judges)
    .setRequired(true);
  }

  if(teams && teams.length > 0){
    form.addListItem()
    .setTitle('Governmentのチーム名を記載ください')
    .setChoiceValues(teams)
    .setRequired(true);

    form.addListItem()
    .setTitle('Oppositionのチーム名を記載ください')
    .setChoiceValues(teams)
    .setRequired(true);

    form.addListItem()
    .setTitle('勝ったチーム名を記載ください')
    .setChoiceValues(teams)
    .setRequired(true);

    form.addListItem()
    .setTitle('負けたチーム名を記載ください')
    .setChoiceValues(teams)
    .setRequired(true);
  }



  if(debaters && debaters.length > 0){


    ROLES.forEach((role: string)=>{

      form.addListItem()
      .setTitle(`${role}のでぃべーたーの名前`)
      .setChoiceValues(debaters)
      .setRequired(true);

      form.addListItem()
      .setTitle(`${role}の点数`)
      .setChoiceValues(SCORES)
      .setRequired(true);

    })

  }


}


