import http from "../http-common.js"

class Cerpens {
    getAll(){
        return http.get("/cerpen")
    }
}

export default new Cerpens()