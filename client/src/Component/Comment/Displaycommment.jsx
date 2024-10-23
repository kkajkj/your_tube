import React ,{useState}from 'react'
import  './Comment.css'
import moment from 'moment'
import { useSelector,useDispatch } from 'react-redux'
import { editcomment,deletecomment } from '../../action/comment'
const Displaycommment = ({cid,commentbody,userid,commenton,usercommented}) => {
    const [edit,setedit]=useState(false)
    const[cmtnody,setcommentbdy]=useState(commentbody || "")
    const [cmtid,setcmntid]=useState("")
    const dispatch=useDispatch()
    const currentuser=useSelector(state => state.currentuserreducer);

    const handleedit=(ctid,ctbdy)=>{
        setedit(true)
        setcmntid(ctid)
        setcommentbdy(ctbdy || "")
    }
    const handleonsubmit=(e)=>{
        e.preventDefault();
        if(!cmtnody){
            alert("type your comment");
        }else{
            dispatch(editcomment({id:cmtid,commentbody:cmtnody}))
            setedit(false);
        }
       
    }
    const handledel=(id)=>{
        dispatch(deletecomment(id))
    }

  return (
    <>
    {edit?(
        <>
        <form  className="comments_sub_form_commments" onSubmit={handleonsubmit }>
            <input type="text" value={cmtnody}  onChange={(e)=>setcommentbdy(e.target.value)} placeholder='Edit comments..' className="comment_ibox" />
            <input type="submit" value="change" className="comment_add_btn_comments" />
        </form>
        </>
    ):(
        <p className="comment_body">{commentbody}</p>
    )}
    <p className="usercommented">{" "}- {usercommented} commented {moment(commenton).fromNow()}</p>
    {currentuser?.result?._id=== userid && (
        <p className="EditDel_DisplayCommendt">
            <i onClick={()=>handleedit(cid,commentbody)}>Edit</i>
            <i onClick={()=>handledel(cid)}>Delete</i>
        </p>
    )}
    </>
  )
}

export default Displaycommment