import { IonBackButton, IonButtons, IonFooter, IonTitle, IonToolbar } from "@ionic/react"

const Footer = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  )

}

export default Footer