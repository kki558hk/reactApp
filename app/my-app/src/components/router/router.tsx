import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import InitialContents from "../contentsComponent/initialContent";
import AboutContent from "../contentsComponent/aboutContent";

export const Path = {
    home: "/",
    about: "/about",
    info: "info"
};

const Routes = (): JSX.Element => {
    return (
        <div>
            <Switch>
                <Route exact path={Path.about} component={AboutContent} />
                <Route exact path={Path.home} component={InitialContents} />
                <Route path="*" component={InitialContents} />
                <Redirect to={Path.home} />
            </Switch>
        </div>
    );
};

export default Routes;