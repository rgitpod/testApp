import {
  IonAccordion,
    IonItem,
    IonLabel,
    IonList,
    useIonViewWillEnter
    } from '@ionic/react';
  import { Index } from '../data/sections';
  import './ParagraphListItem.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
  
  interface ParagraphListItemProps {
    paragraph: Index;
    secName: string
  }
  
  const ParagraphListItem: React.FC<ParagraphListItemProps> = ({ paragraph, secName }) => {
    const [subCont, setSubCont] = useState([])

    useEffect(() => {
      const getSub = async () => {
        const sub = await import(`../data/sections/${secName}/${paragraph.path}/index.ts`)
        setSubCont(sub.default)
        
      }
      paragraph.sub && getSub()
    });
    
    
    return (
      paragraph.sub ? <IonAccordion>
         <IonItem slot="header" color="light">
          <IonLabel>{paragraph.title}</IonLabel>
        </IonItem>
        <IonList slot="content">
          {subCont.map((item: Index, i) => <IonItem routerLink={`/section/${secName}/${paragraph.path}/${item.path}`} detail={false} key={i}>
        <IonLabel className="ion-text-wrap">
          <h4>
            {item.title}
          </h4>
        </IonLabel>
      </IonItem>)}
        </IonList>
      </IonAccordion> :
      <IonItem routerLink={`/section/${secName}/${paragraph.path}`} detail={false}>
        <IonLabel className="ion-text-wrap">
          <h4>
            {paragraph.title}
          </h4>
        </IonLabel>
      </IonItem>
    );
  };
  
  export default ParagraphListItem;
  