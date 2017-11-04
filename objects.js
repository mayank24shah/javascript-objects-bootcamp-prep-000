var playlist = {coldPlay:"Scientist"}
function updatePlaylist(playlist, artistName, songTitle){
  return object.assign({},playlist,{[artistName]:songTitle})
}
