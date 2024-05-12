import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { userLoggedIn } from "@/redux/features/auth/authSlice";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localAuth =  Cookies.get('userInfo')
        //console.log("LocalAuth from cookies:", localAuth);


        if (localAuth) {
            const auth = JSON.parse(localAuth);
            //console.log("Parsed auth from local storage:", auth);
            if (auth?.user.accessToken && auth?.user) {
                dispatch(
                    userLoggedIn({
                        
                        accessToken: auth.user.accessToken,
                        user: auth.user,
                        
                    })
                );
                //console.log("Dispatched userLoggedIn action with access token:", auth.user.accessToken);
                
            }
            //console.log("acesstoken",auth.user.accessToken);
            //console.log("user",auth.user);


        }
        
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}
