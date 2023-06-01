import axios from 'axios';

export const addToCart = async (action) => {

    try {
        const { data } = await axios.get("/api/user/cart",{
            headers : {
                authorization: localStorage.getItem("encodedToken")
            }
        })
        if(data.cart.find(({_id})=> _id === action.data._id)){
            const { data } = await axios.post(`/api/user/cart/${action.data._id}`,{
                action: {
                    type: "increment"
                  }
            },{
                headers: {
                    authorization: localStorage.getItem("encodedToken")
                }
            });
            return [...data.cart]
        }
        else {
        const res = await axios.post(`/api/user/cart`,{
            product: action.data
        },{
            headers: {
                authorization: localStorage.getItem("encodedToken")
            }
        });
        return([...res.data.cart])
    }

    } catch (error) {
        console.log(error)
    }
}

export const fetchCart = async (cartDispatch) => {
    try {
        // cartDispatch({type: "load"})
        const {data} = await axios.get("/api/user/cart",{
            headers: { 
              authorization : localStorage.getItem("encodedToken")
            }
          })
          cartDispatch({type: "getCart", cart: await data.cart});
        // setTimeout(async () => {
        //       cartDispatch({type: "unload"})
        // },1500)      
    } catch (error) {
      console.log(error)
    }
  }


export const removeFromCart = async (action) => {
    try {
        
        const res = await axios.delete(`/api/user/cart/${action.id}`,{
            headers: { authorization: localStorage.getItem('encodedToken')}
        })
        // console.log([...res.data.cart])
        return [...res.data.cart]
    } catch (error) {
        console.log(error)
    }
}

// export const incrementCart = async (action) => {
//     try {
//         const { data } = await axios.post(`/api/user/cart/${action.id}`,{
//             action: {
//                 type: "increment"
//               }
//         },{
//             headers: {
//                 authorization: localStorage.getItem("encodedToken")
//             }
//         });
//         return [...data.cart]
//     } catch (error) {
//         console.log(error)
//     }
// }

export const incrementCart = async (action) => {
    
        return await axios.post(`/api/user/cart/${action.id}`,{
            action: {
                type: "increment"
              }
        },{
            headers: {
                authorization: localStorage.getItem("encodedToken")
            }
        });
        // return [...data.cart]
    
}

// export const decrementCart = async (action) => {
//     try {
//         const { data } = await axios.post(`/api/user/cart/${action.id}`,{
//             action: {
//                 type: "decrement"
//               }
//         },{
//             headers: {
//                 authorization: localStorage.getItem("encodedToken")
//             }
//         });
//         return [...data.cart]
//     } catch (error) {
//         console.log(error)
//     }
// }

export const decrementCart = async (action) => {
    
        return await axios.post(`/api/user/cart/${action.id}`,{
            action: {
                type: "decrement"
              }
        },{
            headers: {
                authorization: localStorage.getItem("encodedToken")
            }
        });
}

export const clearCart = async () => {
    try {
        const { data } = await axios.get(`/api/user/cart`,{
            headers: {
                authorization: localStorage.getItem("encodedToken")
            }
        })
        // console.log(data.cart, "data before")
        data?.cart?.map(async ({_id})=> {
            return await axios.delete(`/api/user/cart/${_id}`,{
            headers: { authorization: localStorage.getItem('encodedToken')}
        })
    })
        return [...data?.cart]
    } catch (error) {
        console.log(error)
    }
}