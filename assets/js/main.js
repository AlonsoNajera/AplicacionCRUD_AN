console.log("Entro al main.js");


var friendList=[];

function addFriend(pid,pnom,pape,pocup,psueldo)
{
    var newFriend = {
        id:pid,
        name:pnom,
        apellido:pape,
        ocupacion:pocup,
        sueldo:psueldo
    };
    console.log(newFriend);
   
    friendList.push(newFriend);
    jsonStoreList(friendList);


}

function getFriendList() {
   
   var storedList=localStorage.getItem('localList');
    if (storedList==null){

        friendList=[];

   }
   else {
    friendList=JSON.parse(storedList);
   }

    return friendList;
}

function jsonStoreList (plist){
    localStorage.setItem('localList',JSON.stringify(plist));
}

