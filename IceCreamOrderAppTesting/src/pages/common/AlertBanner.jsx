import { Alert } from "react-bootstrap"

export const AlertBanner =(message, variant) => {
    const alertMessage = message ?? 'Unexpexted error occured';
    const alertVariant = variant ?? 'danger';
 return(
    <Alert message={alertMessage} variant={alertVariant}/>
 )
}