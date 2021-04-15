import Bouton from "../button/bouton";
import Avatar from "../image/image";
import profile from "../../assets/images/profile.svg";

const Card = (props) => {
    function RennderCard() {
        return (
            <>
                {props.contactLists.map((contact) => {
                    <div className={className}>
                        <Avatar src={profile} className="img-circle" alt="image-avatar"/>
                        <h3 className={className}><span>{contact.firstname }</span> <span>{contact.lastname }</span></h3>
                        <p>{contact.biography }</p>
                        <Bouton className="btn-delete" label="x" />
                   </div> 
                })}
            </>
        )
    }
}