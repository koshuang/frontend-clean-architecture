import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Auth } from "../../../../auth/infrastructure/ui/components/Auth";
import { User } from "../../../../cart/infrastructure/ui/components/User";
import { Front } from "../../../../front/infrastructure/ui/components/Front";

import { Header } from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/user" component={User} />
          <Route path="/" component={Front} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
