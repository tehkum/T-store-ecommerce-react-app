
export const CartReducer = (cartState, action) => {

    switch(action.type){
        case "add-to-cart" : 
        return async () => {
            try {
                // const res = await fetch(`/api/${localStorage.getItem("authorization")}/cart`,{
                //     method: "POST",
                //     body: JSON.stringify(action.data)
                // });
                // 


            } catch (error) {
                console.log(error)
            }
            
        }

        case "getCart" : return ({...cartState, cartData: action.data}) 
        default : return { ...cartState}
    }
}
