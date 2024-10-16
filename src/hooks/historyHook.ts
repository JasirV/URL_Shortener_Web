import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import api from "../assets/api/axiosInstance";

interface HistoryItem {
    _id: string;     
    full_Url: string;
    short_url: string;
    __v: number;
    
}

interface HistoryResponse {
    data: HistoryItem[]; 
}
interface UrlInput {
    full_Url: string;
  }
export const useHistory=():UseQueryResult<HistoryResponse>=>{
    return useQuery<HistoryResponse>({
        queryKey:['history'],
        queryFn:async()=>{
            const response=await api('/')
            return response.data
        }
    })
}

export const useUrlCreate = (): UseMutationResult<unknown, unknown, UrlInput> => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: async (input: UrlInput) => {
        const response = await api.post('/', input);
        return response.data;
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(['history']);
      },
    });
  };