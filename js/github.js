class GitHub {
    constructor() {
        this.client_id = '1f573399094096def5fd';
        this.client_secret = '3628cce57c4c894baf9e673d99222ca2d4f64270';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`
            https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
        `);

        const repoResponse = await fetch(`
            https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}
        `);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return { profile, repos };
    }
}