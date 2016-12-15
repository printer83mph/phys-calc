window.onload = function() {
	var inelasticBtn = document.getElementById("inelastic-btn");
	inelasticBtn.addEventListener("click",function() {
		var v1 = document.getElementById("inelastic-v1");
		var m1 = document.getElementById("inelastic-m1");
		var v2 = document.getElementById("inelastic-v2");
		var m2 = document.getElementById("inelastic-m2");
		var vf = document.getElementById("inelastic-vf");
		var p = document.getElementById("inelastic-p");
		
		p.innerHTML = v1.value * m1.value + v2.value * m2.value;
		vf.innerHTML = p.innerHTML / (Number(m1.value) + Number(m2.value));
	});
};