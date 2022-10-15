import create from "zustand";
import axios from "axios";

interface UseApi {
  loading: boolean;
  hasError: boolean;
  fetch: (method: string, type: string, data: any, setData: (data: Array<any>) => void) => void;
}

const useApi = create<UseApi>((set) => ({
  loading: false,
  hasError: false,
  fetch: async (method, type, data, setData) => {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImluY2lsZXI4OEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vaGluY2lsZXIiLCJpYXQiOjE2NjU4MjE0NzksImV4cCI6MTY2NjI1MzQ3OX0.ZevYtAzVyu07w_5ZaN8au4Ouj2DBdkfOSq4N1ZpCavA";

    let Base_Url = "https://upayments-studycase-api.herokuapp.com/api/";

    let url = `${Base_Url}${type}/`;

    set(() => ({ loading: true }));
    try {
      const response = await axios({
        method: method,
        url: url,
        headers: { Authorization: `Bearer ${token}` },
        data: data,
      });
      setData(response.data[`${type}`])
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
}));

export default useApi;

