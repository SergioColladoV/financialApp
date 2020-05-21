import axios from "axios";

export default class Services {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:5000/api",
            withCredentials: true,
        });
    }

    get = (id) =>
        this.service
            .get(`/expense/${id ? id : (id = "")}`)
            .then((response) => response.data);
    // delete = (id) =>
    //     this.service.get(`/expense/${id}`).then((response) => response.data);
    insert = (expense) =>
        this.service
            .post(`/expense`, expense)
            .then((response) => response.data);
    // update = (id, expense, qty) =>
    //     this.service
    //         .post(`/expense/${id}/${qty ? qty : (qty = "")}`, expense)
    //         .then((response) => response.data);
}
