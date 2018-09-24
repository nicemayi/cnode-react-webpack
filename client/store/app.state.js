/* eslint-disable */
import { observable, computed, autorun, action } from 'mobx';

export class AppState {
    @observable counter = 0;

    @observable name = 'zhe';

    @computed get msg() {
        return `${this.name} say count is ${this.counter}`;
    }

    @action add() {
        this.counter += 1;
    }

    @action changeName(name) {
        this.name = name;
    }
}

const appState = new AppState();

autorun(() => {
    console.log('appState', appState.msg);
});

setInterval(() => {
    appState.add();
}, 1000);



export default appState;

/* eslint-enable */
