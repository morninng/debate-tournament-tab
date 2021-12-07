import { Hoge } from "./src/hoge";
import { TournamentForm } from './src/tournament-form';
import { Allocation } from './src/allocation';

export function handler() {
    let hoge = new Hoge();
    hoge.readSheet();
    hoge.createForm()


}
export function tournament_form_create() {

    let tournament = new TournamentForm();

    tournament.createForm();

}
export function allocation() {


    let allocation = new Allocation();

    allocation.createMarkDown();

}
