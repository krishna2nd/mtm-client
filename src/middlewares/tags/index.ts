
const URL_BASE: string = "/tags";

export default (app) => {
    app.get(URL_BASE, (req, res) => {
        res.send("Tags GET")
    });
    app.get(`${URL_BASE}/:id`, (req, res) => {
        res.send("Tags Some  GET")
    });
    app.put(URL_BASE, (req, res) => {
        res.send(req.body.id)
    });
    app.post(`${URL_BASE}/:id`, (req, res) => {
        res.send("Update new tag")
    });
};
