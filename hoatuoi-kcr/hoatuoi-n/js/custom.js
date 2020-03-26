/*
	Programmer: Lukasz Czerwinski
	CodeCanyon: http://codecanyon.net/user/Lukasz_Czerwinski
	 
	If this script you like, please put a comment on codecanyon.
	
*/

$(document).ready(function (){ 
  //Usage 
  $("#gallery").flickrGallery({
            //FLICKR API KEY
            Key: '7f321ae429908ef0fcc069c9c4c2574b',
//            //Secret
            Secret: 'd08e99f7f1efc18b',
//            //FLICKR user ID
            User: '185971870@N02',
//            //Flickr PhotoSet ID
            PhotoSet: '72157713630232253'
  });
}); 
