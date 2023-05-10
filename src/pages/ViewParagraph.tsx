import { useState, lazy } from 'react';
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



export default function ViewParagraph() {
    const [paragraph, setParagraph] = useState()
    const { secName, paraName } = useParams<{secName: string, paraName: string}>()

    useIonViewWillEnter(() => {
        const getParagraph = async () => {
          const paragr = await import(`../data/sections/${secName}/${paraName}.tsx`)
          setParagraph(paragr.default)
        }
        getParagraph()
      });

    return (
        <IonPage>            
            <IonContent fullscreen>
                 {paragraph}
            </IonContent>
            <IonFooter translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}