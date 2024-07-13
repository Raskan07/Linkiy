import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WebIcon from '@mui/icons-material/Web';
import MyAvatar from "../CustomComponents/avatar";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { addDoc, collection,serverTimestamp } from "firebase/firestore";
import { db,storage } from '../../api/firebase';
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";


const PostBtn = ({icon,title}:any) => {
    return (
        <div className="flex flex-row gap-3 items-center cursor-pointer">
            {icon}
            <p className="text-gray-600">{title}</p>
        </div>
    )
}

function PostUploadercard() {
    const [isModalOpen,setModalOpen] = useState(false);
    const user = useSelector(selectUser);
    const [postText,setPostText] = useState('')
    const [openGallery,setOpenGallery] = useState(false);
    const [imageFile,setImageFile] = useState<File|any>()
    const [uploadedImage,setUploadedImage] = useState<String|any>(null)



    const openModal = () => {
        setModalOpen(!false);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    useEffect(() => {
        if(!imageFile || imageFile == null){
            return ;
        }

        UploadAssets()

    },[imageFile]);


    const Post = async () => {
        try {
            const postRef = await addDoc(collection(db,"Posts"),{
                id:`${user?.uid}test`,
                username:user?.name,
                username_profile_uri:user?.photoUrl,
                post_uploaded_date: new Date().toDateString(),
                title:"post",
                message:postText,
                timeStamp:serverTimestamp(),
                post_image:uploadedImage,
            });
            setModalOpen(false)
            setPostText("");
            setUploadedImage(null)
            console.log("Data add done successfully",postRef.id);
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImageFile(event.target.files[0]); 
        } 
    };


    const UploadAssets = async () => {
        if (!imageFile) {
            console.warn("No image selected to upload.");
            return;
        }

        try {
            const assetsRef = ref(storage, `assets/${imageFile?.name}`);
            await uploadBytesResumable(assetsRef, imageFile).then((res) => {
                console.log(res, "Uploaded successfully");
                const progress = (res.bytesTransferred / res.totalBytes) * 100
                console.log("Progess",progress);
                getDownloadURL(res.ref).then((val) => {
                    setUploadedImage(val);
                });
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

  return (
    <div className="w-[100%] p-2 mt-[10px] bg-white rounded-md h-[130px] border-gray-300 shadow-md items-center flex flex-col ">
        <div className="flex flex-row items-center w-[90%] gap-5">
            <MyAvatar w={50} h={50}/>
            <button onClick={() => openModal()} className=" block w-[90%] p-2 text-gray-600 bg-slate-200 text-start rounded-3xl border-gray-500">Start a post</button>

            {/* Modal box for Upload dats */}
        </div>
        <div className="flex flex-row items-center justify-around w-full mt-5">
            <PostBtn  icon={<ImageIcon  className="text-blue-500" style={{width:30,height:30}}/>} title={"Media"}/>
            <PostBtn  icon={<CalendarMonthIcon  className="text-yellow-600" style={{width:30,height:30}}/>} title={"Event"}/>
            <PostBtn  icon={<WebIcon  className="text-orange-700" style={{width:30,height:30}}/>} title={"Article"}/>
        </div>

        <div className={`${isModalOpen ? "flex" : "hidden"} absolute w-screen h-screen  top-1 z-0 left-1 items-center justify-center `}>
            <div className="w-[700px] h-[560px] p-3 bg-white rounded-md shadow-lg drop-shadow-xl flex flex-col " id='box'>
                <div className="flex flex-row w-full items-center justify-between mt-2 p-4">
                    {/* header */}
                    <div className="flex flex-row gap-5 items-center ">
                        <MyAvatar w={60} h={60}  />
                        <p className='text-gray-900 text-[20px] font-bold capitalize'>{user.name}</p>
                    </div>
                    <div className="" onClick={() => closeModal()}>
                        <CloseIcon className='text-gray-900 cursor-pointer'/>
                    </div>

                    {/* body */}
                </div>
                <textarea value={postText} onChange={(e) => setPostText(e.target.value)}  style={{border:"none",outline:"none"}} className="pl-2  h-[15%] text-lg text-gray-900  bg-white text-left" placeholder="What you want to talk about ?" />

                <div className="size-[300px] w-full pt-2 pb-2">
                    {  openGallery && <img src={uploadedImage ? uploadedImage : null} alt="" className="size-[300px] rounded-sm" />}                </div>


                {/* Buttons */}
                <div className="w-full p-2 rounded-md flex-row flex gap-3">
                    <div className="p-2 cursor-pointer" onClick={() => setOpenGallery(!false)}>
                        <input
                            type="file"
                            name="imagePicker"
                            id="imge"
                            className="p-1"
                            onChange={(e) => handleImageChange(e)}
                            />                    
                    </div>
                </div>

                <div className="flex flex-row w-full items-end justify-end  ">
                    <button onClick={Post} className='p-1 bg-blue-700 text-white pl-4 pr-4 rounded-full'>Post</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default PostUploadercard
