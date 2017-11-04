var playlist = {coldPlay:"Scientist"}
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  var x = delete playlist.artistName;
  return x;
}
