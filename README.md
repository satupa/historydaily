# History Daily

**History Daily** on web-sovellus, joka hakee historiallisia tapahtumia tietyn päivän mukaan avoimen rajapinnan kautta. Sovellus näyttää syntymät, kuolemat ja tapahtumat valitulle päivämäärälle. Tapahtumista voi tallentaa suosikkeja, jotka säilyvät selaimen muistissa (`localStorage`).

---

## Käyttötarkoitus

Sovelluksen tavoitteena on tarjota käyttäjälle tietoa siitä, mitä merkittäviä historiallisia tapahtumia on tapahtunut tiettynä päivänä. Käyttäjä voi:
- Nähdä automaattisesti viisi selauspäivän tapahtumaa etusivulla
- Hakea tietyn päivän tapahtumia
- Tallentaa mielenkiintoisia tapahtumia suosikeiksi
- Tarkastella tallennettuja suosikkeja ja avata niihin liittyviä Wikipedia-linkkejä

---

## Käyttö-ohje

1. **Etusivu** (`index.html`) näyttää automaattisesti 5 satunnaista tapahtumaa tältä päivältä jokaisesta kategoriasta (syntymät, kuolemat, tapahtumat).
2. **Search-sivulla** (`history.html`) voit hakea valitun päivän tapahtumat ja valita määrän ja tyypin.
3. **Favourites-sivulla** (`favourites.html`) voit tarkastella tallentamiasi tapahtumia.
4. Jos tallennetusta tapahtumasta löytyy lisätietoa, on sen yhteydessä Wikipediaan johdattava kuvake.

---

## Julkinen käyttö

### GitHub Pages

Sovellus on julkaistu osoitteessa:

🔗 

---

## Projketin teosta

### Käytetyt teknologiat

- Projektissa on hyödynnetty byabbe.se/on-this-day-avointa rajapintaa, joka ei vaadi API-avainta. 
- Projektissa on hyödynnetty mm. HTML5, CSS3, JavaScript. Ikonit haettu Font Awesome:sta, headerin kuva Unsplashista. . 
- Toteutuksessa on hyödynnetty Web-sovellusten perusteet kurssin luentoja ja materiaaleja, MDN Web Docs tutoriaaleja. 

### Jatkokehitys

- Projektia olisi voinut kehittää merkittävästi pidemmällekin. CSS:n parissa olisi voinut viettää tunnin jos toisen enemmänkin, ja toiminnallisuudessa kehittää lisäominaisuuksia pidemmälle, kuten sydän-ikonin uudelleen klikkaus talletuksen jälkeen poistaisi talletuksen muistista. 
- Testivaiheessa huomasin, että latautumisvaiheessa saattaa tulla pieniä bugeja, jolloin haettujen tulostten järjestys voi vaihtua. Järjestyksen kuuluisi olla syntymät - kuolemat - tapahtumat, mutta hetkittäin saattaa näkyä esim. kuolemat - syntymät - tapahtumat. 
- Tein sovelluksen täysin pöytäkoneella. Jatkoprojekteissa haluaisin oppia enemmän responsiivisuudesta ja puhelinnäytölle sovelluksen sovittamisesta. 