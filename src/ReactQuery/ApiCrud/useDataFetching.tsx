import {useQuery} from 'react-query';
import {axiosGet} from "../../API/apiConfig";

export const useDataFetching = (
    serviceName: string,
    params?: any,
    config?: any,
    key?: string
) => {
    return useQuery(
        key ?? `${serviceName},${params}`,
        () => axiosGet(serviceName, {params: params}),
        config
    );
};
