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
import ParagraphListItem from '../components/ParagraphListItem';
import Footer from '../components/Footer';

const ViewSection = () => {
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
    <IonPage>
      <IonContent fullscreen>
        <IonList>{section.map((item, i) => <ParagraphListItem paragraph={item} secName={secName} key={i} />)}</IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
}

export default ViewSection;
