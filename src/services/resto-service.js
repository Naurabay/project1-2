export default class RestoService {
    _apiBase = "https://my-json-server.typicode.com/EugenGavrisciuc/menufoodapi";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, receive ${res.status}`);
        };

        return await res.json()
    }
    async getMenuItems() {
        return await this.getResource(`/menu`);
    };
}