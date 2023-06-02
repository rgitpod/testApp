import { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonList,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
  useIonViewWillLeave,
  useIonViewDidLeave,
  IonAccordionGroup,
  IonButton,
} from "@ionic/react";
import { useParams } from "react-router";
import ParagraphListItem from "../components/ParagraphListItem";
import Footer from "../components/Footer";
import { Index } from "../data/sections";
import { keys, set, get, clear, remove } from "../db";

function ViewSection() {
  const [section, setSection] = useState([]);
  const [favs, setFavs] = useState({});
  const { secName } = useParams<{ secName: string }>();

  useEffect(() => {
    const getSection = async () => {
      const sect = await import(`../data/sections/${secName}/index.ts`);
      const secFavs = await get(secName);
      if (secFavs) {
        setFavs(secFavs);
      }
      setSection(sect.default);
    };
    getSection();
  }, []);

  const setFav = (i, prg, infav) => {
    let obj = {};
    if (!favs?.[prg]) {
      obj = { ...favs, [prg]: [i] };
    } else {
      const main = favs?.[prg];
      if (infav) {
        const index = main.indexOf(i);
        main.splice(index, 1);
        if (main.length) {
          obj = { ...favs, [prg]: [...main] };
        } else {
          delete favs[prg];
          obj = { ...favs };
          if (Object.keys(favs).length == 0) {
            remove(secName);
            setFavs(obj);
            return;
          }
        }
      } else {
        obj = { ...favs, [prg]: [...main, i] };
      }
    }
    set(secName, obj);
    setFavs(obj);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonAccordionGroup>
          <IonList>
            {section.map((item: Index, i) => (
              <ParagraphListItem
                paragraph={item}
                secName={secName}
                key={i}
                i={i}
                favs={favs}
                setFav={setFav}
              />
            ))}
          </IonList>
        </IonAccordionGroup>
        <IonButton
          onClick={() => {
            get("morphology").then(console.log);
            keys().then(console.log);
          }}
        >
          log
        </IonButton>
      </IonContent>
      <Footer />
    </IonPage>
  );
}

export default ViewSection;
