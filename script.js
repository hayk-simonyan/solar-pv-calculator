function myFunction(event) {
    event.preventDefault();
    
    var S = document.getElementById('S').value;
    var cos = document.getElementById('cos').value;
    var xetta = document.getElementById('xetta').value;
    var npr = document.getElementById('npr').value;
    var Tmin = document.getElementById('Tmin').value;
    var Tmax = document.getElementById('Tmax').value;
    var Tdeltai = document.getElementById('Tdeltai').value;
    var Tdeltav = document.getElementById('Tdeltav').value;
    var Voc = document.getElementById('Voc').value;
    var Vmpp = document.getElementById('Vmpp').value;
    var Isc = document.getElementById('Isc').value;
    var Vdcmaxwr = document.getElementById('Vdcmaxwr').value;
    var Vdcminwr = document.getElementById('Vdcminwr').value;
    var Pmaxmod = document.getElementById('Pmaxmod').value;

    var Pac = S * cos;
    var Pdc = Pac / xetta;
    var Pdcgen = Pdc * npr;
    var Vdcmaxmod = Voc * (1+(Tmin*Tdeltav/100));
    var Vdcminmod = Vmpp * (1+(Tmax*Tdeltai/100));
    var Idcmaxstr = Isc * (1+(Tmax*Tdeltai/100));
    var Nmaxmodstr = Math.floor(Vdcmaxwr/Vdcmaxmod);
    var Nminmodstr = Math.floor(Vdcminwr/Vdcminmod);
    var Nmodstr = Math.floor(Nmaxmodstr);
    var Nminstr = Math.floor(Pdcgen/(Pmaxmod*Nmodstr));

    var loader = document.querySelector('.loaderImage').style.display = 'block';
    var hide = document.querySelector('.calculating').style.display = 'none';
    setInterval(function(){ 
        var loader = document.querySelector('.loaderImage').style.display = 'none';
        var calculated = document.querySelector('.calculated').style.display = 'block';
        document.querySelector('#Pac').innerHTML = Pac;
        document.querySelector('#Pdc').innerHTML = Pdc || 0;
        document.querySelector('#Pdcgen').innerHTML = Pdcgen || 0;
        document.querySelector('#Vdcmaxmod').innerHTML = Vdcmaxmod;
        document.querySelector('#Vdcminmod').innerHTML = Vdcminmod;
        document.querySelector('#Idcmaxstr').innerHTML = Idcmaxstr;
        document.querySelector('#Nmaxmodstr').innerHTML = Nmaxmodstr || 0;
        document.querySelector('#Nminmodstr').innerHTML = Nminmodstr || 0;
        document.querySelector('#Nmodstr').innerHTML = Nmodstr || 0;
        document.querySelector('#Nminstr').innerHTML = Nminstr || 0;
    }, 2000);
}