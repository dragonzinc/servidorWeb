var login = null
var navegacio = null
var popups = null
var seccioBackofficeUsuaris = null
var seccioFrontendProductes = null
var seccioFrontendProducte = null

// Aquesta funció s'inicia al carregar la pàgina
async function inicia () {

    // Iniciem els objectes globals
    login = new ObjLogin()
    navegacio = new ObjNavegacio()
    popups = new ObjPopups()
    seccioBackofficeUsuaris = new ObjSeccioBackofficeUsuaris()
    seccioFrontendProductes = new ObjSeccioFrontendProductes()
    seccioFrontendProducte = new ObjSeccioFrontendProducte()

    // Inicia les funcions de navegació HTML5
    navegacio.inicia()

    // Fem que els botons de navegació endavant i endarrera mostrin el canvi de secció
    window.onpopstate = function (evt) {
        if (evt.state === null) {
            navegacio.mostraSeccio('frontendHome')
        } else {
            navegacio.mostraSeccio(evt.state.html)
        }
    }

    // Si tenim guardat un usuari i un token intentem identificar-lo
    await login.autenticaAmbToken()
}

function iniciaSeccio(seccio, id) {
    switch(seccio) {
    case 'frontendProductes': seccioFrontendProductes.iniciaSeccio(); break
    case 'frontendProducte':  seccioFrontendProducte.iniciaSeccio(id); break
    case 'backofficeUsuaris': seccioBackofficeUsuaris.iniciaSeccio(); break
    default:
    }
}
function cambiafoto(foto){
    document.getElementById('slide1').style.display='none'
    document.getElementById('slide2').style.display='none'
    document.getElementById('slide3').style.display='none'
    document.getElementById('slide4').style.display='none'
    document.getElementById('slide5').style.display='none'
    if (foto === 1) document.getElementById('slide1').style.display='block'
    if (foto === 1) document.getElementById('slide1').style.opacity=1
    if (foto === 2) document.getElementById('slide2').style.display='block'
    if (foto === 2) document.getElementById('slide2').style.opacity=1
    if (foto === 3) document.getElementById('slide3').style.display='block'
    if (foto === 3) document.getElementById('slide3').style.opacity=1
    if (foto === 4) document.getElementById('slide4').style.display='block'
    if (foto === 4) document.getElementById('slide4').style.opacity=1
    if (foto === 5) document.getElementById('slide5').style.display='block'
    if (foto === 5) document.getElementById('slide5').style.opacity=1
}
