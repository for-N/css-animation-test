(async function () {
  const myInfo = JSON.parse(document.querySelector(".myInfo").innerText);
  const aItems = [
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNi9pbWdfMzc0Ml9UMTcwMzEzNjc2NC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICAyMDIz5bm06ZaT44Op44Oz44Kt44Oz44Kw55m66KGoCiAgICAgICAgICAgIA==",
    "title": "MjAyM+W5tOOBruS6uuawl+S9nOWTgeOCkuODqeODs+OCreODs+OCsOW9ouW8j+OBp+S4gOaMmeOBq+eiuuiqje+8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9yYW5reWVhcjIwMjMvaW5kZXguaHRtP2FmZmk9Mzg2NzY="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTUwMl9UMTcxNTkyOTIwNy5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgrfjg43jg57jg6bjg4vjg4Pjg4jjg7vjgqzjgrnimIY1MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8zKOaciCkxMOaZguOBvuOBp+OAkeeIhuS5s+ODu+W3qOS5s+WwgumWgOODoeODvOOCq+ODvOOBrumrmOWTgeizquOBiuOBo+OBseOBhOODleOCp+ODgeWLleeUu+OBjOacn+mWk+mZkOWumuOBiuiyt+OBhOW+l++8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MjBfZ2FzL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTQ4OF9UMTcxNTkyODE3OC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgrPjgrnjg6LjgrnmmKDlg4/imIYzMO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNi8xKOWcnykxMOaZguOBvuOBp+OAkee0oOS6uuWmu+OBjOS7luS6uuajkuOBp+OCpOOCreOBvuOBj+OCi++8geS4iuWTgeOBquWlpeanmOOBruS4i+WTgeOBquOCu+ODg+OCr+OCueOBjOacn+mWk+mZkOWumuOBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9zb2RfZ3JvdXAvaW5kZXguaHRtP3BhZ2VfdHlwZT1zYWxlJmFmZmk9Mzg2NzY="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTQxNV9UMTcxNTg0MTQ1NC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICBoLm0ucOKYhjcw77yFT0ZG44K744O844OrCiAgICAgICAgICAgIA==",
    "title": "44CQNS8zMSjph5EpMTDmmYLjgb7jgafjgJHnvo7lsJHlpbPvvIbnvo7lpbPjgYzli6LjgZ7jgo3jgYTimarmnIDmlrDkvZzjgYvjgonmh5DjgYvjgZfjga7jgYrlrp3mmKDlg4/jgb7jgafmnJ/plpPpmZDlrprotoXnibnkvqHvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTdfaG1wL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTUzNl9UMTcxNTkzMTUxNy5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICBNSUxL77yG44OV44Kn44OB55y84piFNzDvvIVPRkbjgrvjg7zjg6sKICAgICAgICAgICAg",
    "title": "44CQNS8yMijmsLQpMTDmmYLjgb7jgafjgJEx6YCx6ZaT6ZmQ5a6aU0FMRemWi+WCrOS4re+8geODieOCueOCseODmeWmhOaDs+WFqOmWi+OBrueJuea/g+OCqOODreWLleeUu+OBjOOBiuiyt+OBhOW+l+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTVfYm1mL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTU0N19UMTcxNTkzMjIzNC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICBLQU5CaeKYhuS6uuawl+S9nOWTgeOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNS8yOCjngaspMTDmmYLjgb7jgafjgJHmt6vkubHnvo7kurrlprvvvIblppboibbnvo7nhp/lpbPjgYzprYXjgZvjgovkuK3lh7rjgZfmh4fpoZjjgrvjg4Pjgq/jgrnjgYzmnJ/plpPpmZDlrprjgYrosrfjgYTlvpfvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9wcmVzdGlnZS9pbmRleC5odG0/cGFnZV90eXBlPXNhbGUmYWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTI4MV9UMTcxNTMyODE0NC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgrvjgq/jgrfjg7zjgrDjg6njg5PjgqLli5XnlLvimIbmnIDlpKc3MO+8hU9GRgogICAgICAgICAgICA=",
    "title": "44CQNS8yNyjmnIgpMTDmmYLjgb7jgafjgJHjgq7jg6rjgq7jg6rjgqjjg63jgrnjgYzjgZ/jgb7jgonjgarjgYTpgY7mv4Djgarjgrvjgq/jgrfjg7zjgrDjg6njg5PjgqLli5XnlLvjgYzjgYrosrfjgYTlvpfvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTNfc2dhL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTI1M19UMTcxNTMyNDExOC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDlkI3kvZzjg53jg6vjg47imIY1MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNS8yNSjlnJ8pMTDmmYLjgb7jgafjgJHjgYTjgoTjgonjgZfjgYTnhp/jgozjgZ/lpbPjga7jg6rjgqLjg6rjgrrjg6DjgpLov73msYLjgZfjgZ/og4zlvrPjg4njg6njg57jgYzmnJ/plpPpmZDlrprjgYrosrfjgYTlvpfvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTFfY2NwL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwNy9pbWdfMTE4OF9UMTcxNTIxNzYxNS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjg5Pjg4PjgrDjg6Ljg7zjgqvjg6vimIY3MO+8hU9GRuOCu+ODvOODqwogICAgICAgICAgICA=",
    "title": "44CQNS8yNCjph5EpMTDmmYLjgb7jgafjgJHmnIDlronkvqHmoLzlrqPoqIDvvIHnhp/lpbPkurrlprvjgYvjgonph5Hpq6rnvo7lpbPjgb7jgafjg4zjgrHjgovli5XnlLvjgYzmnJ/plpPpmZDlrprjgYrosrfjgYTlvpfimao=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iYXJnYWluMjAyNDA1MTBfYm1rL2luZGV4Lmh0bT9wYWdlX3R5cGU9c2FsZSZhZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMjI5OF9UMTU4MzEzNDU2Ni5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDlupfplbfjga7ogqHplpPjgpLlpa7jgo/jgZvjgZ/imIXnhanmgqlBVuOCs+ODrOOCr+OCt+ODp+ODs++8gQogICAgICAgICAgICA=",
    "title": "44Kq44Kr44K65o6i44GX44Gr6L+344Gj44Gf44KJ44Kz44Kz77yB4piF5bqX6ZW344GM54us5pat44GoKOmBjuW6puOBrinlgY/opovjgafopovmiYAo44Kk44Kk44OI44KzKeOCkuODrOODk+ODpeODvOOBl+OBn+S9nOWTgeOBsOOBi+OCiuOCkuODlOODg+OCr+OCouODg+ODl++8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9iaXJ0aF9hbm5pdmVyc2FyeS9pbmRleC5odG0/YWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfNTI3OF9UMTU4MzEzNDU3Ny5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgrnjgr/jg4Pjg5Xjg4rjg5nnmoTimIXmv4DmjqjjgZdBVuOCs+ODrOOCr+OCt+ODp+ODswogICAgICAgICAgICA=",
    "title": "44Os44OT44Ol44O857eP5pWwMTAwMOacrOi2heOBiO+8geW6l+mVt+OCiOOCiuOCgkFW5rys44GR44Gu44OK44OZ44GM5paH5a2X44Gn5o6o44GZ4piF6KaL44Gm5qyy44GX44GE5L2c5ZOB44KS44OU44OD44Kv44Ki44OD44OX77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9uYWJlX2Fubml2ZXJzYXJ5L2luZGV4Lmh0bT9hZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfNDMzNl9UMTU4Mzc0MDk2MS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgr3jgq/jg5/jg6vjgJDmh5Djgqjjg61BVuaUr+W6l+OAkQogICAgICAgICAgICA=",
    "title": "VkhT5pmC5Luj44Gu5ZCN5L2c44O7ODAvJzkw5bm05Luj44GuQVbjgqLjgqTjg4njg6vlh7rmvJTkvZzjgYzmpa3nlYzmnIDlpKfntJrjga7lk4Hmj4PjgYjvvIHimIXphY3kv6HjgafjgZfjgYvopovjgonjgozjgarjgYTjgqjjg63jg5Pjg4fjgqrjgYzmj4PjgaPjgabjgb7jgZnvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9vdGFrYXJhL2luZGV4Lmh0bT9hZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMDM3MV9UMTU4Mzc0MDk3Mi5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDntKDkurrli5XnlLvmlK/lupcKICAgICAgICAgICAg",
    "title": "44Ko44Ot44GP44Gm44Kr44Ov44Kk44Kk5aWz44Gu5a2Q44KE5qyy5rGC5LiN5rqA44Gu6Iul5aa744Gu44OP44Oh5pKu44KK5pig5YOP44GM5Yui44Ge44KN44GE77yB4piF44ON44OD44OI44Kq44Oq44K444OK44Or44Gu57Sg5Lq65YuV55S744KS6ZuG44KB44G+44GX44Gf77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9zaGlyb3RvL2luZGV4Lmh0bT9hZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMy9pbWdfMzQ4OV9UMTU4MzExOTU4Ny5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDmnIDlpKc2Nu+8hU9GRiDpgLHmm7/jgo/jgorjgrvjg7zjg6sKICAgICAgICAgICAg",
    "title": "576O5bCR5aWz44O7576O5aWz44GL44KJ5LyB55S744Oi44OO44CB54af5aWz44O75Lq65aa744Gu5aOy44KM562L44K/44Kk44OI44Or44G+44Gn77yB4piG5Lq65rCX5L2c5ZOB44GM5pyA5aSnNjbvvIVPRkbjga7jgYrosrfjgYTlvpfjgrvjg7zjg6vvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9jYW1wYWlnbi9pbmRleC5odG0/YWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMjIzNF9UMTU4Mzc0MDk4MS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgr3jgq/jg5/jg6vnhp/lpbPmlK/lupcKICAgICAgICAgICAg",
    "title": "5Zub5Y2B6Lev44O75LqU5Y2B6Lev77yP44G944Gj44Gh44KD44KK77yP6L+R6Kaq55u45aem4oCm4piFKOeGn+Wls+WlveOBjeOBruWjsOOBq+W/nOOBiOOBnynpgbjjgorjgZnjgZDjgorjga7jgIzlo7Io54afKeOCjOeti+OAjeS9nOWTgeOBsOOBi+OCiumbhuOCgeOBvuOBl+OBn++8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9qdWt1am8vaW5kZXguaHRtP2FmZmk9Mzg2NzY="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMC9pbWdfMTk5NC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICAzMDDlhobjgafopovjgozjgaHjgoPjgYZBVuWLleeUu++8gQogICAgICAgICAgICA=",
    "title": "5bCC5bGe576O5bCR5aWz44O7576O5aWz44GL44KJ5Lq65aa744O754af5aWz5Li75ryU5L2c44CB5Lq65rCX44Gu5LyB55S744K344Oq44O844K644GL44KJ55Sf44CF44GX44GE57Sg5Lq65YuV55S744G+44GnMzAw5YaG44Gn5aSn5pS+5Ye65Lit77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9sb3dwcmljZS9pbmRleC5odG0/YWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMC9pbWdfMjAwM19UMTQ1NTg0NzIyMC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDku4rjgYzml6zvvIHmlrDkurrlpbPlhKohCiAgICAgICAgICAgIA==",
    "title": "44K944Kv44Of44Or44K544K/44OD44OV5rOo55uu44Gu5paw5Lq6QVblpbPlhKrjgpLjg5Tjg4Pjgq/jgqLjg4Pjg5fvvIHmr47mnIjmm7TmlrDvvIE=",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9uZXdmYWNlL2luZGV4Lmh0bT9hZmZpPTM4Njc2"
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMS9pbWdfNTczMl9UMTQ2NTM3MzU1OC5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgr3jg5Xjg4jjg7vjgqrjg7Pjg7vjg4fjg57jg7Pjg4kg4piF5o+D44Gj44Gm44G+44GZ77yBCiAgICAgICAgICAgIA==",
    "title": "U09E44Kw44Or44O844OXIOWFqOS9nOWTgeKYhuWwguWxnuOCueOCv+ODvOOCgu+8geS6uuawl+S8geeUu+ODouODjuOCgu+8geS6uuawl+OCv+OCpOODiOODq+OBruaXp+S9nOOBjDMwMOWGhu+9nuimi+OCjOOBoeOCg+OBhOOBvuOBme+8gQ==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9zb2RfZ3JvdXAvaW5kZXguaHRtP2FmZmk9Mzg2NzY="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMS9pbWdfMjcwOV9UMTQ0NjQ0MjY2NS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDnvo7lsJHlpbPjg7vnvo7lpbPpmZDlrprvvIHimIXjg5fjg6zjgrnjg4bjg7zjgrgKICAgICAgICAgICAg",
    "title": "44Go44Gr44GL44GP44Kr44Ov44Kk44Kk77yB44Go44Gr44GL44GP44Ko44Ot44GE77yB44OX44Os44K544OG44O844K444Gu5bCC5bGe5aWz5YSq5Ye65ryU5L2c44GL44KJ44CB5Lq65aa744O757Sg5Lq644O75LyB55S744K/44Kk44OI44Or44G+44GnMzAw5YaG772e6KaL44KM44Gh44KD44GE44G+44GZ",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9wcmVzdGlnZS9pbmRleC5odG0/YWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMy9pbWdfNjkxMl9UMTYwNDQ4MDI0Ni5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDmlrDkuJbku6NBVuODoeODvOOCq+ODvCBGQUxFTk/phY3kv6HkuK3vvIEKICAgICAgICAgICAg",
    "title": "6YWN5L+h54m55YyW5Z6L5paw5LiW5LujQVbjg6Hjg7zjgqvjg7wgRkFMRU5P44GL44KJ44CB5pyJ5ZCN5Y2Y5L2T5aWz5YSq5L2c5ZOB44KE6Kmx6aGM44Gu5paw5Lq644OH44OT44Ol44O85L2c44Gq44Gp44OX44Os44Of44Ki44Og44Gq5L2c5ZOB44GM6YWN5L+h5Lit",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9mbG5fb3Blbi9pbmRleC5odG0/YWZmaT0zODY3Ng=="
  },
  {
    "imgSrc": "aHR0cHM6Ly9pbWcuc29rbWlsLmNvbS9pbWFnZS9jYXRlZ29yeS9uYU9qcHovMDAwMi9pbWdfMTczMV9UMTUxNzM4MzMxOS5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICDjgJDlpbPmgKflkJHjgZHjgJHlpoTmg7Pli5XnlLvpm4bjgoHjgb7jgZfjgZ/vvIEKICAgICAgICAgICAg",
    "title": "44K944Kv44Of44Or5aWz5a2Q56S+5ZOh44GM44CB5LiW6ZaT44Gu5aWz5oCn44Gf44Gh44GM5aaE5oOz44GZ44KL44Gu44Gr44G044Gj44Gf44KK44Gq44CB44Gh44KH44Gj44Go44Ko44OD44OB44Gn6IO444Kt44Ol44Oz44Gq5YuV55S744KS6ZuG44KB44Gm44G/44G+44GX44Gf77yB",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9hdi9zcC9naXJsc19zaWRlL2luZGV4Lmh0bT9hZmZpPTM4Njc2"
  }
];
  const iItems = [
  {
    "imgSrc": "aHR0cHM6Ly9saXZlZG9vci5ibG9naW1nLmpwL2N1cmF0ZS9pbWdzLzIvZC8yZGQ3MmJmNy5qcGc=",
    "catchphrase": "CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAg",
    "title": "Ni8zKOaciCkxMOaZguOBvuOBp+KYhkktT05F77yP44Ki44Kk44OJ44Or44Ov44Oz44Gu576O5bCR5aWz44O7576O5aWz44O75beo5Lmz44O754iG5Lmz77yB5Lq65rCX44Gu44Kw44Op44OT44Ki44Ki44Kk44OJ44Or44KE6ISx44GE44Gg44KJ5YeE44GE44Kw44Op44OT44Ki44Ki44Kk44OJ44Or44Gf44Gh44Gu44K744Kv44K344O844K344On44OD44OI44GM5rqA6LyJIEktT05F77yP44Ki44Kk44OJ44Or44Ov44Oz44Gu44Kw44Op44OT44Ki5YuV55S744GMNTDvvIVPRkbvvIvjg53jgqTjg7Pjg4gzMOWAje+8geOBiuW+l+OBquOBk+OBruODgeODo+ODs+OCueOCkuOBnOOBsuOBiuimi+mAg+OBl+OBquOBj+KZqg==",
    "afUrl": "aHR0cHM6Ly93d3cuc29rbWlsLmNvbS9pZG9sL3NwL2JhcmdhaW4yMDI0MDUyMF9sY20vaW5kZXguaHRtP2FmZmk9Mzg2NzY="
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
