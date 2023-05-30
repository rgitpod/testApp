import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { bookmarks } from "ionicons/icons";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonFooter>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
          <IonButton onClick={() => setIsOpen(true)}>
            <IonIcon icon={bookmarks}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              illum quidem recusandae ducimus quos reprehenderit. Veniam,
              molestias quos, dolorum consequuntur nisi deserunt omnis id illo
              sit cum qui. Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
