import { useState } from 'react'
import {
  IonItem,
  IonModal,
  IonButton,
  IonFooter,
  IonToolbar,
  IonContent
} from '@ionic/react';
import { Sections } from '../data/sections';
import { descr } from '../data/descriptions';
import './SectionListItem.css';

interface SectionListItemProps {
  section: Sections;
}

const SectionListItem: React.FC<SectionListItemProps> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const src = section.path as keyof typeof descr
  return (
    <div className='title'>
      <IonItem routerLink={`/section/${section.path}`} className='btn'>
        <div>
          {section.title}
        </div>
      </IonItem>
      <IonItem onClick={() => setIsOpen(true)} button>?</IonItem>
      <IonModal  isOpen={isOpen}>
        <IonContent>{descr[src]}</IonContent>
        <IonFooter>
          <IonToolbar>
            <IonButton onClick={() => setIsOpen(false)}>Cancel</IonButton>
          </IonToolbar>
        </IonFooter></IonModal>
    </div>
  );
};

export default SectionListItem;
