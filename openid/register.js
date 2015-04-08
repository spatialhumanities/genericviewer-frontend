GV.OpenID.Main = function() {
	
	var securityCounter = 0;
	
	var logged = function() {
		return typeof(_PUNDIT) != "undefined" && typeof(_PUNDIT.myPundit) != "undefined" && _PUNDIT.myPundit.logged;
	}
	
	this.displayToprow = function() {
		if (GV.setting.spatialstore.getSpatialcontext() && typeof(_PUNDIT) != "undefined" && typeof(_PUNDIT.myPundit) != "undefined")
			document.getElementById("toprowUL").removeAttribute("style");
		else
			window.setTimeout(GV.openid.displayToprow,1000);
	}
	
	var showConnect = function(show) {
		if (show)
			document.getElementById("connectID").removeAttribute("style");
		else
			document.getElementById("connectID").setAttribute("style","display:none");
	}
	
	this.update = function() {
		callback(!logged());
		callback(logged());
		displayToprow();
	}
	var callback = function(status) {
		securityCounter++;
		if (securityCounter < 300 && (logged()) == status) {
			window.setTimeout(function(){callback(status)},1000);
		}
		else {
			if (logged()) {
				showConnect(true);
				document.getElementById("logimg").setAttribute("src","img/logout.png");
				document.getElementById("logtext").innerHTML = " Logout";
				document.getElementById("user").innerHTML = _PUNDIT.myPundit.user.email;
			} else {
				showConnect(false);
				document.getElementById("logimg").setAttribute("src","img/login.png");
				document.getElementById("logtext").innerHTML = " Login";
				document.getElementById("user").innerHTML = "not logged in";
			}
		}
	}
	this.getUser = function() {
		if (logged())
			return _PUNDIT.myPundit.user.email;
		else
			return false;
	}
	
	/*
	_PUNDIT.myPundit.logged
	_PUNDIT.myPundit.loginFunction
	_PUNDIT.myPundit.logoutFunction
	
	*/
	
	this.log = function() {
		if (logged()) {
			_PUNDIT.myPundit.logoutFunction();
			//document.getElementById('pundit-mypundit-loggedin-button').onclick();
			window.setTimeout(function(){callback(true)},1000);
		}
		else {
			_PUNDIT.myPundit.loginFunction("noPopUp");
			window.setTimeout(function(){callback(false)},1000);
		}
		securityCounter = 0;
	}
	
}