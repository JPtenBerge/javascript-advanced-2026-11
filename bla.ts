class Hoi {
    #heulBelangrijk = 14;

    get heulBelangrijk() {
        return this.#heulBelangrijk;
    }
    set heulBelangrijk(value) {
        if (value > 500) {
            throw new Error('fuck no');
        }
        this.#heulBelangrijk = value;
    }

    geef() {
        return this.#heulBelangrijk;
    }
}