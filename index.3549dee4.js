var e;(e="ukraine",fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>console.log(e))).catch((e=>console.log(e)));
//# sourceMappingURL=index.3549dee4.js.map
