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
import './ViewParagraph.css'



export default function ViewParagraph() {
    const [paragraph, setParagraph] = useState()
    const { secName, paraName, subName } = useParams<{secName: string, paraName: string, subName: string}>()

    useIonViewWillEnter(() => {
        const getParagraph = async () => {
            if(subName) {
                const paragr = await import(`../data/sections/${secName}/${paraName}/${subName}.tsx`)
                setParagraph(paragr.default)
            } else {
          const paragr = await import(`../data/sections/${secName}/${paraName}.tsx`)
          setParagraph(paragr.default)
            }          
        }
        getParagraph()
      });

    return (
        <IonPage>            
            <IonContent>
                <div className='paragraph'>{paragraph}</div>
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