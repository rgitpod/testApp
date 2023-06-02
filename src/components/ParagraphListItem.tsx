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

function ParagraphListItem({
  paragraph,
  secName,
  favs,
  i,
  setFav,
}: ParagraphListItemProps) {
  const [subCont, setSubCont] = useState([]);
  const [inFavs, setInFavs] = useState(false);

  useEffect(() => {
    const getSub = async () => {
      const sub = await import(
        `../data/sections/${secName}/${paragraph.path}/index.ts`
      );
      setSubCont(sub.default);
    };
    paragraph.sub && getSub();
  });

  return paragraph.sub ? (
    <IonAccordion>
      <IonItem slot="header" color="light">
        <IonLabel>{paragraph.title}</IonLabel>
      </IonItem>
      <IonList slot="content">
        {subCont.map((item: Index, j) => (
          <div className="parItem" key={i}>
            <IonItem
              routerLink={`/section/${secName}/${paragraph.path}/${item.path}`}
              detail={false}
              className="parTitle"
            >
              <p>{item.title}</p>
            </IonItem>
            <Btn
              i={j}
              path={paragraph.path}
              inFavs={inFavs}
              setFav={setFav}
              favs={favs}
              setInFavs={setInFavs}
              sub={paragraph.sub}
            />
          </div>
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
      <Btn
        i={i}
        path={"main"}
        inFavs={inFavs}
        setFav={setFav}
        favs={favs}
        setInFavs={setInFavs}
        sub={false}
      />
    </div>
  );
}

const Btn = ({ i, path, inFavs, setFav, favs, setInFavs, sub }) => {
  useEffect(() => {
    if (Object.keys(favs).length >= 0) {
      const f = sub ? favs[path] : favs?.main;
      const inf = f?.includes(i);
      setInFavs(inf);
    }
  }, [favs]);

  return (
    <IonButton
      fill="clear"
      color="dark"
      className="parBook"
      onClick={() => setFav(i, path, inFavs)}
    >
      <IonIcon icon={inFavs ? bookmark : bookmarkOutline} />
    </IonButton>
  );
};

export default ParagraphListItem;
