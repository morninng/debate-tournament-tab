import { Hoge } from "./src/hoge";
import { TournamentForm } from './src/tournament-form';

export function handler() {
    let hoge = new Hoge();
    hoge.readSheet();
    hoge.createForm()

    let tournament = new TournamentForm();

    tournament.createForm();

}
