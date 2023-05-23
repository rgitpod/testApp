import {
    IonItem,
    IonLabel,
    IonAccordion, 
    IonAccordionGroup,
    IonList
    } from '@ionic/react';
  import { Index } from '../data/sections';
  import './ParagraphListItem.css';
  
  interface ParagraphListItemProps {
    paragraph: Index;
    secName: string
  }
  
  const SubParagraph: React.FC<ParagraphListItemProps> = ({ paragraph, secName }) => {
    return (
      <IonAccordion>
      <IonList></IonList>
      </IonAccordion>
    );
  };
  
  export default SubParagraph
  