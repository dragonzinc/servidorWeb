'use strict'
class Obj {

    constructor () {
    }

    // Inicia l'objecte
    init () {
        // TODO
    }

    async llistat (db, utils, data, result) {

        let sql = '',
            taulaProductesExisteix = false,
            taula = null

        // Forçem una espera al fer login amb codi, perquè es vegi la càrrega (TODO: esborrar-ho)
        await utils.promiseWait(1000)

        // Mira si la taula "productes" existeix
        try {
            taulaProductesExisteix = await db.promiseTableExists('productes')
        } catch (e) {
            console.warn('Avis, funció login: la taula "productes" no existeix')
        }

        // Si la taula "productes" no existeix, en crea una i afegeix productes

        try {
            sql = 'DROP TABLE productes'
            await db.promiseQuery(sql)
            sql = 'CREATE TABLE productes (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, nom VARCHAR(50) NOT NULL, descripcio TEXT, preu INT(6), imatge VARCHAR(255))'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("Mosku", "oferta del 70%", 400, "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/St_Basils_Cathedral-500px.jpg/270px-St_Basils_Cathedral-500px.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("nuva york", "oferta del 30%", 500, "https://www.ngenespanol.com/wp-content/uploads/2018/08/Nuevo-museo-en-la-Estatua-de-la-Libertad.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("Paris", "oferta del 10%", 900, "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/1200px-Paris_-_Eiffelturm_und_Marsfeld2.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("Madrid", "oferta del 40%", 800, "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555940004/production/city/hero_image_16_1555940004.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("Tokyo", "oferta del 50%", 650, "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/01/tokyo-1024x602.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("Canada", "oferta del 10%", 900, "https://cdn.britannica.com/25/178125-050-4AA6ED25/Mount-Assiniboine-Canada-Alberta.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("mexico", "oferta del 60%", 500, "https://www.nationalgeographic.com/content/dam/travel/commercial/2019/domestic/intercontinental/mexico-city/mexico-city-palacio-bellas-artes.adapt.1900.1.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("china", "oferta del 30%", 600, "https://www.65ymas.com/uploads/s1/20/74/73/china.jpeg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("islandia", "oferta del 70%", 400, "https://avisassets.abgemea.com/.imaging/flexibleIntroSmall/dam/DMS/global/hg2-images/intros/iceland/Reykjavik_Credit_iStock_patpongs.jpg.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("andorra", "oferta del 40%", 300, "https://www.hoteles-silken.com/content/imgsxml/galerias/panel_sliderheadercorporativo/1/t-andorra-istock-487773163881.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("Africa", "oferta del 10%", 800, "https://okdiario.com/img/2019/10/13/ciudades-mas-bonitas-de-africa.jpg")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("inglaterra", "oferta del 90%", 200, "https://www.visitbritain.com/sites/default/files/styles/consumer_campaigns_hero_mobile/public/consumer_components_enhanced/header_image/vb34141644.jpg?itok=9qBFm0pJ")'
            await db.promiseQuery(sql)
            sql = 'INSERT INTO productes (nom, descripcio, preu, imatge) VALUES ("brasil", "oferta del 60%", 600, "https://ca-times.brightspotcdn.com/dims4/default/bb9ea37/2147483647/strip/true/crop/800x450+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F14%2F4a%2F71f6d7265a3ba255c60ee787a37e%2Fla-es-brasil-retira-el-requisito-de-visa-para-001")'

        } catch (e) {
            console.error(e)
            return result.json({ resultat: "ko", missatge: "Error, funció llistatProductes: no s'ha pogut crear la taula productes"})
        }


        // Demana la informació de productes
        try {
            sql = 'SELECT * FROM productes'
            taula = await db.promiseQuery(sql)
        } catch (e) {
            console.error(e)
            return result.json({ resultat: "ko", missatge: "Error, funció llistatProductes: ha fallat la crida a les dades"})
        }

        // Si hem aconseguit dades corectament, tornem la taula resultant
        if (typeof taula === 'object' && typeof taula.length === 'number') {
            result.json({ resultat: "ok", missatge: taula })
        } else {
            result.json({ resultat: "ko", missatge: [] })
        }
    }
}

// Export
module.exports = Obj
