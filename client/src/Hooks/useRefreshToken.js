import axios from "../Api/axios";
import useAuth from './useAuth';

const useRefreshToken= ()=>{
    const { setUser } = useAuth();
    const refresh = async ()=>{
        const res=await axios.get('/refreshToken');
        setUser((prevState)=>{
            // console.log(prevState.accessToken);
            // console.log(res.data.accessToken);
            return {...prevState,accessToken:res.data.accessToken};
        });
        return res.data.accessToken;
    }
    return refresh;
}

export default  useRefreshToken;