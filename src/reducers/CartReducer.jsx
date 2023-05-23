
export const CartReducer = (cartState, action) => {

    switch(action.type){
        case "add-to-cart" : 
        return async () => {
            try {
                // const res = await fetch(`/api/${localStorage.getItem("authorization")}/cart`,{
                //     method: "POST",
                //     body: JSON.stringify(action.data)
                // });
                // console.log(res.json(), "cartres")
                // console.log(cartState?.cartData)

                console.log(1)

            } catch (error) {
                console.log(error)
            }
            
        }

        case "getCart" : return ({...cartState, cartData: action.data}) 
        default : return { ...cartState}
    }
}
