import { useMutation, UseMutationOptions } from 'react-query';
import {axiosDelete, axiosPost, axiosPut} from "../../API/apiConfig";

export const useDataMutation = <T, V>(
    method: 'post' | 'put' | 'delete',
    url: string,
    config?: UseMutationOptions<T, Error, V>
) => {
    const mutationFn = (data: V) => {
        switch (method) {
            case 'post':
                return axiosPost<T>(url, data);
            case 'put':
                return axiosPut<T>(url, data);
            case 'delete':
                return axiosDelete<T>(url);
            default:
                throw new Error('Method not supported');
        }
    };

    return useMutation<T, Error, V>(mutationFn, config);
};
