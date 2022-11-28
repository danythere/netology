import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://raw.githubusercontent.com/netology-code/react-task/master/netology.json';

export type Badge = {
    text: string;
    color: string;
    bgColor: string;
};

export type Direction = {
    id: string;
    link: string;
    badge: Badge;
    title: string;
};

export type Item = {
    id: string;
    link: string;
    badge: Badge;
    title: string;
};
export type Group = {
    id: string;
    link: string;
    badge: Badge;
    items: Item[];
    title: string;
};

export type Data = {
    groups: Group[];
    direction: Direction;
}

export type Response = {
    data: Data[];
}

export const getData = (): Promise<Response> =>
	axios(
		API_URL
	).then((response: AxiosResponse) => response.data);
