import ImageAvatar from "../image/image"
import textDescription from "../textDescription/biography"
import CardList from "./card-list"



const Card = (props) => {

   
    return (
       
       <div className={props.className}>      
            <CardList className="flex-contact" contactLists={props.contacts }/>
        </div>
    )
}
export default Card;