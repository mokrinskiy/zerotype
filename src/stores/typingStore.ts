import { makeAutoObservable } from "mobx";

class TypingStore {
    result = [];
    timeLeft = 50;

    constructor() {
        makeAutoObservable(this);
    }

    setTime = (time: number) => {
        this.timeLeft = time;
    };
}

export default new TypingStore();
