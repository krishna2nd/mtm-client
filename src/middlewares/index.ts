import TagsMiddleWare from "./tags";
import GenerateScript from "./generate";

export default (app) => {
    TagsMiddleWare(app);
   // TrggerMiddleware(app);
   GenerateScript(app);
};
