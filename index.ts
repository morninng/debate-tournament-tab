import { Hoge } from "./src/hoge";
import { TournamentForm } from './src/tournament-form';
import { EachDebatersAndJudgeRoom } from './src/each-team-debater-and-judges';
import { Allocation } from './src/allocation';

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
export function allocation() {


    let allocation = new Allocation();

    allocation.createMarkDown();

}
