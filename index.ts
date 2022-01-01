import { Hoge } from "./src/hoge";
import { TournamentForm } from './src/tournament-form';
import { EachDebatersAndJudgeRoom } from './src/each-team-debater-and-judges';
import { Allocation } from './src/allocation';
import {AllocationApi  } from './src/allocation-api';

export function handler() {
    let hoge = new Hoge();
    hoge.readSheet();
    hoge.createForm()

}

export function each_debaters_and_judge_room() {

    let aaa = new EachDebatersAndJudgeRoom();

    aaa.createMarkDown();

}

export function tournament_form_create() {

    let tournament = new TournamentForm();

    tournament.createForm();

}
export function AllocationExecution() {


    let allocation = new Allocation();
    allocation.createMarkDown();

}


export function allocationApiExecution() {

    const aaa = new AllocationApi();
    const bbb = aaa.getAllocation();
    console.log('bbb', bbb);
}

// https://zenn.dev/matsu7089/books/gas-account-book/viewer/gas-api

export function  doGet () {

    const allocationApi = new AllocationApi();
    const result = allocationApi.getAllocation();

    console.log('ss');
    const res = ContentService.createTextOutput();
    res.setMimeType(ContentService.MimeType.JSON)
    res.setContent(JSON.stringify(result));
    return res

}
