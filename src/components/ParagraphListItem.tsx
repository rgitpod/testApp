import {
  IonAccordion,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  useIonViewWillEnter,
} from "@ionic/react";
import { Index } from "../data/sections";
import "./ParagraphListItem.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { bookmarkOutline, bookmark } from "ionicons/icons";

interface ParagraphListItemProps {
  paragraph: Index;
  secName: string;
}

function ParagraphListItem({ paragraph, secName }: ParagraphListItemProps) {
  const [subCont, setSubCont] = useState([]);

  useEffect(() => {
    const getSub = async () => {
      const sub = await import(
        `../data/sections/${secName}/${paragraph.path}/index.ts`
      );
      setSubCont(sub.default);
    };
    paragraph.sub && getSub();
  });

  const addFav = () => {
    
  }

  return paragraph.sub ? (
    <IonAccordion>
      <IonItem slot="header" color="light">
        <IonLabel>{paragraph.title}</IonLabel>
      </IonItem>
      <IonList slot="content">
        {subCont.map((item: Index, i) => (
          <IonItem
            routerLink={`/section/${secName}/${paragraph.path}/${item.path}`}
            detail={false}
            key={i}
          >
            <IonLabel className="paragraphItem">
              <h4>{item.title}</h4>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonAccordion>
  ) : (
    <div className="parItem">
      <IonItem
        routerLink={`/section/${secName}/${paragraph.path}`}
        detail={false}
        className="parTitle"
      >
        <p>{paragraph.title}</p>
      </IonItem>
      <IonButton fill="clear" color="dark" className="parBook" onClick={() => addFav()}>
        <IonIcon icon={bookmarkOutline} />
      </IonButton>
    </div>
  );
}

export default ParagraphListItem;
