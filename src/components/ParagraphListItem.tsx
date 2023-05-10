import {
    IonItem,
    IonLabel,
    IonNote
    } from '@ionic/react';
  import { Message } from '../data/messages';
  import { Index } from '../data/sections';
  import './MessageListItem.css';
  
  interface ParagraphListItemProps {
    paragraph: Index;
    secName: string
  }
  
  const ParagraphListItem: React.FC<ParagraphListItemProps> = ({ paragraph, secName }) => {
    return (
      <IonItem routerLink={`/section/${secName}/${paragraph.path}`} detail={false}>
        <div slot="start" className="dot dot-unread"></div>
        <IonLabel className="ion-text-wrap">
          <h4>
            {paragraph.title}
          </h4>
        </IonLabel>
      </IonItem>
    );
  };
  
  export default ParagraphListItem;
  