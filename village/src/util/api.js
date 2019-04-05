import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3333',
	timeout: 60000,
	headers: {
		authorization: 'ellen'
	}
})

export const getSmurfs = ()=>{
	return api.get('/smurfs').then(res => res.data)
}

export const addSmurf = (smurf)=>{
	return api.post('/smurfs', smurf).then(res => res.data)
}

export const getSmurfByName = (smurf)=>{
	return api.get(`/smurfs/${smurf.name}`).then(res => res.data)
}

export const updateSmurfById = (smurf)=>{
	return api.put(`/smurfs/${smurf.id}`, smurf).then(res => res.data)
}

export const deleteSmurf = (id)=>{
	return api.delete(`/smurfs/${id}`).then(res => res.data)
}
