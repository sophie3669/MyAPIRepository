	$(document).ready(function(){

		$('.btn').on('click', function(){
			var name = $('.firstname').val();
           

	  $.ajax({
	  	url: "https://api.github.com/users/" + name
	   
	  }).then(function(data){


	   $('.id').append(data.id);
	   $('.url').append(data.avatar_url);
       $('.login').append(data.login);
	   $('.subscription_url').append(data.subscription_url);
	   $('.updated_at').append(data.updated_at); 
       $('.public_repos').append(data.public_repos); 


	   
	  });

	  return false;

	});
		});
