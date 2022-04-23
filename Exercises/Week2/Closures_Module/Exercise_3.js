const SongsManager = function(){
    const songs = {
        "sax": "3JZ4pnNtyxQ",
        "how long": "CwfoyVa980U"
      }
    const addSong = function(name,url){
        let NewUrl = ""
        for(letter in url)
           if(url[letter]=="=")
              NewUrl = url.substring(letter).substring(1)   
      songs[name] = NewUrl
    }
    const getSong = function(name){
        if (songs[name] != undefined)
              return "https:"+"//www.youtube.com/watch?v="+songs[name]  
        return "Not Exist!"
    }
    return {
        addSong: addSong,
        getSong: getSong
    }
}
const SongsM = SongsManager()
console.log(SongsM.getSong("sax"))
SongsM.addSong("basem","https://www.youtube.com/watch?v=3JZ4pnsffsdQ")



