import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Database, Storage } from "@ionic/storage";
import Home from "./pages/Home";
import ViewSection from "./pages/ViewSection";
import ViewParagraph from "./pages/ViewParagraph";
import { initStore, keys } from './db'

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";

setupIonicReact();

function App() {
  const [db, setDb] = useState<Database | null>(null);

  useEffect(() => {
    initStore()
  }, []);


  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact={true}>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact={true} component={Home} />
          <Route
            path="/section/:secName"
            component={ViewSection}
            exact={true}
          />
          <Route
            path="/section/:secName/:paraName/:subName?"
            component={ViewParagraph}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
