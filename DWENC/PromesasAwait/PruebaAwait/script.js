async function showAvatar() {

    // leer usuario github
    let githubResponse = await fetch(`https://api.github.com/users/jcarrozadev`);
    let githubUser = await githubResponse.json();
    // muestra el avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    // espera 3 segundos
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();
    return githubUser;
}

showAvatar();
   