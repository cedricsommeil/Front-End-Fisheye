function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/photographer_profil/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        link.setAttribute("href", `photographer.html?id=${id}`);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const pCityAndCountry = document.createElement("p");
        pCityAndCountry.textContent = `${city}, ${country}`;
        const ptagline = document.createElement("p");
        ptagline.setAttribute("class", "para_situation");
        ptagline.textContent = `${tagline}`;
        const pPrice = document.createElement("p");
        pPrice.setAttribute("class","para_price");
        pPrice.textContent = `${price}€/jour`;
        // On injecte les élèments crées dans le DOM avec la méthode .append
        link.append(img);
        article.append(link, h2, pCityAndCountry, ptagline, pPrice);
        return (article);
    
    } 
    return { name, picture, getUserCardDOM }
}