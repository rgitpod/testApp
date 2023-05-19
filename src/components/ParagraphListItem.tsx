import {
    IonItem,
    IonLabel
    } from '@ionic/react';
  import { Index } from '../data/sections';
  import './ParagraphListItem.css';
  
  interface ParagraphListItemProps {
    paragraph: Index;
    secName: string
  }
  
  const ParagraphListItem: React.FC<ParagraphListItemProps> = ({ paragraph, secName }) => {
    return (
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
  