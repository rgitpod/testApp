import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message } from '../data/messages';
import { Sections } from '../data/sections';
import './MessageListItem.css';

interface SectionListItemProps {
  section: Sections;
}

const SectionListItem: React.FC<SectionListItemProps> = ({ section }) => {
  return (
    <IonItem routerLink={`/section/${section.path}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {section.title}
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default SectionListItem;
