import axios from "axios";

export const AddToWishlist = async (action) => {
    try {
        let {data} = await axios.get("/api/user/wishlist",{
            headers: {
                authorization: localStorage.getItem("encodedToken")
            }
        })
        if(data.wishlist.find(wishlist => wishlist._id === action.data._id)) {
            return ([...data.wishlist])
        }
        else {
        const res = await axios.post("/api/user/wishlist",{
            product: action.data
        },{
            headers : {
                authorization: localStorage.getItem("encodedToken")
            }
        })
        return ([...res.data.wishlist]);}


    } catch (error) {
        console.log(error)
    }
}

export const RemoveFromWishlist = async (action) => {
    const res = await axios.delete(`/api/user/wishlist/${action.data._id}`,{
        headers : {
            authorization: localStorage.getItem("encodedToken")
        }
    })
    return ([...res.data.wishlist]);
}

export const fetchDetails = async (wishlistDispatch) => {
    try {
        wishlistDispatch({type: "load"})
        const { data } = await axios.get("/api/user/wishlist",{
            headers: {
              authorization: localStorage.getItem("encodedToken")
            }
          });
          wishlistDispatch({type: "getWish", wishlist: await data.wishlist})
        setTimeout(async () => {
              wishlistDispatch({type: "unload"})
        },1500)
      
    } catch (error) {
      console.log(error);
    }
  } 