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
  useIonViewWillEnter,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle
} from '@ionic/react';
import './Home.css';
import Footer from '../components/Footer';
import { moon } from 'ionicons/icons';

const Home: React.FC = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle('dark');

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonItem lines="none">
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
              aria-label="Email"
            />
          </IonItem>
        <IonList>
          {sections.map((item, i)=> <SectionListItem  section={item} key={i} />)}
        </IonList>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
