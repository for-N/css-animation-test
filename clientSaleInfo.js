(async function () {
  const myInfo = JSON.parse(document.querySelector(".myInfo").innerText);
  const aItems = [
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNi9pbWdfMzc0Ml9UMTcwMzEzNjc2NC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICAyMDIz5bm06ZaT44Op44Oz44Kt44Oz44Kw55m66KGoCiAgICAgICAgICAgIA==",
    "title": "MjAyM+W5tOOBruS6uuawl+S9nOWTgeOCkuODqeODs+OCreODs+OCsOW9ouW8j+OBp+S4gOaMmeOBq+eiuuiqje+8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9yYW5reWVhcjIwMjMvaW5kZXguaHRtP2FmZmk9Mzg3NDk="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjM3Ml9UMTcxODM0NzAyNi5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgqLjg63jg57kvIHnlLvimIU1MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8yMijlnJ8pMTDmmYLjgb7jgafjgJE35pel6ZaT6ZmQ5a6aU0FMRemWi+WCrOS4re+8geiqmOaDkeODu+aMkeeZuuODu+iHs+mrmOOBruODleOCp+ODgeWLleeUu+OBjOOBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MTVfYXJvL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjM2Ml9UMTcxODM0NjUyOS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgqLjgq3jg47jg6rimIbmnIDlpKc1MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8yOSjlnJ8pMTDmmYLjgb7jgafjgJHnlLfjga7jgqjjg63poZjmnJvjgpLlj7bjgYjjgabjgY/jgozjgovjgIxBS05S44CN44Gu5Lq65rCX44K/44Kk44OI44Or44GM5pyf6ZaT6ZmQ5a6a44GK6LK344GE5b6X4pmq",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9zb2RfZ3JvdXAvaW5kZXguaHRtP3BhZ2VfdHlwZT1zYWxlJmFmZmk9Mzg3NDk="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjM1NV9UMTcxODM0NjAyMy5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDooZfop5Ljgrfjg63jgqbjg4jjg4rjg7Pjg5HvvIE1MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8xNyjmnIgpMTDmmYLjgb7jgafjgJE0OOaZgumWk+mZkOWumlNBTEXplovlgqzkuK3vvIHooZfooYzjgY/ntKDkurrlqJjvvIbnvo7kurrlprvjga7jg6rjgqLjg6tTRVjjgYzjgYrosrfjgYTlvpfimao=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9wcmVzdGlnZS9pbmRleC5odG0/cGFnZV90eXBlPXNhbGUyJmFmZmk9Mzg3NDk="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjI5NV9UMTcxODI1OTc1OC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDntKDkurrli5XnlLvimIbmnIDlpKc3MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8yOCjph5EpMTDmmYLjgb7jgafjgJHjgIzkv7rjga7ntKDkurotWi3jgI3jgarjganntKDkurrli5XnlLsyMuODoeODvOOCq+ODvOOBruS9nOWTgeOBjOacn+mWk+mZkOWumuOBiuiyt+OBhOW+l++8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MTRfYmJicy9pbmRleC5odG0/cGFnZV90eXBlPXNhbGUmYWZmaT0zODc0OQ=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjI3NF9UMTcxODE3NDk0MS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICAx6YCx6ZaT6ZmQ5a6a77yB54af5aWz5YuV55S74piFNzDvvIVPRkbjgrvjg7zjg6sKICAgICAgICAgICAg",
    "title": "44CQNi8yMCjmnKgpMTDmmYLjgb7jgafjgJHlm5vljYHot6/jgYvjgonkuIPljYHot6/jgb7jgafmnKznianjga7nhp/lpbPjgZ/jgaHjgYzprYXjgZvjgovmv4Plr4bkuqTlsL7jgYzku4rjgaDjgZHmv4DlronotoXnibnkvqHvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MTNfamtqL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjIyNV9UMTcxODAwNTQ3OS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgZPjgozjgZ7vvIHntKDkurrimIU3MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8xOSjmsLQpMTDmmYLjgb7jgafjgJE35pel6ZaT6ZmQ5a6aU0FMRemWi+WCrOS4re+8gea1ruawl+ebm+OCiuOBque0oOS6uueGn+Wmu+OBruS4jeiynuaAp+S6pOWLleeUu+OBjOOBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MTJfa3J6L2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjIxOV9UMTcxODAwNTA0Ni5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDntKDkurrjg4/jg6Hmkq7jgorli5XnlLvimIbmnIDlpKc3MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8yNSjngaspMTDmmYLjgb7jgafjgJExMOODoeODvOOCq+ODvOWQiOWQjFNBTEXplovlgqzkuK3vvIHjganjgZnjgZHjgbnjgrfjg63jgqbjg4jlgIvmkq7mtYHlpLHmmKDlg4/jgYzotoXnibnkvqHvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MTFfZ3NyL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjE0Nl9UMTcxNzc0MjU1OC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjg5fjg6njg43jg4Pjg4jjg5fjg6njgrnimIbmnIDlpKc3MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8yMyjml6UpMTDmmYLjgb7jgafjgJHniIbkubPnvo7nhp/lpbPvvIblvq7kubPnvo7lsJHlpbPjgYzprYXjgZvjgovmg5HmmJ/jg6zjg5njg6vjga7mv4Djgqjjg63li5XnlLvjgYzmnJ/plpPpmZDlrprjgYrosrfjgYTlvpfimao=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MDlfcGxwL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjM4OF9UMTcxODM1MTcxMS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDlj7LkuIrliJ3vvIHjgqLjg6rjg7zjg4rlhajkvZzlk4E3MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8xNyjmnIgpMTDmmYLjgb7jgafjgJHjg4rjg7Pjg5FBVuOBruWFg+elluOAjOOCtuODu+ODiuODs+ODkeOCueODmuOCt+ODo+ODq+OAjeOBquOBqeattOWPsueahOWQjeS9nOOBjOacn+mWk+mZkOWumui2heeJueS+oe+8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MDNfYXJlL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjMwMV9UMTcxODI2MDE1MC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDvvKXimIXntKDkurrvvIZDdWxsZXQ3MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8xNijml6UpMTDmmYLjgb7jgafjgJHmuIXmpZrns7vnvo7lsJHlpbPjgYvjgonlppboibbjgrvjg6zjg5bkurrlprvjgb7jgafjgqzjg4HntKDkurrjgqjjg63li5XnlLvjgYzmnJ/plpPpmZDlrprotoXnibnkvqHvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA2MDJfZWh4L2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMjE2N19UMTcxNzc0NDExNC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjg5fjg6zjgrnjg4bjg7zjgrjjgrDjg6vjg7zjg5fimIbkurrmsJfkvZzlk4FTQUxFCiAgICAgICAgICAgIA==",
    "title": "44CQNi8xOCjngaspMTDmmYLjgb7jgafjgJHjgI5PTkUgTU9SReOAj+OAjuOCsuODg+ODhO+8ge+8geOAj+OAjum7kuiIueOAj+OBquOBqeWjsuOCjOeti+OCv+OCpOODiOODq+OBjOOBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9wcmVzdGlnZS9pbmRleC5odG0/cGFnZV90eXBlPXNhbGUmYWZmaT0zODc0OQ=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMjI5OF9UMTU4MzEzNDU2Ni5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDlupfplbfjga7ogqHplpPjgpLlpa7jgo/jgZvjgZ/imIXnhanmgqlBVuOCs+ODrOOCr+OCt+ODp+ODs++8gQogICAgICAgICAgICA=",
    "title": "44Kq44Kr44K65o6i44GX44Gr6L+344Gj44Gf44KJ44Kz44Kz77yB4piF5bqX6ZW344GM54us5pat44GoKOmBjuW6puOBrinlgY/opovjgafopovmiYAo44Kk44Kk44OI44KzKeOCkuODrOODk+ODpeODvOOBl+OBn+S9nOWTgeOBsOOBi+OCiuOCkuODlOODg+OCr+OCouODg+ODl++8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iaXJ0aF9hbm5pdmVyc2FyeS9pbmRleC5odG0/YWZmaT0zODc0OQ=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfNTI3OF9UMTU4MzEzNDU3Ny5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgrnjgr/jg4Pjg5Xjg4rjg5nnmoTimIXmv4DmjqjjgZdBVuOCs+ODrOOCr+OCt+ODp+ODswogICAgICAgICAgICA=",
    "title": "44Os44OT44Ol44O857eP5pWwMTAwMOacrOi2heOBiO+8geW6l+mVt+OCiOOCiuOCgkFW5rys44GR44Gu44OK44OZ44GM5paH5a2X44Gn5o6o44GZ4piF6KaL44Gm5qyy44GX44GE5L2c5ZOB44KS44OU44OD44Kv44Ki44OD44OX77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9uYWJlX2Fubml2ZXJzYXJ5L2luZGV4Lmh0bT9hZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfNDMzNl9UMTU4Mzc0MDk2MS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgr3jgq/jg5/jg6vjgJDmh5Djgqjjg61BVuaUr+W6l+OAkQogICAgICAgICAgICA=",
    "title": "VkhT5pmC5Luj44Gu5ZCN5L2c44O7ODAvJzkw5bm05Luj44GuQVbjgqLjgqTjg4njg6vlh7rmvJTkvZzjgYzmpa3nlYzmnIDlpKfntJrjga7lk4Hmj4PjgYjvvIHimIXphY3kv6HjgafjgZfjgYvopovjgonjgozjgarjgYTjgqjjg63jg5Pjg4fjgqrjgYzmj4PjgaPjgabjgb7jgZnvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9vdGFrYXJhL2luZGV4Lmh0bT9hZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMDM3MV9UMTU4Mzc0MDk3Mi5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDntKDkurrli5XnlLvmlK/lupcKICAgICAgICAgICAg",
    "title": "44Ko44Ot44GP44Gm44Kr44Ov44Kk44Kk5aWz44Gu5a2Q44KE5qyy5rGC5LiN5rqA44Gu6Iul5aa744Gu44OP44Oh5pKu44KK5pig5YOP44GM5Yui44Ge44KN44GE77yB4piF44ON44OD44OI44Kq44Oq44K444OK44Or44Gu57Sg5Lq65YuV55S744KS6ZuG44KB44G+44GX44Gf77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9zaGlyb3RvL2luZGV4Lmh0bT9hZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMy9pbWdfMzQ4OV9UMTU4MzExOTU4Ny5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDmnIDlpKc2Nu+8hU9GRiDpgLHmm7/jgo/jgorjgrvjg7zjg6sKICAgICAgICAgICAg",
    "title": "576O5bCR5aWz44O7576O5aWz44GL44KJ5LyB55S744Oi44OO44CB54af5aWz44O75Lq65aa744Gu5aOy44KM562L44K/44Kk44OI44Or44G+44Gn77yB4piG5Lq65rCX5L2c5ZOB44GM5pyA5aSnNjbvvIVPRkbjga7jgYrosrfjgYTlvpfjgrvjg7zjg6vvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9jYW1wYWlnbi9pbmRleC5odG0/YWZmaT0zODc0OQ=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMjIzNF9UMTU4Mzc0MDk4MS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgr3jgq/jg5/jg6vnhp/lpbPmlK/lupcKICAgICAgICAgICAg",
    "title": "5Zub5Y2B6Lev44O75LqU5Y2B6Lev77yP44G944Gj44Gh44KD44KK77yP6L+R6Kaq55u45aem4oCm4piFKOeGn+Wls+WlveOBjeOBruWjsOOBq+W/nOOBiOOBnynpgbjjgorjgZnjgZDjgorjga7jgIzlo7Io54afKeOCjOeti+OAjeS9nOWTgeOBsOOBi+OCiumbhuOCgeOBvuOBl+OBn++8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9qdWt1am8vaW5kZXguaHRtP2FmZmk9Mzg3NDk="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMC9pbWdfMTk5NC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICAzMDDlhobjgafopovjgozjgaHjgoPjgYZBVuWLleeUu++8gQogICAgICAgICAgICA=",
    "title": "5bCC5bGe576O5bCR5aWz44O7576O5aWz44GL44KJ5Lq65aa744O754af5aWz5Li75ryU5L2c44CB5Lq65rCX44Gu5LyB55S744K344Oq44O844K644GL44KJ55Sf44CF44GX44GE57Sg5Lq65YuV55S744G+44GnMzAw5YaG44Gn5aSn5pS+5Ye65Lit77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9sb3dwcmljZS9pbmRleC5odG0/YWZmaT0zODc0OQ=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMC9pbWdfMjAwM19UMTQ1NTg0NzIyMC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDku4rjgYzml6zvvIHmlrDkurrlpbPlhKohCiAgICAgICAgICAgIA==",
    "title": "44K944Kv44Of44Or44K544K/44OD44OV5rOo55uu44Gu5paw5Lq6QVblpbPlhKrjgpLjg5Tjg4Pjgq/jgqLjg4Pjg5fvvIHmr47mnIjmm7TmlrDvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9uZXdmYWNlL2luZGV4Lmh0bT9hZmZpPTM4NzQ5"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMS9pbWdfNTczMl9UMTQ2NTM3MzU1OC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgr3jg5Xjg4jjg7vjgqrjg7Pjg7vjg4fjg57jg7Pjg4kg4piF5o+D44Gj44Gm44G+44GZ77yBCiAgICAgICAgICAgIA==",
    "title": "U09E44Kw44Or44O844OXIOWFqOS9nOWTgeKYhuWwguWxnuOCueOCv+ODvOOCgu+8geS6uuawl+S8geeUu+ODouODjuOCgu+8geS6uuawl+OCv+OCpOODiOODq+OBruaXp+S9nOOBjDMwMOWGhu+9nuimi+OCjOOBoeOCg+OBhOOBvuOBme+8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9zb2RfZ3JvdXAvaW5kZXguaHRtP2FmZmk9Mzg3NDk="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMS9pbWdfMjcwOV9UMTQ0NjQ0MjY2NS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDnvo7lsJHlpbPjg7vnvo7lpbPpmZDlrprvvIHimIXjg5fjg6zjgrnjg4bjg7zjgrgKICAgICAgICAgICAg",
    "title": "44Go44Gr44GL44GP44Kr44Ov44Kk44Kk77yB44Go44Gr44GL44GP44Ko44Ot44GE77yB44OX44Os44K544OG44O844K444Gu5bCC5bGe5aWz5YSq5Ye65ryU5L2c44GL44KJ44CB5Lq65aa744O757Sg5Lq644O75LyB55S744K/44Kk44OI44Or44G+44GnMzAw5YaG772e6KaL44KM44Gh44KD44GE44G+44GZ",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9wcmVzdGlnZS9pbmRleC5odG0/YWZmaT0zODc0OQ=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMy9pbWdfNjkxMl9UMTYwNDQ4MDI0Ni5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDmlrDkuJbku6NBVuODoeODvOOCq+ODvCBGQUxFTk/phY3kv6HkuK3vvIEKICAgICAgICAgICAg",
    "title": "6YWN5L+h54m55YyW5Z6L5paw5LiW5LujQVbjg6Hjg7zjgqvjg7wgRkFMRU5P44GL44KJ44CB5pyJ5ZCN5Y2Y5L2T5aWz5YSq5L2c5ZOB44KE6Kmx6aGM44Gu5paw5Lq644OH44OT44Ol44O85L2c44Gq44Gp44OX44Os44Of44Ki44Og44Gq5L2c5ZOB44GM6YWN5L+h5Lit",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9mbG5fb3Blbi9pbmRleC5odG0/YWZmaT0zODc0OQ=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMTczMV9UMTUxNzM4MzMxOS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgJDlpbPmgKflkJHjgZHjgJHlpoTmg7Pli5XnlLvpm4bjgoHjgb7jgZfjgZ/vvIEKICAgICAgICAgICAg",
    "title": "44K944Kv44Of44Or5aWz5a2Q56S+5ZOh44GM44CB5LiW6ZaT44Gu5aWz5oCn44Gf44Gh44GM5aaE5oOz44GZ44KL44Gu44Gr44G044Gj44Gf44KK44Gq44CB44Gh44KH44Gj44Go44Ko44OD44OB44Gn6IO444Kt44Ol44Oz44Gq5YuV55S744KS6ZuG44KB44Gm44G/44G+44GX44Gf77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9naXJsc19zaWRlL2luZGV4Lmh0bT9hZmZpPTM4NzQ5"
  }
];
  const iItems = [
  {
    "imgSrc": "aHR0cHM6Ly9saXZlZG9vci5ibG9naW1nLmpwL2N1cmF0ZS9pbWdzL2QvMC9kMDlkYjdlNy5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAg",
    "title": "5rCX44Gr44Gq44KL44GC44Gu5aiY44Gu5Yid44KB44Gm44Gv4oCm5paw5Lq644Kw44Op44OT44Ki44Ki44Kk44OJ44Or44Gq44KJ44OW44Os44Kk44Oz4pmqIEJSQUlO77yP44OW44Os44Kk44Oz44Gu44Kw44Op44OT44Ki5YuV55S744GM5pyf6ZaT6ZmQ5a6a5pyA5aSnNzDvvIVPRkbjgafjgZnvvIHjgYrlvpfjgarjgZPjga7jg4Hjg6Pjg7PjgrnjgpLjgZzjgbLjgYropovpgIPjgZfjgarjgY/imao=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9pZG9sL3NwL2JhcmdhaW4yMDI0MDYwM19icm4vaW5kZXguaHRtP2FmZmk9Mzg3NDk="
  }
];
  const items = myInfo.category === "IDOL" ? iItems : aItems;
  if (items && items.length) {
    const h2Title = decode("44K944Kv44Of44OrIOOCu+ODvOODq+S4gOimpw==");
    const saleInfoEl = genEl(`<div class="saleInfo"><h2>${h2Title}</h2></div>`);
    const itemsHtml = items
      .map(
        (item) =>
          `<div class="sale-item">
             <a href="${decode(item.afUrl)}" target="_blank">
               <div class="saleImgWrapper"><img src="${decode(
                 item.imgSrc
               )}"></div>
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
