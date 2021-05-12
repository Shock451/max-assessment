import axios from 'axios';

const BASEURL = 'https://swapi.dev/api';
const urls = {
    vehicles: '/vehicles/',
    films: '/films/',
    starships: '/starships/',
    people: '/people/',
    species: '/species/',
}

async function query(resource) {
    try {
        const res = await axios.get(BASEURL + urls[resource]);
        const { status, data } = res;
        console.log(data)
        return {
            status,
            payload: data,
        };
    } catch {
        console.log(`Error while fetching resource ${resource}`);
        return {
            status: 500,
            data: {
                error: 'We tried but caught an issue with the force',
            },
        };
    }
}

async function queryX(resources) {
    const requests = resources.map(resource => axios.get(BASEURL + urls[resource]));
    try {
        const responses = await axios.all(requests);
        return responses;
    } catch (e) {
        console.log(`Error while fetching ${resources}`);
        return {
            status: 500,
            data: {
                error: 'We tried but caught an issue with the force',
            },
        };
    }
}


export { query, queryX };