
import MTMRenderer from "./renderer";

const URL_BASE: string = "/script";

export default (app) => {
    const mtmRenderer = new MTMRenderer();
    app.get(URL_BASE, (req, res) => {
        res.type('application/javascript; charset=UTF-8').send(
            mtmRenderer.render()
        )
    });
};
