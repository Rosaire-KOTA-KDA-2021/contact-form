import Bouton from "../button/bouton";
import ImageAvatar from "../image/image";
import Biography from "../textDescription/biography";
import profile from "../../assets/images/profile.svg";

const CardList = (props) => {
    const { contactLists, className, label } = props;
    console.log(contactLists);
    return (
        <>
            {contactLists.map(contact => {
                <div className={className}>
                <ImageAvatar src={profile} className="img-circle" alt="image-avatar"/>
                    <h3 className={className}><span>{contact.firstname }</span> <span>{contact.lastname }</span></h3>
                 <p>{contact.biography }</p>
                    <Bouton className="btn-delete" label="x" />
                   { console.log(contact.firstname)}
            </div> 
            })}
           
        </>
    )
}
export default CardList;