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
            .get(`/income/${id ? id : (id = "")}`)
            .then((response) => response.data);
    // delete = (id) =>
    //     this.service.get(`/income/${id}`).then((response) => response.data);
    insert = (income) =>
        this.service.post(`/income`, income).then((response) => response.data);
    // update = (id, income, qty) =>
    //     this.service
    //         .post(`/income/${id}/${qty ? qty : (qty = "")}`, income)
    //         .then((response) => response.data);
}
