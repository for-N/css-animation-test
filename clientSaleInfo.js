(async function () {
  const myInfo = JSON.parse(document.querySelector(".myInfo").innerText);
  const aItems = [
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNS9pbWdfMzYxMV9UMTY3MjEyOTk3NS5wbmc=",
    "catchphrase": "44GZ44G544Gm44Gu44K744O844Or5a++6LGh5L2c5ZOB",
    "title": "54++5Zyo44K744O844Or5Lit44Gu5L2c5ZOB44KS44G+44Go44KB44Gm6KaL44Gf44GE5pa544Gv44Kz44OB44Op44GL44KJ4pmq",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9zcC9hdi9hbGxfc2FsZS8/cmVmPXRvcF9vbl9zYWxlJmFmZmk9Mzg2NzY="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTUyN19UMTcxNTkzMDk3NS5qcGc=",
    "catchphrase": "44CQ5pyA57WC5pel44CR44Oe44Kt44K344Oz44Kw4piFNzDvvIVPRkbjgrvjg7zjg6s=",
    "title": "44CQNS8yMSjngaspMTDmmYLjgb7jgafjgJEx6YCx6ZaT6ZmQ5a6aU0FMRemWi+WCrOS4re+8geacgOaWsOOCv+OCpOODiOODq+OBi+OCieWjsuOCjOeti+OCt+ODquODvOOCuuOBvuOBp+OBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTRfbXhnL2luZGV4Lmh0bT9zb3J0Ynk9cG9wdWxhciZyZWY9dG9wX29uX3NhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTQ5OV9UMTcxNTkyOTEwNS5qcGc=",
    "catchphrase": "44K344ON44Oe44Om44OL44OD44OI44O744Ks44K54piGNTDvvIVPRkbjgrvjg7zjg6s=",
    "title": "44CQNi8zKOaciCkxMOaZguOBvuOBp+OAkeeIhuS5s+ODu+W3qOS5s+WwgumWgOODoeODvOOCq+ODvOOBrumrmOWTgeizquOBiuOBo+OBseOBhOODleOCp+ODgeWLleeUu+OBjOacn+mWk+mZkOWumuOBiuiyt+OBhOW+l++8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MjBfZ2FzL2luZGV4Lmh0bT9zb3J0Ynk9cG9wdWxhciZyZWY9dG9wX29uX3NhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTQ4NV9UMTcxNTkyNzk4Ni5qcGc=",
    "catchphrase": "44Kz44K544Oi44K55pig5YOP4piGMzDvvIVPRkbjgrvjg7zjg6s=",
    "title": "44CQNi8xKOWcnykxMOaZguOBvuOBp+OAkee0oOS6uuWmu+OBjOS7luS6uuajkuOBp+OCpOOCreOBvuOBj+OCi++8geS4iuWTgeOBquWlpeanmOOBruS4i+WTgeOBquOCu+ODg+OCr+OCueOBjOacn+mWk+mZkOWumuOBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9zb2RfZ3JvdXAvaW5kZXguaHRtP3BhZ2VfdHlwZT1zYWxlJnJlZj10b3Bfb25fc2FsZSZhZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTQxMl9UMTcxNTg0MTE5MC5qcGc=",
    "catchphrase": "aC5tLnDimIY3MO+8hU9GRuOCu+ODvOODqw==",
    "title": "44CQNS8zMSjph5EpMTDmmYLjgb7jgafjgJHnvo7lsJHlpbPvvIbnvo7lpbPjgYzli6LjgZ7jgo3jgYTimarmnIDmlrDkvZzjgYvjgonmh5DjgYvjgZfjga7jgYrlrp3mmKDlg4/jgb7jgafmnJ/plpPpmZDlrprotoXnibnkvqHvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTdfaG1wL2luZGV4Lmh0bT9zb3J0Ynk9cG9wdWxhciZyZWY9dG9wX29uX3NhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTUzM19UMTcxNTkzMTQxMS5qcGc=",
    "catchphrase": "TUlMS++8huODleOCp+ODgeecvOKYhTcw77yFT0ZG44K744O844Or",
    "title": "44CQNS8yMijmsLQpMTDmmYLjgb7jgafjgJEx6YCx6ZaT6ZmQ5a6aU0FMRemWi+WCrOS4re+8geODieOCueOCseODmeWmhOaDs+WFqOmWi+OBrueJuea/g+OCqOODreWLleeUu+OBjOOBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTVfYm1mL2luZGV4Lmh0bT9zb3J0Ynk9cG9wdWxhciZyZWY9dG9wX29uX3NhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTU0M19UMTcxNTkzMTk2Mi5qcGc=",
    "catchphrase": "S0FOQmnimIbkurrmsJfkvZzlk4Hjgrvjg7zjg6s=",
    "title": "44CQNS8yOCjngaspMTDmmYLjgb7jgafjgJHmt6vkubHnvo7kurrlprvvvIblppboibbnvo7nhp/lpbPjgYzprYXjgZvjgovkuK3lh7rjgZfmh4fpoZjjgrvjg4Pjgq/jgrnjgYzmnJ/plpPpmZDlrprjgYrosrfjgYTlvpfvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9wcmVzdGlnZS9pbmRleC5odG0/cGFnZV90eXBlPXNhbGUmcmVmPXRvcF9vbl9zYWxlJmFmZmk9Mzg2NzY="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTI3N19UMTcxNTMyODAwMi5qcGc=",
    "catchphrase": "44K744Kv44K344O844Kw44Op44OT44Ki5YuV55S74piG5pyA5aSnNzDvvIVPRkY=",
    "title": "44CQNS8yNyjmnIgpMTDmmYLjgb7jgafjgJHjgq7jg6rjgq7jg6rjgqjjg63jgrnjgYzjgZ/jgb7jgonjgarjgYTpgY7mv4Djgarjgrvjgq/jgrfjg7zjgrDjg6njg5PjgqLli5XnlLvjgYzjgYrosrfjgYTlvpfvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTNfc2dhL2luZGV4Lmh0bT9zb3J0Ynk9cG9wdWxhciZyZWY9dG9wX29uX3NhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTI1MF9UMTcxNTMyMzk2Ni5qcGc=",
    "catchphrase": "5ZCN5L2c44Od44Or44OO4piGNTDvvIVPRkbjgrvjg7zjg6s=",
    "title": "44CQNS8yNSjlnJ8pMTDmmYLjgb7jgafjgJHjgYTjgoTjgonjgZfjgYTnhp/jgozjgZ/lpbPjga7jg6rjgqLjg6rjgrrjg6DjgpLov73msYLjgZfjgZ/og4zlvrPjg4njg6njg57jgYzmnJ/plpPpmZDlrprjgYrosrfjgYTlvpfvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTFfY2NwL2luZGV4Lmh0bT9zb3J0Ynk9cG9wdWxhciZyZWY9dG9wX29uX3NhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTE4NV9UMTcxNTIxNzQ0Ni5qcGc=",
    "catchphrase": "44OT44OD44Kw44Oi44O844Kr44Or4piGNzDvvIVPRkbjgrvjg7zjg6s=",
    "title": "44CQNS8yNCjph5EpMTDmmYLjgb7jgafjgJHmnIDlronkvqHmoLzlrqPoqIDvvIHnhp/lpbPkurrlprvjgYvjgonph5Hpq6rnvo7lpbPjgb7jgafjg4zjgrHjgovli5XnlLvjgYzmnJ/plpPpmZDlrprjgYrosrfjgYTlvpfimao=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTBfYm1rL2luZGV4Lmh0bT9zb3J0Ynk9cG9wdWxhciZyZWY9dG9wX29uX3NhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNC9pbWdfNzY2NV9UMTY1Njg5MDQ2MC5qcGc=",
    "catchphrase": "5pyA5aSnNjbvvIVPRkYg6YCx5pu/44KP44KK44K744O844Or",
    "title": "576O5bCR5aWz44O7576O5aWz44GL44KJ5LyB55S744Oi44OO44CB54af5aWz44O75Lq65aa744Gu5aOy44KM562L44K/44Kk44OI44Or44G+44Gn5Lq65rCX44Gu5YuV55S744GM44GE44Gk44Gn44KC44GK5b6X77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9jYW1wYWlnbi9pbmRleC5odG0/cmVmPXRvcF9vbl9zYWxlJmFmZmk9Mzg2NzY="
  }
];
  const iItems = [];
  const items = myInfo.category === "IDOL" ? iItems : aItems;
  if (items && items.length) {
    const h2Title = decode("44K944Kv44Of44OrIOOCu+ODvOODq+S4gOimpw==");
    const saleInfoEl = genEl(`<div class="saleInfo"><h2>${h2Title}</h2></div>`);
    const itemsHtml = items
      .map(
        (item) =>
          `<div class="sale-item">
             <a href="${decode(item.afUrl)}" target="_blank">
               <img src="${decode(item.imgSrc)}">
               <div class="catchphrase">${decode(item.catchphrase)}</div>
               <div class="sale-title">${decode(item.title)}</div>
             </a>
           </div>`
      )
      .join("\n");
    saleInfoEl.append(genEl(`<div>${itemsHtml}</div>`));
    document.querySelector(".myContent").append(saleInfoEl);
  }

  function decode(base64) {
    return decodeURIComponent(escape(atob(base64)));
  }

  function genEl(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.firstElementChild;
  }
})();
