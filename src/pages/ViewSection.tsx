import { useState } from 'react';
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
} from '@ionic/react';
import { useParams } from 'react-router';
import './ViewMessage.css';
import ParagraphListItem from '../components/ParagraphListItem';

function ViewSection() {
  const [section, setSection] = useState([]);
  const { secName } = useParams<{ secName: string }>();

  useIonViewWillEnter(() => {
    const getSection = async () => {
      const sect = await import(`../data/sections/${secName}/index`)
      setSection(sect.default)
    }
    getSection()
  });

  return (
    <IonPage id="view-message-page">
      <IonContent fullscreen>
        <IonList>{section.map((item, i) => <ParagraphListItem paragraph={item} secName={secName} key={i} />)}</IonList>
      </IonContent>
      <IonFooter translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}

export default ViewSection;
