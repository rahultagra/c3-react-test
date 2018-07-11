import React from "react";
import { PearsonUsers } from "./PearsonUsers";
import { Switch, Route} from 'react-router-dom';

const Routes = () => (
<Switch>
  <Route exact path="/" component={PearsonUsers} />
  <Route path="/userid/:id" component={PearsonUsers} />
</Switch>);

export default Routes; 