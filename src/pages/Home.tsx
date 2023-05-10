import SectionListItem from '../components/SectionListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import sections from '../data/sections'
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {sections.map((item, i)=> <SectionListItem  section={item} key={i} />)}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
