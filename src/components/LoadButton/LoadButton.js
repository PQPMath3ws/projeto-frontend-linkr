import { Button } from "./styled";
import { FaSync } from "react-icons/fa";


export default function LoadButton({finalCount}){
    return (
        <Button>
            {finalCount} new posts, load more!
            <FaSync size={16} style={{marginLeft:'10px',fontWeight:'700'}}/>
        </Button>
    )
}