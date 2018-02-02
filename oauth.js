const consumerKey = 'Tps0sZFXGso33E2OUhhIIJHNj';
const requestTokenURL = 'https://api.twitter.com/oauth/request_token';

async function main() {
    fetch(requestTokenURL)
        .then(async (response) => [
            console.log(await response.text())
        ]).catch((reason) => {
            console.log(reason);
        });
}

main();
