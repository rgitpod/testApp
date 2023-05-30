import { useState } from "react";
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
  IonAccordionGroup,
  IonButton,
} from "@ionic/react";
import { useParams } from "react-router";
import ParagraphListItem from "../components/ParagraphListItem";
import Footer from "../components/Footer";
import { Index } from "../data/sections";
import { keys } from '../db'

function ViewSection() {
  const [section, setSection] = useState([]);
  const { secName } = useParams<{ secName: string }>();

  useIonViewWillEnter(() => {
    const getSection = async () => {
      const sect = await import(`../data/sections/${secName}/index.ts`);
      setSection(sect.default);
    };
    getSection();
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonAccordionGroup>
          <IonList>
            {section.map((item: Index, i) => (
              <ParagraphListItem paragraph={item} secName={secName} key={i} />
            ))}
          </IonList>
        </IonAccordionGroup>
        <IonButton onClick={() => keys().then(console.log)}>log</IonButton>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default ViewSection;
